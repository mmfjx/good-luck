(function (peppers) {
    var element = document.documentElement,
        attr = element.attributes;

    function style() {
        return getComputedStyle(element);
    }

    function trim(str) {
        return str && str.replace(/^[\s'"]|[\s'"]$/g, '');
    }


    peppers.checkMobile = peppers.checkMobile || {};
    peppers.checkMobile.css = peppers.checkMobile.css || {};

    peppers.checkMobile.css.isMobile = function () {
        return [attr["data-mobile"].value, "attr(data-mobile)"].indexOf(trim(style().content)) >= 0;
    };

    peppers.checkMobile.css.isLandscape = function () {
        if (/Mobi/i.test(navigator.userAgent)) {
            return Math.abs(window.orientation) === 90 || screen.availHeight < screen.availWidth;
        } else {
            return [attr["data-landscape"].value, "attr(data-landscape)"].indexOf(trim(style().content)) >= 0;
        }
    };
})(peppers = peppers || {});
var peppers;

(function (peppers, navigator, window) {
    var a = navigator.userAgent || navigator.vendor || window.opera;

    peppers.checkMobile = peppers.checkMobile || {};
    peppers.checkMobile.isMobile = function () {
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    };

    peppers.checkMobile.isMobileOrTablet = function () {
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    };
})(peppers = peppers || {}, navigator, window);

var peppers;
(function ($, window) {
    var $w = $(window).on("resize", onResize);
    var isMobile;


    peppers.checkMobile = peppers.checkMobile || {};
    peppers.checkMobile.css = peppers.checkMobile.css || {};
    peppers.checkMobile.css.listen = function (cb) {
        $w.on("check-mobile:change", cb);
        if (typeof isMobile != "undefined") cb(null, isMobile);
    };

    onResize();


    function onResize() {
        var _isMobile = peppers.checkMobile.css.isMobile();
        if (isMobile === _isMobile) return;

        isMobile = _isMobile;
        $w.trigger("check-mobile:change", isMobile);
    }
}(jQuery, window, peppers = peppers || {}));
var peppers;
(function (kaspersky, document, location) {
    var mainDef = $.Deferred();
    var promises = [];

    kaspersky.ready = mainDef.promise();

    kaspersky.ready.addWait = function (promise) {
        if (!promise) {
            if (arguments.length > 0) {
                return;
            }
            var def = $.Deferred();
            promise = def.promise();
        }

        promises.push(promise);

        promise
            .done(function () {
                promises.splice(promises.indexOf(promise), 1);
                if (promises.length == 0) {
                    mainDef.resolve();
                }
            });


        return def;
    };


    $(document).one("page:out", function () {
        kaspersky.Transition.fadeIn();
    });


    kaspersky.ready.done(function () {
        kaspersky.Transition.fadeOut();

        var delay = kaspersky.Transition.getDelay();
        $(document).trigger("fade:start", delay);

        setTimeout(function () {
            $(document).trigger("fade:complete");
        }, delay);
        /*.one("page:out", function () {

         })
         .one("page:ready", function () {
         })*/
    });


    $(".menu__back-btn, .to-root").attr("href", getPath("/") + "#");
    $(document.documentElement)
        .on("click", "a", function (e) {
            if (checkLink(this) || e.isDefaultPrevented()) return true;

            e.preventDefault();
            //console.debug(this);

            kaspersky.navigateTo(this.href);
        });

    /*.on("click", ".menu__back-btn, .menu_to-root", function (e) {
            e.preventDefault();
            kaspersky.navigateTo(getPath("/"));
        });*/


    function checkLink(element) {
        return $(element).is("[target='_blank']") || getPath(location.href.split("#").shift()) === getPath(element.href.split("#").shift());
    }

    function getPath(path) {
        if (/^(?:\w{3,}\:\/\/|\/frontend\/)/.test(path)) return path;

        if (path.charAt(0) == "/") path = path.substr(1);

        var _href = location.href.split("#").shift().split("/");
        _href.pop();
        _href.push(path);
        return _href.join("/");
    }

    kaspersky.navigateTo = function (href) {
        if (kaspersky.Transition.opened) {
            kaspersky.Transition.fadeIn();
            setTimeout(navigate, 800);
        } else {
            navigate();
        }

        function navigate() {
            location.href = trimDomain(getPath(href));
        }
    };


    function trimDomain(path) {
        return path.replace(/^\w+:\/\/[^\/]+/, "");
    }

})(kaspersky = kaspersky || {}, document, location);

var kaspersky;
(function (peppers, location) {
    /**
     * Сравнивает хэши
     * @param hash1
     * @param hash2
     * @return {boolean}
     */
    function isEqual(hash1, hash2) {
        switch (typeof hash1) {
            case "number":
            case "string":
            case "boolean":
                return hash1 === hash2;

            default:
                var p, checked = [];
                for (p in hash1) {
                    checked.push(p);
                    if (!isEqual(hash1[p], hash2[p])) return false;
                }
                for (p in hash2) {
                    if (checked.indexOf(p) < 0) return false;
                }
                return true;

        }
    }

    function setHash(val, replace) {
        if (replace) {
            location.replace("#" + (val || '/'));
        } else {
            return location.hash = val || '/';
        }
    }

    function getHash(val) {
        return (val || location.hash).replace(/^#?\/?|\/$/, "").split("/");
    }

    peppers.hash = {
        getHash: getHash,
        isEqual: isEqual,
        setHash: setHash
    };

})(peppers = peppers || {}, window.location);

var peppers;
(function (peppers) {

    /**
     * @param {string} name
     * @param {function} _Class
     */
    peppers.jQueryConstructor = function (name, _Class) {
        return function (params) {
            var _args = arguments;
            return this.each(function () {
                var $t = $(this);
                var instance = $t.data(name);
                if (!instance) {
                    $t.data(name, instance = new _Class($t));
                }

                if (typeof instance.init === "function") {
                    instance.init.apply(instance, _args);
                }
            })
        };
    }

})(peppers = peppers || {});

var peppers;
(function (peppers, Handlebars) {
    peppers.formatNumber = function (val) {
        var arr = [], str = ("" + val).replace(/\s/g, "");
        //for (var i = val.length - 3; i > 0; i++) {
        while (str.length > 0) {
            arr.unshift(str.substr(-3));
            str = str.substr(0, str.length - 3);
        }

        return arr.join(" ");
    };

    if (Handlebars) {
        Handlebars.registerHelper('formatNumber', peppers.formatNumber);
    }


})(peppers = peppers || {}, window.Handlebars);

var peppers;
(function (document, $) {

    $(document).ready(function () {
        var $t = $('.parallax__container');
        if ($t.length == 0) return;

        var ANGLE = 14;
        var startValue;
        var $b = $(document.body);
        var $h = $(document.documentElement);


        $h.mousemove(onMouseMove);
        peppers.accelerometer.on("change", onAccelerometer);
        //var tweenTo = { tiltX: 0, tiltY: 0, angle: 0 };
        //var tweenVal = { tiltX: 0, tiltY: 0, angle: 0 };
        //var tweenTick = { tiltX: 0.05, tiltY: 0.05, angle: 0.05 };
        var tweenTo = {beta: 0, gamma: 0};
        var tweenVal = {beta: 0, gamma: 0};
        var tweenTick = {beta: 0.05, gamma: 0.05};


        var updateFunction = onAccelerometerUpdate, tickFunction = tick;
        animate();

        function onAccelerometer(event) {
            console.debug("onAccelerometer", event);
            if (startValue) {
                tweenTo.beta = absMax(-(event.beta - startValue.beta) / 10, 1) * ANGLE;
                tweenTo.gamma = absMax((event.gamma - startValue.gamma) / 10, 1) * ANGLE;
            } else {
                $h.off("mousemove", onMouseMove);
                //tweenTo = {beta: 0, gamma: 0};
                //tweenVal = {beta: 0, gamma: 0};
                //updateFunction = onAccelerometerUpdate;
                //tickFunction = onAccelerometerTick;
                //tweenTick = {beta: 0.15, gamma: 0.15};
                startValue = {
                    beta: event.beta,
                    gamma: event.gamma
                }

            }
        }

        function onMouseMove(event) {
            var cx = Math.ceil($b.width() / 2.0);
            var cy = Math.ceil($b.height() / 2.0);
            var dx = event.pageX - cx;
            var dy = event.pageY - cy;

            tweenTo.beta = (dy / cy) * ANGLE;
            tweenTo.gamma = -(dx / cx) * ANGLE;
            //tweenTo.tiltX = (dy / cy);
            //tweenTo.tiltY = - (dx / cx);
            //tweenTo.angle = Math.sqrt(Math.pow(tweenTo.tiltX,2) + Math.pow(tweenTo.tiltY,2)) * ANGLE;
        }


        function onAccelerometerUpdate() {
            $t.css({
                transform: 'rotate3d(1, 0, 0, ' + tweenVal.beta + 'deg) ' +
                    'rotate3d(0, 1, 0, ' + tweenVal.gamma + 'deg)'
            })
        }


        function tick() {
            for (var p in tweenVal) {
                tweenVal[p] += (tweenTo[p] - tweenVal[p]) * tweenTick[p];
            }
        }

        /*function onMMUpdate(){
            $t.css( {
                transform:'rotate3d(' + tweenVal.tiltX + ', ' + tweenVal.tiltY + ', 0, ' + tweenVal.angle + 'deg)'
            } );
        }
*/
        function animate() {
            requestAnimationFrame(animate);

            tickFunction();
            updateFunction(tweenVal);
        }


        function absMax(val, max) {
            max = Math.abs(max);
            if (val < -max) return -max;
            if (val > max) return max;
            return val;
        }

    });

})(document, jQuery);
(function (peppers, window) {
    var listenersList = {}, listening;
    peppers.accelerometer = {
        on: function (eventName, listener) {
            var index = getIndex(eventName, listener);
            if (index < 0 && typeof listener === "function") listenersList[eventName].push(listener);
            if (listenersList[eventName].length > 0) startListen();
        },
        off: function (eventName, listener) {
            var index = getIndex(eventName, listener);
            if (index >= 0) listenersList[eventName].splice(index, 1);
            if (listenersList[eventName].length = 0) stopListen();
        }
    };

    function stopListen() {
        if (!listening) return;
        listening = false;

        window.removeEventListener("deviceorientation", change, true);
        window.removeEventListener('devicemotion', change, true);
        window.removeEventListener("MozOrientation", change, true);
    }

    function startListen() {
        if (listening) return;
        listening = true;

        if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", change, true);
        } else if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', change, true);
        } else {
            window.addEventListener("MozOrientation", change, true);
        }
    }

    function change(event) {
        switch (event.type) {
            case "deviceorientation":
                tilt(event.beta, event.gamma);
                break;
            case "devicemotion":
                tilt(event.acceleration.x * 2, event.acceleration.y * 2);
                break;
            case "MozOrientation":
                tilt(orientation.x * 50, orientation.y * 50);
                break;
        }
    }

    function tilt(beta, gamma) {
        console.debug(typeof beta);
        if (!!beta || !!gamma) {
            trigger("change", {beta: beta, gamma: gamma});
        }
    }

    function trigger(eventName, params) {
        for (var i = 0; listenersList[eventName] && i < listenersList[eventName].length; i++) {
            listenersList[eventName][i](params);
        }
    }

    function getIndex(event, listener) {
        var l = listenersList[event] = listenersList[event] || [];
        return l.indexOf(listener);
    }

})(peppers = peppers || {}, window);
var peppers;
(function ($) {

    /**
     * @param fn {Function}
     */
    $.fn.pepPlaceholder = function (fn) {
        this.each(function () {
            var $t = $(this);
            var ref = $t.data("pepPlaceholder");
            if (!ref) {
                $t.data("pepPlaceholder", ref = new PepPlaceholder($t));
            }

            ref.init(fn);
        })
    };


    /**
     * @param $element {jQuery}
     * @constructor
     */
    function PepPlaceholder($element) {
        var placeholderElement, placeholderText;

        function onInputChange(e) {
            placeholderText.toggleClass("pep-placeholder__text_hidden", e.type == 'keypress' || !!$(this).val());
        }

        /**
         * @param fn {Function}
         */
        this.init = function (fn) {
            this.destroy();

            var txt = initText();

            $element.wrap("<div class='pep-placeholder'></div>");

            placeholderText = $("<div class='pep-placeholder__text'>" + ($.isFunction(fn) ? fn(txt) || '' : txt) + "</div>")
                .insertBefore($element)
                .addClass($element.get(0).className);

            $element.addClass("pep-placeholder__input");
            placeholderElement = $element.parent();
            $element.on("keypress  keyup  change  input:empty", onInputChange);
        };

        this.destroy = function () {
            if (placeholderElement) {
                placeholderElement.after($element);
                placeholderElement.remove();
                placeholderElement = undefined;
            }
            $element.removeClass("pep-placeholder__input");

            var txt = getText();
            $element.data("placeholder", "");
            $element.attr("placeholder", txt);
            $element.off("keypress  keyup  change  input:empty", onInputChange);
        };


        function initText() {
            var txt = getText();
            $element.data("placeholder", txt);
            $element.attr("placeholder", "");
            return txt;

        }

        function getText() {
            return $element.attr("placeholder") || $element.data("placeholder");
        }
    }

})(jQuery);
(function (peppers) {

    /**
     * Точка
     * @param x {number}
     * @param y {number}
     * @constructor
     */
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * @param pnt {Point}
     * @returns {Point}
     */
    Point.prototype.subtract = function (pnt) {
        return new Point(this.x - pnt.x, this.y - pnt.y);
    };
    /**
     * @param pnt {Point}
     * @returns {Point}
     */
    Point.prototype.add = function (pnt) {
        return new Point(this.x + pnt.x, this.y + pnt.y);
    };

    /**
     * Длина отрезка
     * @returns {number}
     */
    Point.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    /**
     * Расстояние между точками
     * @returns {number}
     */
    Point.prototype.distance = function (p1) {
        return this.subtract(p1).length();
    };
    Point.prototype.toString = function () {
        return "[Point(" + this.x + ", " + this.y + ")]"
    };

    Point.distance = function (p1, p2) {
        return p2.subtract(p1).length();
    };

    /**
     * Клонирование
     * @returns {Point}
     */
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };

    peppers.Point = Point;
})(peppers = peppers || {});

var peppers;
(function (peppers) {

    /**
     * Загрузка изображения
     * @param url - ссылка на изображение
     * @returns {JQuery}
     */
    function load(url) {
        var def = $.Deferred();

        var img = $("<img/>").addClass("image-preloader");
        img.attr("crossOrigin", "Anonymous");

        img.on("load", function () {
            def.resolve(img);
            //img.remove();
        });
        img.on("error", function (e) {
            def.reject(e);
        });
        img.attr("src", url);

        $(document.body).append(img);

        return def.promise();
    }

    /**
     * Возвращает информацию об изображении
     * @param {Element} img
     * @param {{width:number=, height:number=}}  params
     * @returns {{width: number, height: number, data: CanvasPixelArray}}
     */
    function getImageData(img, params) {
        var w = $(img).width();
        var h = $(img).height();

        params = params || {};
        params.width = params.width || w;
        params.height = params.height || h;
        var scale = Math.min(1, params.width / w, params.height / h);

        params.width = Math.round(w * scale);
        params.height = Math.round(h * scale);

        var canvas = document.createElement("canvas");
        canvas.width = params.width;
        canvas.height = params.height;

        var srcCtx = canvas.getContext("2d");
        srcCtx.drawImage(img.get(0), 0, 0, w, h, 0, 0, params.width, params.height);

        return {
            width: params.width,
            height: params.height,
            data: srcCtx.getImageData(0, 0, params.width, params.height).data
        }
    }


    peppers.load = load;
    peppers.getImageData = getImageData;

})(peppers = peppers || {});

var peppers;
(function (kaspersky) {

    /**
     * Разбивает строку в массив
     * @param str {string} - исходная строка
     * @param maxLength {number} - максимальная длина линии (в символах)
     * @param maxLines {number=1} - максимальная длина линии (доля от длиный всей строки)
     * @returns {Array}
     */
    kaspersky.trimText = function (str, maxLength, maxLines) {
        maxLines = maxLines || 1;
        var res = [];
        var arr = str.split(/\r?\n/g);
        maxLength = Math.max(maxLength, str.length / maxLines);
        if (arr.length > 1) {
            for (var i = 0; i < arr.length; i++) arr.splice(i, 1, trimText(arr[i], maxLength));
        } else {
            arr = str.split(" ");
            while (arr.length > 0) {

                var line = [];
                var curLength = 0;
                do {
                    var word = arr.shift();
                    curLength += word.length;
                    line.push(word)
                } while (arr.length > 0 && curLength + arr[0].length * .5 < maxLength);


                if (arr.length > 0 && line.length > 1 && ['a', 'the', 'is', 'of'].indexOf(line[line.length - 1].toLowerCase()) >= 0) {
                    arr.unshift(line.pop());
                }

                res.push(line.join(" "));
            }


        }


        return res;
    }

}(kaspersky = kaspersky || {}));

var kaspersky;
(function (kaspersky, document) {

    kaspersky.Transition = new Transition();

    function Transition() {
        var scope = this;
        var $body = $(document.body);
        var sWidth = Math.max($body.width(), screen.width);
        var sHeight = Math.max($body.height(), screen.height);

        var $wrapper = $(".transition-wrapper");
        if ($wrapper.length == 0) {
            $wrapper = $("<div class='transition-wrapper'>");
            $body.append($wrapper);
        }

        // console.log("Transition");
        var ow = 100;
        var oh = 86.55;

        var width = sWidth / 10 + 1;
        var height = ow / oh * width + 1;

        var pieces = [], timing = {};

        var yy = 0;
        var xx = 0;
        for (var y = -height / 2; y < sHeight + height / 2; y += height * .75 - 1) {
            xx = 0;
            for (var x = -width / 2; x < sWidth + width / 2; x += width - 1) {
                var $i = $("<div class='transition-hexagon-bg'><div class='transition-hexagon'>");
                pieces.push($i);
                $wrapper.append($i);
                var is_odd = yy % 2 == 0;
                $i.css({
                    width: width + "px",
                    height: height + "px",
                    left: (x - (is_odd ? width / 2 : 0)) + "px",
                    top: y + "px"
                });
                xx++;
            }
            yy++;
        }

        $("<div></div>").addClass("transition__preloader").appendTo($wrapper);


        $wrapper.addClass("transition-wrapper_initialized");

        //console.log("pieces: ", pieces.length);

        this.opened = false;

        this.fadeIn = function () {
            this.opened = false;
            $.each(pieces, toggle(true, timing));
        };

        this.fadeOut = function () {
            this.opened = true;
            $.each(pieces, toggle(false, timing));
            $wrapper.addClass("transition-wrapper_fade-out");
        };

        this.getDelay = function () {
            return 800 + timing.delay;
        }


    }

    function toggle(val, timing) {
        timing.delay = 0;
        return function () {
            var $t = $(this);
            var _delay = Math.round(Math.random() * 30 * 20);
            timing.delay = Math.max(timing.delay, _delay);

            setTimeout(
                function () {
                    $t.toggleClass("transition-hexagon_a-out", !val)
                        .toggleClass("transition-hexagon_a-in", val);
                },
                _delay
            );
        }
    }


    /*function getDuration(element) {
        var style = window.getComputedStyle ? getComputedStyle(element[0]) : element.currentStyle;
        console.debug(style.animationDelay, style.animationDuration);
        console.debug(ms(style.animationDelay), ms(style.animationDuration));
        return ms(style.animationDelay) + ms(style.animationDuration);
    }

    function ms(val){
        var t = /^(\d+|\d*\.\d+)(m?s)$/i.exec( val );
        var time = parseFloat(t[1]);
        if (t[2] == "s") return time * 1000 || 0;

        return time;
    }*/


})(kaspersky = kaspersky || {}, document);

var kaspersky;
(function (document) {

    $(document.documentElement).on("change", ".checkbox-nth", onCheckboxChange);

    function onCheckboxChange() {
        var cont = $(this).parent();
        var list = cont.find(".checkbox-nth");
        var index = list.index(this);

        var items = cont.find(".checkbox-nth-item");
        items.off("checkbox:change");
        var item = items.eq(index).on("checkbox:change", onItemChange);
        var container = cont.find(".checkbox-nth-container");
        container.css({
            //left: -index * 100 + "%",
            height: item.outerHeight() + parseInt(container.css('paddingTop')) + parseInt(container.css('paddingBottom'))
        });
        setTimeout(function () {
            var container = cont.find(".checkbox-nth-container");
            container.css({
                height: item.outerHeight() + parseInt(container.css('paddingTop')) + parseInt(container.css('paddingBottom'))
            });
        }, 50);

        function onItemChange() {
            container.css("height", $(this).outerHeight() + parseInt(container.css('paddingTop')) + parseInt(container.css('paddingBottom')));
        }
    }

})(document);

// (function (peppers, $, window, document, location, kaspersky) {

//     // $(window).on("hashchange", onHashChange);
//     // $(document.documentElement).on("menu:toggle", onMenuToggle);

//     // var modal = $(".modal").not(".modal_static");
//     // var closeButton = modal.find(".modal__close-button");
//     // var redirectToHome = true;

//     // closeButton.on("click", function (e) {

//     //     var event = new $.Event("modal:close");
//     //     modal.trigger(event);
//     //     if (event.isDefaultPrevented()) {
//     //         e.preventDefault();
//     //     }


//     // });

//     function onHashChange() {

//         var hash = peppers.hash.getHash();

//         var alias = {
//             "brief": "brief-modal"
//             , "alert": "modal-message"
//             , "faq-addwork": "faq"
//             // , "faq": "faq-2"
//             , "terms-accepted": "terms-accepted"
//         };
//         // var overHamburger = !peppers.checkMobile.css.isMobile()
//         // ? ["login", "user-pic-crop", "feedback", "user-edit"]
//         // : ["login", "user-pic-crop", "feedback"];
//         // ? ["login", "user-pic-crop", "feedback", "add-prediction", "user-edit"]
//         // : ["login", "user-pic-crop", "feedback", "add-prediction"];
//         var overHamburger = [];
//         var userData = kaspersky.user.getData();
//         if (hash[0] !== "modal" || (hash[0] === "modal" && hash[1] !== "terms")) {
//             if (hash[0] === "modal" && hash[1] !== "terms-accepted" && userData && userData.user && userData.user.terms_accepted === false) {
//                 peppers.modal("terms-accepted");
//                 return
//             }
//         }
//         if (hash[0] === "modal" && hash[1] === "terms-accepted" && userData && userData.user && userData.user.terms_accepted === true) {
//             kaspersky.navigateTo("/");
//             return
//         }

//         if (hash[0] === "modal") {

//             var type = alias[hash[1]] || hash[1];
//             if (type == 'add-prediction' && !kaspersky.user.isAuthorized()) {
//                 redirectToHome = false;
//                 peppers.modal("login", [location.hash, function () {
//                     if (kaspersky.user.isAuthorized()) {
//                         redirectToHome = true;
//                         peppers.hash.setHash("/modal/add-prediction");
//                         $(document.documentElement).off("modal:hide");
//                     }
//                 }]);
//             } else {
//                 if ((location.pathname.indexOf('prediction') !== -1) || (location.hash.indexOf('alert') !== -1)) {
//                     redirectToHome = false;
//                 }

//                 if (hash[1] === 'login' && redirectToHome) {
//                     $(document.documentElement).off("modal:hide");
//                     $(document.documentElement).on("modal:hide", function () {
//                         peppers.hash.setHash("");
//                     });

//                 }

//                 initModal(type, hash, overHamburger.indexOf(type) >= 0);
//             }

//             if (hash[1] === "search") {
//                 var $searchform = $(".modal-app__ui.search .search__form");
//                 if (hash[2] === "tag" && hash[3]) {
//                     var tag_text = decodeURI(hash[3]);
//                     if (tag_text === "competition") {
//                         tag_text = "конкурс &nbsp(<a class=\"contest_link\" target=\"_blank\" href='https://www.kaspersky.ru/blog/earth-2050-contest/20089/'>победители</a>)";
//                     }
//                     $(".tag_search").html(tag_text);

//                     $searchform.trigger('search:tag');

//                 } else if (hash[2] === "text" && hash[3]) {

//                     var searchText = decodeURI(hash[3]);

//                     var input = $(".search__input");
//                     input.val(searchText);

//                     $searchform.trigger('submit');

//                 } else {
//                     $searchform.trigger('reset');
//                 }
//             }

//         } else {
//             $(document.documentElement).off("modal:hide");
//             initModal();
//         }

//     }


//     function onMenuToggle(event) {
//         //peppers.
//     }

//     /**
//      * Показать/скрыть попап
//      * @param {string} [type=undefined]
//      * @param {array} [hash=undefined]
//      * @param {boolean} [overHamburger=false]
//      */
//     function initModal(type, hash, overHamburger) {
//         modal.toggleClass("modal_over-hamburger", !!overHamburger);
//         closeButton.toggleClass("modal__close-button_over-hamburger", !!overHamburger);

//         if (type) var popup = modal.find("." + type);

//         modal.find(".modal__ui")
//             .filter(".modal__ui_visible")
//             .not(popup)
//             .removeClass("modal__ui_visible")
//             .trigger("modal-item:hide");

//         /*modal.find(".modal__close").off().on("click", function(){
//             //event.preventDefault();
//             closeButton.click();
//         });*/


//         var _visible = !!popup && popup.length > 0;
//         modal.find(".backdrop").toggleClass("backdrop_visible", _visible);
//         modal.toggleClass("modal_visible", _visible);

//         if (popup) {
//             popup.trigger("modal-item:change", hash);
//             closeButton.filter(".modal > .modal__close-button").toggle(!popup.is("[data-no-close]"));

