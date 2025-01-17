const Inflate = require("../lib/Inflate");
const MapDrawer = require("../lib/MapDrawer");

module.exports = function(RED) {
    function ValetudoMapPngNode(config) {
        RED.nodes.createNode(this,config);
        let node = this;
        let lastMapDraw = 0;

        let defer = 2000;
        if (parseInt(config.defer)) {
            defer = parseInt(config.defer);
        }

        let settings = {
            drawPath: config.drawPath,
            drawCharger: config.drawCharger,
            drawRobot: config.drawRobot,
            scale: 4
        };
        if (parseInt(config.scale)) {
            settings.scale = parseInt(config.scale);
        }
        if (parseInt(config.cropX1)) {
            settings.crop_x1 = parseInt(config.cropX1);
        }
        if (parseInt(config.cropX2)) {
            settings.crop_x2 = parseInt(config.cropX2);
        }
        if (parseInt(config.cropY1)) {
            settings.crop_y1 = parseInt(config.cropY1);
        }
        if (parseInt(config.cropY2)) {
            settings.crop_y2 = parseInt(config.cropY2);
        }

        node.on("input", (msg, send, done) => {
            send = send || function() { node.send.apply(node,arguments); };
            done = done || function(err) {
                if (err) {
                    node.error(err, msg);
                }
            };

            handleMessage(msg, send, done);
        });

        async function handleMessage(msg, send, done) {
            try {
                var outputMsg = msg;

                const now = new Date();
                if (now.getTime() - defer > lastMapDraw) {
                    lastMapDraw = now.getTime();
                    var MapData = msg.payload;

                    if (isBase64(MapData)) {
                        MapData = Buffer.from(MapData, "base64");
                    }

                    if (typeof MapData === "string") {
                        MapData = JSON.parse(MapData);
                    }

                    if (Buffer.isBuffer(MapData)) {
                        MapData = await Inflate(MapData);
                        MapData = JSON.parse(MapData);
                    }

                    var buf;
                    if (MapData.__class == "ValetudoMap") {
                        if (MapData.metaData.version >= 2) {
                            expandV2Map(MapData);
                        }
                        let drawer = new MapDrawer(MapData, settings);
                        buf = await drawer.drawPng();
                    } else {
                        throw new Error("Data ist not a ValetudoMap");
                    }
                    outputMsg.payload = buf;
                    send(outputMsg);
                    done();
                }
            } catch (e) {
                done(e.message);
            }
        }

        function expandV2Map(data) {
            data.layers.forEach(layer => {
                if (layer.pixels.length === 0 && layer.compressedPixels && layer.compressedPixels.length !== 0) {
                    for (let i = 0; i < layer.compressedPixels.length; i = i + 3) {
                        const xStart = layer.compressedPixels[i];
                        const y = layer.compressedPixels[i+1];
                        const count = layer.compressedPixels[i+2];

                        for (let j = 0; j < count; j++) {
                            layer.pixels.push(
                                xStart + j,
                                y
                            );
                        }
                    }

                    delete(layer.compressedPixels);
                }
            });
        }

        function isBase64(data) {
            return typeof data === "string" && Buffer.from(data, "base64").toString("base64") === data;
        }
    }
    RED.nodes.registerType("valetudo-map-png",ValetudoMapPngNode);
};
