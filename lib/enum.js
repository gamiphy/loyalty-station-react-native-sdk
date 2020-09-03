"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTypes = exports.Environments = exports.Languages = void 0;
var Languages;
(function (Languages) {
    Languages["en"] = "en";
    Languages["es"] = "es";
    Languages["ar"] = "ar";
})(Languages = exports.Languages || (exports.Languages = {}));
var Environments;
(function (Environments) {
    Environments[Environments["DEV"] = 0] = "DEV";
})(Environments = exports.Environments || (exports.Environments = {}));
var MessageTypes;
(function (MessageTypes) {
    MessageTypes["authMessage"] = "authMessage";
    MessageTypes["shareMessage"] = "shareMessage";
})(MessageTypes = exports.MessageTypes || (exports.MessageTypes = {}));