//             if (!popup.is("modal__ui_visible")) {
//                 popup.addClass("modal__ui_visible");
//                 popup.trigger("modal-item:show");
//             }
//         }


//         $(document.documentElement)
//         //.trigger("modal:change", {checked: _checked, visible: _visible})
//             .trigger("modal:toggle")
//             .trigger("modal:" + (_visible ? "show" : "hide"));

//         return popup;
//     }


//     /**
//      * @param {string=} type
//      * @param {string|function|[string|function]=} onClose
//      */
//     peppers.modal = function (type, onClose) {
//         peppers.hash.setHash(type ? "/modal/" + type : "");

//         $(document.documentElement).off("modal:hide");
//         if (onClose) {
//             $(document.documentElement).on("modal:hide", function () {
//                 _onClose(onClose);
//             });
//         }


//         /**
//          * @param {string} type
//          * @param {string|function|[string|function]} action
//          */
//         function _onClose(action) {
//             if (action === "history-back") {
//                 window.history.back();
//                 return;
//             }
//             switch (typeof action) {
//                 case "string":
//                     location.replace(action);
//                     break;
//                 case "function":
//                     action();
//                     break;
//                 case "object":
//                     if (action.length) {
//                         action.forEach(_onClose);
//                     }
//                     break;
//             }
//         }
//     };


// })(peppers = peppers || {}, jQuery, window, document, window.location, kaspersky);

var peppers;

// (function ($, html) {
//     $(html).on("submit", ".form_validate", function (event) {
//         var errors = validate($(this));
//         if (errors) {
//             if (errors.join("").length > 0) {
//                 kaspersky.alert(
//                     //"form error",
//                     "<p>" + errors.join("</p><p>") + "</p>"
//                 );
//             }
//             event.preventDefault();
//             return;
//         }

//         var customEvent = new $.Event("form:submit");

//         $(this).trigger(customEvent);

//         if (customEvent.isDefaultPrevented) {
//             event.preventDefault();
//         }
//     });

//     /**
//      * @param {{name:string, value:*}[]} map
//      * @returns {*}
//      */
//     function mapToHash(map) {
//         return map.reduce(function (result, val) {
//             result[val.name] = val.value;

//             return result;
//         }, {});
//     }


//     function validate($form) {
//         var errorsList;

//         var data = mapToHash($form.serializeArray());

//         $form.find("[data-required], [data-min-length], [data-equal], [data-chars], [data-email]").each(function () {
//             var $t = $(this);

//             var name = $t.attr("name"), value = data[name];
//             var inputData = $t.data();

//             if (inputData.hasOwnProperty('required') && !value) {
//                 addError($t, inputData.errorRequired);
//             } else {
//                 checkInputDataParams:
//                     for (var p in inputData) {
//                         if (!inputData.hasOwnProperty(p)) continue;

//                         switch (p) {
//                             case "minLength":
//                                 var min = ~~inputData.minLength;
//                                 if (value && value.length < min) addError($t, inputData.errorMinLength);
//                                 break checkInputDataParams;

//                             case "equal":
//                                 if (value != data[inputData.equal]) addError($t.add($form.find("[name='" + inputData.equal + "']")), inputData.errorNotEqual);
//                                 break checkInputDataParams;

//                             case "chars":
//                                 var regExp = new RegExp("^[" + inputData.chars.replace(/(\])/g, "\\$1") + "]*$");
//                                 console.debug(regExp);
//                                 if (!regExp.test(value)) {
//                                     addError($t, inputData.errorChars);
//                                 }
//                                 break checkInputDataParams;

//                             case "email":
//                                 var regExp = /\S+@\S+\.[a-zA-Z]+/;
//                                 console.debug(regExp);

//                                 if ((value) && (!regExp.test(value))) {
//                                     addError($t, inputData.errorEmail);
//                                 }
//                                 break checkInputDataParams;
//                         }
//                     }
//             }


//         });


//         function addError($element, localizationID) {

//             errorsList = errorsList || [];
//             if (localizationID) {
//                 try {
//                     var msg = $.fn.localization.getText(localizationID);
//                     errorsList.push(msg);
//                 } catch (err) {
//                 }
//             }

//             $element.addClass("form__wrong").on("focus change keydown", unWrong);

//             function unWrong() {
//                 $element.removeClass("form__wrong").off("focus change keydown", unWrong);
//             }
//         }

//         return errorsList;
//     }
// }(jQuery, document.documentElement));

// (function ($, peppers, TweenLite) {
//     var info = {
//         mouseenter: {
//             duration: .4,
//             tween: {
//                 ease: Sine.easeOut,
//                 height: 102
//             }
//         },
//         mouseleave: {
//             duration: .2,
//             tween: {
//                 ease: Sine.easeIn,
//                 height: 0
//             }
//         }
//     };
//     $.fn.hexButton = peppers.jQueryConstructor("hexButton", HexButton);

//     function HexButton($element) {
//         var rect = $element.find(".clip-path rect, .back-btn-svg__mask rect");
//         rect.attr({y: "50%", height: "0%"});
//         var val = {height: 0};

//         $element.hover(function (e) {
//             var data = info[e.type];
//             TweenLite.to(val, data.duration, {
//                 height: data.tween.height,
//                 ease: data.tween.ease,
//                 onUpdate: function () {
//                     //console.debug( val.height );
//                     rect.attr({y: (50 - val.height * .5) + "%", height: val.height + "%"});
//                 }
//             });
//         })
//     }

// }(jQuery, peppers = peppers || {}, TweenLite));
// var peppers;
// (function ($, document) {
    var btn = $(".mute-btn_false");
    var cont = btn.find("label");
    var interval;
    var list = [1, 2, 3, 7, 18, 11, 25, 13, 26, 47, 26, 18, 25, 11, 18, 7, 3, 2, 1];
    var lines = [];
    var sound = $(".sound", top.document);


    for (var i = 0; i < list.length; i++) {
        var line = $("<span></span>").addClass("mute-btn__line");
        lines.push(line);
        line.appendTo(cont).after(" ").css("height", list[i] / .47 + "%");
    }


    var duration = getDuration(getComputedStyle(line.get(0)));

    var isMobile = peppers.checkMobile.css.isMobile();
    if (isMobile) {
        $.cookie("muted", 1, {path: "/", expires: 3650});
    }

    btn.find(".mute-btn__checkbox").change(onChange).prop("checked", 1 === parseInt($.cookie("muted"))).change();


    function onChange() {
        clearInterval(interval);
        var mute = $(this).is(":checked");
        if (!mute) {
            interval = setInterval(tick, duration);
            tick();
        }

        toggle(mute);
        $.cookie("muted", mute ? 1 : 0, {path: "/", expires: 3650});

        var sound_elem = $('.sound').get(0);

        if (typeof localStorage['sound_progress'] !== 'undefined') {
            sound_elem.currentTime = parseFloat(localStorage['sound_progress']);
        }

        sound_elem.ontimeupdate = function () {
            localStorage['sound_progress'] = sound_elem.currentTime
        };
    }

    function toggle(mute) {
        //if (window === top) {
        if (!mute) {
            sound.get(0).play();
        } else {
            sound.get(0).pause();
        }
        //} else {
        //
        //}
    }

    function tick() {
        var fn = getFunction();
        for (var i = 0; i < lines.length; i++) {
            lines[i].css("height", fn(i / (lines.length - 1)) * 100 + "%");
        }
    }


    function getPrefixed(name, prefix) {
        return !prefix ? name : prefix + name[0].toUpperCase() + name.substr(1);
    }

    function getDuration(style) {
        var prefixes = ["", "webkit", "moz", "ms", "o"];
        var d;
        for (var i = 0; !d && i < prefixes.length; i++) {
            d = style[getPrefixed("transitionDuration", prefixes[i])];
        }

        var res = /((?:\d*\.)?\d+)(m?s)/.exec(d || "0s");
        var value = parseFloat(res[1]);

        switch (res[2]) {
            case "s":
                return value * 1000;
            default:
            case "ms":
                return value;
        }
    }

    function getFunction() {
        //return Math.random;
        var list = [];
        var n = 1 + 6 * Math.random();

        var offset = Math.random() * 2 * Math.PI;
        while (list.length < n) {
            list.push(getComponent(offset));
        }

        return function (value) {
            var result = 0;
            for (var i = 0; i < list.length; i++) {
                result += list[i](value);
            }

            return .5 + .5 * (result / list.length);
        }
    }

    function getComponent(offset) {
        var scale = Math.floor(1 + 3 * Math.random()) * 2 * Math.PI;
        return function (val) {
            return Math.sin(offset + val * scale);
        }
    }


// })(jQuery, document);
// (function ($, window) {

//     $.fn.scrollCustom = function () {
//         this.each(
//             function () {
//                 var $t = $(this);
//                 var itm = $t.data("scrollCustom");
//                 if (!itm) {
//                     $t.data("scrollCustom", new ScrollCustom($t));
//                 }
//             }
//         );
//     };


//     function ScrollCustom($t) {
//         $t.on("scroll:show", onShow)
//             .on("scroll:hide", onHide);

//         function onShow() {
//             $(window)
//                 .off("resize", resize)
//                 .on("resize", resize);

//             $t.off("scroll:refresh", resize)
//                 .on("scroll:refresh", resize);
//             resize();
//         }

//         function onHide() {
//             $(window).off("resize", resize);
//             $t.off("scroll:refresh", resize);
//         }

//         function resize(e) {
//             var size = {
//                 width: $t.width(),
//                 height: $t.height()
//             };
//             $t.siblings(".scroll-mask").find("rect").attr(size);
//         }
//     }

// })(jQuery, window);
// (function ($, peppers) {

//     /**
//      * @returns {ScrollCustom}
//      */
//     $.fn.scrollbarCustom = peppers.jQueryConstructor("scrollCustom", ScrollCustom);


//     function ScrollCustom(_wrapper) {
//         var iScroll, bar;
//         var scrollTimer;
//         //init();

//         _wrapper.find('a').on('click', function (e) {
//             if (iScroll) {
//                 console.debug(">>>", iScroll.moved);
//                 if (iScroll.moved) e.preventDefault();
//             }
//         });

//         function init() {
//             // return;
//             // if (_wrapper.eq(0).closest(".faq").length === 0) return;
//             iScroll = new IScroll(_wrapper.get(0), {
//                 scrollX: false,
//                 scrollbars: 'custom',
//                 mouseWheel: true,
//                 momentum: false,
//                 disableMouse: true,
//                 disablePointer: true,
//                 disableTouch: false,
//                 bindToWrapper: true
//                 //, click: true
//             });
//             iScroll.on("refresh", onRefresh);
//             iScroll.on("scrollStart", onScrollStart);
//             iScroll.on("scrollEnd", onScrollEnd);
//             iScroll.on("scrollCancel", onScrollCancel);
//             _wrapper.parent().append(bar = _wrapper.find(".iScrollLoneScrollbar"));
//             return this;
//         }

//         function onScrollCancel() {
//             clearInterval(scrollTimer);
//         }

//         function onScrollStart() {
//             var _this = this;
//             scrollTimer = setInterval(function () {
//                 if ((_this.y == 0) && (_this.directionY == -1)) {
//                     _wrapper.trigger("scroll:top");
//                 } else if (_this.hasVerticalScroll) {
//                     _wrapper.trigger("scroll:scrolled");
//                 }
//             }, 50);

//             if (this.y - this.maxScrollY < 50) {
//                 _wrapper.trigger("scroll:bottom");
//             }
//         }

//         function onScrollEnd() {
//             clearInterval(scrollTimer);
//             if (this.y === 0) {
//                 _wrapper.trigger("scroll:top");
//             }
//             if (this.y - this.maxScrollY < 50) {
//                 _wrapper.trigger("scroll:bottom");
//             }
//             console.debug(this.y, this.maxScrollY, this);
//         }

//         function onRefresh() {
//             if (this.y === 0) {
//                 _wrapper.trigger("scroll:top");
//             } else {
//                 _wrapper.trigger("scroll:scrolled");
//             }
//             _wrapper.closest(".scroll").trigger("scroll:refresh");
//             if (iScroll.hasVerticalScroll) {
//                 iScroll.indicators[0].wrapper.classList.remove('is-disabled');
//             } else {
//                 iScroll.indicators[0].wrapper.classList.add('is-disabled');
//             }
//         }

//         /**
//          * @param val {number}
//          * @returns {ScrollCustom}
//          */
//         this.scrollTo = function (val) {
//             if (iScroll) iScroll.scrollTo(0, val, 200);
//             console.log("8888888888888888888");
//             return this;
//         };
//         /**
//          * @returns {ScrollCustom}
//          */
//         this.refresh = function () {
//             if (peppers.checkMobile.css.isMobile()) {
//                 if (iScroll) {
//                     iScroll.destroy();
//                     bar.remove();
//                 }
//                 iScroll = undefined;
//             } else {
//                 if (!iScroll) init();
//             }
//             if (iScroll) iScroll.refresh();

//             return this;
//         };
//     }

// })(jQuery, peppers = peppers || {});

var peppers;

(function (kaspersky, Handlebars, document, $, TweenLite) {
    var SHOW = 'show', HIDE = 'hide',
        EVENT = "item:select", REMOVE = "item:remove";
    var template, script;

    $.fn.earthPopupItem = function (action) {
        return this.each(function (index, el) {
            //console.log("args", arguments);

            var $t = $(this);
            var itm = $t.data("earthPopupItem");
            console.log("earthPopupItem",action,itm);
            if (!itm) {
                $t.data("earthPopupItem", itm = new EarthPopupItem($t, index));
            }
            itm.init(action);
        })
    };

    /**
     * @param {jQuery} $t
     * @param {number} index
     * @constructor
     */
    function EarthPopupItem($t, index) {
        $t.click(function () {
            $t.trigger(EVENT, index);
        });
        var _preview = $t.find(".earth-popup__preview-hexagon"),
            _shadow = $t.find(".earth-popup__item-shadow"),
            _flag = $t.find(".earth-popup__flag-hexagon"),
            _flagBorder = $t.find(".hexagon-svg"),
            _city = $t.find(".earth-popup__city"),
            _briefs = $t.find(".earth-popup__briefs-count");
        console.log("弹出的图片DIV",_preview);
        /**
         * @param {string} action
         */
        this.init = function (action) {
            switch (action) {
                case SHOW:
                    show();
                    break;
                case HIDE:
                    hide();
                    break;
            }
        };


        function show() {
            var delay = .15 * index;
            _show(_preview, delay, 0.5);
            _show(_shadow, delay, 0.5);

            _show(_flag, delay + .25, 0.3);
            _show(_flagBorder, delay + .45, 0.3);

            _show(_city, delay + .35, 0.2);
            _show(_briefs, delay + .40, 0.2);
            console.log("showItem");
        }

        /**
         * @param {jQuery} target
         * @param {number} delay
         * @param {number=} duration
         * @param {string=} from
         * @param {string=} to
         * @private
         */
        function _show(target, delay, duration, from, to) {
            //console.log("_show");
            target.css("transform", from || "scale(0)");
            TweenLite.to(target.get(0), duration || .500, {
                transform: to || "scale(1)",
                delay: delay
            });
        }

        function hide() {

            console.log("hideItem");
            TweenLite.to($t.get(0), 0.01, {
                transform: "scale(1)",
                onComplete: function () {
                    $t.trigger(REMOVE);
                }
            });
        }
    }


    /**
     *
     * @param {{preview:string, country: {flag:string}, name:string, briefs: number}[]} data
     * @param {function} onClick
     * @returns {{element: DOMElement, action: function, close: function}}
     */
    kaspersky.getHexaspherePopup = function (data, onClick) {
        var collection, items;
        if (!template) {
            script = $("#earth-popup[type='text/x-handlebars-template']");
            template = Handlebars.compile(script.html());
        }

        collection = $(template(data))
            .appendTo(script.parent());
        collection.localization("en");

        items = collection
            .find(".earth-popup__item")
            .on(EVENT, function (event, index) {
                //onClick(data[index]);
            })
            .on(REMOVE, function () {
                collection.remove();
                collection = undefined;
                items = undefined;
            })
            .earthPopupItem(SHOW);

/*        $(data).each(function () {
            var info = this;

            var ui = $(template(info))
                .click(function () {
                    onClick(info);
                });

            console.debug( info );
            collection.append( ui );
        });*/


        return {
            "element": collection.get(0),
            "action": function (action) {
                collection && collection.toggleClass("earth-popup_moving", action === true || action === "mousedown");
            },
            "close": function () {

                console.log("currentClose");
                if (items) {
                    items.earthPopupItem(HIDE);
                }
                items = undefined;
            } //закрытие окна
        }
    };

})(kaspersky = kaspersky || {}, Handlebars, document, jQuery, TweenLite);

// var kaspersky;
// (function ($, peppers, document, window) {
//     var transforms = [
//         {
//             scale: 0.65,
//             x: 238,
//             y: -181,
//             opacity: 0,
//             brightness: 0.3
//         },
//         {
//             scale: 0.75,
//             x: 155,
//             y: -141,
//             opacity: 1,
//             brightness: 0.3
//         },
//         {
//             scale: 0.84,
//             x: 66,
//             y: -80,
//             opacity: 1,
//             brightness: 0.45
//         },
//         {
//             scale: 1,
//             x: 0,
//             y: 0,
//             opacity: 1,
//             brightness: 1
//         },
//         {
//             scale: 1.2,
//             x: -40,
//             y: 130,
//             opacity: 1,
//             brightness: .0
//         }
//     ];


//     /**
//      * jQuery plugin
//      * @param api {Function} - метод API
//      */
//     $.fn.bestOfWeek = function (api) {
//         var promise;
//         this.each(function () {
//             var $this = $(this);
//             var itm = $this.data("bestOfWeek");
//             if (!itm) {
//                 $this.data("bestOfWeek", itm = new BestOfWeek($this));
//             }
//             itm.init(promise = promise || api("", parseNames));
//         });


//         function parseNames(data) {
//             data = data.list || [];
//             for (var i = 0; i < data.length; i++) {
//                 var name = kaspersky.trimText(data[i].name || data[i].title || '', 8, 3);
//                 data[i].name = name;
//                 data[i].multiline = name.length > 1 ? "multiline" : "singleline";
//                 data[i].link = kaspersky.brief_link(data[i].brief_id, data[i].works_count || data[i].works || 1);
//             }
//             return data;
//         }

//         return this;
//     };

//     /**
//      * Каруселька Best of week
//      * @param dom {jQuery} - DOM элемент
//      * @constructor
//      */
//     function BestOfWeek(dom) {
//         var items, itemsList = [];

//         var helper;
//         var self = this;
//         var hex = dom.find(".best-of-week__decor-hexagon");
//         var container = dom.find(".best-of-week__carousel");
//         var backdrop = dom.find(".backdrop");

//         var script = dom.find('[type="text/x-handlebars-template"]');
//         var template = Handlebars.compile(script.html());

//         initCheckbox(dom.find("#best-of-week__checkbox"));


//         self.init = function (promise) {
//             if (items) items.off().remove();
//             items = undefined;
//             itemsList.length = 0;


//             promise.done(init);


//             function init(list) {
//                 items = $(template(list)).filter(".best-of-week__item-container");
//                 container.append(items);

//                 items.each(function (index) {
//                     itemsList.push(
//                         $(this).css("animationDelay", 1 + 0.1 * index + "s")
//                     );
//                 });

//                 initRotation(dom, items.length);
//             }
//         };


//         function initRotation(dom, count) {
//             var isScrolling, stopScrolling;
//             var _offset = 0, helpedIndex, requestAnimationFrameID, offsetSpeed = 0;

//             peppers.checkMobile.css.listen(function (event, isMobile) {
//                 var fn = isMobile ? dom.off : dom.on;

//                 fn.apply(dom, ["mouseover", startScroll]);
//                 fn.apply(dom, ["mouseleave", stopScroll]);
//                 if (isMobile) {
//                     resetItems();
//                 } else {
//                     initItems();
//                 }
//             });

//             function stopScroll() {
//                 stopScrolling = true;
//                 requestAnimationFrameID = undefined;


//                 if (_offset - Math.floor(_offset) > .1) {
//                     offsetSpeed = 0.04;
//                 } else {
//                     offsetSpeed = 0;
//                 }
//             }

//             function startScroll() {
//                 isScrolling = true;
//                 stopScrolling = false;
//                 if (!requestAnimationFrameID) {
//                     startAnimation();
//                     dom.on("mousemove", changeSpeed);
//                 }

//                 console.log("mousemove");

//             }

//             function changeSpeed(e) {
//                 var _contOffset = helper.parent().offset();

//                 var x = e.pageX - _contOffset.left;
//                 var y = e.pageY - _contOffset.top;
//                 var angle = Math.atan2(y, x) / Math.PI;
//                 var pos = angle < .25 && angle > -0.5 ? 1 : 0;

//                 var s = Math.abs(_offset - Math.floor(_offset));

//                 offsetSpeed = pos * Math.min(1, Math.max(0, Math.sqrt(x * x + y * y) - (80 * (1 - s))) / 160) * 0.08;
//             }

//             function stopAnimation() {
//                 offsetSpeed = 0;
//                 dom.off("mousemove", changeSpeed);
//                 cancelAnimationFrame(requestAnimationFrameID);
//                 requestAnimationFrameID = undefined;
//             }

//             function startAnimation() {
//                 requestAnimationFrameID = requestAnimationFrame(startAnimation);
//                 initItems();
//             }


//             function removeHelper() {
//                 if (helper) {
//                     helper.off().remove();
//                     itemsList.splice(itemsList.indexOf(helper), 1);
//                 }
//                 helpedIndex = undefined;
//                 helper = undefined;
//             }

//             function resetItems() {
//                 removeHelper();

//                 items.css(getTransform(undefined));
//                 items.each(function () {
//                     container.append(this);
//                 });
//             }

//             function initItems() {
//                 if (stopScrolling && Math.floor(_offset) != Math.floor(_offset + offsetSpeed)) {
//                     _offset = Math.ceil(_offset);
//                     stopAnimation();
//                 } else {
//                     _offset += offsetSpeed;
//                 }
//                 //_offset += 2.8;

//                 var floor = Math.floor(_offset);
//                 var offset = _offset - floor;


//                 var helperIndex = ((count - 1 - floor) % count + count) % count;
//                 if (!helper || helperIndex !== helpedIndex) {
//                     removeHelper();

//                     helpedIndex = helperIndex;
//                     helper = $(items.eq(helpedIndex).clone());
//                     helper.addClass("HELPER");
//                     itemsList.splice(helperIndex, 0, helper);
//                     for (i = helperIndex + 1; i < helperIndex + 1 + itemsList.length; i++) {
//                         container.append(itemsList[i % itemsList.length]);
//                     }
//                 }


//                 var c = itemsList.length;
//                 for (var i = 0; i < c; i++) {
//                     var j = ((helperIndex + 1 + i) % c + c) % c;
//                     var item = itemsList[j];
//                     if (item) {
//                         item.css(getTransform(i + offset));
//                     } else {
//                         console.debug(j);
//                     }
//                 }


//             }
//         }


//         function initCheckbox(checkbox) {
//             checkbox.on("change", function () {
//                 var checked = $(this).is(":checked");
//                 backdrop.toggleClass("backdrop_visible", checked);

//                 checked ? show() : hide();


//             }).change();


//             function show() {
//                 trigger();
//                 var modal = $(dom).find(".best-of-week__modal").css("display", "block");
//                 var item = hex.find(".best-of-week__item");
//                 TweenLite.killTweensOf(hex.get(0));
//                 TweenLite.killTweensOf(item.get(0));

//                 hex.css("opacity", 0);
//                 item.css({opacity: "", fontSize: ""});
//                 //modal.css({opacity: 0});
//                 //
//                 //modal.fadeIn(300);

//                 TweenLite.to(hex.get(0), .35, {
//                     opacity: 1,
//                     delay: .3,
//                     ease: new Ease(function (time, start, change, duration) {
//                         return ~~(Math.abs(time - .2) < .1
//                             || Math.abs(time - .55) < .05
//                             || Math.abs(time - .75) < .05
//                             || Math.abs(time - .9) < .1);
//                     }),
//                     onComplete: function () {
//                         TweenLite.to(item.get(0), .1, {
//                             opacity: 0,
//                             fontSize: 0,
//                             //delay: .2,
//                             ease: Sine.easeIn
//                         })
//                     }
//                 });

//                 if (items) {
//                     items.css("fontSize", "");
//                     var size = items.css("fontSize");

//                     items.css({fontSize: 0, opacity: 0});
//                     items.each(function (index) {
//                         var self = this;
//                         TweenLite.killTweensOf(self);
//                         TweenLite.to(self, .3, {
//                             fontSize: parseFloat(size),
//                             opacity: 1,
//                             delay: .5 + index * .03,
//                             onComplete: function () {
//                                 this.target.style.fontSize = "";
//                                 this.target.style.opacity = "";
//                             }
//                         })
//                     })
//                 }
//             }

//             function hide() {
//                 var modal = $(dom).find(".best-of-week__modal").css("display", "block");
//                 var item = hex.find(".best-of-week__item");
//                 TweenLite.killTweensOf(hex.get(0));
//                 TweenLite.killTweensOf(item.get(0));

//                 hex.css("opacity", 0);
//                 item.css({opacity: "", fontSize: 100});
//                 //modal.css({opacity: 0});


//                 TweenLite.to(hex.get(0), .15, {
//                     opacity: 0.3,
//                     //ease: Sine.easeOut,
//                     ease: new Ease(function (t) {
//                         return Math.sin(t * Math.PI);
//                     }),
//                     delay: .15
//                 });
//                 TweenLite.to(item.get(0), .15, {
//                     fontSize: 600,
//                     delay: .15,
//                     ease: Sine.easeOut,
//                     onComplete: function () {
//                         modal.css("display", "");
//                         trigger();
//                     }
//                 });

