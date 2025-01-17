# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0](https://github.com/alexkn/node-red-contrib-valetudo/compare/v2.3.1...v3.0.0) (2021-12-05)


### ⚠ BREAKING CHANGES

* drop support for old maps and Valetudo RE

### Features

* add support for V2 Maps ([c5dad56](https://github.com/alexkn/node-red-contrib-valetudo/commit/c5dad5661b74e86e510a289a7b01857506171ff1)), closes [#16](https://github.com/alexkn/node-red-contrib-valetudo/issues/16)


* drop support for old maps and Valetudo RE ([289a413](https://github.com/alexkn/node-red-contrib-valetudo/commit/289a4138fd24d73e03be8cce55cf9eb57ee21148))

### [2.3.1](https://github.com/alexkn/node-red-contrib-valetudo/compare/v2.3.0...v2.3.1) (2021-10-07)


### Bug Fixes

* ignore missing entities ([e1cff96](https://github.com/alexkn/node-red-contrib-valetudo/commit/e1cff9654b902cc27e22b9dc93546cade0898a74)), closes [#15](https://github.com/alexkn/node-red-contrib-valetudo/issues/15)

## [2.3.0](https://github.com/alexkn/node-red-contrib-valetudo/compare/v2.2.0...v2.3.0) (2021-01-10)


### Features

* support base64 deflated JSON string map from Valetudo 2021.01.0b0 ([fa4b198](https://github.com/alexkn/node-red-contrib-valetudo/commit/fa4b1987ff37bdb439d5c8ca9aa71c3e2439dd16))
* support deflated JSON string map from Valetudo 2021.01.0b0 ([80faa28](https://github.com/alexkn/node-red-contrib-valetudo/commit/80faa2832bcb5e348bbeb18243f8072afc47ac90))

## [2.2.0](https://github.com/alexkn/node-red-contrib-valetudo/compare/v2.1.0...v2.2.0) (2020-08-02)


### Features

* support valetudo 0.6.0 map format ([308c8bd](https://github.com/alexkn/node-red-contrib-valetudo/commit/308c8bdce18682bd2a864f03ce12509b6ea80a64))
* update robot and charger images ([0cb781d](https://github.com/alexkn/node-red-contrib-valetudo/commit/0cb781dec62c837408f33157d6b08d2901b603c4))

## [2.1.0] - 2020-02-22

### Added

- Support for firmware 2008 binmaps (Valetudo RE 0.9.0)
- Unit tests for checking compatibility with different firmware versions

## [2.0.1] - 2019-12-28

### Fixed

- error handling on image processing

## [2.0.0] - 2019-11-08

### Changed

- valetudo-map-png node automatically converts binary map data, it is no longer necessary to use a parse-binmap node before.
- valetudo-parse-binmap node outputs the map data object directly instead of a JSON string.
- Implemented [Node-RED 1.0 send/done API](https://nodered.org/blog/2019/09/20/node-done).

## [1.2.0] - 2019-11-07

### Changed

- Code cleanup, update dependencies and documentation

## [1.1.0] - 2019-11-06

### Added

- valetudo-parse-binmap node to support [Valetudo RE](https://github.com/rand256/valetudo).

## [1.0.0] - 2019-06-13

### Added

- valetudo-map-png node to convert [Valetudo](https://github.com/Hypfer/Valetudo) map_data (JSON string) to a png image.
