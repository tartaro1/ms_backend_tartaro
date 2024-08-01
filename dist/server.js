"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _cors = _interopRequireDefault(require("cors"));
var _index = _interopRequireDefault(require("./routes/index.js"));
(0, _dotenv.config)();
var server = (0, _express["default"])();
server.use(_express["default"].json());
server.use((0, _cors["default"])());
server.set('port', process.env.PORT || 9200);
server.use("/", _index["default"]);
var _default = exports["default"] = server;