//                 if (items) {
//                     items.each(function (index) {
//                         var self = this;
//                         TweenLite.killTweensOf(self);
//                         TweenLite.to(self, .3, {
//                             fontSize: 50,
//                             opacity: 0,
//                             onComplete: function () {
//                                 $(self).css({
//                                     fontSize: "",
//                                     opacity: ""
//                                 })
//                             }
//                         })
//                     })
//                 }
//             }

//             function trigger() {
//                 $(document.documentElement).trigger("best-of-week:toggle");
//             }
//         }


//         function interpolate(v1, v2, n) {
//             var res = $.extend({}, v1, v2);

//             for (var p in res) {
//                 if (!res.hasOwnProperty(p)) continue;

//                 res[p] = v1[p] + (v2[p] - v1[p]) * n;
//             }

//             return res;
//         }

//         function getTransform(i) {
//             if (typeof i == "undefined") {
//                 return {
//                     transform: "",
//                     opacity: "",
//                     filter: ""
//                 };
//             }
//             var floor = Math.floor(i);
//             var ceil = Math.ceil(i);
//             if (ceil >= transforms.length || floor < 0) {
//                 return {
//                     display: "none"
//                 }
//             }
//             var data = interpolate(transforms[floor], transforms[ceil], i - floor);
//             return {
//                 display: "",
//                 transform: "scale(" + data.scale + ") translate(" + data.x + "px," + data.y + "px)",
//                 opacity: data.opacity,
//                 filter: "brightness(" + data.brightness + ")"
//             }
//         }
//     }
// })(window.jQuery, peppers = peppers || {}, document, window);

// var peppers;

// (function (peppers, $, createjs, window, document) {
//     var _lib = {};
//     /*$.fn.pepTimeline = function (list) {
//         this.each(function () {
//             var $t = $(this);
//             var ref = $t.data("$timeline");
//             if (!ref) {
//                 $t.data("$timeline", ref = new peppers.Timeline($t, list));
//             }

//         });
//         return this;
//     };*/
//     /**
//      * jQuery библиотека Таймлайн
//      * @param list {Array}
//      * @param current_year {number}
//      * @returns {jQuery}
//      */
//     $.fn.pepTimeline = peppers.jQueryConstructor("$timeline", Timeline);


//     /**
//      * Таймлайн
//      * @param $element {jQuery} - DOM элемент
//      * @constructor
//      */
//     function Timeline($element) {
//         //var size = {width:40, height: element.height()};
//         /**
//          * {_lib.Year[]}
//          */
//         var years;
//         var dashes, variable = !$element.is(".timeline_static");
//         var size = {width: 40, height: 360};
//         var currentYear;
//         var templateScript = $element.find("[type='text/x-handlebars-template']");
//         var template = Handlebars.compile(templateScript.html());
//         var canvas = getCanvas($element, size.width, size.height);

//         var activeYears;
//         var stage = new createjs.Stage(canvas.get(0));
//         size.height -= 20;
//         stage.y = 10;


//         /**
//          *
//          * @param {array} list
//          * @param {number} defaultYear
//          */
//         this.init = function (list, defaultYear) {
//             //variable = _variable !== false;
//             //element.toggleClass("timeline_static", !variable);

//             dashes = initDashes(8, list, defaultYear);

//             stage.enableMouseOver(25);
//             stage.update();

//             if (variable) {
//                 $element.on("mousemove", onMouseMove);
//                 $element.on("mouseleave", onMouseLeave);
//                 createjs.Ticker.addEventListener("tick", onTick);
//             } else {
//                 $(document.documentElement).on("resize:after", updateHeight);
//                 updateHeight();
//             }

//             //stage.addEventListener("stagemousemove", onMouseMove);
//         };

//         this.initLinks = function (attached, author_id) {
//             var hasAttached = !!(attached && attached.length > 0);
//             if (attached) {
//                 activeYears = attached.reduce(function (val, itm) {
//                     val[itm.year] = val[itm.year] || [];
//                     var work_id = null;
//                     if (author_id) {
//                         var work = itm.works.find(function (work) {
//                             return work.author && work.author.id == author_id;
//                         });
//                         work_id = work ? work.id : null;
//                     }
//                     val[itm.year].push(kaspersky.brief_link(itm.id, itm.works_count, work_id));
//                     return val;
//                 }, {});

//                 years.forEach(function (val) {
//                     val.setActive(activeYears && activeYears[val.year] && activeYears[val.year].length > 0);
//                 })
//             }
//             $element.toggleClass("timeline_static", !hasAttached);

//             if (hasAttached) {
//                 $element.on("mousemove", onMouseMove);
//                 $element.on("mouseleave", onMouseLeave);
//                 createjs.Ticker.addEventListener("tick", onTick);
//             } else {
//                 $element.off("mousemove", onMouseMove);
//                 $element.off("mouseleave", onMouseLeave);
//                 setTimeout(function () {
//                     createjs.Ticker.removeEventListener("tick", onTick);
//                 }, 1000);
//             }
//         };

//         function updateHeight() {
//             stage.scaleX = stage.scaleY = Math.min(1, $element.height() / size.height);//canvas.attr("height");
//             stage.update();
//         }

//         function onTick() {
//             for (var i = 0; i < dashes.length; i++) {
//                 dashes[i]._redraw();
//             }
//             stage.update();
//         }

//         function initMouse(relX, relY) {
//             for (var i = 0; i < dashes.length; i++) {
//                 dashes[i].mouse(relX, relY);
//             }

//         }

//         function onMouseLeave(e) {
//             initMouse(0, 9999999);
//         }

//         function onMouseMove(e) {
//             var parentOffset = $(this).offset();
//             initMouse(
//                 e.pageX - parentOffset.left - stage.x,
//                 e.pageY - parentOffset.top - stage.y
//             );
//         }

//         function initDashes(gap, list, defaultYear) {
//             var dashes = [];
//             var cnt = (size.height - 1) / gap;
//             cnt = Math.round((cnt - list.length) / (list.length - 1));// * (list.length - 1);

//             var gap2 = cnt + 1;

//             cnt = cnt * (list.length - 1) + list.length;
//             gap = (size.height - 1) / (cnt - 1);

//             var displayObject;

//             years = list.map(function (_year, index, arr) {
//                 var year = $(template(_year))
//                     .insertBefore(templateScript);

//                 if (index < arr.length - 1) {
//                     for (var k = 0; k < 11; k++) {
//                         year.after(" <span class='timeline__dash'></span> ");
//                     }
//                 }

//                 var displayObject = new _lib.Year(size.width, _year, year.get(0));

//                 if (_year == defaultYear) {
//                     select(displayObject);
//                 }
//                 displayObject.addEventListener("__select", onSelect);

//                 return displayObject;

//             });

//             var _years = [].concat(years);
//             for (var i = 0; i < cnt; i++) {
//                 if (i % gap2 == 0) {
//                     displayObject = _years.shift();
//                 } else {
//                     displayObject = new _lib.Dash(size.width);
//                 }

//                 dashes.push(displayObject);
//                 displayObject.y = Math.round(gap * i);
//                 stage.addChild(displayObject);

//             }

//             return dashes;
//         }


//         function onSelect(e) {
//             /**
//              * {_lib.Year}
//              */
//             var itm = e.currentTarget;

//             if (itm && activeYears) {
//                 var list = activeYears[itm.year];
//                 if (list && list.length > 0) {
//                     var i = Math.floor(Math.random() * list.length);
//                     if (list[i].substr(0, 1) === "#") window.location.hash = list[i];
//                     else kaspersky.navigateTo(list[i]);

//                     return;
//                 }
//             }
//             if (!$element.is(".timeline_static")) {
//                 select(e.currentTarget);
//             }
//         }

//         function select(nextYear) {
//             if (currentYear == nextYear) return;

//             var selectedYear = window.currentYear = ~~nextYear.yearNum[0].innerText;

//             // if the planet module exists
//             var PLANET = window.PLANET;
//             if (PLANET && PLANET.state == PLANET.IDLE) {
//                 PLANET.showYear(selectedYear);
//                 // console.log( "SELECT",  _year );
//             }

//             if (currentYear) currentYear.setSelected(false);
//             currentYear = nextYear;
//             currentYear.setSelected(true);
//             $($element).trigger("timeline:change", selectedYear);
//         }

//         function getCanvas(element, w, h) {
//             var canvas = element.find("canvas");
//             if (canvas.length == 0) {
//                 canvas = $(document.createElement("canvas"));
//                 element.prepend(canvas);
//             }

//             canvas.attr({
//                 width: w,
//                 height: h
//             });

//             return canvas;
//         }
//     }


//     /**
//      * Dash
//      */
//     (function (_lib) {
//         /**
//          * Черточки на таймлайне
//          * @param width {number} - ширина черточки
//          * @constructor
//          */
//         function Dash(width) {
//             this["Container_constructor"]();
//             this.distance = this.currentDistance = 0;

//             var dash = this.dash = new createjs.Shape();
//             dash.graphics
//                 .beginLinearGradientFill(["rgba(77, 193, 148, 1)", "rgba(77, 193, 148, 0)"], [.65, 1], 0, 0, width, 0)
//                 .drawRect(0, 0, width, 1);
//             dash.alpha = .53;

//             this.addChild(dash);

//             dash.x = -width + 13;

//         }

//         var p = createjs.extend(Dash, createjs.Container);
//         p.mouse = function (relX, relY) {
//             this.initDistance(this.getDistance(relX, relY));

//         };
//         /**
//          * Расстояние от черточки до курсора мыши
//          * @param x {number}
//          * @param y {number}
//          * @returns {number}
//          */
//         p.getDistance = function (x, y) {
//             var R = 48;
//             var dist = Math.abs(y - this.y);


//             dist = Math.max(0, 1 - dist / R);

//             return dist * dist;
//         };

//         /**
//          * Изменение внешнего вида в зависимости от расстояния до курсора
//          * @param dist {number}
//          */
//         p.initDistance = function (dist) {
//             this.distance = dist;
//         };

//         p._redraw = function () {
//             var dist = this.currentDistance = this.currentDistance + (this.distance - this.currentDistance) * .5;
//             this.dash.alpha = .53 + .47 * dist;
//             this.x = 12 * dist;
//         };

//         _lib.Dash = createjs.promote(Dash, "Container");
//     })(_lib);


//     /**
//      * Year
//      */
//     (function (_lib) {
//         /**
//          * Черточка на таймлайне с номером года
//          * @param width {number} - ширина черточки
//          * @param year {number} - номер года
//          * @param yearDom {DOMElement} - номер года
//          * @constructor
//          */
//         function Year(width, year, yearDom) {
//             this["Dash_constructor"](width);

//             this.year = year;
//             this.yearNum = $(yearDom);

//             var yearNum = new createjs.DOMElement(this.yearNum.get(0));
//             yearNum.x = 20;
//             this.dash.x = this.dash.x + 7;
//             this.dash.alpha = 1;

//             this.addChild(yearNum);

//             var img = this.img = new createjs.Bitmap("images/timeline/selected-glow.png");
//             img.alpha = 0;
//             this.addChild(img);
//             img.x = this.dash.x;
//             img.y = -6;

//             var self = this;

//             this.yearNum.on("click", function () {
//                 if (self.isActive !== false && !self.selected) {
//                     self.dispatchEvent(new createjs.Event("__select"));
//                 }
//             });
//         }

//         var p = createjs.extend(Year, _lib.Dash);

//         p.setActive = function (value) {
//             this.isActive = !!value;
//             this.yearNum.toggleClass("timeline__item_inactive", !this.isActive);
//         };
//         p._redraw = function () {
//             if (this.selected || this.isActive === false) return;
//             this.Dash__redraw();

//             this.dash.alpha = 1;
//             this.yearNum.css({fontSize: 14 + 10 * this.currentDistance});
//         };


//         /**
//          *
//          * @returns {Year}
//          */
//         p.toggleSelected = function () {
//             this.setSelected(!this.selected);
//             return this;
//         };
//         /**
//          * Выбран ли год
//          * @returns {boolean|*}
//          */
//         p.getSelected = function () {
//             return this.selected;
//         };
//         /**
//          * Выбрать год
//          * @param val {boolean}
//          */
//         p.setSelected = function (val) {

//             this.selected = val;

//             var _css, _alpha, _x;
//             if (val) {
//                 _css = {color: "#00ffa7", fontWeight: 900, fontSize: 24};
//                 _x = 20;
//                 _alpha = 1;
//             } else {
//                 _css = {color: "#ffffff", fontWeight: 500};
//                 _x = 0;
//                 _alpha = 0;
//             }


//             this.yearNum.animate(_css, 200);
//             createjs.Tween.get(this.img)
//                 .to({
//                     alpha: _alpha
//                 }, 200);
//             createjs.Tween.get(this)
//                 .to({
//                     x: _x
//                 }, 200);

//             this.yearNum.toggleClass("timeline__item-selected", val);


//             this.dash.filters = [];

//         };

//         _lib.Year = createjs.promote(Year, "Dash");
//     })(_lib);

// })(peppers = peppers || {}, jQuery, createjs, window, document);
// var peppers;

// (function (kaspersky, peppers, $, document, Handlebars) {

//     $.fn.briefModal = peppers.jQueryConstructor("BriefModal", BriefModal);

//     /*function (api){
//         this.each(function () {
//             var $t = $(this);
//             var ref = $t.data("BriefModal");
//             if (!ref) {
//                 $t.data("BriefModal", ref = new BriefModal($t));
//             }

//             ref.init( api );
//         })
//     };*/


//     function BriefModal($element) {
//         var api, agreeAPI, briefID, _currentUser, _data, wait, promise;
//         var children = $element.children();
//         $element.on("modal-item:change", onChange);

//         //var addComment = $element.find(".add-comment").addComment();
//         var addComment = $element.find(".add-comment-form").on("add-comment-form:add", onAddComment);
//         var content = $element.find(".brief-modal__cont").briefModalContent();
//         var comments = $element.find(".brief-comments-list").briefCommentsList();
//         var agree = $element.find(".agree-vote");
//         var graphicsLinkContainer = $('.show-graphics');
//         var graphicsLink = graphicsLinkContainer.find('a');


//         /**
//          * IScroll
//          */
//         var scrollMasked = $element.find(".scroll__masked");
//         var scroll = scrollMasked.scrollbarCustom().data("scrollCustom");
//         scrollMasked.on('scroll:scrolled', function (e) {
//             graphicsLinkContainer.removeClass('scroll-visible');
//         });
//         scrollMasked.on('scroll:top', function (e) {
//             graphicsLinkContainer.addClass('scroll-visible');
//         });

//         $(document.documentElement).on("resize:after", function () {
//             scroll.refresh();
//             graphicsLinkContainer.css('right', $('.k-menu__authorization').outerWidth());

//             if (peppers.checkMobile.css.isMobile() || (document.body.clientWidth < 1025)) {
//                 var cityNameElement = $element.find('.brief-city-name--mobile');
//                 var contentSize = document.body.clientWidth - cityNameElement.offset().left * 2;
//                 var titleAndLinkSize = graphicsLinkContainer.outerWidth() + cityNameElement.outerWidth();
//                 if (contentSize < titleAndLinkSize) {
//                     $element.addClass('show-graphics--position-down');
//                 } else {
//                     $element.removeClass('show-graphics--position-down');
//                 }
//             }
//         });

//         $element.on("modal-item:show  modal-item:hide", function (e) {
//             promise.always(function () {
//                 scroll.refresh();
//                 $element.find(".scroll").trigger(e.type.replace("modal-item", "scroll"));

//                 if ((_data.works_count > 0) && (e.type === 'modal-item:show')) {
//                     graphicsLink.attr('href', 'prediction?brief_id=' + briefID);
//                     graphicsLinkContainer.addClass('visible');
//                 } else {
//                     graphicsLink.attr('href', '#');
//                     graphicsLinkContainer.removeClass('visible');
//                 }
//             });
//         });

//         var meta_swap = null;
//         $element.on("modal-item:show", function () {
//             promise.always(function () {
//                 if (!meta_swap) {
//                     meta_swap = kaspersky.get_metadata();

//                     $('title').html(_data.title);
//                     $('meta[property="og:title"]').attr('content', _data.title);
//                     $('meta[property="og:description"]').attr('content', _data.stripped_body);
//                     $('meta[property="og:image"]').attr('content', _data.image_share);
//                     $('meta[property="og:url"]').attr('content', _data.share_url);
//                     $('meta[name="description"]').attr('content', _data.stripped_body);
//                 }
//             });
//         });
//         $element.on("modal-item:hide", function () {
//             promise.always(function () {
//                 if (meta_swap) {
//                     kaspersky.set_metadata(meta_swap)
//                     meta_swap = null;
//                 }
//             });
//         });


//         $element.on("scroll:do_refresh", function () {
//             scroll.refresh();
//         });


//         this.init = function (_api, _addCommentAPI, _agreeAPI, currentUser) {
//             if (currentUser) _currentUser = currentUser;
//             if (_api) api = _api;
//             if (_agreeAPI) agreeAPI = _agreeAPI;
//             if (_addCommentAPI) {
//                 addComment.addCommentForm(_addCommentAPI);
//             }
//         };


//         function onAddComment(event, text) {
//             comments.briefCommentsList("add", {
//                 user: _currentUser().user,
//                 comment: text
//             });
//             scroll.refresh();
//         }

//         function onChange(event) {
//             var _briefID = arguments[3];
//             if (briefID === _briefID) return;

//             children.hide();
//             promise = api({brief_id: briefID = _briefID});
//             promise.done(init)
//                 .fail(function (msg) {
//                     peppers.modal();
//                     kaspersky.alert("ERROR", msg);
//                 });
//             $(".addwork-link", $element).attr("href", kaspersky.addwork_link(briefID));

//             addComment.addCommentForm(null, briefID);

//         }

//         function init(data) {
//             $element.find(".brief-city-name").html(data.location && data.location.city);

//             children.fadeIn(400);
//             _data = data;
//             agree.agreeVote(data)
//                 .on("vote:vote", onVote);

//             content.briefModalContent(data);
//             comments.briefCommentsList(data.comments);

//             addComment.not(":first-of-type").toggle(data.comments && data.comments.length >= 5);

//             addComment.find('textarea').attr('placeholder', $.fn.localization.getText("brief.comment.placeholder"));

//             $(document.documentElement).trigger("resize:after");
//             scroll.refresh();
//             scroll.scrollTo(0);

//         }


//         function onVote(event, select) {
//             if (!_data || typeof _data.voted === "boolean" || wait) return;

//             if (!kaspersky.user.isAuthorized()) {
//                 kaspersky.user.auth();
//                 return;
//             }

//             if (typeof select === "boolean") {
//                 wait = true;
//                 var type = select ? "agree" : "disagree";
//                 agreeAPI({brief_id: briefID, agree: type})
//                     .done(function (response) {
//                         _data[type] = response[type] || (~~(_data[type] || 0) + 1);
//                         _data.voted = type;
//                         agree.agreeVote(_data);
//                     })
//                     .fail(function (msg) {
//                         kaspersky.alert(msg);
//                     })
//                     .always(function () {
//                         wait = false;
//                     });
//             }
//         }
//     }


// })(kaspersky = kaspersky || {}, peppers = peppers || {}, jQuery, document, Handlebars);

var kaspersky, peppers;

// (function (kaspersky, $, location, document, Handlebars) {

    // var fadeComplete = (function () {
    //     var def = $.Deferred();
    //     $(document).on("fade:complete", function () {
    //         def.resolve();
    //     });

    //     return def.promise();

    // }());

    // $.fn.brief = peppers.jQueryConstructor("brief", Brief);

    // function Brief($element) {
    //     var _addLikeApi, _briefApi, hexInitialized;
    //     var _info;
    //     var _currentWork;
    //     var params = kaspersky.parseURL(true);

    //     var user = $(".brief-user", $element);
    //     var panorama = $(".brief__panorama", $element);

    //     $(".brief__brief-link", $element).attr("href", kaspersky.brief_link(params.brief_id, 0));
    //     $(".brief__addwork", $element).attr("href", kaspersky.addwork_link(params.brief_id));
    //     $element.on("brief-user:like", addLike);

    //     this.init = function (api, addLikeApi, briefApi) {
    //         _addLikeApi = addLikeApi;
    //         _briefApi = briefApi;
    //         api({brief_id: params.brief_id}, initWorks)
    //             .done(initData)
    //             .fail(function () {
    //                 kaspersky.navigateTo("404.html");
    //             });
    //     };


    //     function initWorks(data) {
    //         data = data.list || [];
    //         data.forEach(function (itm, index, arr) {
    //             itm.currentPage = index + 1;
    //             itm.totalPages = arr.length;
    //             itm.carousel = arr.length > 1;

    //             var prevIndex = (index - 1 + arr.length) % arr.length;
    //             var nextIndex = (index + 1) % arr.length;
    //             itm.prev_id = arr[prevIndex].id;
    //             itm.next_id = arr[nextIndex].id;

    //             itm.link = kaspersky.user_link(itm.author.id);

    //             itm.type = "sphere";


    //             /*if( itm.points ){
    //                 if (typeof itm.points === "string") {
    //                     itm.points = JSON.parse(itm.points);
    //                 }
    //                 itm.points = itm.points.map(function ( point ) {
    //                     var data = point.data.split(";").map(parseFloat);
    //                     return {
    //                         "name" : point.brief_name,
    //                         "x" : data[0],
    //                         "y" : data[1],
    //                         "z" : data[2],
    //                         "link": kaspersky.brief_link(point.brief_id)
    //                     }
    //                 });

    //             }*/

    //         });
    //         return data;
    //     }

    //     function addLike() {
    //         if (!kaspersky.user.isAuthorized()) {
    //             kaspersky.user.auth();
    //             return;
    //         }

    //         // var data = _info && _info[0] || _info;
    //         var data = _currentWork || _info[0] || _info;
    //         if (data && data.id) {
    //             _addLikeApi({work_id: data.id})
    //                 .done(function () {
    //                     $element.find(".brief-user__likes-value").html(Handlebars.helpers.formatNumber(++data.likes));
    //                 })
    //                 .fail(function (msg) {
    //                     kaspersky.alert(msg);
    //                 });
    //         }
    //     }


    //     // function initData(data) {
    //     //     _info = data;
    //     //     if (_info.length == 0) {
    //     //         // location.hash = "/modal/brief/" + params.brief_id;
    //     //         location.replace("#/modal/brief/" + params.brief_id);
    //     //         $(document.documentElement).on("modal:close", function (event) {
    //     //             event.preventDefault();
    //     //             window.historyBack();
    //     //         });
    //     //         return;
    //     //     }
    //     //     //console.debug( data );

    //     //     //$(".brief-user", $element).briefUser( data );
    //     //     $(window).on("hashchange", onHashChange);
    //     //     if (!onHashChange()) {
    //     //         showWork(0);
    //     //     }
    //     //     //location.hash = "#/";
    //     // }

    //     function initTimeline(index) {
    //         var $t = $(".timeline");
    //         var t = $t.data("$timeline");
    //         if (t) {
    //             var brief = _info[index].brief;
    //             var author = _info[index].author;

    //             var attached = brief && brief.attached ? brief.attached : [];
    //             var author_id = author && author.id ? author.id : null;

    //             t.initLinks(attached, author_id);
    //         } else {
    //             $t.one("timeline:init", function () {
    //                 initTimeline(index)
    //             });
    //         }


    //     }

    //     function onHashChange(e) {

    //         var work = /^#\/(\d+)$/.exec(location.hash);
    //         if (work) {
    //             for (var i = 0; i < _info.length; i++) {
    //                 if (_info[i].id == work[1]) {
    //                     showWork(i);
    //                     return true;
    //                 }
    //             }
    //         }

    //     }

    //     // function showWork(index) {
    //     //     var brief = _info[index].brief;
    //     //     _currentWork = _info[index];

    //     //     kaspersky.DATA = kaspersky.DATA || {};
    //     //     if (kaspersky.DATA.work_id == _info[index].id) {
    //     //         return;
    //     //     }

    //     //     kaspersky.DATA.work_id = _info[index].id;
    //     //     /*var _hash = "#/" + _info[index].id;
    //     //     if (window.location.hash != _hash && !/^#?\/modal/.test(window.location.hash)) {
    //     //         window.location.hash = _hash;
    //     //         return;
    //     //     }*/

    //     //     // user.briefUser(_info[index], index, _info.length);

    //     //     var type = (brief && brief.type || _info[index].brief_type) || "panorama";
    //     //     var location = brief && brief.location && brief.location.city;

    //     //     var cityName = $element.find(".brief-city-name").html(location);
    //     //     var size = cityName.width() * 18 / parseFloat($("html").css("fontSize"));
    //     //     console.debug(size);
    //     //     // $element.toggleClass("brief-360_long-name", size > 300);//location.length > 11);
    //     //     $element.toggleClass("brief-360_long-name", location.length > 18);

    //     //     $element.removeClass("brief-360_panorama  brief-360_thing")
    //     //         .addClass("brief-360_" + type);

    //     //     var work = _info[index];
    //     //     if (work.brief) {
    //     //         $('title').html(work.brief.title);
    //     //         $('meta[property="og:title"]').attr('content', work.brief.title);
    //     //         $('meta[property="og:description"]').attr('content', work.brief.stripped_body);
    //     //         $('meta[property="og:image"]').attr('content', work.brief.image_share);
    //     //         $('meta[name="description"]').attr('content', work.brief.stripped_body);
    //     //     }
    //     //     $('meta[property="og:url"]').attr('content', work.share_url);


    //     //     switch (type) {
    //     //         case "panorama":
    //     //             panorama.briefPanorama(_info[index], _briefApi, params.brief_id);
    //     //             break;

    //     //         case "thing":
    //     //             $element.find('.nav-menu__item-brief').addClass('__mobile');
    //     //             initGreenHex();
    //     //             panorama.css({
    //     //                 backgroundImage: "url('" + _info[index].image + "')"
    //     //             });
    //     //             break;
    //     //     }
    //     //     initTimeline(index);
    //     // }

    //     function initGreenHex() {
    //         if (!hexInitialized) {
    //             hexInitialized = true;
    //             _briefApi({brief_id: params.brief_id}).done(showHex);
    //         }
    //     }

    //     function showHex(data) {
    //         $element.find(".green-hex__title").html(data.name);
    //         $element.find(".green-hex__body").html(data.body);
    //     }
    // }

    // $.fn.briefUser = function (info) {

    //     this.each(function () {
    //         var $t = $(this);
    //         var ref = $t.data("BriefUser");
    //         if (!ref) {
    //             $t.data("BriefUser", ref = new BriefUser($t));
    //         }

    //         ref.init(info);
    //     });
    // };

    // function ArrowBtn(element) {
    //     var arrowTemplate = Handlebars.compile(element.attr("href"));
    //     this.init = function (info) {
    //         element.toggle(info.carousel);
    //         element.attr("href", arrowTemplate(info));
    //     }
    // }

    /**
     * @param element {jQuery}
     * @constructor
     */
    // function BriefUser(element) {

    //     var script = element.find("[type='text/x-handlebars-template']");
    //     var template = Handlebars.compile(script.html());
    //     var prev = new ArrowBtn($(".brief-360__arrow_prev"));
    //     var next = new ArrowBtn($(".brief-360__arrow_next"));
    //     var ui;
    //     var $html = $(document.documentElement);

    //     /**
    //      *
    //      * @param {{
    //      *  id: number,
    //      *  image: string,
    //      *  likes: number,
    //      *  points: {
    //      *      brief_id: number,
    //      *      brief_name: string,
    //      *      works_count: number,
    //      *      data: string
    //      *  }[],
    //      *  brief_id: number,
    //      *  brief_type: "thing"|"panorama",
    //      *  author: {
    //      *      id: number,
    //      *      name: string,
    //      *      image: string
    //      *  },
    //      *
    //      *
    //      * currentPage: number,
    //      * totalPages: number,
    //      * }} info
    //      */

    //     this.init = function (info) {
    //         $html.off("resize:after", animate);

    //         if (ui) ui.remove();

    //         ui = $(template(info)).insertAfter(script);
    //         prev.init(info);
    //         next.init(info);
    //         // $(".user-data__userpic", element).css("backgroundImage", "url('" + info.author.image + "')");
    //         // ui.find(".brief-user__like-btn").click(onLike);

    //         //animate();
    //         ui.find(".skew").css("visibility", "hidden");

    //         function animate() {
    //             ui.find(".skew").css("visibility", "").stop().filter(":visible")
    //                 .css({
    //                     width: "",
    //                     minWidth: ""
    //                 })
    //                 .each(function () {
    //                     var $t = $(this);
    //                     var w = $t.children().outerWidth();
    //                     $t.data("width", w);
    //                 })
    //                 .css({
    //                     width: 0,
    //                     minWidth: "inherit"
    //                 })
    //                 .each(function (index) {
    //                     var $t = $(this).delay(1000 + index * 200).animate({width: $(this).data("width")}, 500/*, "swing", function () {
    //                             $t.css({
    //                                 "width": "",
    //                                 "minWidth": ""
    //                             }).find(".skew__text").css("margin-left", "");
    //                         }*/);
    //                     if (!$t.is(".brief-user__index")) {
    //                         $t.find(".skew__text").css("margin-left", "-11rem");
    //                     }
    //                 });
    //         }

    //         //.css("visibility", "hidden");

    //         fadeComplete.done(function () {

    //             $(".user-pic", element).addClass("user-pic--visible");
    //             if ($html.data("size")) animate();
    //             else $html.one("resize:after", animate);
    //             setTimeout(function () {
    //                 $(".brief-user__arrow", element).addClass("brief-user__arrow_visible");
    //             }, 1600);

    //         });

    //     };


    //     function onLike(event) {
    //         event.preventDefault();
    //         element.trigger("brief-user:like");
    //     }

    // }


    // $.fn.briefPanorama = peppers.jQueryConstructor("briefPanorama", Panorama);
    /*$.fn.briefPanorama = function (promise) {
        this.each(function () {
            var $t = $(this);
            var ref = $t.data("briefPanorama");
            if (!ref) $t.data("briefPanorama", ref = new Panorama($t, promise));
        })
    };*/


    /*
██████╗  █████╗ ███╗   ██╗ ██████╗ ██████╗  █████╗ ███╗   ███╗ █████╗
██╔══██╗██╔══██╗████╗  ██║██╔═══██╗██╔══██╗██╔══██╗████╗ ████║██╔══██╗
██████╔╝███████║██╔██╗ ██║██║   ██║██████╔╝███████║██╔████╔██║███████║
██╔═══╝ ██╔══██║██║╚██╗██║██║   ██║██╔══██╗██╔══██║██║╚██╔╝██║██╔══██║
██║     ██║  ██║██║ ╚████║╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝
*/

    // PANORMA
