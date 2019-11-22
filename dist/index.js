"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("block-ui");
var $ = __importStar(require("jquery"));
exports.default = new /** @class */ (function () {
    function class_1() {
        this.count = 0;
        this.setBlockUi();
    }
    class_1.prototype.blockUI = function () {
        if (this.count === 0) {
            $.blockUI();
        }
        this.count++;
    };
    class_1.prototype.unblockUI = function () {
        this.count--;
        if (this.count === 0) {
            $.unblockUI();
        }
    };
    class_1.prototype.setBlockUi = function () {
        $.blockUI.defaults.message = '<div class="sk-fading-circle">\
    <div class="sk-circle1 sk-circle"></div>\
    <div class="sk-circle2 sk-circle"></div>\
    <div class="sk-circle3 sk-circle"></div>\
    <div class="sk-circle4 sk-circle"></div>\
    <div class="sk-circle5 sk-circle"></div>\
    <div class="sk-circle6 sk-circle"></div>\
    <div class="sk-circle7 sk-circle"></div>\
    <div class="sk-circle8 sk-circle"></div>\
    <div class="sk-circle9 sk-circle"></div>\
    <div class="sk-circle10 sk-circle"></div>\
    <div class="sk-circle11 sk-circle"></div>\
    <div class="sk-circle12 sk-circle"></div>\
    </div>';
        $.blockUI.defaults.css = {
            color: '#faa',
            cursor: 'wait',
            left: '35%',
            margin: 0,
            padding: 0,
            textAlign: 'center',
            top: '30%',
            width: '30%',
        };
        $.blockUI.defaults.overlayCSS = {
            backgroundColor: '#fff',
            cursor: 'wait',
            opacity: 0.6,
        };
        $.blockUI.defaults.baseZ = 10000;
    };
    return class_1;
}())();
//# sourceMappingURL=index.js.map