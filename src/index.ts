import 'block-ui';
import * as $ from 'jquery';

export default new class {
    private count = 0;

    public constructor() {
        this.setBlockUi();
    }

    public blockUI() {
        if (this.count === 0) {
            $.blockUI!();
        }
        this.count++;
    }

    public unblockUI() {
        this.count--;
        if (this.count === 0) {
            $.unblockUI!();
        }
    }

    private setBlockUi() {
        $.blockUI!.defaults!.message = '<div class="sk-fading-circle">\
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
        $.blockUI!.defaults!.css = {
            color: '#faa',
            cursor: 'wait',
            left: '35%',
            margin: 0,
            padding: 0,
            textAlign: 'center',
            top: '30%',
            width: '30%',
        };
        $.blockUI!.defaults!.overlayCSS = {
            backgroundColor: '#fff',
            cursor: 'wait',
            opacity: 0.6,
        };
        $.blockUI!.defaults!.baseZ = 10000;
    }
}();