//     function Panorama($element) {

//         var panoramaViewer, GUI, VR;
//         var $preloader = $(".transition__preloader", $element);

//         this.init = function (data, api, brief_id) {
//             _initPanorama(data, api, brief_id);
//         };

//         function _initPanorama(panorama_data, api, brief_id) {

//             if (!GUI) {
//                 GUI = new PNRM.GUI();

//                 panoramaViewer = window.panoramaViewer = new PNRM.Player($element, GUI);
//             }
//             // panorama_data.images = [ panorama_data.image ];

//             var points = panorama_data.points;
//             if (!points) {
//                 panorama_data.points = [];
//             } else if (typeof points === "string") {
//                 points = panorama_data.points = JSON.parse(points);
//                 for (var i = 0; i < points.length; i++) {
//                     var p = points[i];
//                     var a = p.data.split(";");
//                     p.x = parseFloat(a[0]);
//                     p.y = parseFloat(a[1]);
//                     p.z = parseFloat(a[2]);
//                     p.name = p.brief_name;
//                     p.link = p.brief_id == brief_id ? "#/modal/brief/" + brief_id : linkFactory(p);
//                 }
//                 // console.log("!!!", panorama_data.points );
//             } else {

//             }

//             function linkFactory(p) {
//                 return function () {
//                     return api({brief_id: p.brief_id});
//                 }
//             }

//             $preloader.finish().fadeIn(100);
//             $tooltip360.finish().fadeOut(100);

//             panoramaViewer.createPanorama(panorama_data, function () {
//                 $preloader.finish().fadeOut(100);
//                 if (!tooltip360_iscompleted) $tooltip360.finish().fadeIn(100);
//             });

//             VR = panoramaViewer.VR;

//             // console.log( "$tooltip360: ", $tooltip360 );
//         }


//         //$("#btn-to-vr", $element)
//         $(".to-vr").click(function () {
//             // console.log("to VR click");
//             enableVR(true);
//         });

//         function enableVR(_on) {

//             VR.enableVR(_on);
//             panoramaViewer.fullscreenToggle(_on);
//             $tooltip360.finish().hide();

//         }

//         // -----------------------------------------------
//         // 360 TOOLTIP
//         var $tooltip360 = $(".tooltip-360", $element);
//         $tooltip360.hide();//.fadeIn();

//         var tooltip360_iscompleted = false;
//         var $win = $(window);

//         Util.addEvent("down", $win, _onMouseMove);

//         function _onMouseMove() {
//             // console.log("_onMouseMove");
//             Util.addEvent("up", $win, _onMouseUp);

//             Util.addEvent("move", $win, function () {
//                 $tooltip360.finish().fadeOut();
//                 Util.removeEvent("down", $win, _onMouseMove);
//                 _onMouseUp();
//                 tooltip360_iscompleted = true;
//             });
//         }

//         function _onMouseUp() {
//             // console.log("_onMouseUp");
//             Util.removeEvent("up", $win, _onMouseUp);
//             Util.removeEvent("move", $win);
//         }

//         // -----------------------------------------------

//     }


// })(kaspersky = kaspersky || {}, jQuery, window.location, document, Handlebars);

// var kaspersky;

// (function ($, TweenLite, kaspersky) {

//     $.fn.loginModal = function (login, register, restore, changePassword) {
//         this.each(function () {
//             var $t = $(this);
//             var ref = $t.data("loginModal");
//             if (!ref) {
//                 $t.data("loginModal", ref = new LoginModal($t));
//             }

//             ref.init(login, register, restore, changePassword);
//         })
//     };

//     function LoginModal($element) {
//         var user = {};
//         $element
//             .on("modal-item:change", onChange)
//             .on("modal-item:show", show)
//             .on("modal-item:hide", hide);


//         (function (form) {
//             var submittingInProgress = false;
//             form.on("form:submit", onSubmit);
//             form.filter(":not(.form_validate)").on("submit", onSubmit);
//             $(".login__social-button", form).click(onSocial);


//             function onSocial(e) {
//                 e.preventDefault();
//                 if (!submittingInProgress) {
//                     auth(e, user.login.social($(this).data("soc-type")))
//                 }
//             }

//             function onSubmit(e) {
//                 e.preventDefault();
//                 var action = $(this).attr("action") || "login";
//                 if (!submittingInProgress) {
//                     auth(e, user[action]($(this).serialize()));
//                 }
//             }

//             function auth(e, promise) {
//                 e.preventDefault();
//                 submittingInProgress = true;
//                 promise
//                     .done(onLogin)
//                     .fail(onError)
//                     .always(afterLogin);
//             }

//             function onError(str) {
//                 kaspersky.alert("", str, "history-back");
//             }

//             function onLogin() {
//                 //console.log("AUTH SUCCESS");
//                 $element.trigger("modal:hide");
//             }

//             function afterLogin() {
//                 setTimeout(function () {
//                     submittingInProgress = false;
//                 }, 400);
//             }
//         })($element.find(".login__form"));


//         this.init = function (login, register, restore, changePassword) {
//             user.login = login || user.login;
//             user.register = register || user.register;
//             user.restore = restore || user.restore;
//             user["change-password"] = changePassword || user["change-password"];
//         };

//         function onChange(event) {
//             console.debug("on change", arguments[3]);
//             $element.removeClass("login_login login_sign-up login_restore login_change-password")
//                 .addClass("login_" + (arguments[3] || 'login').replace(/_/g, '-'));
//             /*switch (arguments[3]) {
//                 case "restore":
//                     $element.find(".login__login").hide();
//                     $element.find(".login__sign-up").hide();
//                     break;
//                 case "sign_up":
//                     $element.find(".login__login").hide();
//                     $element.find(".login__sign-up").show();
//                     break;
//                 default:
//                     $element.find(".login__login").show();
//                     $element.find(".login__sign-up").hide();
//                     break;
//             }*/
//         }

//         function show() {
//             $element.find(".login__content").blink();
//         }

//         function hide() {

//         }
//     }

// })(jQuery, TweenLite, kaspersky = kaspersky || {});
// var kaspersky;

// (function (kaspersky, peppers, window, document, $, createjs, TweenLite, location) {
//     var sqrt3 = Math.sqrt(3);
//     var CANVASES_COUNT = 5;
//     var TRANSPARENT_THRESHOLD = .5;
//     var mapHex;


//     /**
//      * @param {Function} api
//      */
//     $.fn.hexagonalMap = function (api) {
//         var promise;

//         this.each(function () {
//             if (!mapHex) {
//                 mapHex = $.when(
//                     getMapHexagon({alpha: 0.4})/*,
//                          getMapHexagon({alpha: 1})*/
//                 );
//             }
//             var self = $(this);
//             /**
//              * @type {kaspersky.HexagonalMap}
//              */
//             var map = self.data('hexagonal-map');
//             if (!map) {
//                 self.data('hexagonal-map', map = new kaspersky.HexagonalMap(
//                     self,
//                     self.find(".hexagonal-map__canvas-map").get(0),
//                     self.find(".hexagonal-map__canvas-shadow").get(0),
//                     {
//                         size: 8,
//                         offset: 0,
//                         border: 0
//                     }
//                 ));
//             }


//             var url = kaspersky.parseURL(true);
//             //map.init( promise = promise || api(location.search.replace(/^\?/, ""), locationFilter) );
//             map.init(promise = promise || api({location_id: url.location_id}, locationFilter));
//         });
//     };

//     function locationFilter(data) {
//         for (var p in data) {
//             if (data.hasOwnProperty(p) && /^\d+$/.test(p)) {
//                 data[p].briefs
//                     .sort(function (i1/**@type {{votes:number}}*/, i2/**@type {{votes:number}}*/) {
//                         return i2.votes - i1.votes;
//                     })
//                     .forEach(function (itm) {
//                         itm.link = kaspersky.brief_page_link(itm);
//                         itm.names = [
//                             {"list": kaspersky.trimText(itm.name, 18, 3), "type": "desktop"},
//                             {"list": kaspersky.trimText(itm.name, 10, 5), "type": "mobile"}
//                         ];
//                     });
//             }
//         }
//         return data;
//     }


//     /**
//      * @param {jQuery} element
//      * @param {{x:number, y:number}} position
//      * @param {number} canvasWidth
//      * @constructor
//      */
//     function HexagonalMapPoint(element, position, canvasWidth) {
//         var self = this;
//         var _className = "hexagonal-map__";
//         var _visible, _timeout, nextVisible;
//         this.jQueryElement = element;
//         this.initVisible = initVisible;


//         this["DOMElement_constructor"](element.get(0));
//         this.x = position.x;
//         this.y = position.y;

//         if (position.x > canvasWidth * .5) {
//             element.find(".concept-name").addClass("concept-name" + "_right")
//         }


//         element.on("click", function (e) {
//             //if (!$(this).is(".hexagonal-map__point_visible")){
//             if (!_visible) {
//                 e.preventDefault();
//                 return false;
//             } else {
//             }

//         });

//         element.on("mouseenter  mouseleave", onMouse);


//         this.mapPoint = element.find(".hexagonal-map__point").css({
//             transform: "scale(0)"
//         });


//         function onMouse(event) {
//             initVisible(event.type == "mouseenter", true);
//         }

//         function initVisible(visible, mouse) {

//             var _event = new createjs.Event("visible:toggle");
//             _event.data = {visible: visible, mouse: !!mouse};
//             self.dispatchEvent(_event);


//             if (nextVisible === visible) return;
//             nextVisible = visible;
//             var $t = element;

//             toggle($t, !1, _className + "point", visible);
//             toggle($t, !0, _className + "concept-info", visible);
//             toggle($t, !0, "concept-name__line", visible);

//             clearTimeout(_timeout);
//             _timeout = setTimeout(function () {
//                 _visible = visible;
//             }, visible ? 300 : 0);

//             function toggle($el, find, _class, visible) {
//                 (find ? $el.find("." + _class) : $el).toggleClass(_class + "_visible", visible);
//             }


//         }
//     }

//     var prototype = createjs.extend(HexagonalMapPoint, createjs.DOMElement);
//     prototype.show = function (delay) {
//         TweenLite.to(this.mapPoint.get(0), .4, {
//             transform: "scale(1)",
//             delay: delay || 0,
//             ease: Back.easeOut
//         });
//     };
//     prototype.hide = function (delay) {
//         var self = this;
//         this.jQueryElement.off();
//         TweenLite.to(this.mapPoint.get(0), .4, {
//             transform: "scale(0)",
//             delay: delay || 0,
//             ease: Sine.easeIn,
//             onComplete: function () {
//                 self.jQueryElement.remove();
//                 delete self.mapPoint;
//                 delete self.jQueryElement;
//             }
//         });
//     };
//     prototype.scale = function (val) {
//         this.scaleX = this.scaleY = val;
//         var o = this.htmlElement;
//         if (!o) {
//             return;
//         }


//         this._handleDrawEnd();

//     };
//     prototype._handleDrawEnd = function () {
//         this["DOMElement__handleDrawEnd"]();
//         var o = this.htmlElement;
//         if (!o) {
//             return;
//         }
//         var style = o.style;

//         style.transform = style.transform.replace(/px/g, "");
//     };
//     createjs.promote(HexagonalMapPoint, "DOMElement");


//     /**
//      * По заданному рисунку возвращает гексогональную карту
//      * @param element {jQuery} - родительский элемент
//      * @param _mapCanvas {HTMLCanvasElement} - главный canvas
//      * @param _shadowCanvas {HTMLCanvasElement} - canvas для отрисовки тени
//      * @param params {{size: number, offset:number, border:number}} - параметры
//      * params.size {number} - ширина шестиугольника
//      * params.offset {number} - рассточние между ячейками
//      * params.border {number} - размер stroke
//      * @constructor
//      */
//     kaspersky.HexagonalMap = function (element, _mapCanvas, _shadowCanvas, params) {
//         var _DEF = kaspersky.ready.addWait();
//         var city, currentYear, autoShow;

//         // var cityName = element.siblings(".city-name");
//         var cityName = element.closest(".kaspersky-app").find(".city-name");
//         var template = Handlebars.compile(element.find('[type="text/x-handlebars-template"]').html());
//         var _mapStage = new createjs.Stage(_mapCanvas);
//         var _shadowStage = new createjs.Stage(_shadowCanvas);
//         var canvases = new Canvases(CANVASES_COUNT);
//         var blurred = initBlurred(_mapCanvas, _shadowStage);

//         /**
//          * @type {HexagonalMapPoint[]}
//          */
//         var briefPoints = [];

//         var pointsCont = element.find(".hexagonal-map__points-cont");
//         var containerParams = {};

//         $(document.documentElement).on("resize:after", function () {
//             containerParams.scale = parseFloat($(this).css("fontSize")) / 18;
//             resize();
//         });

//         function resize() {
//             element.find(".hexagonal-map__container").css({
//                 transform: "scale(" + containerParams.scale + ")",
//                 width: containerParams.width * containerParams.scale,
//                 height: containerParams.height * containerParams.scale
//             });

//             var _scale = 1 / containerParams.scale;
//             for (var i = 0; i < briefPoints.length; i++) {
//                 briefPoints[i].scale(_scale)
//             }
//         }


//         $(document).on("timeline:change", onTimelineChange);

//         /**
//          * @param api {*}
//          */
//         this.init = function (api) {
//             api.done(onGetInfo);
//         };


//         function onTimelineChange(e, year) {
//             currentYear = year;
//             showMap();
//         }


//         /**
//          * @param _city {{url:string, briefs:{votes:number, image:*, name:string}[]}} - информация о городе
//          */
//         function onGetInfo(_city) {
//             console.debug(_city);
//             cityName.find(".city-name__city").html(_city.location && _city.location.city || 'CITY');
//             cityName.find(".city-name__country").html(_city.location && _city.location.country || 'COUNTRY');
//             city = _city;//[0];
//             showMap();
//         }


//         function hideMap() {
//             var def = $.Deferred();

//             while (briefPoints.length) {
//                 var point = briefPoints.pop();
//                 _mapStage.removeChild(point);

//                 point.hide();
//             }

//             if (autoShow) {
//                 autoShow.destroy();
//                 autoShow = undefined;
//             }

//             if (_mapStage.children.length > 0) {
//                 animate([def.promise()]);
//                 for (var i = 0; i < _mapStage.children.length; i++) {
//                     hide(_mapStage.children[i], i);
//                 }
//             } else {
//                 def.resolve();
//             }

//             return def.promise();


//             function hide(target, index) {
//                 TweenLite.to(target, 0.25, {
//                     alpha: 0.0,
//                     delay: 0.2 + index * 0.100,
//                     /*ease:   RoughEase.ease.config({
//                         template: Power0.easeNone,
//                         strength: 1.5,
//                         points  : 3,
//                         taper   : "none",
//                         randomize: true,
//                         clamp: false
//                     }),*/
//                     ease: Sine.easeOut,
//                     onComplete: function () {
//                         _mapStage.removeChild(target);
//                         if (_mapStage.children.length === 0) {
//                             def.resolve();
//                         }
//                     }
//                 });
//             }
//         }

//         function showMap() {
//             if (city && currentYear) {
//                 $.when(
//                     mapHex,
//                     peppers.load(city[currentYear].url),
//                     hideMap()
//                 )
//                     .done(onImageLoaded)
//                     .fail(function (err) {
//                         console.log(err)
//                     });
//             }
//         }

//         function onImageLoaded(mapHex, cityImage) {
//             var hexImage = mapHex;//[0];//, conceptImage = mapHex[1];

//             var imgData = peppers.getImageData(cityImage, {width: 525/*, height: 687*/});

//             var map = initMap(imgData, hexImage.info);
//             cityImage.remove();

//             var briefs = initBriefPoints(map.points, map.centerPointIndex, city[currentYear].briefs.length);


//             var rect = getBounds(map.points);
//             rect.width += hexImage.info.imgWidth;
//             rect.height += hexImage.info.imgHeight;
//             canvases.clear();
//             canvases.size(rect.width, rect.height);


//             for (var i = 0; i < map.points.length; i++) {
//                 var img = hexImage;
//                 draw(canvases.random(), img.info, img.image, map.points[i]);
//             }

//             function draw(canvas, hex, hexUI, point) {
//                 canvas.context.drawImage(hexUI, params.border + hex.dx + point.x, params.border + hex.dy + point.y, hex.imgWidth, hex.imgHeight);
//             }


//             if (_DEF) {
//                 $(document).one("fade:complete", onReady);

//                 _DEF.resolve();
//                 _DEF = undefined;
//             } else {
//                 onReady();
//             }

//             function onReady() {
//                 drawMap(rect);
//                 var list = city[currentYear].briefs;
//                 for (var i = 0; i < list.length; i++) {
//                     var info = list[i];
//                     var element = $(template(info));
//                     var mapPoint = element.find(".map-point");
//                     var isNoImage = false;
//                     if (info.image && info.image.url) {
//                         var url = typeof info.image.url == 'string' ? info.image.url : info.image.url.first;
//                         console.log(url);
//                         if (!url || /no (image|preview)/i.test(url)) {
//                             isNoImage = true;
//                         }
//                     } else {
//                         isNoImage = true;
//                     }

//                     mapPoint.toggleClass("map-point_" + info.type, !!info.type)
//                         .toggleClass("map-point_no-image", isNoImage)
//                         .toggleClass("map-point_no-works", !(info.works_count > 0))
//                     ;

//                     element.find(".hexagonal-map__concept-info").toggleClass("hexagonal-map__concept-info_no-image", isNoImage);

//                     pointsCont.append(element);


//                     //var domElement = new createjs.DOMElement( element.get(0) );
//                     var domElement = new HexagonalMapPoint(element, map.points[briefs[i]], _mapCanvas.width);
//                     _mapStage.addChild(domElement);
//                     briefPoints.push(domElement);

//                     domElement.addEventListener("visible:toggle", function (event) {
//                         if (event.data.mouse)
//                             autoShow.toggle(!event.data.visible);
//                     });
//                     /*if ( i == 0 ) {
//                         domElement.show();
//                         domElement.initVisible(true);
//                     }*/
//                 }

//                 if (autoShow) autoShow.destroy();

//                 autoShow = new InitAutoShow(briefPoints).start();
//                 resize();
//             }

//         }


//         /**
//          *
//          * @param {HexagonalMapPoint[]} points
//          */
//         function InitAutoShow(points) {
//             var STARTED = 1, STOPPED = 2, DESTROYED = 3;
//             var state;
//             var self = this;
//             var interval, list;
//             /**
//              * @type {HexagonalMapPoint}
//              */
//             var currentItem;

//             function change() {
//                 if (!list || list.length == 0) list = shuffle(points);

//                 if (currentItem) {
//                     currentItem.initVisible(false);
//                 }

//                 currentItem = list.pop();
//                 if (currentItem) {
//                     currentItem.initVisible(true);
//                 }
//             }


//             function shuffle(src) {
//                 var dst = [].concat(src);
//                 for (var i = dst.length; i > 0; i--) {
//                     var j = Math.random() * i;
//                     dst.push(dst.splice(~~j, 1)[0]);
//                 }
//                 return dst;
//             }


//             this.destroy = function () {
//                 this.stop();
//                 state = DESTROYED;
//             };

//             this.toggle = function (val) {
//                 val ? this.start() : this.stop();
//             };

//             this.start = function () {
//                 if (state == STARTED || state == DESTROYED) return;
//                 interval = setInterval(change, 5000);
//                 change();
//                 return self;
//             };

//             this.stop = function () {
//                 if (state == STOPPED || state == DESTROYED) return;
//                 if (currentItem) currentItem.initVisible(false);
//                 currentItem = undefined;

//                 clearInterval(interval);
//                 return self;
//             };

//         }

//         /**
//          * Получение по изображению списка точек, в которых надо отрисовывать шестиугольники (непрозрачные пиксели)
//          * @param image {{width: number, height: number, data: CanvasPixelArray}}
//          * @param hex {*}
//          * @returns {{points: peppers.Point[], centerPointIndex: number}}
//          */
//         function initMap(image, hex) {
//             var imgData = image.data,
//                 w = image.width,
//                 h = image.height;

//             var drawDx = -hex.dx,
//                 drawDy = -hex.dy;

//             var dx = Math.ceil(1.5 * hex.width + params.offset),
//                 dy = Math.ceil(hex.height / 2 + params.offset);

//             var list = [];
//             var center = new peppers.Point(w * .5, h * .5);

//             var centerPointIndex, minDistance = 999999;


//             for (var i = 0, y = drawDy; y < h; y += dy, i++) {
//                 for (var j = 0, x = drawDx + (i & 1) * dx * .5; x < w; x += dx, j++) {
//                     if (getPixel(imgData, x, y, w)[3] >= TRANSPARENT_THRESHOLD) {
//                         var pnt = new peppers.Point(x, y);
//                         pnt.index = {h: j, v: i};

//                         var curDistance = pnt.distance(center);
//                         if (curDistance < minDistance || !centerPointIndex) {
//                             minDistance = curDistance;
//                             centerPointIndex = list.length;

//                         }

//                         list.push(pnt);

//                     }
//                 }
//             }
//             console.debug(i, j);

//             return {
//                 points: list,
//                 centerPointIndex: centerPointIndex
//             };
//         }

//         /**
//          * Получение точек, в которых будут концепты
//          * @param points {peppers.Point[]}
//          * @param centerIndex {number}
//          * @param cnt {number} - массив концептов
//          * @returns {Array.<T>}
//          */
//         function initBriefPoints(points, centerIndex, cnt) {
//             var list = [].concat(points);

//             var briefs = [centerIndex];
//             var distances = [0];

//             var newPoint = list.splice(centerIndex, 1).pop();
//             var neighbors = [].concat(spliceNeighbors(newPoint, list));


//             while (list.length > 0 && briefs.length < cnt) {

//                 var index = Math.floor(Math.random() * list.length);
//                 newPoint = list.splice(index, 1).pop();
//                 if (list != neighbors) {
//                     neighbors.push.apply(neighbors, spliceNeighbors(newPoint, list));
//                 }


//                 var distance = newPoint.distance(briefs[0]);

//                 i = 1;
//                 while (i < distances.length && distance > distances[i]) {
//                     i++;
//                 }

//                 distances.splice(i, 0, distance);
//                 //briefs.splice ( i, 0, index);
//                 briefs.splice(i, 0, points.indexOf(newPoint));

//                 if (list.length === 0) {
//                     console.debug("use neighbors");
//                     list = neighbors;
//                 }
//             }

//             return briefs;


//             function spliceNeighbors(pnt, pointsList) {
//                 var neighbors = [];
//                 for (var i = pointsList.length - 1; i >= 0; i--) {
//                     if (isNeighbor(pnt, pointsList[i])) {
//                         neighbors.push(pointsList.splice(i, 1)[0]);
//                     }
//                 }

//                 return neighbors;

//             }
//         }

//         function isNeighbor(pnt1, pnt2) {
//             var dv = Math.abs(pnt1.index.v - pnt2.index.v),
//                 dh = Math.abs(pnt1.index.h - pnt2.index.h);

//             return dh == 0 && (dv < 4 && dv % 2 === 0)
//                 || (dv < 4 && dv % 2 === 1) && (dh == 0 || pnt1.index.h + ((pnt1.index.v % 2) * 2 - 1) == pnt2.index.h)
//                 || (dv == 0 && dh < 2);
//             //return dh <= 1 && (dv <= 4 - dh * 2 && dv % 2 === 0) || dh == 1 && pnt2;
//         }

//         /**
//          * Отрисовка карты
//          */
//         function drawMap(rect) {
//             var bm;

//             _shadowCanvas.width = _mapCanvas.width = rect.width;
//             _shadowCanvas.height = _mapCanvas.height = rect.height;

//             containerParams.width = parseFloat(_mapCanvas.width);
//             containerParams.height = parseFloat(_mapCanvas.height);
//             /*element.find(".hexagonal-map__container").css({
//                 width: parseFloat(_mapCanvas.width) / 18 + "rem",
//                 height: parseFloat(_mapCanvas.height) / 18 + "rem"
//             });*/


//             var promises = [];
//             for (var i = 0; i < canvases.canvases.length; i++) {
//                 bm = new createjs.Bitmap(canvases.canvases[i]);
//                 bm.alpha = 0;
//                 _mapStage.addChild(bm);

//                 //var tween = createjs.Tween.get(bm).wait(200 + 100 * i).to({alpha:0.4, ease: createjs.Ease.sineOut}, 150);
//                 var def = $.Deferred();
//                 TweenLite.to(bm, 0.5, {
//                     alpha: 1.0,
//                     delay: 0.2 + i * 0.100,
//                     /*ease:   RoughEase.ease.config({
//                         template: Power0.easeNone,
//                         strength: 1.5,
//                         points  : 3,
//                         taper   : "none",
//                         randomize: true,
//                         clamp: false
//                     }),*/
//                     ease: Sine.easeOut,
//                     onComplete: def.resolve
//                 });
//                 //def.resolve();
//                 promises.push(def.promise());

//             }
//             //_mapStage.alpha = 0;
//             //createjs.Tween.get(_mapStage).to({alpha: 1}, 400);

//             animate(promises).then(function () {
//                 var delay = Math.max(0.08, Math.min(0.2, 1 / briefPoints.length));
//                 for (var i = 0; i < briefPoints.length; i++) {
//                     briefPoints[i].show(0.2 + i * delay);
//                 }
//             });
//         }


//         function initBlurred(src, parent) {
//             var blurred = new createjs.Bitmap(src);
//             parent.addChild(blurred);

//             blurred.alpha = .2;
//             blurred.filters = [new createjs.ColorFilter(1, 1, 1, 1 / .4), new createjs.BlurFilter(6, 6, 2)];

//             return blurred;
//         }


//         function animate(promises) {
//             var isLastTick;
//             var def = $.Deferred();
//             createjs.Ticker.addEventListener("tick", onTick);

//             $.when.apply(null, promises).then(stopTick);
//             onTick();

//             return def.promise();

//             function stopTick() {
//                 isLastTick = true;
//             }

//             function onTick() {
//                 //console.debug("tick", now(), isLastTick);
//                 _mapStage.update();
//                 blurred.cache(0, 0, _mapCanvas.width, _mapCanvas.height);
//                 _shadowStage.update();
//                 if (isLastTick) {
//                     createjs.Ticker.removeEventListener("tick", onTick);
//                     def.resolve();
//                 }
//             }
//         }
//     };


//     function now() {
//         return new Date().getTime();
//     }


//     /**
//      * @param {object} options
//      * @param {number} [options.alpha]=1
//      * @param {string} [options.color]=#31B987
//      *
//      * @returns {*}
//      */
//     function getMapHexagon(options) {
//         var s = 4, _2s = s * 2, w = _2s + 1, h = _2s + 1;
//         var params = {
//             alpha: 1,
//             color: "#31B987",
//             points: "2.5,8.5 0.5,4.5 2.5,0.5 6.5,0.5 8.5,4.5 6.5,8.5"
//         };
//         params = $.extend(params, options);

//         var imgURL = '<svg x="0px" y="0px" width="9" height="9"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
//             '<polygon vector-effect="non-scaling-stroke" style="opacity:{{alpha}};fill:{{color}};" points="{{points}}"/>' +
//             '<polygon vector-effect="non-scaling-stroke" style="fill:none;stroke:{{color}};stroke-miterlimit:10;" points="{{points}}"/>' +
//             '</svg>';
//         imgURL = imgURL.replace(/\{{2}([_\w\d]+)\}{2}/g, function (_0, _1) {
//             return params[_1];
//         });

//         var def = $.Deferred();
//         _load('data:image/svg+xml;utf8,' + encodeURIComponent(imgURL));

//         function _load(url) {
//             peppers.load(url)
//                 .done(function (img) {
//                     def.resolve({
//                         image: img.get(0),
//                         info: {
//                             imgWidth: w,
//                             imgHeight: h,
//                             width: _2s,
//                             height: _2s,
//                             dx: -s,
//                             dy: -s
//                         }
//                     });

//                     img.remove();
//                 })
//                 .fail(function () {
//                     var img = "images/hex.svg";
//                     if (url != img) {
//                         _load(img);
//                     }
//                 });
//         }

//         return def.promise();
//     }


//     /**
//      * Список canvas
//      * @param cnt - количество
//      * @constructor
//      */
//     function Canvases(cnt) {
//         /**
//          * @type {Array.<HTMLCanvasElement>}
//          */
//         this.canvases = [];

//         for (var i = 0; i < cnt; i++) {
//             var canvas = document.createElement("canvas");
//             canvas.context = canvas.getContext("2d");
//             //$("body").prepend(canvas);
//             this.canvases.push(canvas);
//         }
//     }

//     /**
//      * Изменяет размер всех canvas
//      * @param width {number} - ширина
//      * @param height {number=} - высота
//      * @returns {Canvases}
//      */
//     Canvases.prototype.size = function (width, height) {
//         if (arguments.length == 1) height = width;

//         for (var i = 0; i < this.canvases.length; i++) {
//             this.canvases[i].width = width;
//             this.canvases[i].height = height;
//         }

//         return this;
//     };

//     /**
//      * Возвращает случайный canvas
//      * @returns {HTMLCanvasElement}
//      */
//     Canvases.prototype.random = function () {
//         var index = Math.random() * this.canvases.length;
//         return this.canvases[Math.floor(index)];
//     };

//     /**
//      * Склевание всех canvas в один
//      * @param dst {number|HTMLCanvasElement} - индекс canvas в который сливаем остальные
//      * @returns {HTMLCanvasElement}
//      */
//     Canvases.prototype.join = function (dst) {
//         var list = this.canvases, ctx;

//         if (typeof dst == "number") {
//             ctx = list[dst].context;
//         } else {
//             ctx = dst.getContext("2d")
//         }
//         for (var i = 0; i < list.length; i++) {
//             if (i == dst) continue;
//             ctx.drawImage(list[i], 0, 0, list[i].width, list[i].height);
//         }

//         return list[dst];
//     };

//     Canvases.prototype.clear = function () {
//         for (var i = 0; i < this.canvases.length; i++) {
//             this.canvases[i].context.clearRect(0, 0, this.canvases[i].width, this.canvases[i].height);
//         }
//     };

//     function getPixel(data, x, y, w) {
//         var _f = (Math.floor(y) * w + Math.floor(x)) * 4;
//         return data.slice(_f, _f + 4);
//     }


//     /**
//      * @param points {Array.<peppers.Point>}
//      * @returns {{x: (number|*), y: (number|*), width: number, height: number, left: (number|*), top: (number|*), bottom: (number|*), right: (number|*)}}
//      */
//     function getBounds(points) {
//         var tl = points[0].clone();
//         var br = points[0].clone();

//         for (var i = 0; i < points.length; i++) {
//             tl.x = Math.min(tl.x, points[i].x);
//             tl.y = Math.min(tl.y, points[i].y);

//             br.x = Math.max(br.x, points[i].x);
//             br.y = Math.max(br.y, points[i].y);
//         }

//         return {
//             x: tl.x,
//             y: tl.y,
//             width: br.x - tl.x,
//             height: br.y - tl.y,
//             left: tl.x,
//             top: tl.y,
//             bottom: br.y,
//             right: br.x

//         }
//     }

// })(kaspersky = kaspersky || {}, peppers = peppers || {}, window, document, jQuery, createjs, TweenLite, window.location);

// var kaspersky, peppers;

// (function ($, peppers, kaspersky) {
//     $.fn.addPrediction = function (api) {
//         this.each(function () {
//             var $t = $(this);
//             var def = $t.data("add-prediction");
//             if (!def) $t.data("add-prediction", def = new AddPrediction($t));

//             def.init(api)
//         })
//     };


//     function AddPrediction($element) {
//         var api;

//         var form = $element.find("form").on('form:submit', onSubmit);
//         $element
//             .on("modal-item:show", show)
//             .on("modal-item:hide", hide);

//         function onSubmit(e) {
//             e.preventDefault();
//             api(form.serialize())
//                 .done(function () {
//                     peppers.modal();
//                     kaspersky.alert($.fn.localization.getText("add_prediction.success") || "ADD SUCCESS");
//                     //alert("Add success");
//                 })
//                 .fail(function (error) {
//                     //peppers.modal();
//                     kaspersky.alert(error);
//                 })
//         }


//         this.init = function (_api) {
//             api = _api || api;
//         };


//         function show() {
//             $element.find(".form").blink();
//         }

//         function hide() {

//         }
//     }
// }(jQuery, peppers = peppers || {}, kaspersky = kaspersky || {}));

// var peppers, kaspersky;

// (function ($, peppers, kaspersky) {
//     $.fn.termsAccepted = function (api) {
//         this.each(function () {
//             var $t = $(this);
//             var def = $t.data("terms-accepted");
//             if (!def) $t.data("terms-accepted", def = new AcceptTerms($t));

//             def.init(api)
//         })
//     };


//     function AcceptTerms($element) {
//         var api;

//         var form = $element.find("form").on('form:submit', onSubmit);
//         $element
//             .on("modal-item:show", show)
//             .on("modal-item:hide", hide);

//         function onSubmit(e) {
//             e.preventDefault();
//             api(form.serialize())
//                 .done(function () {
//                     kaspersky.user.accept_terms();
//                     peppers.modal();
//                     // kaspersky.alert($.fn.localization.getText("add_prediction.success") || "ADD SUCCESS" );
//                     //alert("Add success");
//                 })
//                 .fail(function (error) {
//                     //peppers.modal();
//                     kaspersky.alert(error);
//                 })
//         }


//         this.init = function (_api) {
//             api = _api || api;
//         };


//         function show() {
//             $element.find(".form").blink();
//         }

//         function hide() {

//         }
//     }
// }(jQuery, peppers = peppers || {}, kaspersky = kaspersky || {}));

var peppers, kaspersky;

(function ($, window, peppers, kaspersky) {

    $.fn.alert = peppers.jQueryConstructor("alert", Alert);

    function Alert($element) {
        var _hash;
        var self = this;
        var _head, _body;
        var $head = $element.find(".modal-message__title");
        var $body = $element.find(".modal-message__body");
        /*$element.closest(".modal").on("modal:close", function (e) {
            if (_hash) {
                e.preventDefault();
                peppers.hash.setHash(_hash.join("/"), true);
                _hash = undefined;
            }
        });*/

        $(window).on("hashchange", checkHash);

        $element.find(".button_no-lines").on("click", onModalClose);

        function onModalClose(e) {
            e.preventDefault();
            $element.trigger("modal:hide");
        }

        kaspersky.alert = function (head, body, onClose) {
            //_hash = peppers.hash.getHash();
            if (head == 'already voted: agree') {
                head = $.fn.localization.getText("voted.agree") || 'already voted: agree'; //voted_agree
            } else if (head == 'already voted: disagree') {
                head = $.fn.localization.getText("voted.disagree") || 'already voted: disagree'; //voted_disagree
            }
            self.init(head, body);
            // peppers.modal("alert", onClose || location.hash);//location.hash);
            peppers.modal("alert", onClose || location.hash);//location.hash);
        };

        function checkHash() {
            if (!(_head || _body) && peppers.hash.getHash()[1] === "alert") {
                peppers.modal();
            }
        }

        this.init = function (head, body) {
            $head.html(_head = head || '');
            $body.html(_body = body || '');

            checkHash();
        }
    }

}(jQuery, window, peppers = peppers || {}, kaspersky = kaspersky || {}));
// var peppers, kaspersky;

// (function ($, window) {
//     var initialized, api;
//     $.fn.authorization = function (_api) {
//         api = _api || api;
//         if (!initialized && this.length > 0) {
//             initialized = true;
//             $(window).on("login:change", onLoginChange);
//             onLoginChange();

//             //$(".authorization .user-data").on("user-data:change", onUserDataChange);
//         }

//         return this;
//     };

//     function onLoginChange() {
//         var data = api();
//         $(".authorization").toggleClass("authorization_authorized", !!data);
//         $(".predictions__likes").toggleClass("visible", !!data);
//         $(".predictions__rank").toggleClass("visible", !!data);
//         //$(".authorization .user-data").userData(data.;
//     }

//     //function onUserDataChange(){
//     //  console.debug("onUserDataChange");
//     //}

// })(jQuery, window);
/*
(function (peppers, $, document, window) {
    var $window     = $(window).resize(onResize);
    var $html       = $(document.documentElement);
    //var $viewport = $("meta[name='viewport']");
    var isLandscape;

    function onResize(){
        var w = $window.width(), h = $window.height();
        isLandscape = peppers.checkMobile.css.isLandscape();
        var rect = {};

        switch (true) {
            case isLandscape:
                rect = {w: 1135, h: 640};
                break;
            case peppers.checkMobile.css.isMobile():
                rect = {w: 640, h:1135};
                break;
            default:
                rect = {w: 1280, h:720};
                break;
        }
        $html.css("fontSize", 18 * Math.min(1, w/rect.w/!*, h/rect.h*!/));

        //w > h &&
        //var initialScale = Math.min(w,h) / 640;

        //alert(["w:",w, screen.width, "h:", h, screen.height, initialScale].join(" "));

        $html.toggleClass("landscape", isLandscape);
        //$viewport.attr("content", isLandscape ? "height=640" : "width=640");
    }


})(peppers = peppers||{}, jQuery, document, window);

var peppers;*/

// (function ($, FileAPI, location) {
//     $.fn.uploadImage = function (cmd, data) {
//         if (arguments.length === 1) {
//             data = cmd;
//             cmd = "init";
//         }
//         return this.each(function () {
//             var $t = $(this);
//             var ref = $t.data("upload-image");
//             if (!ref) $t.data("upload-image", ref = new UploadImage($t));
//             ref.init(cmd, data)
//         });
//     };

//     function getOrientation(file, callback) {
//         var reader = new FileReader();

//         reader.onload = function (event) {
//             var view = new DataView(event.target.result);

//             if (view.getUint16(0, false) != 0xFFD8) return callback(-2);

//             var length = view.byteLength,
//                 offset = 2;

//             while (offset < length) {
//                 var marker = view.getUint16(offset, false);
//                 offset += 2;

//                 if (marker == 0xFFE1) {
//                     if (view.getUint32(offset += 2, false) != 0x45786966) {
//                         return callback(-1);
//                     }
//                     var little = view.getUint16(offset += 6, false) == 0x4949;
//                     offset += view.getUint32(offset + 4, little);
//                     var tags = view.getUint16(offset, little);
//                     offset += 2;

//                     for (var i = 0; i < tags; i++)
//                         if (view.getUint16(offset + (i * 12), little) == 0x0112)
//                             return callback(view.getUint16(offset + (i * 12) + 8, little));
//                 }
//                 else if ((marker & 0xFF00) != 0xFF00) break;
//                 else offset += view.getUint16(offset, false);
//             }
//             return callback(-1);
//         };

//         reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
//     }

//     /**
//      * @param {jQuery} target
//      * @constructor
//      */
//     function UploadImage(target) {
//         var orientation = 1;
//         var exifOrientation = {
//             8: 270,
//             3: 180,
//             6: 90,
//             7: 270,
//             4: 180,
//             5: 90,
//         }

//         var size = peppers.checkMobile.css.isMobile() ? 484 : 333;
//         var _params = {
//             "preview": {
//                 width: size,
//                 height: size
//             }
//         };
//         var input = $('<input class="upload-image__input" name="photo" type="file" accept=".jpg,.jpeg,.png" />');
//         target.append(input);
//         if (FileAPI.event) {
//             FileAPI.event.on(input.get(0), "change", onSelectFile);
//         }

//         function onSelectFile(evt/**Event*/) {
//             var file = FileAPI.getFiles(evt)[0];

//             if (file) {
//                 getOrientation(file, function (o) {
//                     orientation = o;
//                     createPreview(file, orientation);
//                 });
//             }
//         }


//         function createPreview(file/**File*/, orientation) {
//             var info;
//             var userPicCropModal = $(".user-pic-crop");

//             //userPicCropModal.on("modal-item:hide", function () {
//             //  $(this).off("user-pic-crop:save", onSave);
//             //});


//             if (!userPicCropModal.is(":visible")) {
//                 peppers.modal("user-pic-crop", location.hash);
//             }
//             //location.hash = "/modal/user-pic-crop";
//             FileAPI.getInfo(file, onGetInfo);

//             function onGetInfo(err/**String*/, _info/**Object*/) {
//                 info = _info;
//                 FileAPI.Image(file)
//                     .rotate(exifOrientation[orientation])
//                     .resize(_params.preview.width, _params.preview.height, "min")
//                     .get(function (err, image) {
//                         // console.log(image);
//                         if (!err) {
//                             userPicCropModal
//                                 .off("user-pic-crop:save")
//                                 .userPicCrop(image, target.data("title"))
//                                 .on("user-pic-crop:save", onSave);
//                             input.val("");
//                         }
//                     });
//             }

//             function onSave(e, rect) {
//                 var aspect = (rect.height * info.height) / (rect.width * info.width);
//                 var x = Math.max(0, rect.x),
//                     y = Math.max(0, rect.y),
//                     w = Math.max(0, Math.min(rect.width, 1 - rect.x, rect.width + rect.x)),
//                     h = Math.max(0, Math.min(rect.height, 1 - rect.y, rect.height + rect.y));

//                 var sx = w / rect.width, sy = h / rect.height;
//                 FileAPI.Image(file)
//                     .rotate(exifOrientation[orientation])
//                     .crop(x * info.width, y * info.height, w * info.width, h * info.height)
//                     //.resize(200, 200, "min" )
//                     .get(function (err, image) {
//                         if (!err) {
//                             var canvas = document.createElement("canvas");

//                             var _w = canvas.width = Math.min(1000, Math.max(image.width, image.height / aspect)),
//                                 _h = canvas.height = _w * aspect;


//                             var ctx = canvas.getContext("2d");
//                             //ctx.fillStyle = "#ff0000";
//                             //ctx.fillRect(0,0,_w,_h);
//                             ctx.drawImage(
//                                 image,
//                                 0, 0, image.width, image.height,
//                                 _w * (rect.x < 0 ? (1 - sx) : 0),
//                                 _h * (rect.y < 0 ? (1 - sy) : 0),
//                                 _w * sx,
//                                 _h * sy
//                             );

//                             target.trigger("upload-image:crop", canvas);
//                         } else {
//                             console.warn("upload error", err);
//                         }
//                     })
//             }
//         }

//         function uploadFile(file) {
//             // Подготавливаем опции для загрузки
//             /*var opts = FileAPI.extend(uploadOpts, {
//                 files: {},

//                 // событие "начало загрузки"
//                 upload: function (){
//                     form.className += ' '+uploadOpts.activeClassName;
//                 },

//                 // событие "конец загрузки"
//                 complete: function (err, xhr){
//                     form.className = (' '+form.className+' ').replace(' '+uploadOpts.activeClassName+' ', ' ');

//                     if( err ){
//                         alert('Увы, произошла ошибка сервера.');
//                     } else {
//                         // всё успешно загрузилось
//                     }
//                 }
//             });

//             // Добавляем файл, который будем загружать
//             opts.files[opts.name] = file;

//             // Загружаем на сервер
//             FileAPI.upload(opts);*/
//         }

//         this.init = function (cmd, data) {
//             switch (cmd) {
//                 case "upload":
//                     uploadFile(data);
//                     break;
//                 case "init":
//                     if (data) {
//                         _params = $.extend(_params, data);
//                     }
//                     break;
//             }
//         };
//     }
// }(jQuery, FileAPI, window.location));

// (function ($, peppers, document) {

//     $.fn.userData = peppers.jQueryConstructor("UserData", UserData)

//     /*function (api) {

//         this.each(function () {
//             var $t = $(this);
//             var ref = $t.data("UserData");
//             if (!ref) {
//                 $t.data("UserData", ref = new UserData($t));
//             }

//             ref.init(api);
//         });


//     };*/


//     function UserData(element) {
//         var self = this;
//         self.element = element;
//         this.elements = {
//             /*user: (function(){
//                 var name = element.find(".user-data__username"),
//                     image = element.find(".user-data__userpic");
//                 //var separateNames = name.find(".user-data__firstname, .user-data__lastname").length > 0;
//                 //
//                 //var firstName = element.find(".user-data__firstname");
//                 //var lastName = element.find(".user-data__lastname");

//                 return function (data) {
//                     data = $.extend({name: {}, image: ""}, data || {});
//                     val(name, data.name);
//                     /!*
//                     var dataName = [data.name.firstname, data.name.lastname];
//                     if (!separateNames) {
//                         val(name, dataName.join(" "));
//                     }
//                     val(firstName, dataName[0]);
//                     val(lastName, dataName[1]);
//                     *!/

//                     image.closest(".user-pic").addClass("user-pic--visible");
//                     image.css("background-image", "url('" + data.image + "')");
//                 }
//             }()),*/
//             image: image(".user-data__userpic"),
//             name: string(".user-data__username"),
//             total_likes: number(".user-data__total-likes"),
//             rank: number(".user-data__total-rank"),
//             location: string(".user-data__location"),
//             email: string(".user-data__email"),
//             about: string(".user-data__about")
//         };


//         $(document).on("login:change", function () {
//             self.update();
//         });

//         function image(str) {
//             var el = element.find(str);
//             return function (value) {
//                 val(el, value, true, function () {
//                     el.closest(".user-pic").addClass("user-pic--visible");
//                 });

//             }
//         }

//         function location(str) {
//             var loc = element.find(str);
//             return function (value) {
//                 value = value || {};
//                 //val(loc, "<div>" + (value.city || "")+ "</div> <div>" + (value.country || "") + "</div>");
//                 val(loc, value.city + ", " + value.country);
//             }
//         }
//         function string(str) {
//             var el = element.find(str);
//             return function (value) {
//                 val(el, value);
//             }
//         }

//         function number(str) {
//             var el = element.find(str);
//             return function (value) {
//                 val(el, peppers.formatNumber(value || 0));
//             }
//         }
//     }


//     UserData.prototype.init = function (api) {
//         if (typeof api === "function") this.api = api;
//         else var data = api;
//         this.update(data);
//     };

//     UserData.prototype.update = function (data) {
//         /**
//          * {{
//          *  total_likes: number,
//          *  rank: number,
//          *  location: {city:string, country:string},
//          *  email: string,
//          *  about: string,
//          *  user: {name: string}
//          * }}
//          */

//         if (typeof data !== 'undefined' && typeof data.user.suadmin) {
//             window.suadmin = true;
//         } else {
//             window.suadmin = false;
//         }

//         if (!this.api && !data) return;

//         data = data || this.api();
//         for (var p in this.elements) {
//             if (this.elements.hasOwnProperty(p)) {
//                 this.elements[p](data && data.user && data.user[p] || "");
//             }
//         }
//         this.element.trigger("user-data:change");

//     };


//     /**
//      *
//      * @param {jQuery} $item
//      * @param {string=""} str
//      * @param {boolean=false} image
//      * @param {function=void} notInput
//      */
//     function val($item, str, image, notInput) {
//         str = str || '';
//         $item.each(function () {
//             var $item = $(this);
//             switch (true) {
//                 case $item.is("input"):
//                 case $item.is("textarea"):
//                     $item.val(str);
//                     break;
//                 default :
//                     $item.closest(".user-panel__stat-item").toggleClass("user-panel__stat-item_empty", !str && str !== 0);
//                     if (!image) {
//                         $item.html(str);
//                     } else {
//                         $item.css("background-image", "url('" + str + "')");
//                     }
//                     if (typeof notInput === "function") notInput();
//                     break;
//             }

//         })
//     }

// }(jQuery, peppers = peppers || {}, document));

// var peppers;
// (function (peppers, Handlebars, $, window, document) {

//     Handlebars.registerHelper("not-approved", function (options) {
//         if (this.status && this.status !== "approved" || this.inactive) {
//             return options.fn(this);
//         } else {
//             return options.inverse(this);
//         }
//     });

//     $.fn.userPanel = function (api, deleteWork, deleteBrief, user_id, data) {
//         var promise;
//         var suadmin = data ? data.user.suadmin : false;
//         this.each(function () {
//             var $t = $(this);
//             var panel = $t.data("userPanel");
//             if (!panel) {
//                 $t.data("userPanel", panel = new UserPanel(this));
//             }

//             if ((kaspersky.user.getData() === undefined) || (kaspersky.user.getData() && kaspersky.user.getData().user && kaspersky.user.getData().user.id
//                 && user_id && parseInt(user_id) !== kaspersky.user.getData().user.id)) {
//                 $t.find(".add-prediction-btn").hide();
//                 $t.find(".add-work-btn").hide();
//             }

//             $t.toggleClass("user-panel_my", suadmin ? suadmin : !user_id);
//             $t.toggleClass("user-panel_other", suadmin ? !suadmin : !!user_id);
//             $(".authorization").toggleClass("authorization_other", !!user_id);
//             panel.init(promise = promise || api({user_id: user_id || ""}, initLinks), deleteWork, deleteBrief, onDeleteWork);

//             if (user_id && suadmin) {
//                 $t.find(".user-panel__edit_profile").hide();
//             }

//             function onDeleteWork() {
//                 panel.init(promise = api({user_id: user_id || ''}, initLinks), false);
//             }
//         });
//     };

//     function initLinks(data) {
//         data.works.forEach(function (work) {
//             work.link = kaspersky.addwork_link("", work.id);
//             work.view_link = kaspersky.brief_link(work.brief && work.brief.id || work.brief_id, 1, work.id);
//             work.likes = work.likes || 0;

//         });

//         var briefs = data && data.predictions;

//         data.predictions.forEach(function (item, i) {
//             if (item.works_count <= 1) {
//                 data.predictions[i].works_count_1 = true;
//                 data.predictions[i].works_count_2 = false;
//                 data.predictions[i].works_count_3 = false;
//             }
//             if (item.works_count == 2) {
//                 data.predictions[i].works_count_1 = false;
//                 data.predictions[i].works_count_2 = true;
//                 data.predictions[i].works_count_3 = false;
//             }
//             if (item.works_count > 2) {
//                 data.predictions[i].works_count_1 = false;
//                 data.predictions[i].works_count_2 = false;
//                 data.predictions[i].works_count_3 = true;
//             }
//             if (item.works_count == 0) {
//                 var im = {
//                     first: ''
//                 };
//                 im.first = '/frontend/images/default-preview.png';
//                 data.predictions[i].image = im;
//             }
//         });

//         data.predictions = briefs;

//         return data;
//     }

//     function addScroller($element) {
//         var _masked = $element.find(".scroll__masked");
//         var scroll = _masked.data("scrollCustom");
//         if (!scroll) {
//             scroll = _masked.scrollbarCustom().data("scrollCustom");
//             $(document.documentElement).on("resize:after", scroll.refresh);
//         }

//         scroll.refresh();
//     };

//     function UserPanel(element) {
//         var $el = this.$el = $(element);
//         var self = this;
//         // var template = new Handlebars.compile($el.find('[type="text/x-handlebars-template"]').html());
//         var template = new Handlebars.compile($el.find('#my-discussions').html());
//         // var templateWorks = new Handlebars.compile($el.find('#works_script').html());
//         // var templatePredictions = new Handlebars.compile($el.find('#predictions_script').html());

//         // console.log(template);

//         // this.prediction = new List( $el.find(".discussions"), templatePredictions );
//         this.prediction = new List($el.find(".discussions"), template);
//         this.works = new List($el.find(".uploaded-works"), template);
//         // this.works = new List( $el.find(".uploaded-works"), templateWorks );

//         addScroller($el);

//         $el.find(".checkbox-nth").on('change', function () {
//             if (!peppers.checkMobile.css.isMobile()) {
//                 return;
//             }

//             var cont = $(this).parent();
//             var list = cont.find(".checkbox-nth");
//             var index = list.index(this);
//             var items = cont.find(".checkbox-nth-item");
//             var item = items.eq(index);
//             items.toggleClass('my-discussion_hide', true);
//             item.toggleClass('my-discussion_hide', false);
//         });

//         this.elements = {
//             //user: $el.find(".user-data"),
//             userEdit: $(".user-edit"),
//             totalLikes: $(".user-panel__total-likes"),
//             totalAgrees: $(".user-panel__total-agrees"),
//             totalDisagrees: $(".user-panel__total-disagrees"),
//             totalPredictions: $(".user-panel__total-predictions"),
//             totalLikesText: $(".likes_howMuch"),
//             totalPredictionsText: $(".predictions_howMuch"),
//             totalRank: $(".user-panel__total-rank"),
//             userData: $el.find(".user-panel__user-data")
//         };
//         // console.log(this.elements);


//         /*this.resize = onResize;


//         function onResize() {
//             self.discussion.resize();
//             self.works.resize();


//         }*/
//     }

//     UserPanel.prototype.init = function (promise, deleteWork, deleteBrief, onDeleteWork) {
//         var self = this;
//         promise.done(function (data) {
//             //init( data.works );
//             $(".authorization__user-info_lk").userData(data);
//             self.elements.userData.userData(data);
//             if (deleteWork !== false) {
//                 self.prediction.init(data.predictions, deleteBrief, "brief");
//                 self.works.init(data.works, deleteWork, "work", onDeleteWork);
//             }

//             self.elements.totalLikes.html(data.total_likes);
//             self.elements.totalAgrees.html(data.total_agrees + "+");
//             self.elements.totalDisagrees.html(data.total_disagrees + "-");
//             self.elements.totalPredictions.html(data.total_predictions);
//             self.elements.totalLikesText.attr("data-localization", "lk.likes_count" + Handlebars.helpers.howMuch(data.total_likes));
//             self.elements.totalPredictionsText.attr("data-localization", "lk.predictions_count" + Handlebars.helpers.howMuch(data.total_predictions));
//             self.elements.totalRank.html(data.rank);

//             $(document.documentElement).trigger("resize:after");
//             kaspersky.set_metadata({
//                 title: data.user.name,
//                 description: data.user.about,
//                 og_title: data.user.name,
//                 og_description: data.user.about,
//                 og_image: data.user.image_share,
//                 og_url: data.user.share_url,
//             });
//         });
//     };

//     function List($element, template) {
//         var self = this, bottomLine, topLine, _deleteAPI, _onDelete;
//         var _list, clipTopIndex, clipBottomIndex;
//         var paginator = $element.siblings(".paginator");
//         var placeholder = $element.find(".user-panel__placeholder");

//         var page = 1;
//         var loadMore = $element.siblings(".load-more").on("click", onLoadMore);
//         paginator.find(".paginator__button").click(onPageChange);
//         $(window).on("resize:after", onResize);

//         $element.on("click", ".close-button", onDelete);

//         this.init = function (data, deleteAPI, name, onDelete) {
//             self.name = name;
//             if (deleteAPI) {
//                 _deleteAPI = deleteAPI;
//                 _onDelete = onDelete;
//             }
//             if (_list) {
//                 _list.off()
//                     .data("bottom", undefined)
//                     .remove()
//                     .localization("destroy");
//             }

//             if (data.length > 0) {
//                 _list = $(template(data))
//                     .appendTo($element);
//                 _list.localization("en");

//                 _list = _list.find(".list__item");
//             }

//             showItems(clipTopIndex = 0);
//         };

//         function onDelete(e) {
//             var item = $(this).closest("[data-id]");

//             item.css("pointer-events", "none");
//             var params = {};
//             params[self.name + "_id"] = item.data("id");

//             _deleteAPI(params)
//                 .done(onDeleteComplete)
//                 .fail(onDeleteFail);

//             function onDeleteFail(message) {
//                 kaspersky.alert(message);
//                 item.css("pointer-events", "");
//             }

//             function onDeleteComplete() {
//                 if (typeof _onDelete == "function") _onDelete();
//                 item.animate(
//                     {opacity: 0, top: -10, height: 0, padding: 0},
//                     200,
//                     function () {
//                         item.remove();
//                         _list = _list.not(item);
//                         showItems(clipTopIndex);
//                     }
//                 );
//                 $(document.documentElement).trigger("resize:after");
//             }
//         }

//         function paginatorStateActual() {
//             if ($(_list).filter('.my-discussion_hide').length) {
//                 paginator.addClass('paginator--show');
//             } else {
//                 paginator.removeClass('paginator--show');
//             }
//         }

//         function onResize() {
//             if (!peppers.checkMobile.css.isMobile()) {
//                 topLine = $element.offset().top;
//                 bottomLine = paginator.offset().top;
//                 if (_list && _list.length > 0) {
//                     _list.data("bottom", undefined);
//                 }
//             }
//             showItems(clipTopIndex);
//         }

//         function onLoadMore() {
//             page++;
//             showItems();
//         }

//         function showItems(startIndex, before) {
//             paginator.removeClass("paginator_no-next paginator_no-prev");
//             if (_list) _list.removeClass("my-discussion_hide");
//             placeholder.toggle(!(_list && _list.length > 0));

//             if (!(_list && _list.length > 0)) {
//                 loadMore.hide();
//                 return;
//             }
//             if (startIndex >= _list.length) {
//                 startIndex = _list.length;
//                 before = true;
//             }


//             if (!peppers.checkMobile.css.isMobile()) {
//                 loadMore.hide();
//                 showItemsDesktop(startIndex, before);
//             } else {
//                 showItemsMobile();
//             }

//             paginatorStateActual();

//             $element.trigger("checkbox:change");
//         }

//         function showItemsMobile() {
//             var show = false;
//             if (_list) {
//                 var cnt = 10 * page;
//                 show = cnt < _list.length;
//                 _list.each(function (index) {
//                     $(this).toggleClass("my-discussion_hide", index >= cnt);
//                 });
//             }
//             loadMore.toggle(show);
//         }

//         function showItemsDesktop(startIndex, before) {

//             var totalHeight = 0;
//             //_list.removeClass("my-discussion_hide");
//             var visible = $("");
//             var index = clipTopIndex = startIndex, item;

//             if (before) {
//                 while (index-- > 0) {
//                     item = _list.eq(index);
//                     totalHeight += item.outerHeight();
//                     if (totalHeight < bottomLine - topLine) {
//                         clipTopIndex = index;
//                         visible = visible.add(item);
//                     }
//                 }
//             }
//             index = startIndex;
//             for (; index < _list.length; index++) {
//                 item = _list.eq(index);
//                 totalHeight += item.outerHeight();
//                 if (totalHeight < bottomLine - topLine) {
//                     clipBottomIndex = index;
//                     visible = visible.add(item);
//                 }
//             }

//             console.debug(visible);
//             visible.removeClass("my-discussion_hide");
//             _list.not(visible).addClass("my-discussion_hide");


//             paginator.toggleClass("paginator_no-next", clipBottomIndex >= _list.length - 1);
//             paginator.toggleClass("paginator_no-prev", clipTopIndex <= 0);
//         }

//         /*function getBottom($t, notLast) {
//             var _bottom;// = $t.data("bottom");

//             //if (!_bottom) {
//                 _bottom = notLast ? $t.next().offset().top : $t.offset().top + $t.outerHeight();
//                 //$t.data("bottom", _bottom);
//             //}

//             return _bottom;
//         }*/


//         function onPageChange() {
//             switch ($(this).data("direction")) {
//                 case "-1":
//                 case -1:
//                     if (clipTopIndex > 0) {
//                         clipBottomIndex = clipTopIndex - 1;
//                         showItems(clipTopIndex, true);
//                     }
//                     break;
//                 case "1":
//                 case 1:
//                     if (clipBottomIndex < _list.length - 1) {
//                         showItems(clipBottomIndex + 1);
//                     }
//                     break;
//             }
//         }
//     }

// })(peppers = peppers || {}, Handlebars, jQuery, window, document);

// var peppers;

// (function ($, location) {
//     $.fn.userEdit = function (api) {
//         this.each(function () {
//             var $t = $(this);
//             var ref = $t.data("user-edit");
//             if (!ref) $t.data("user-edit", ref = new UserEdit($t));
//             ref.init(api);
//         })
//     };

//     function UserEdit(target) {
//         var _api;
//         target.find(".upload-image").on("upload-image:crop", onImageComplete);

//         var imageInput = $('[name="userpic"]');
//         var form = target.find(".user-edit__form").on("form:submit", onSubmit);
//         form.find("input, textarea").on("change click keyup", onFormInput);

//         var $userData = target.find(".user-data");
//         var $button = target.find(".button");
//         var defaultData;


//         $userData.on("user-data:change", onUserDataChange);
//         onUserDataChange();


//         function onFormInput() {
//             $button.toggleClass("button_inactive", form.serialize() === defaultData);
//         }

//         function onUserDataChange() {
//             defaultData = form.serialize();
//             $button.addClass("button_inactive");
//         }

//         function onSubmit(event) {
//             event.preventDefault();

//             if ($(this).is(".button_inactive")) return;

//             //console.debug("serialize", );
//             _api(form.serializeArray())
//                 .done(function () {
//                     peppers.modal();
//                 })
//                 .then(function () {
//                     $(document.documentElement).trigger("resize:after");
//                 });
//         }

//         function onImageComplete(event, image) {
//             peppers.modal();

//             var url = image.toDataURL("image/jpeg");
//             imageInput.val(url);
//             target.find(".user-pic__image").css("backgroundImage", "url('" + url + "')");

//             onFormInput();

//             var form = target.find(".user-edit__form");
//             form.submit();
//         }


//         this.init = function (api) {
//             _api = api;
//         }
//     }
// }(jQuery, window.location));

// (function ($, window, peppers) {


//     $.fn.userPicCrop = peppers.jQueryConstructor("user-pic-crop", UserPicCrop);

//     /*function (target) {


//         this.each(function () {
//             var $t = $(this), ref = $t.data("user-pic-crop");
//             if (!ref) $t.data("user-pic-crop", ref = new UserPicCrop($t));
//             ref.init(target);
//         });

//         if ( target && this.length > 0 ){
//             window.location.hash = "/modal/user-pic-crop";
//         }

//         return this;
//     };*/


//     function UserPicCrop(container) {
//         var offset = -2000, action;
//         var startMoveAt = {};
//         var imageWrapper = container.find(".user-pic-crop__image");
//         var imageContainer = container.find(".hexagon__in2");
//         var $title = container.find(".user-pic-crop__title");

//         $(".user-pic-crop__dot", imageWrapper).on("touchstart  mousedown", startScale);
//         $(".user-pic-crop__save", container).on("click", saveImage);
//         imageWrapper.on("touchstart  mousedown", startMove);

//         var selectFile = container.find(".select-file").uploadImage().on("upload-image:crop", onUploadImageCrop);

//         var pos, tmpPos,
//             hex = container.find(".user-pic-crop__mask-hex").css({
//                 left: offset, right: offset,
//                 top: offset, bottom: offset,
//                 borderWidth: Math.abs(offset)
//             });

//         container.on("modal-item:hide", hide);
//         $(window).on("hashchange", checkHash);

//         function checkHash() {
//             /*if (!_target && peppers.hash.getHash()[1] === "user-pic-crop") {
//                 peppers.modal();
//             }*/
//         }

//         function onUploadImageCrop(event, canvas) {
//             $(".user-edit .upload-image").trigger(event, canvas);
//         }

//         function scale(e) {
//             var offset = hex.offset();
//             var width = hex.outerWidth();
//             var height = hex.outerHeight();

//             var $scale = getMovePosition(e, "client");

//             var centerX = offset.left + width / 2 - $scale.x;
//             var centerY = offset.top + height / 2 - $scale.y;

//             var dist = Math.sqrt(centerX * centerX + centerY * centerY);
//             imageWrapper.css("fontSize", Math.max(100, Math.min(imageWrapper.height(), dist * 2 * 370 / 426)));
//         }

//         function move(e) {
//             //hex.css(getMove(e));
//             if (_target) {
//                 _target.css(tmpPos = getMove(e));
//             }
//         }


//         function getMovePosition(e, prefix) {
//             var p = e.touches && e.touches[0] || e;
//             prefix = prefix || "page";
//             return {
//                 x: p[prefix + "X"],
//                 y: p[prefix + "Y"]
//             };
//         }

//         function getMove(e) {
//             if (e) {
//                 var d = getMovePosition(e);
//                 d.x -= startMoveAt.x;
//                 d.y -= startMoveAt.y;
//             } else {
//                 d = {x: 0, y: 0}
//             }
//             return {
//                 left: pos.left + d.x
//                 , right: pos.right - d.x
//                 , top: pos.top + d.y
//                 , bottom: pos.bottom - d.y
//             }
//         }

//         function startScale(e) {
//             action = "scale";
//             e.preventDefault();
//             imageWrapper.on("mousemove touchmove", scale);
//             $(window).on("mouseup  touchend", stopAction);
//         }

//         function stopAction(e) {
//             imageWrapper.off("mousemove touchmove", scale).off("mousemove touchmove", move);
//             $(window).off("mouseup  touchend", stopAction);

//             if (action === "move") pos = tmpPos;//getMove(e);
//         }


//         function startMove(e) {
//             if (!e.isDefaultPrevented()) {
//                 action = "move";
//                 e.preventDefault();
//                 startMoveAt = getMovePosition(e);


//                 imageWrapper.on("mousemove touchmove", move);
//                 $(window).on("mouseup  touchend", stopAction);

//             }
//         }


//         function saveImage() {
//             if (_target) {
//                 hex.css("borderWidth", 0);
//                 var rect = getRect(hex, _target);
//                 hex.css("borderWidth", Math.abs(offset));

//                 container.trigger("user-pic-crop:save", rect);
//             }

//             function getRect(target, relative) {
//                 var t = {
//                         offset: target.offset(),
//                         width: target.width(),
//                         height: target.height()
//                     },
//                     r = {
//                         offset: relative.offset(),
//                         width: relative.width(),
//                         height: relative.height()
//                     };

//                 return {
//                     x: (t.offset.left - r.offset.left) / r.width,
//                     y: (t.offset.top - r.offset.top) / r.height,
//                     width: t.width / r.width,
//                     height: t.height / r.height
//                 };


//             }
//         }


//         function hide() {
//         }

//         /*function onCrop(event, image){

//         }*/

//         var _target;
//         this.init = function (target, title) {
//             //console.debug("INIT",);

//             selectFile.data("title", title);
//             $title.toggle(!!title);

//             if (title) {
//                 $title.html($.fn.localization.getText(title || ''));
//             }

//             if (!target) {
//                 //history.replaceState()
//                 if (_target) _target.off().remove();
//                 _target = undefined;
//                 checkHash();
//                 return false;
//             } else {
//                 peppers.modal("user-pic-crop");
//             }
//             //_target = target && $(target).prependTo(imageWrapper).addClass("user-pic-crop__target");


//             container.toggleClass("user-pic-crop_edit", !!(target && target !== true || _target));
//             if (target !== true) {
//                 if (_target) _target.off().remove();
//                 _target = target && $(target).appendTo(imageContainer).addClass("user-pic-crop__target");
//                 pos = {
//                     left: offset, right: offset,
//                     top: offset, bottom: offset
//                 };
//                 move();
//                 //hex.css(pos = );
//                 imageWrapper.css("fontSize", "");
//             }


//         }
//     }


// }(jQuery, window, peppers = peppers || {}));
// var peppers;
// (function (peppers, $, Handlebars) {
//     //Events
//     var CANCEL = "vote:cancel";
//     var VOTE = "vote:vote";
//     var SELECT = "vote-item:select";

//     //Constants
//     var CLASS = "agree-vote__content";
//     var CHECKED = CLASS + "_checked";
//     var UNCHECKED = CLASS + "_unchecked";


//     $.fn.agreeVote = peppers.jQueryConstructor("agreeVote", AgreeVote);

//     function AgreeVoteItem(template, data, after) {
//         var self = this;

//         self._checked = false;

//         self.ui = $(template(data)).insertAfter(after).click(onSelect);
//         self.ui.localization("en");
//         self.countUI = self.ui.find(".agree-vote__count");

//         self.count(data.count);


//         function onSelect() {
//             self.ui.trigger(SELECT);
//         }

//         this.init = function () {

//         }
//     }

//     AgreeVoteItem.prototype.checked = function (val) {
//         if (arguments.length == 0) return this._checked;

//         this._checked = val;
//         this.ui.removeClass(CHECKED + " " + UNCHECKED);

//         switch (val) {
//             case true:
//                 this.ui.addClass(CHECKED);
//                 break;
//             case false:
//                 this.ui.addClass(UNCHECKED);
//                 break;
//             default:
//                 break;

//         }

//     };

//     AgreeVoteItem.prototype.count = function (value) {
//         if (arguments.length == 0) return this._count;

//         this.countUI.html(this._count = value);
//     };


//     function AgreeVote($t) {
//         var api, voted;
//         var self = this;
//         var script = $t.find('[type="text/x-handlebars-template"]');
//         var template = Handlebars.compile(script.html());

//         $t.on(CANCEL, function (e) {
//             self.yes.checked(undefined);
//             self.no.checked(undefined);
//         });

//         this.yes = addItem(
//             {
//                 position: "left",
//                 count: 0,
//                 agree: true
//             }
//         );

//         this.no = addItem(
//             {
//                 position: "right",
//                 count: 0,
//                 agree: false
//             },
//             this.yes.ui
//         );

//         /**
//          * @param data
//          * @param after
//          * @returns {AgreeVoteItem}
//          */
//         function addItem(data, after) {
//             var itm = new AgreeVoteItem(template, data, after || script);
//             itm.ui.on(SELECT, onSelectItem);
//             return itm;
//         }

//         function onSelectItem() {
//             $t.trigger(VOTE, self.yes.ui.is(this));
//         }
//     }

//     /**
//      * @param {{agree:number, disagree:number, voted:string}} count
//      */
//     AgreeVote.prototype.init = function (count) {
//         if (count) {
//             this.yes.count(count.agree);
//             this.no.count(count.disagree);

//             if (["agree", "disagree"].indexOf(count.voted) >= 0) {
//                 var agree = count.voted === "agree";
//                 var disagree = count.voted === "disagree";
//             }

//             this.yes.checked(agree);
//             this.no.checked(disagree);
//         }
//     }

// })(peppers = peppers || {}, jQuery, Handlebars);
// var peppers;
// (function (peppers, kaspersky, window, $) {

//     $.fn.pristine = function () {
//         this.find("input, textarea").each(function () {
//             $(this).val("");
//         });

//         this.find("input, textarea").each(function () {
//             var $t = $(this);
//             $t.val($t.attr("value") || "");
//         });
//     };
//     $.fn.addCommentForm = peppers.jQueryConstructor("addCommentForm", AddCommentForm);


//     function AddCommentForm($element) {
//         var api, briefID;
//         var button = $element.find(".add-comment-form__header");
//         var cancel = $element.find(".reply-comment__cancel");
//         var form = $element.find("form");
//         button.click(toggleForm);
//         cancel.click(hideForm);

//         form.on("submit", onSubmit);

//         var isAuthorized = (function () {
//             var _isAuthorized;
//             $(window).on("login:change", onLoginChange);
//             onLoginChange();
//             function onLoginChange() {
//                 var data = kaspersky.user.getData();
//                 _isAuthorized = data && data.user;
//                 if (!_isAuthorized) {
//                     hideForm();
//                 }
//             }
//             return function (){ return _isAuthorized; }
//         }());


//         this.init = function (_api, _briefID) {
//             api = _api || api;
//             briefID = _briefID;
//         };


//         function onSubmit(e) {
//             e && e.preventDefault();

//             if (!kaspersky.user.isAuthorized()) {
//                 kaspersky.user.auth(onSubmit);
//                 return;
//             }

//             var info = kaspersky.mapToHash(form.serializeArray());


//             api($.extend({brief_id: briefID}, info))
//                 .done(function () {
//                     $element.trigger("add-comment-form:add", info.comment);
//                     hideForm();
//                     form.pristine();
//                 });

//             return false;
//         }

//         function hideForm() {
//             $element.removeClass("add-comment-form_expanded");
//             $element.trigger("scroll:do_refresh");
//         }

//         function toggleForm() {
//             if (!$element.is(".add-comment-form_expanded") && !kaspersky.user.isAuthorized()) {
//                 kaspersky.user.auth(toggleForm);
//             } else {
//                 $element.toggleClass("add-comment-form_expanded");
//                 $element.trigger("scroll:do_refresh");
//             }
//         }
//     }

// }(peppers = peppers || {}, kaspersky = kaspersky || {}, window, jQuery));

// var peppers, kaspersky;
// (function (peppers, $, Handlebars) {

//     $.fn.briefCommentsList = peppers.jQueryConstructor("briefCommentsList", BriefCommentsList);


//     function BriefCommentsList($t) {
//         this.script = $t.find('[type="text/x-handlebars-template"]');
//         this.template = Handlebars.compile(this.script.html());
//     }

//     BriefCommentsList.prototype.init = function (comments, addComment) {
//         switch (comments) {
//             case "add":
//                 console.debug(addComment);
//                 var newComment = $(this.template([addComment])).find(".brief-comment");
//                 console.debug(this.$comments, newComment);
//                 this.$comments.append(newComment);

//                 break;
//             default:
//                 if (this.$comments) this.$comments.remove();

//                 if (comments) {
//                     this.$comments = $(this.template(comments)).insertAfter(this.script);
//                     this.$comments.localization("en");
//                     /*this.disagree = $(this.template(comments.filter( commentsFilter(false) ))).insertAfter(this.script).localization("en");
//                      this.agree = $(this.template(comments.filter( commentsFilter(true) ))).insertAfter(this.script).localization("en");*/
//                 }
//                 break;
//         }
//     };


//     /*function commentsFilter(agree){
//         return function (itm) {
//             return itm.agree === agree;
//         }
//     }*/


// })(peppers = peppers || {}, jQuery, Handlebars);
// var peppers;
// (function (peppers, $, Handlebars) {

//     Handlebars.registerHelper("ifAuthor", function (author, v2, options) {
//         if (arguments.length === 2) options = v2;

//         if (author && author.name && author.image) {
//             return options.fn(this);
//         }
//         return options.inverse(this);
//     });

//     $.fn.briefModalContent = peppers.jQueryConstructor("briefModalContent", BriefModalContent);

//     function BriefModalContent($t) {
//         this.script = $t.find('[type="text/x-handlebars-template"]');
//         this.template = Handlebars.compile(this.script.html());
//     }

//     BriefModalContent.prototype.init = function (data) {
//         if (data) {
//             if (this.ui) this.ui.remove();

//             this.ui = $(this.template(data)).insertAfter(this.script);


//             this.ui
//                 .find(".user-pic").addClass("user-pic--visible")
//                 .find(".user-data__userpic").css("background-image", "url('" + (data.author && data.author.image) + "')");
//         }
//     }

// })(peppers = peppers || {}, jQuery, Handlebars);
// var peppers;
// (function (peppers, window, document) {

//     $(window)
//         .on("hashchange", onHashChange)
//         .on("resize", toggle);

//     /*$(".k-menu").on("click", "a", function () {
//         checkbox.prop( "checked", false );
//     });*/

//     var $html = $(document.documentElement);


//     var checkbox = $("#k-menu-toggle").on("change", toggle);

//     //toggle();

//     function getXmlHttp() {
//         var xmlhttp;
//         try {
//             xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
//         } catch (e) {
//             try {
//                 xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//             } catch (E) {
//                 xmlhttp = false;
//             }
//         }
//         if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
//             xmlhttp = new XMLHttpRequest();
//         }
//         return xmlhttp;
//     }

//     function background_request(href) {
//         var xmlhttp = getXmlHttp();
//         xmlhttp.open('GET', href, false);
//         xmlhttp.send(null);
//     }


//     $('.nav-menu__link_lang').on('click', function (e) {
//         e.preventDefault();
//         e.stopPropagation();

//         if ($(this).data("lang")) {
//             background_request("/backend/api/v1/set/" + $(this).data("lang"));
//             parent.php_passed_lang = $(this).data("lang");
//             php_passed_lang = $(this).data("lang");

//             localStorage['language'] = $(this).data("lang");
//         }

//         var hash = window.location.hash;

//         if (hash == '#') hash = '';

//         var loc = '';

//         if ($(this).data("lang") == 'ru') {

//             loc = window.location.origin + '/ru' + window.location.pathname + window.location.search + hash

//         } else {

//             if (location.href.indexOf('/ru#/') != -1) {
//                 var new_path = '/' + window.location.pathname.split('/ru')[1];
//             } else {
//                 var new_path = '/' + window.location.pathname.split('/ru/')[1];
//             }


//             loc = window.location.origin + new_path + window.location.search + hash;

//         }

//         window.location.replace(loc);

//         //window.location.reload();
//         //window.location = (hash != '') ? window.location.href + hash : window.location.href;
//         return false;
//     });

//     function toggle() {
//         var _checked = checkbox.is(":checked");
//         //var _visible = peppers.checkMobile.css.isMobile() && checkbox.next().is(":visible");

//         //console.debug("visible:", _visible);
//         $(".k-menu .backdrop").toggleClass("backdrop_visible", _checked);

//         $html.trigger("menu:" + (_checked ? "show" : "hide"))
//             .trigger("menu:toggle");

//         $(".k-menu").toggleClass("k-menu_visible", _checked);
//     }


//     function onHashChange() {
//         var hash = peppers.hash.getHash();
//         checkbox.prop("checked", false).change();

//         $(".nav-menu__link").each(function () {
//             var $t = $(this);
//             var _href = $t.attr("href");
//             $t.toggleClass("nav-menu__link_selected", peppers.hash.isEqual(hash, peppers.hash.getHash(_href)));
//         });
//         /*
//         $(".nav-menu__link_lang").each(function () {
//             $('.nav-menu__link_lang').attr('href', $(this).attr('href') + hash);
//         });
//         */


//     }

// })(peppers = peppers || {}, window, document);

var peppers;

(function ($, Handlebars) {
    var text = {}, waitAPI = {};
    var localizations = [];
    var _api, currentText;

    $.fn.localization = function (lang, api) {
        if (lang === "destroy") {
            //TODO удалять Localization
            return;
        }
        lang = lang || 'en';

        var def = $.Deferred();
        var self = this;
        if (api) _api = api;

        if (_api || text[lang]) {
            text[lang] = text[lang] || _api(lang, initLocalization);//lang);
            if (waitAPI[lang]) {
                waitAPI[lang].resolve(text[lang]);
            }
            text[lang].done(changeText);
        } else {
            if (!waitAPI[lang]) waitAPI[lang] = $.Deferred();


            waitAPI[lang].then(initText);
        }

        function initText(v) {
            v.done(changeText);
        }

        function changeText(data) {
            currentText = data;
            self.find("[data-localization]").each(function () {
                localizations.push(
                    new Localization(this, data)
                )
            });

            def.resolve();
        }


        return def.promise();
    };

    $.fn.localization.getText = function (name, lang) {
        //lang = lang || 'en';
        if (currentText) {
            return getData(currentText, name);
        }
    };


    function initLocalization(data) {
        return deep(data);


        function deep(object) {
            var res = {};
            for (var p in object) {
                var path = p.split("_");
                var obj = res;
                var nextName = getName(path[0]);
                for (var i = 0; i < path.length - 1; i++) {
                    var name = nextName;
                    nextName = getName(path[i + 1]);
                    obj = obj[name] = obj[name] || (!/^\d+$/.test(nextName) ? {} : []);
                }
                obj[nextName] = object[p]
            }

            return res;
        }

        function getName(str) {
            return str.replace(/[A-Z]/g, function () {
                return "_" + arguments[0].toLowerCase();
            })
        }
    }

    function Localization(element, data) {
        var $el = $(element);
        var info = getData(data, $el.data("localization"));
        if (typeof info === "undefined") return;

        if (info.hasOwnProperty("attr")) {
            $el.attr(info.attr);

        }


        if (["string", "number"].indexOf(typeof info) >= 0) {
            $el.html(info);
        } else if (info.hasOwnProperty("length")) {
            $el = initArray();

        } else if (info.hasOwnProperty("desktop") || info.hasOwnProperty("mobile")) {
            initAdaptive();
        }


        function initAdaptive() {
            $el.html(
                "<span class='mobile-only'>" + info.mobile + "</span>" +
                "<span class='desktop-only'>" + info.desktop + "</span>"
            );
        }

        function initArray() {
            if ($el.is("script")) {
                var template = $el.html();
            } else {
                template = "{{#each this}}" + $el.get(0).outerHTML + "{{/each}}";
                var remove = true;
            }

            var result = Handlebars.compile(template)(info);
            $el.after(result);
            if (remove) {
                $el.remove();
                $(result).removeAttr("data-localization");
            }
        }
    }

    function getData(data, name) {
        var path = name.split(".");
        //return data[path.join("_")];
        while (data && path.length > 0) {
            data = data[path.shift()];
        }
        return data;
    }
})(jQuery, window.Handlebars);
(function ($, TweenLite, RoughEase, Power0) {
    $.fn.welcome = function () {
        var durations = [1, 6, 3];

        var self = this;
        var $def = $.Deferred();

        if ((this.length === 0 || $.cookie("visited"))) {
            done();
        } else {
            $.cookie("visited", "1", {"expires": 3650, "path": "/"});

            var text = this.find(".welcome__text").each(function () {
                var $t = $(this).children();
                var txt = $t.html();

                txt = txt.split("").map(function (itm) {
                    return "<span  class='welcome__l'>" + itm + "</span>"
                });
                $t.html(txt.join(""));
            });

            show(0, 1);
        }


        var _skip;
        this.on("click", function () {
            _skip();
        });


        return $def.promise();


        function done() {
            self.remove();
            $def.resolve();
        }

        function show(mIndex, delay) {
            var isSkipped;
            _skip = skip;

            if (mIndex >= text.length) {
                self.fadeOut(done);
                return;
            }
            var _message = text.eq(mIndex).show();
            var _letters = _message.find(".welcome__l");

            delay = delay || 0;
            _letters.css("opacity", 0).each(animate(1, .5, delay, 0.025, onShow));


            function onShow(skip) {
                if (skip !== true && isSkipped) return;


                var _duration = skip === true ? 0 : text.data("duration") - 0;

                _letters.each(animate(0, 1, _duration || _duration === 0 ? _duration : durations[mIndex] || 1, .0, onHide));
            }

            function onHide() {
                show(++mIndex, .2);
            }

            function skip() {
                if (isSkipped) return;
                _letters.each(function () {
                    TweenLite.killTweensOf(this);
                });
                isSkipped = true;
                onShow(true);
            }

        }

        function animate(opacity, duration, delay, dDelay, onComplete) {
            var count = 0;
            return function (index) {
                count++;
                TweenLite.to(this, duration, {
                    opacity: opacity,
                    delay: delay + dDelay * index,
                    //ease: Sine.easeOut
                    ease: RoughEase.ease.config({
                        template: Power0.easeNone,
                        strength: 2,
                        points: 10,
                        taper: "none",
                        randomize: true,
                        clamp: true
                    }),
                    onComplete: function () {
                        if (--count === 0 && typeof onComplete === "function") {
                            onComplete();
                        }
                    }
                });

            }
        }
    };


}(jQuery, TweenLite, RoughEase, Power0));
/*(function () {
    var s = "font-size:2rem;background: #000000;font-weight:900;font-weight:Arial;";
    var style1 = "color:#ff0000;";
    var style0 = "color:#ffffff;";
    console.debug("%c ☺%c Kaspersky %cξ ", s + style0, s + style1, s + style0);
}());*/
(function (peppers, kaspersky, window, document, $, location, Handlebars) {
    //var allowedPushMessageDomains = ["http://kaspersky.hungryboys.ru", "https://kaspersky.hungryboys.ru"];


    var _wait = kaspersky.ready.addWait();
    var $document = $(document);
    var $window = $(window);
    var $html = $(document.documentElement);
    var $body = $(document.body);
    var apiCache = {};

    // initHandlebarsHelpers();
    // initAnimations();
    // initUtils();
    // initBackdrop();
    // initWindowResizeListener();


    // var php_passed_lang = 'en';
    // console.log(localStorage['language']);

    // if (window.location.pathname == '/') {

    //     if (typeof localStorage['language'] === 'undefined') {
    //         localStorage['language'] = 'en';
    //     }

    //     // php_passed_lang = localStorage['language'];

    //     // if (php_passed_lang == 'ru') {
    //         // var loc = window.location.origin + '/ru/' + window.location.search + window.location.hash;

    //         // api("set")({lang: 'ru'});
    //         // window.location.replace(loc);
    //     // }


    // } else {

    //     if (location.href.indexOf('/ru') != -1) {
    //         php_passed_lang = 'ru';
    //     } else {
    //         php_passed_lang = 'en';
    //     }

    //     localStorage['language'] = php_passed_lang;

    //     api("set", undefined, false, '', false)({lang: php_passed_lang});
    // }


    // document.documentElement.setAttribute('lang', php_passed_lang);

    // $('.nav-menu__link').removeClass('nav-menu__link_inactive');
    // $('.nav-menu__link[data-lang="' + php_passed_lang + '"]').addClass('nav-menu__link_inactive');

    // window.meta_default = {};
    // window.meta_brief = {};
    // window.meta_user = {};


    // $(".lang_en_only").removeClass("hidden");


    // window.meta_default.img = "http://" + window.location.hostname + "/images/share/fb.png";


    // var hrefData = kaspersky.parseURL(true);///"brief_id");
    // if (hrefData.restore_code) {
        // $(".login__change-password [name='code']").val(hrefData.restore_code);
        // peppers.modal("login/change-password");
        // history.pushState(null, null, window.location.href.replace(window.location.search, ''));
    // }
    // var user = new User(
    //     api("login"),
    //     api("register"),
    //     api("restore"),
    //     api("change-password"),
    //     api("useredit"),
    //     api("user"),
    //     api("logout"),
    //     checkPage
    // );
    // /**
    //  * @type {User}
    //  */
    // kaspersky.user = user;

    // if (!checkPage()) {
    //     return;
    // }


    $document.ready(onReady);

    /*var metaZoom = new MetaZoom();

    $(document.documentElement)
        .on("focus", "input, textarea", metaZoom.toggleZoom)
        .on("blur", "input, textarea", metaZoom.toggleZoom);*/

    // (function () {
    //     var noPush;
    //     //$.cookie.json = true;
    //     $.cookie("history", "", {expires: -1});

    //     var _cookieName = "kav_history";
    //     var history = JSON.parse($.cookie(_cookieName) || "[]");

    //     $(window).on("unload", function () {
    //         var href = getCurrent();
    //         var prevUrl = getLast();

    //         if (!noPush) {
    //             if (!isEqual(href, prevUrl)) {
    //                 history.push(href);
    //             } else {
    //                 history[history.length - 1] = href;
    //             }
    //         }
    //         save();

    //     });
    //     window.historyBack = historyBack;

    //     $document.on("click", ".prev-page", historyBack);

    //     function historyBack() {

    //         var current = getCurrent();
    //         while (history.length > 0) {
    //             var prev = getLast();
    //             if (!isEqual(current, prev, "#")) {
    //                 noPush = true;

    //                 kaspersky.navigateTo(window.location.origin + prev);


    //                 return;
    //             }
    //             history.pop();
    //             //var prev = history[history.length - 1];//.slice(-1)[0];
    //             //save();
    //         }

    //         kaspersky.navigateTo("/");
    //     }

    //     function getLast() {
    //         return history.length > 0 ? trimDomain(history[history.length - 1]) : "";
    //     }

    //     function getCurrent() {
    //         return [location.pathname, location.search, location.hash].join("");
    //     }

    //     function isEqual(p1, p2, sep) {
    //         sep = sep || "#";
    //         return p1.split(sep)[0] == p2.split(sep)[0]
    //     }

    //     function save() {
    //         history = history.splice(-10);
    //         $.cookie(_cookieName, JSON.stringify(history), {path: "/"});
    //     }
    // }());

    function onReady() {
        // if (hrefData.brief_id) var currentBrief = api("brief")({brief_id: hrefData.brief_id});
        // if (hrefData.work_id) var currentWork = api("work")({work_id: hrefData.work_id});


        kaspersky.planetMain && kaspersky.planetMain(api("locations"), api("location"));
        // $(".user-data").userData(user.getData);

        /* AUTHORIZATION */
        // $(".authorization").authorization(user.getData);
        // haxxxx!!!
        // $(".authorization").toggleClass("authorization_user-panel", /user-panel/.test(location.pathname));
        // $(".authorization").toggleClass("authorization_add-prediction", /add-prdiction/.test(location.hash));

        /* SEARCH */
        // if ($(".search").search !== undefined) {
            // $(".search").search(api("search"));
        // }

        /* LOGIN */
        // $(".login").loginModal(user.login, user.register, user.restore, user.changePassword);

        /* SCROLL */
        // $(".scroll").scrollCustom();

        /* BEST OF WEEK */
        // $(".best-of-week").bestOfWeek(api("top"));


        /* USER-PANEL */
        // $(".user-panel").userPanel(api("user"), api("work-delete", undefined, false, 'DELETE'), api("brief-delete", undefined, false, 'DELETE'), hrefData.user_id, user.getData());

        /* RATINGS */
        // if ($(".ratings").ratings !== undefined) {
            // $(".ratings").ratings(api("ratings"));
            // $(".ratings").trigger("modal-item:show");
        // }

        /* PREDICTIONS */
        // if ($(".modal-app__ui.predictions").predictions !== undefined) {
            // $(".modal-app__ui.predictions").predictions(api("search"));
        // }

        /* ADD PREDICTION */
        // $(".add-prediction").addPrediction(api("brief-add"));

        // $(".terms-accepted").termsAccepted(api("accept-terms"));

        /* FEEDBACK */
        // if ($(".feedback").feedback !== undefined) {
        //     $(".feedback").feedback(api("feedback"));
        // }

        /* Загрузка/кроп картинок */
        // $(".upload-image").uploadImage();

        /* Редактирование профиля */
        // $(".user-edit").userEdit(user.edit);


        /* BRIEF */
        // $(".brief-360").brief(api("works"), api("work-add_like", undefined, false, "POST"), api("brief"));
        // $(".brief-modal").briefModal(api("brief"), api("comment-add"), api("agree", undefined, false, "post"), user.getData);

        // $(".faq-2").FAQ2();
        // $(".terms").terms();

        // $(".faq, .faq-2, .terms, .feedback, .add-prediction, .terms-accepted, .about, .login, .user-edit, .user-panel").on("modal-item:show", function () {
        // $(".faq, .feedback, .add-prediction, .terms-accepted, .login, .user-edit, .user-panel").on("modal-item:show", function () {
        //     var _masked = $(this).find(".scroll__masked");
        //     var scroll = _masked.data("scrollCustom");
        //     if (!scroll) {
        //         scroll = _masked.scrollbarCustom().data("scrollCustom");
        //         $(document.documentElement).on("resize:after", scroll.refresh);
        //     }

        //     scroll.refresh();
        // });

        // $(".modal__ui.search").on("modal-item:show", function () {
        //     $('.modal__close-button').addClass('modal__close-button_top');
        // });

        // $(".modal__ui.search").on("modal-item:hide", function () {
        //     $('.modal__close-button').removeClass('modal__close-button_top');
        // });

        // // WTF, it calls on search modal show
        // $(".modal__ui.predictions").on("modal-item:show", function () {
        //     $('.modal__close-button').removeClass('modal__close-button_top');
        // });

        // $(".user-pic-crop").userPicCrop();
        // $(".modal:not(.modal_static) .modal-message").alert();


        // /* HEXAGONAL MAP */
        // $(".hexagonal-map").hexagonalMap(api("location"));

        // var isFirefox = typeof InstallTrigger !== 'undefined';
        // if (isFirefox) {
        //     $(".close-button-hexagon, .back-btn-svg").hexButton();
        // }


        // $(function () {
        //     if (typeof $.fn.addwork === "function") {
        //         var def = $.Deferred();

        //         if (currentWork) {
        //             currentWork.done(function (info) {
        //                 def.resolve({
        //                     work: info,
        //                     brief: info.brief
        //                 });
        //             });
        //         } else if (currentBrief) {
        //             currentBrief.done(function (info) {
        //                 def.resolve({
        //                     brief: info
        //                 });
        //             });
        //         } else {
        //             location.href = "/404.html";
        //         }


        //         //$(".addwork").addwork( data.work_id, info.id, info.type, api("work-save"), api("search"), api("work") );
        //         //$(".addwork").addwork( data.id, data.brief.id, data.brief.type, api("work-save"), api("search") );
        //         $(".addwork").addwork(def.promise(), api("work-save"), api("search"));
        //     }
        // });


        /* TIMELINE  должен быть последним, что бы все успели подписаться на событие смены года */
        // $(function () {
        //     var COOKIE_NAME = "selectedYear";
        //     var list = [2030, 2040, 2050];

        //     if (currentBrief) {
        //         currentBrief.done(function (data) {
        //             initTimeline(data.year)
        //         });
        //     } else {
        //         initTimeline();

        //     }

        //     function initTimeline(defaultYear) {
        //         defaultYear = defaultYear || ~~$.cookie(COOKIE_NAME) || list[(list.length - 1) >> 1];
        //         $(".timeline")
        //             .pepTimeline(list, defaultYear)
        //             .on("timeline:change", function (event, currentYear) {
        //                 $.cookie(COOKIE_NAME, currentYear, {path: "/", expires: new Date(3000, 0, 1)});
        //             })
        //             .trigger("timeline:init");
        //     }
        // });

        var lang = 'en';
        if (typeof php_passed_lang !== 'undefined') {
            lang = php_passed_lang;
        }
        kaspersky.ready.addWait($(document.body).localization(lang, api("localization")));
        _wait.resolve();


        //$document.trigger("hashchange");
        //$window.trigger("hashchange").resize();
        kaspersky.ready.done(function () {
            initWelcome();
            $(window).trigger("hashchange").resize();
        });
    }


    function MetaZoom(event) {

        this.toggleZoom = toggleZoom;

        function toggleZoom(event) {
            kaspersky.alert("toggle zoom " + event.type);
            var _p = parse();
            switch (event.type) {
                case "blur":
                    _p["minimum-scale"] = "1";
                    break;
                case "focus":
                    delete _p["minimum-scale"];
                    break;
            }

            write(_p);
        }

        function getViewportMeta() {
            return $("meta[name='viewport']");
        }

        function write(params) {
            var list = [];
            for (var p in params) {
                if (params.hasOwnProperty(p)) {
                    list.push(p + "=" + params[p]);
                }
            }
            getViewportMeta().attr("content", list.join(", "));
        }

        function parse() {
            var hash = {};
            var str = getViewportMeta().attr("content");
            var list = str.split(/\s*,\s*/g);
            for (var i = 0; i < list.length; i++) {
                var param = list[i].split("=");
                list[i] = {
                    key: param[0],
                    value: param[1]
                };
                hash[list[i].key] = hash[list[i].value];
            }

            return hash;
        }
    }


    /**
     * Запросы к API
     * @param {string} method
     * @param {Function|Function[]} [filter]=undefined
     * @param {boolean} [cache]=false
     * @param {string} [defaultRequestMethod]=''
     * @param {boolean} [async]=true
     * @returns {Function}
     */

    function api(method, filter, cache, defaultRequestMethod, async) {
        var _track = {
            "agree": GA('send', 'event', 'Button1', 'Click2'),
            "work-add_like": GA('send', 'event', 'Button2', 'Click')
        };
        var methods = {
            "location": "location/{location_id}",
            "locations": "locations",
            "localization": "localization",
        };


        var request = post, _api = "", url;

        var raw = method == 'work-save';

        url = _api + "/backend/api/v1/" + (methods.hasOwnProperty(method) ? methods[method] : "");
        if (method == "locations") {
            url = "assets/earth/locations.json"
        }

        function testRequest(url, params, requestMethod) {
            return $.get("api_example/" + method + ".json");
            //return $.post( "api_example/" + method + ".json", params );
        }

        function useTestAPI(method) {
            var _testAPI = $.cookie("test_api");
            if (_testAPI === "1") return true;
            try {
                var list = JSON.parse(_testAPI);
                for (var i = 0; i < list.length; i++) {
                    if (list[i].name === method) return list[i].value == "1";
                }
            } catch (err) {
            }
            return false;
        }


        function post(url, params, requestMethod, raw) {
            raw = raw || false;

            if ((typeof async) === 'undefined') {
                async = true;
            } else {
                async = Boolean(async);
            }

            var xhrOptions = {
                method: requestMethod || "GET",
                async: async
            };

            if (raw) {
                var data = new FormData();
                for (key in params) {
                    if (!params.hasOwnProperty(key)) {
                        continue;
                    }
                    data.append(key, params[key]);
                }

                xhrOptions.processData = false;
                xhrOptions.contentType = false;
                xhrOptions.cache = false;
                xhrOptions.data = data;
            } else {
                xhrOptions.data = params;
            }

            var xhr = $.ajax(url, xhrOptions);

            xhr.then(function (data) {
                if (data._token) {
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': data._token
                        }
                    });
                }

                return data;
            });

            return xhr;
        }

        /*function get(params){
            return $.get( url + getParams(params) )
        }*/


        return function (params, requestFilter, requestMethod) {
            var _url = url;
            if (method === "localization") {
                params = undefined;
            }

            if (apiCache.hasOwnProperty(_url)) return apiCache[_url];

            if (params && methods[method]) {
                _url = _url.replace(/\/\{([^\}]+)\}/g, function () {
                    var name = arguments[1];
                    if (params.hasOwnProperty(name)) {
                        var value = params[name];
                        delete params[name];
                        return value ? "/" + value : "";
                    }

                    return "";
                });
            }
            var _params;
            switch (typeof params) {
                case "object":
                    for (var p in params) {
                        if (params.hasOwnProperty(p)) {
                            _params = params;
                            break;
                        }
                    }
                    break;
                default:
                    _params = params;
                    break;
            }


            var def = $.Deferred();
            var promise = def.promise();


            (!useTestAPI(method) ? request : testRequest)(_url, _params, requestMethod || defaultRequestMethod || (_params ? "post" : "get"), raw)
                .then(function (data) {
                    return method !== "localization" ? checkImagesUrl(data) : data;
                })
                .then(filter)
                .then(requestFilter)
                .done(function (data) {
                    checkResponse(data);
                })
                .fail(function (jqXHR) {
                    if (jqXHR.responseJSON) {
                        checkResponse(jqXHR.responseJSON);
                    } else {
                        def.reject(jqXHR.message || jqXHR.responseText || "ERROR");
                    }
                });


            function checkImagesUrl(data, isImage) {

                for (var p in data) {
                    if (data.hasOwnProperty(p)) {
                        if (isImage || /^(?:image|photo|preview|flag|url)s?$/.test(p)) {
                            switch (typeof data[p]) {
                                case "string":
                                    //if (!/^(?:https?:|\/)/.test(data[p])) {
                                    if (/^backend\//.test(data[p])) {
                                        data[p] = "/" + data[p];
                                    }
                                    break;
                                case "object":
                                    checkImagesUrl(data[p], true);
                                    break;
                            }
                        } else if (typeof data[p] === "object") {
                            checkImagesUrl(data[p]);
                        }
                    }
                }

                return data;
            }

            /**
             * @param {*} data
             */
            function checkResponse(data) {
                switch (true) {
                    case typeof data === "string":
                        def.reject(data);
                        break;
                    case data.success === false:
                        var msg = data.text || data.message || data.error;
                        def.reject(msg);
                        break;

                    case data.hasOwnProperty("error"):
                        def.reject(data.text || data.error);
                        break;
                    case data.hasOwnProperty("errors"):
                        var message = [];
                        for (var p in data.errors) {
                            // message.push(p + ": " + data.errors[p].join(", "));
                            message.push(data.errors[p].join(", "));
                        }
                        def.reject(message.join("<br>"));
                        break;

                    case data[0] && data[0].success === false:
                        def.reject(data[0].message);
                        break;

                    default:
                        //if (typeof filter === "function") data = filter(data);
                        trackSuccess();
                        def.resolve(data);
                        break;
                }
            }

            /*promise.fail(function () {
                console.debug("FAIL:", arguments);
            });*/

            if (cache === true) {
                apiCache[url] = promise;
                promise.fail(function () {
                    delete apiCache[url];
                })
            }

            return promise;
        };


        /*function getParams(v) {
            if (/\.json$/.test(url)) {
                return "";
            }

            return v && v != "en" ? "/" + (typeof v.join == "function" ? v.join("/") : v) : "";
        }*/

        function trackSuccess() {
            if (_track.hasOwnProperty(method)) {
                _track[method]();
            }
        }

        function GA() {
            var args = arguments;
            return function () {
                if (typeof ga === "function") {
                    ga.apply(window, args);
                }
            }
        }
    }


    // function checkPage(info) {
    //     var currentUser = user.getData();

    //     if (!currentUser) {
    //         var path = location.pathname;
    //         var link;
    //         switch (true) {
    //             case /\/user-panel/.test(path) && !(hrefData && hrefData.user_id):
    //                 link = info && info.user && info.user.id && kaspersky.user_link(info.user.id);
    //                 break;

    //             case /\/addwork/.test(path):
    //                 link = "";
    //                 break;

    //             default:
    //                 return true;
    //         }


    //         kaspersky.navigateTo(link || "/");
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }


    // function User(login, register, restore, changePassword, edit, info, logout, checkPage) {
    //     //$(window).on("hashchange", onHashChange);
    //     $(document).on("click  logout", ".logout, [href='#/logout']", onLogout);

    //     var _user, _userText;
    //     var user = this;

    //     user.accept_terms = function () {
    //         var COOKIE_NAME = "USER_INFO";
    //         var data = JSON.parse(window.localStorage.getItem("user_info") || $.cookie(COOKIE_NAME));
    //         data.user.terms_accepted = true;
    //         _userText = JSON.stringify(data);
    //         window.localStorage.setItem("user_info", _userText);
    //     };

    //     user.register = function (params) {
    //         var def = $.Deferred();
    //         register(params)
    //             .done(function () {
    //                 def.resolve();
    //                 peppers.modal();
    //                 kaspersky.alert($.fn.localization.getText("sign_up.success"));
    //                 //initUser( data );
    //             })
    //             .fail(function (msg) {
    //                 def.reject(msg);
    //             });


    //         return def.promise();
    //     };

    //     user.restore = function (params) {
    //         var def = $.Deferred();
    //         restore(params)
    //             .done(function () {
    //                 def.resolve();
    //                 peppers.modal();
    //                 kaspersky.alert($.fn.localization.getText("restore.success"));
    //             })
    //             .fail(function (msg) {
    //                 def.reject(msg);
    //             });


    //         return def.promise();
    //     };
    //     user.changePassword = function (params) {
    //         var def = $.Deferred();
    //         changePassword(params)
    //             .done(function () {
    //                 peppers.modal();
    //                 kaspersky.alert(
    //                     $.fn.localization.getText("restore.change.success"),
    //                     "",
    //                     "/#/modal/login"
    //                 );
    //             })
    //             .fail(function (msg) {
    //                 def.reject(msg);
    //             });


    //         return def.promise();
    //     };

    //     user.login = function (params) {
    //         var def = $.Deferred();

    //         login(params)
    //             .done(function (data) {
    //                 initUser(data);
    //                 def.resolve();

    //                 var userData = user.getData();
    //                 var hash = peppers.hash.getHash();
    //                 if (hash[0] !== "modal" || (hash[0] === "modal" && hash[1] !== "terms")) {
    //                     if (userData && userData.user && userData.user.terms_accepted === false) {
    //                         peppers.modal("terms-accepted");
    //                     }
    //                 }

    //             })
    //             .fail(function (msg) {
    //                 def.reject(msg);
    //             });


    //         return def.promise();
    //     };

    //     user.login.social = function (type) {
    //         var def = $.Deferred();

    //         var uniqueName = getUnique();
    //         window[uniqueName] = onData;
    //         var _w = window.open(
    //             location.origin + "/backend/api/v1" + "/user/login/fb?cb=" + uniqueName,
    //             '_blank',
    //             'toolbar=0,status=0,width=626,height=436'
    //         );
    //         //$(_w).on("beforeunload unload", onCloseWindow);
    //         //_w.onbeforeunload =
    //         //_w.onunload = onCloseWindow;
    //         //$(_w).unload(onCloseWindow);
    //         var interval = setInterval(function () {
    //             if (!_w || _w.closed) {
    //                 onCloseWindow();
    //             }
    //         }, 500);


    //         function onData(info) {
    //             try {
    //                 if (typeof info === "string") {
    //                     info = atob(info);
    //                 }
    //             } catch (err) {
    //             }
    //             initUser(info);
    //             def.resolve();
    //             onCloseWindow();
    //         }


    //         /*if (DEBUG) {
    //             $(window).on("message", onMessage);
    //             function onMessage(e) {
    //                 e = e.originalEvent;
    //                 if (allowedPushMessageDomains.indexOf(e.origin) < 0) return;

    //                 var msg = /^(_\d+);(.+)$/.exec(e.data);
    //                 if (msg && msg[1] == uniqueName) {
    //                     onData(JSON.parse( msg[2] ));
    //                 }
    //             }
    //         }*/
    //         function onCloseWindow() {
    //             clearInterval(interval);
    //             //$(window).off("message", onMessage);
    //             delete window[uniqueName];
    //             try {
    //                 delete _w.onbeforeunload;
    //                 delete _w.onunload;
    //             } catch (err) {
    //             }
    //         }


    //         return def.promise();
    //     };

    //     user.logout = function () {
    //         var info;
    //         _preExit();
    //         logout()
    //             .done(_exit)
    //             .fail(function (msg) {
    //                 if (msg === "user not found") {
    //                     _exit();
    //                 }
    //             });

    //         function _preExit() {
    //             info = user.getData();
    //             initUser(undefined);

    //         }

    //         function _exit() {
    //             kaspersky.navigateTo("/");
    //             // checkPage(info);
    //         }
    //     };

    //     user.getData = function () {
    //         return _userText && JSON.parse(_userText);
    //     };


    //     /**
    //      * @param {function=} callback
    //      */
    //     user.auth = function login(callback) {
    //         peppers.modal("login", [location.hash, function () {
    //             if (typeof callback === "function" && user.isAuthorized()) {
    //                 callback();
    //             }
    //         }]);
    //     };
    //     user.isAuthorized = function () {
    //         return !!user.getData();
    //     };

    //     user.edit = function (data) {
    //         var def = $.Deferred();
    //         var info = user.getData();

    //         var params = {};
    //         for (var i = 0; i < data.length; i++) {
    //             params[data[i].name] = data[i].value;
    //         }

    //         edit(params)
    //             .then(function () {
    //                 def.resolve();
    //                 info = $.extend(
    //                     info,
    //                     {
    //                         user: {
    //                             name: params.username,
    //                             email: params.email,
    //                             location: params.location,
    //                             about: params.about,
    //                             image: params.userpic
    //                         }
    //                     }
    //                 );

    //                 initUser(info);
    //                 //_userText = JSON.stringify
    //                 //user.setData(info);
    //                 //$(".user-data").userData(info);
    //                 $(".user-panel__user-data").userData(info);
    //             })
    //             .fail(function (msg) {
    //                 def.reject(msg);
    //             });


    //         return def.promise();
    //     };

    //     user.authRequired = function (message) {
    //         authRequired(null, message);
    //     };

    //     /*user.lk = function () {
    //         return lk().then(function (data) {
    //             _lk = data;
    //             return data;
    //         });
    //     };*/


    //     initUser(__DATA__());
    //     info({user_id: ""})
    //         .done(function (data) {
    //             if (!data.user.hasOwnProperty("rank")) {
    //                 data.user.rank = data.rank;
    //             }
    //             initUser(data);
    //         })
    //         .fail(function (error) {
    //             if (/on line \d+ of|LK\.php$/.test(error)) {
    //             } else {
    //                 initUser(undefined);
    //             }
    //         });

    //     //initUser( __DATA__() );


    //     function getUnique() {
    //         return "_" + ("" + Math.random()).substr(2);
    //     }

    //     function onLogout(e) {
    //         e.preventDefault();
    //         user.logout();

    //     }

    //     /*function onHashChange(e) {
    //         var hash = peppers.hash.getHash();
    //         switch (hash[0]) {
    //             case "logout":
    //                 return false;
    //         }
    //     }*/

    //     function initUser(data) {
    //         if (typeof data === "string") {
    //             _user = JSON.parse(_userText = data);
    //         } else {
    //             _userText = JSON.stringify(_user = data);
    //         }

    //         __DATA__(_user);

    //         var userData = user.getData();
    //         $(document).trigger("login:change", userData);

    //         $(document.body).off("click", "[data-authorization-required]", authRequired);

    //         if (!data) {
    //             $(document.body).on("click", "[data-authorization-required]", authRequired);
    //         } else {
    //         }

    //         var hash = peppers.hash.getHash();
    //         if (hash[0] !== "modal" || (hash[0] === "modal" && hash[1] !== "terms")) {
    //             if (userData && userData.user && userData.user.terms_accepted === false) {
    //                 peppers.modal("terms-accepted");
    //             }
    //         }
    //     }

    //     function authRequired(e) {
    //         var $t = $(this);
    //         if (!user.isAuthorized()) {
    //             if (e) {
    //                 e.preventDefault();
    //                 user.auth(function () {
    //                     $t.click();
    //                 });
    //             } else {
    //                 user.auth();
    //             }

    //         }
    //     }

    //     function __DATA__() {
    //         var COOKIE_NAME = "USER_INFO";
    //         if (arguments.length == 0) {
    //             try {
    //                 var data = JSON.parse(window.localStorage.getItem("user_info") || $.cookie(COOKIE_NAME));
    //             } catch (err) {
    //             }

    //             return data;
    //         } else if (typeof arguments[0] !== "undefined") {
    //             var info = JSON.stringify(arguments[0]);
    //             try {
    //                 window.localStorage.setItem("user_info", info);
    //             } catch (err) {
    //                 $.cookie(COOKIE_NAME, info, {path: "/", expires: new Date(3000, 0, 1)});
    //             }
    //         } else {
    //             window.localStorage.removeItem("user_info");
    //             $.cookie(COOKIE_NAME, "", {path: "/", expires: -1});
    //         }
    //     }
    // }


    function initWindowResizeListener() {
        var lastHeight, isFocused;
        $window.resize(onResize);
        $(document.body)
        //.on("focus blur", "input, textarea", onFocus)
            .on("vr:change", doResize);

        var isPortrait;

        /*if (typeof window.orientation != "undefined") {
            $window.on("orientationchange", onOrientationChange);
            onOrientationChange();

            function onOrientationChange() {
                isPortrait = window.orientation === 0 || Math.abs(window.orientation) === 180;
            }
        }*/

        /*function onFocus(event) {
            isFocused = ["focus", "focusin"].indexOf(event.type) >= 0;
        }*/

        function onResize() {
            requestAnimationFrame(doResize);
        }

        function doResize() {
            var w = $window.width(), h = $window.height();
            /*if (isFocused) {
                h = lastHeight;
            } else {
                lastHeight = h;
            }*/

            var isLandscape = typeof isPortrait === "boolean" ? !isPortrait : peppers.checkMobile.css.isLandscape();

            if ($body.is(".is_vr")) isLandscape = !isLandscape;
            var isMobile = peppers.checkMobile.css.isMobile();
            var rect = {};
            /*alert([
                    "isPortrait:" + isPortrait,
                    "css isLandscape: " + peppers.checkMobile.css.isLandscape(),
                    "css isMobile: " + peppers.checkMobile.css.isMobile(),
                    "html content" + getComputedStyle(document.documentElement).content
            ].join("\n"));*/

            switch (true) {
                case isLandscape:
                    rect = {w: 1135, h: 640};
                    break;
                case isMobile:
                case peppers.checkMobile.isMobileOrTablet():
                    rect = {w: 640, h: 1135};
                    break;
                default:
                    rect = {w: 1280, h: 720};
                    break;
            }
            $html.css("fontSize", 18 * Math.min(1, w / rect.w));
            /*, h/rect.h*/

            $html.toggleClass("landscape", isLandscape);
            //$(".brief__panorama").css("display", isLandscape ? "none" : "");

            //alert(["doResize", isLandscape].join("\n"));

            //alert([getComputedStyle(document.documentElement).minHeight, 18 * Math.min(1, w/rect.w), w, rect.w].join("\n"));
            var size = {width: w, height: h};
            $html.data("size", size).trigger("resize:after", size);

            toggleClass("data-mobile-class", isMobile);
            toggleClass("data-desktop-class", !isMobile);

            function toggleClass(data, active) {
                $("[" + data + "]").each(function () {
                    var $t = $(this);
                    $t.toggleClass($t.attr(data), active);
                })
            }
        }
    }

    // function initBackdrop() {
    //     $html.on("modal:toggle  menu:toggle  best-of-week:toggle", function (event) {
    //         var _visible = $(".backdrop")
    //         //.not(".backdrop_scroll")
    //             .is(":visible");

    //         //$(".kaspersky-app").fixContent( _visible );
    //         fix($(".kaspersky-app"), _visible);

    //         var isModal = $(".modal .backdrop").is(":visible");
    //         var isMenu = $(".k-menu .backdrop").is(":visible");
    //         fix($(".modal"), isMenu);
    //         fix($(".modal-app"), isMenu);
    //         fix($(".best-of-week"), isMenu || isModal);

    //         //console.debug("toggle", _visible, isMenu, isModal);
    //     });


    //     function fix(target, isFixed) {
    //         var top = target.data("scrollTop");
    //         if (isFixed) {
    //             if (typeof top === "undefined") {
    //                 top = $html.scrollTop()
    //             }
    //             target.css({
    //                 "top": -top,
    //                 "position": "fixed",
    //                 width: "100%"
    //             });
    //         } else {
    //             target.css({
    //                 "top": "",
    //                 "position": "",
    //                 width: ""
    //             });
    //             if (typeof top === "number") {
    //                 $html.scrollTop(top);
    //             }
    //             target.data("scrollTop", undefined);
    //         }
    //     }
    // }

    function initGlobeHelper() {
        if (!$.cookie("visited-2")) {
            var help = $(".help").fadeIn();
            help.parent().on("mousedown  touchstart", hideHelp);
        }

        function hideHelp() {
            $.cookie("visited-2", "1", {"expires": 3650, "path": "/"});
            $(this).off("mousedown  touchstart", hideHelp);
            $(".help").fadeOut();
        }
    }

    function initWelcome() {
        $(".welcome").welcome().done(initGlobeHelper);
    }


    // function initUtils() {
    //     kaspersky.get_metadata = function () {
    //         return {
    //             title: $('title').html(),
    //             description: $('meta[name="description"]').attr('content'),
    //             og_title: $('meta[property="og:title"]').attr('content'),
    //             og_description: $('meta[property="og:description"]').attr('content'),
    //             og_image: $('meta[property="og:image"]').attr('content'),
    //             og_url: $('meta[property="og:url"]').attr('content'),
    //         };
    //     }
    //     kaspersky.set_metadata = function (data) {
    //         $('title').html(data.title);
    //         $('meta[name="description"]').attr('content', data.description);
    //         $('meta[property="og:title"]').attr('content', data.og_title);
    //         $('meta[property="og:description"]').attr('content', data.og_description);
    //         $('meta[property="og:image"]').attr('content', data.og_image);
    //         $('meta[property="og:url"]').attr('content', data.og_url);
    //     }

    //     /**
    //      * @param {{works_count:?number,works:boolean|[],id:?number, brief_id:?number}|number} id
    //      * @param {number=} count
    //      * @param {number=} work_id
    //      * @returns {string}
    //      */
    //     kaspersky.brief_link = function (id, count, work_id) {
    //         var haveWorks = count > 0 || count === true;
    //         if (typeof id === "object") {
    //             haveWorks = id.works_count > 0 || id.works === true || id.works && id.works.length > 0;
    //             work_id = id.work_id;
    //             id = id.brief_id || id.id;
    //         }

    //         //var work = work_id ? "work_id=" + work_id + "&" : "";
    //         var work = work_id ? "#/" + work_id : "";
    //         return (haveWorks
    //                 ? "prediction?" + "brief_id=" + id + work
    //                 : "#/modal/brief/" + id
    //         )
    //     };

    //     kaspersky.brief_page_link = function (brief) {
    //         return "prediction?" + "brief_id=" + brief.id;
    //     };

    //     kaspersky.addwork_link = function (brief_id, work_id) {
    //         var args = [];
    //         if (brief_id) args.push("brief_id=" + brief_id);
    //         if (work_id) args.push("work_id=" + work_id);

    //         return "addwork.html?" + args.join("&");
    //     };

    //     kaspersky.user_link = function (user_id) {
    //         return "user-panel.html" + (user_id ? "?user_id=" + user_id : "");
    //     };


    //     /**
    //      * переводит массив объектов вида [{name: "key1", value: "value1"}{name: "key2", value: "value2"}] в объект {key1: value1, key2: value2}
    //      * @param {{name: "string", value: "string"}[]} arr
    //      * @returns {{}}
    //      */
    //     kaspersky.mapToHash = function (arr) {
    //         var val = {};
    //         for (var i = 0; arr && i < arr.length; i++) {
    //             val[arr[i].name] = arr[i].value;
    //         }

    //         return val;
    //     };

    //     /**
    //      * @param attr
    //      * @returns {*}
    //      */
    //     kaspersky.parseURL = function (attr) {
    //         var search = location.search.substr(1);
    //         var list = search.split("&");
    //         if (arguments.length == 0) return list.map(parse);
    //         else if (attr === true) return kaspersky.mapToHash(list.map(parse));
    //         else {
    //             for (var i = 0; i < list.length; i++) {
    //                 var info = parse(list[i]);
    //                 if (info.name === attr) return info.value;
    //             }
    //         }

    //         function parse(str) {
    //             var val = str.split("=");
    //             return {
    //                 name: val.shift(),
    //                 value: val.join("=")
    //             }
    //         }
    //     }
    // }


    // function initHandlebarsHelpers() {
    //     //SWITCH
    //     (function () {
    //         Handlebars.registerHelper("switch", function (value, options) {
    //             this._switch_value_ = value;
    //             var html = trim(options.fn(this));
    //             delete this._switch_value_;
    //             return html;
    //         });

    //         Handlebars.registerHelper("case", function (value, options) {
    //             if (value == this._switch_value_) {
    //                 return options.fn(this);
    //             }
    //             return "";
    //         });
    //     }());


    //     (function () {
    //         Handlebars.registerHelper("brief_link", function (value, options) {
    //             var id = this.brief_id || this.brief && this.brief.id || this.id;
    //             return "prediction?brief_id=" + id;
    //             // if (this.works_count > 0 || this.works === true) {
    //             //     return "brief.html?brief_id=" + id;
    //             // } else {
    //             //     return "#/modal/brief/" + id;
    //             // }
    //         });
    //     }());

    //     (function () {
    //         Handlebars.registerHelper("user_link", function (value, options) {
    //             var id = this.id;
    //             return "user-panel.html?user_id=" + id;
    //         });
    //     }());


    //     (function () {
    //         Handlebars.registerHelper("json", function (value, options) {
    //             return "<pre>" + JSON.stringify(value, null, "\t") + "</pre>";
    //         });
    //     }());

    //     (function () {
    //         Handlebars.registerHelper('ifCond', function (v1, v2, options) {
    //             if (v1 === v2) {
    //                 return options.fn(this);
    //             }
    //             return options.inverse(this);
    //         });
    //     }());

    //     (function () {
    //         Handlebars.registerHelper("isSingle", function (value) {
    //             return value !== 1 ? "" : "_single";
    //         })
    //     }());

    //     (function () {
    //         Handlebars.registerHelper("howMuch", function (value) {
    //             var last_digit;
    //             if ((value.toString().length == 2) && (value.toString().substr(-2, 1) == 1)) {
    //                 last_digit = 5;
    //             } else {
    //                 last_digit = value.toString().substr(-1);
    //             }
    //             last_digit = last_digit.toString();
    //             var ret;
    //             switch (last_digit) {
    //                 case '1':
    //                     ret = '_quant1';
    //                     break;
    //                 case '2':
    //                 case '3':
    //                 case '4':
    //                     ret = '_quant2';
    //                     break;
    //                 case '5':
    //                 case '6':
    //                 case '7':
    //                 case '8':
    //                 case '9':
    //                 case '0':
    //                 default:
    //                     ret = '_quant5';
    //                     break;
    //             }
    //             return ret;
    //         })
    //     }());
    // }


    // function initAnimations() {
    //     $.fn.blink = function () {
    //         this.children().not(".login__form").add(this.find(".login__form > *"))
    //             .css({
    //                 opacity: 0
    //             })
    //             .each(
    //                 function (index) {
    //                     TweenLite.to(this, 0.5, {
    //                         opacity: 1,
    //                         delay: .5 + Math.random() * .5,
    //                         ease: RoughEase.ease.config({
    //                             template: Power0.easeNone,
    //                             strength: 2,
    //                             points: 20 + 20 * Math.random(),
    //                             taper: "none",
    //                             randomize: true,
    //                             clamp: true
    //                         })
    //                     })
    //                 }
    //             )
    //     }
    // }


    // function trimDomain(path) {
    //     return path.replace(/^\w+:\/\/[^\/]+/, "");
    // }

    // function trim(str) {
    //     return str && str.replace(/^\s+|\s+$/g, "");
    // }

})(peppers = peppers || {}, kaspersky = kaspersky || {}, window, document, jQuery, window.location, Handlebars);


document.addEventListener("DOMContentLoaded", function (event) {
    var gdprStrings = {
        text: 'We use cookies to make your experience of our websites better. By using and further navigating this website you accept that some of your browsing activity can be recorded in cookies. Detailed information about the use of cookies on this website is available by clicking on <a href="https://www.kaspersky.com/web-privacy-policy" target="_blank">more information</a>. ',
        button: 'Accept ',
    };
    if (localStorage['language'] === 'ru') {
        var gdprStrings = {
            text: 'Мы используем файлы cookie, чтобы улучшить работу сайта. Продолжая пользоваться этим сайтом, вы соглашаетесь, что некоторые из ваших действий в браузере будут записаны в файлы cookie. Подробную информацию об использовании файлов cookie на этом сайте вы можете найти по ссылке <a href="https://www.kaspersky.ru/web-privacy-policy" target="_blank">узнать больше</a>. ',
            button: 'Принять ',
        };
    }

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    var gdprAgreed = getCookie('cookie_accepted')

    function setCookie(name, value, options) {
        options = options || {};

        var expires = options.expires;

        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setDate(d.getDate() + expires);
            expires = options.expires = d;
        }

        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        var updatedCookie = name + "=" + value;

        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }

})