webpackHotUpdate("static\\development\\pages\\novel.js",{

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "./pages/novel.js":
/*!************************!*\
  !*** ./pages/novel.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\ajc\\Staff\\tap2.top\\pages\\novel.js";




console.log(hammerjs__WEBPACK_IMPORTED_MODULE_6___default.a);

var ChapterTitle = function ChapterTitle(_ref) {
  var title = _ref.title,
      titleStyle = _ref.titleStyle;
  return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])('h4', {
    style: titleStyle
  }, title);
};

var Paragraph = function Paragraph(_ref2) {
  var paragraph = _ref2.paragraph,
      style = _ref2.style;
  return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])('div', {
    style: style
  }, paragraph.content);
};

var Novel = function Novel(_ref3) {
  var chapter = _ref3.chapter,
      pages = _ref3.pages,
      marginTop = _ref3.marginTop,
      viewportHeight = _ref3.viewportHeight,
      appStyle = _ref3.appStyle,
      titleStyle = _ref3.titleStyle,
      paragraphStyle = _ref3.paragraphStyle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(),
      prevRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var animateStatus = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      playing: false
    };
  }, []);
  var prev = pages[index - 1],
      next = pages[index + 1],
      page = pages[index];
  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_ref4) {
    var clientX = _ref4.clientX;
    if (animateStatus.playing) return;
    var newIndex = Math.max(0, Math.min(pages.length - 1, index + (clientX > 187 ? 1 : -1)));

    if (index > newIndex) {
      animateStatus.playing = true;
      var am = prevRef.current.animate({
        transform: ['skewY(-90deg) scaleX(0)', 'skewY(0deg) scaleX(1)']
      }, {
        duration: 1e3,
        easing: 'ease-out'
      });

      am.onfinish = function (e) {
        animateStatus.playing = false;
        setIndex(newIndex);
      };
    } else if (index < newIndex) {
      animateStatus.playing = true;

      var _am = ref.current.animate({
        transform: ['skewY(0deg) scaleX(1)', 'skewY(-90deg) scaleX(0)']
      }, {
        duration: 1e3,
        easing: 'ease-in'
      });

      _am.onfinish = function (e) {
        animateStatus.playing = false;
        setIndex(newIndex);
      };
    } else {
      alert('first or last');
    }
  }, [index]); // const onTouchStart = useCallback(({ touches, changedTouches }) => {
  //   if(animateStatus.playing) return
  //   if(touches.length === 1 && changedTouches.length === 1){
  //     const point
  //     animateStatus.
  //   }
  // }, [])

  var pageProps = {
    chapter: chapter,
    marginTop: marginTop,
    viewportHeight: viewportHeight,
    appStyle: appStyle,
    titleStyle: titleStyle,
    paragraphStyle: paragraphStyle
  };
  return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])('div', {
    onTouchStart: onTouchStart,
    style: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    transform: '',
    page: next
  }, pageProps)), Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    ref: ref,
    transform: "scaleX(1) skewY(0deg)",
    page: page
  }, pageProps)), Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    ref: prevRef,
    transform: "scaleX(0) skewY(-90deg)",
    page: prev
  }, pageProps)));
};

var Page = Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function (_ref5, ref) {
  var chapter = _ref5.chapter,
      transform = _ref5.transform,
      page = _ref5.page,
      isPrev = _ref5.isPrev,
      isNext = _ref5.isNext,
      marginTop = _ref5.marginTop,
      viewportHeight = _ref5.viewportHeight,
      appStyle = _ref5.appStyle,
      titleStyle = _ref5.titleStyle,
      paragraphStyle = _ref5.paragraphStyle;
  if (!page) return null;
  var style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    paddingTop: marginTop,
    overflow: 'hidden',
    willChange: 'transform',
    background: '#ebe1c6',
    transformOrigin: 'left top',
    border: 'solid 1px #000',
    boxSizing: 'border-box',
    transform: transform
  };
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    ref: ref,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    style: {
      height: viewportHeight,
      overflow: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    style: {
      transform: "translate(0, ".concat(page.offset, "px)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, page.paragraphs.map(function (p) {
    return p.type === 'title' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ChapterTitle, {
      key: p.data.key,
      title: chapter.title,
      titleStyle: titleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Paragraph, {
      key: p.data.key,
      paragraph: p.data,
      style: paragraphStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    });
  }))));
});

var Prerender = function Prerender(_ref6) {
  var chapter = _ref6.chapter,
      appStyle = _ref6.appStyle,
      titleStyle = _ref6.titleStyle,
      paragraphStyle = _ref6.paragraphStyle,
      viewportHeight = _ref6.viewportHeight,
      setPages = _ref6.setPages;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (viewportHeight) {
      var wrapper = ref.current,
          titleHeight = wrapper.firstChild.getBoundingClientRect().height;
      var pages = [{
        paragraphs: [{
          type: 'title',
          data: {
            key: 'title_' + Math.random(),
            content: chapter.title
          }
        }],
        height: titleHeight,
        offset: 0
      }];
      var length = wrapper.children.length;
      var index = 1,
          page = pages[0];

      while (index < length) {
        var pHeight = wrapper.children[index].getBoundingClientRect().height;
        var para = {
          type: 'paragraph',
          data: chapter.paragraphs[index - 1]
        };

        if (page.height + page.offset < viewportHeight) {
          page.height += pHeight;
          page.paragraphs.push(para);

          if (page.height + page.offset > viewportHeight) {
            page = {
              paragraphs: [para],
              height: pHeight,
              offset: page.height + page.offset - viewportHeight - pHeight
            };
            pages.push(page);
          }
        } else {
          page = {
            paragraphs: [para],
            height: pHeight,
            offset: 0
          };
          pages.push(page);
        }

        index++;
      }

      setPages(pages);
    }
  }, [chapter, viewportHeight]);
  return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])('div', {
    ref: ref,
    style: {
      position: 'absolute',
      width: '100vw',
      transform: 'translateX(-200vw)'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ChapterTitle, {
    title: chapter.title,
    titleStyle: titleStyle
  }), chapter.paragraphs.map(function (paragraph) {
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Paragraph, {
      key: paragraph.key,
      paragraph: paragraph,
      style: paragraphStyle
    });
  }));
};

var appStyle = {
  width: '100vw',
  height: '100vh',
  fontSize: 18,
  lineHeight: '32px'
};

var NovelViewer = function NovelViewer(_ref7) {
  var chapter = _ref7.chapter;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      pageHeight = _useState4[0],
      setPageHeight = _useState4[1];

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    var lineHeight = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(appStyle.lineHeight);

    var viewportHeight = Math.floor(pageHeight - lineHeight * 2 - pageHeight % lineHeight);
    var marginTop = Math.floor((pageHeight - viewportHeight) * .5);
    var titleStyle = {
      fontSize: appStyle.fontSize * 2,
      margin: 0,
      lineHeight: lineHeight * 2 + 'px',
      padding: "0 ".concat(appStyle.fontSize, "px ").concat(lineHeight, "px")
    };
    var paragraphStyle = {
      padding: "0 ".concat(appStyle.fontSize, "px"),
      boxSizing: 'border-box'
    };
    return {
      titleStyle: titleStyle,
      paragraphStyle: paragraphStyle,
      marginTop: marginTop,
      viewportHeight: viewportHeight
    };
  }, [pageHeight]),
      titleStyle = _useMemo.titleStyle,
      paragraphStyle = _useMemo.paragraphStyle,
      marginTop = _useMemo.marginTop,
      viewportHeight = _useMemo.viewportHeight;

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setPageHeight(window.innerHeight);
  }, [pageHeight]);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      pages = _useState6[0],
      setPages = _useState6[1];

  var viewer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3150692238",
    __self: this
  }, "html,body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWpjXFxTdGFmZlxcdGFwMi50b3BcXHBhZ2VzXFxub3ZlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTnVCLEFBR2tCLFNBQ0MsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXGFqY1xcU3RhZmZcXHRhcDIudG9wXFxwYWdlc1xcbm92ZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VNZW1vLFxuICBmb3J3YXJkUmVmLFxuICBjcmVhdGVFbGVtZW50IGFzIGhcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgaGFtbWVyIGZyb20gJ2hhbW1lcmpzJ1xuY29uc29sZS5sb2coaGFtbWVyKVxuXG5jb25zdCBDaGFwdGVyVGl0bGUgPSAoeyB0aXRsZSwgdGl0bGVTdHlsZSB9KSA9PiB7XG4gIHJldHVybiBoKCdoNCcsIHtcbiAgICBzdHlsZTogdGl0bGVTdHlsZVxuICB9LCB0aXRsZSlcbn1cblxuXG5jb25zdCBQYXJhZ3JhcGggPSAoeyBwYXJhZ3JhcGgsIHN0eWxlIH0pID0+IHtcbiAgcmV0dXJuIGgoJ2RpdicsIHsgc3R5bGUgfSwgcGFyYWdyYXBoLmNvbnRlbnQpXG59XG5cbmNvbnN0IE5vdmVsID0gKHsgY2hhcHRlciwgcGFnZXMsIG1hcmdpblRvcCwgdmlld3BvcnRIZWlnaHQsIGFwcFN0eWxlLCB0aXRsZVN0eWxlLCBwYXJhZ3JhcGhTdHlsZSB9KSA9PiB7XG4gIGNvbnN0IFsgaW5kZXgsIHNldEluZGV4IF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCByZWYgPSB1c2VSZWYoKSwgcHJldlJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IGFuaW1hdGVTdGF0dXMgPSB1c2VNZW1vKCgpID0+ICh7IHBsYXlpbmc6IGZhbHNlIH0pLCBbXSlcblxuICBjb25zdFxuICAgIHByZXYgPSBwYWdlc1tpbmRleCAtIDFdLFxuICAgIG5leHQgPSBwYWdlc1tpbmRleCArIDFdLFxuICAgIHBhZ2UgPSBwYWdlc1tpbmRleF1cblxuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soKHsgY2xpZW50WCB9KSA9PiB7XG4gICAgaWYoYW5pbWF0ZVN0YXR1cy5wbGF5aW5nKSByZXR1cm5cbiAgICBjb25zdCBuZXdJbmRleCA9IE1hdGgubWF4KDAsXG4gICAgICBNYXRoLm1pbihwYWdlcy5sZW5ndGggLSAxLFxuICAgICAgICBpbmRleCArIChjbGllbnRYID4gMTg3ID8gMSA6IC0xKVxuICAgICAgKVxuICAgIClcbiAgICBpZihpbmRleCA+IG5ld0luZGV4KXtcbiAgICAgIGFuaW1hdGVTdGF0dXMucGxheWluZyA9IHRydWVcbiAgICAgIGNvbnN0IGFtID0gcHJldlJlZi5jdXJyZW50LmFuaW1hdGUoXG4gICAgICAgIHsgdHJhbnNmb3JtOiBbICdza2V3WSgtOTBkZWcpIHNjYWxlWCgwKScsICdza2V3WSgwZGVnKSBzY2FsZVgoMSknIF0gfVxuICAgICAgLCB7IGR1cmF0aW9uOiAxZTMsXG4gICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0J1xuICAgICAgfSlcbiAgICAgIFxuICAgICAgYW0ub25maW5pc2ggPSBlID0+IHtcbiAgICAgICAgYW5pbWF0ZVN0YXR1cy5wbGF5aW5nID0gZmFsc2VcbiAgICAgICAgc2V0SW5kZXgobmV3SW5kZXgpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoaW5kZXggPCBuZXdJbmRleCl7XG4gICAgICBhbmltYXRlU3RhdHVzLnBsYXlpbmcgPSB0cnVlXG4gICAgICBjb25zdCBhbSA9IHJlZi5jdXJyZW50LmFuaW1hdGUoXG4gICAgICAgIHsgdHJhbnNmb3JtOiBbICdza2V3WSgwZGVnKSBzY2FsZVgoMSknLCAnc2tld1koLTkwZGVnKSBzY2FsZVgoMCknIF0gfVxuICAgICAgLCB7IGR1cmF0aW9uOiAxZTMsXG4gICAgICAgIGVhc2luZzogJ2Vhc2UtaW4nXG4gICAgICB9KVxuICAgICAgXG4gICAgICBhbS5vbmZpbmlzaCA9IGUgPT4ge1xuICAgICAgICBhbmltYXRlU3RhdHVzLnBsYXlpbmcgPSBmYWxzZVxuICAgICAgICBzZXRJbmRleChuZXdJbmRleClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGFsZXJ0KCdmaXJzdCBvciBsYXN0JylcbiAgICB9XG4gIH0sIFsgaW5kZXggXSlcblxuICAvLyBjb25zdCBvblRvdWNoU3RhcnQgPSB1c2VDYWxsYmFjaygoeyB0b3VjaGVzLCBjaGFuZ2VkVG91Y2hlcyB9KSA9PiB7XG4gIC8vICAgaWYoYW5pbWF0ZVN0YXR1cy5wbGF5aW5nKSByZXR1cm5cbiAgLy8gICBpZih0b3VjaGVzLmxlbmd0aCA9PT0gMSAmJiBjaGFuZ2VkVG91Y2hlcy5sZW5ndGggPT09IDEpe1xuICAvLyAgICAgY29uc3QgcG9pbnRcbiAgLy8gICAgIGFuaW1hdGVTdGF0dXMuXG4gIC8vICAgfVxuICAvLyB9LCBbXSlcblxuICBjb25zdCBwYWdlUHJvcHMgPSB7XG4gICAgY2hhcHRlcixcbiAgICBtYXJnaW5Ub3AsIHZpZXdwb3J0SGVpZ2h0LCBhcHBTdHlsZSwgdGl0bGVTdHlsZSwgcGFyYWdyYXBoU3R5bGVcbiAgfVxuICByZXR1cm4gaCgnZGl2Jywge1xuICAgIG9uVG91Y2hTdGFydCxcbiAgICBzdHlsZToge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH1cbiAgfSxcbiAgICBoKFBhZ2UsIHsgdHJhbnNmb3JtOiAnJywgcGFnZTogbmV4dCwgLi4ucGFnZVByb3BzIH0pLFxuICAgIGgoUGFnZSwgeyByZWYsIHRyYW5zZm9ybTogYHNjYWxlWCgxKSBza2V3WSgwZGVnKWAsIHBhZ2UsIC4uLnBhZ2VQcm9wcyB9KSxcbiAgICBoKFBhZ2UsIHsgcmVmOiBwcmV2UmVmLCB0cmFuc2Zvcm06IGBzY2FsZVgoMCkgc2tld1koLTkwZGVnKWAsIHBhZ2U6IHByZXYsIC4uLnBhZ2VQcm9wcyB9KSxcbiAgICApXG59XG5cbmNvbnN0IFBhZ2UgPSBmb3J3YXJkUmVmKCh7IGNoYXB0ZXIsIHRyYW5zZm9ybSwgcGFnZSwgaXNQcmV2LCBpc05leHQsIG1hcmdpblRvcCwgdmlld3BvcnRIZWlnaHQsIGFwcFN0eWxlLCB0aXRsZVN0eWxlLCBwYXJhZ3JhcGhTdHlsZSB9LCByZWYpID0+IHtcbiAgaWYoIXBhZ2UpIHJldHVybiBudWxsXG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIHBhZGRpbmdUb3A6IG1hcmdpblRvcCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgYmFja2dyb3VuZDogJyNlYmUxYzYnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wJyxcbiAgICBib3JkZXI6ICdzb2xpZCAxcHggIzAwMCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgdHJhbnNmb3JtXG4gIH1cbiAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IHN0eWxlPXtzdHlsZX0+XG4gICAgPGRpdiBzdHlsZT17IHsgaGVpZ2h0OiB2aWV3cG9ydEhlaWdodCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH0gfT5cbiAgICAgIDxkaXYgc3R5bGU9eyB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgwLCAkeyBwYWdlLm9mZnNldCB9cHgpYCB9IH0+XG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlLnBhcmFncmFwaHMubWFwKHAgPT4gcC50eXBlID09PSAndGl0bGUnXG4gICAgICAgICAgICA/IDxDaGFwdGVyVGl0bGUga2V5PXtwLmRhdGEua2V5fSB0aXRsZT17Y2hhcHRlci50aXRsZX0gdGl0bGVTdHlsZT17dGl0bGVTdHlsZX0vPlxuICAgICAgICAgICAgOiA8UGFyYWdyYXBoIGtleT17cC5kYXRhLmtleX0gcGFyYWdyYXBoPXtwLmRhdGF9IHN0eWxlPXtwYXJhZ3JhcGhTdHlsZX0vPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxufSlcblxuY29uc3QgUHJlcmVuZGVyID0gKHsgY2hhcHRlciwgYXBwU3R5bGUsIHRpdGxlU3R5bGUsIHBhcmFncmFwaFN0eWxlLCB2aWV3cG9ydEhlaWdodCwgc2V0UGFnZXMgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHZpZXdwb3J0SGVpZ2h0KXtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSByZWYuY3VycmVudCwgdGl0bGVIZWlnaHQgPSB3cmFwcGVyLmZpcnN0Q2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICBjb25zdCBwYWdlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFncmFwaHM6IFsgeyB0eXBlOiAndGl0bGUnLCBkYXRhOiB7IGtleTogJ3RpdGxlXycgKyBNYXRoLnJhbmRvbSgpLCBjb250ZW50OiBjaGFwdGVyLnRpdGxlIH0gfSBdLFxuICAgICAgICAgIGhlaWdodDogdGl0bGVIZWlnaHQsXG4gICAgICAgICAgb2Zmc2V0OiAwXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB3cmFwcGVyLmNoaWxkcmVuXG4gICAgICBsZXQgaW5kZXggPSAxLCBwYWdlID0gcGFnZXNbMF1cbiAgICAgIHdoaWxlKGluZGV4IDwgbGVuZ3RoKXtcbiAgICAgICAgY29uc3QgcEhlaWdodCA9IHdyYXBwZXIuY2hpbGRyZW5baW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICBjb25zdCBwYXJhID0ge1xuICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICAgIGRhdGE6IGNoYXB0ZXIucGFyYWdyYXBoc1tpbmRleCAtIDFdXG4gICAgICAgIH1cbiAgICAgICAgaWYocGFnZS5oZWlnaHQgKyBwYWdlLm9mZnNldCA8IHZpZXdwb3J0SGVpZ2h0KXtcbiAgICAgICAgICBwYWdlLmhlaWdodCArPSBwSGVpZ2h0XG4gICAgICAgICAgcGFnZS5wYXJhZ3JhcGhzLnB1c2gocGFyYSlcbiAgICAgICAgICBcbiAgICAgICAgICBpZihwYWdlLmhlaWdodCArIHBhZ2Uub2Zmc2V0ID4gdmlld3BvcnRIZWlnaHQpe1xuICAgICAgICAgICAgcGFnZSA9IHtcbiAgICAgICAgICAgICAgcGFyYWdyYXBoczogWyBwYXJhIF0sXG4gICAgICAgICAgICAgIGhlaWdodDogcEhlaWdodCxcbiAgICAgICAgICAgICAgb2Zmc2V0OiBwYWdlLmhlaWdodCArIHBhZ2Uub2Zmc2V0IC0gdmlld3BvcnRIZWlnaHQgLSBwSGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWdlcy5wdXNoKHBhZ2UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgcGFnZSA9IHtcbiAgICAgICAgICAgIHBhcmFncmFwaHM6IFsgcGFyYSBdLFxuICAgICAgICAgICAgaGVpZ2h0OiBwSGVpZ2h0LFxuICAgICAgICAgICAgb2Zmc2V0OiAwXG4gICAgICAgICAgfVxuICAgICAgICAgIHBhZ2VzLnB1c2gocGFnZSlcbiAgICAgICAgfVxuICAgICAgICBpbmRleCArK1xuICAgICAgfVxuICAgICAgc2V0UGFnZXMocGFnZXMpXG4gICAgfVxuICB9LCBbIGNoYXB0ZXIsIHZpZXdwb3J0SGVpZ2h0IF0pXG4gIHJldHVybiBoKCdkaXYnLCB7IHJlZiwgc3R5bGU6IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHdpZHRoOiAnMTAwdncnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0yMDB2dyknIH0gfSxcbiAgICBoKENoYXB0ZXJUaXRsZSwgeyB0aXRsZTogY2hhcHRlci50aXRsZSwgdGl0bGVTdHlsZSB9KSxcbiAgICBjaGFwdGVyLnBhcmFncmFwaHMubWFwKHBhcmFncmFwaCA9PiBoKFBhcmFncmFwaCwgeyBrZXk6IHBhcmFncmFwaC5rZXksIHBhcmFncmFwaCwgc3R5bGU6IHBhcmFncmFwaFN0eWxlIH0pKVxuICApXG59XG5cbmNvbnN0IGFwcFN0eWxlID0ge1xuICB3aWR0aDogJzEwMHZ3JyxcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICBmb250U2l6ZTogMTgsXG4gIGxpbmVIZWlnaHQ6ICczMnB4Jyxcbn1cblxuY29uc3QgTm92ZWxWaWV3ZXIgPSAoeyBjaGFwdGVyIH0pID0+IHtcbiAgY29uc3QgWyBwYWdlSGVpZ2h0LCBzZXRQYWdlSGVpZ2h0IF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCB7IHRpdGxlU3R5bGUsIHBhcmFncmFwaFN0eWxlLCBtYXJnaW5Ub3AsIHZpZXdwb3J0SGVpZ2h0IH0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0ID0gcGFyc2VGbG9hdChhcHBTdHlsZS5saW5lSGVpZ2h0KVxuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gTWF0aC5mbG9vcihwYWdlSGVpZ2h0IC0gbGluZUhlaWdodCAqIDIgLSBwYWdlSGVpZ2h0ICUgbGluZUhlaWdodClcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSBNYXRoLmZsb29yKChwYWdlSGVpZ2h0IC0gdmlld3BvcnRIZWlnaHQpICogLjUpXG5cbiAgICBjb25zdCB0aXRsZVN0eWxlID0ge1xuICAgICAgZm9udFNpemU6IGFwcFN0eWxlLmZvbnRTaXplICogMixcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQgKiAyICsgJ3B4JyxcbiAgICAgIHBhZGRpbmc6IGAwICR7YXBwU3R5bGUuZm9udFNpemV9cHggJHsgbGluZUhlaWdodCB9cHhgXG4gICAgfVxuICAgIGNvbnN0IHBhcmFncmFwaFN0eWxlID0ge1xuICAgICAgcGFkZGluZzogYDAgJHthcHBTdHlsZS5mb250U2l6ZX1weGAsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICAgIH1cblxuICAgIHJldHVybiB7IHRpdGxlU3R5bGUsIHBhcmFncmFwaFN0eWxlLCBtYXJnaW5Ub3AsIHZpZXdwb3J0SGVpZ2h0IH1cbiAgfSwgWyBwYWdlSGVpZ2h0IF0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnZUhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpXG4gIH0sIFsgcGFnZUhlaWdodCBdKVxuXG4gIGNvbnN0IFsgcGFnZXMsIHNldFBhZ2VzIF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCB2aWV3ZXIgPSB1c2VSZWYoKVxuXG4gIHJldHVybiA8PlxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8ZGl2IHJlZj17dmlld2VyfSBzdHlsZT17YXBwU3R5bGV9PlxuICAgICAgPFByZXJlbmRlciB7IC4uLnsgY2hhcHRlciwgdGl0bGVTdHlsZSwgdmlld3BvcnRIZWlnaHQsIHNldFBhZ2VzLCBhcHBTdHlsZSwgcGFyYWdyYXBoU3R5bGUgfSB9Lz5cbiAgICB7XG4gICAgICBwYWdlcyA/IDxOb3ZlbCB7IC4uLiB7XG4gICAgICAgIGNoYXB0ZXIsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBhcHBTdHlsZSxcbiAgICAgICAgdGl0bGVTdHlsZSxcbiAgICAgICAgcGFyYWdyYXBoU3R5bGUsXG4gICAgICAgIG1hcmdpblRvcCxcbiAgICAgICAgdmlld3BvcnRIZWlnaHRcbiAgICAgIH19Lz4gOiBudWxsXG4gICAgfTwvZGl2PlxuICA8Lz5cbn1cblxuTm92ZWxWaWV3ZXIuZ2V0SW5pdGlhbFByb3BzID0gKCkgPT4ge1xuICBjb25zdCBjaGFwdGVyID0ge1xuICAgIHRpdGxlOiAn56ys5LiA56ugJyxcbiAgICBwYXJhZ3JhcGhzOiBbe1wia2V5XCI6XCJmMDZjNmJlMGEyYWQxMzNiNWJlMjc1OGRjMDM0OWViNFwiLFwiY29udGVudFwiOlwi44CA44CA44CA6buE5piP55qE5L2Z6L6J77yM5YC+5rSS6ICM5LiL77yM5L2/5b6X5pW05bqn5LqR5aSp5Z+O77yM6YO96JKZ5Z+O5LqG5LiA5bGC5reh5reh55qE6YeR6Zye44CCXCJ9LHtcImtleVwiOlwiOThkYzVkOTljZTA0MGJlZDQ0ZDRiZWQ4NDUzNTcxZDlcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjliNDdmYmFkNDcwMGI0NWI5ZDRlYzg0MmE2NzFhNTNjXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlpKflqIHmrabppobkvY3kuo7kupHlpKnln47mnIDnuYHljY7nmoTlnLDmrrXvvIzkuI3ov4fnm7jmr5TovoPkuo7lvoDluLjmnaXvvIzmraTml7bnmoTmrabppobvvIzmmL7lvpfmnInkupvlhrflr4LjgIJcIn0se1wia2V5XCI6XCI0MGVmNWI2M2U2YTJkNWVmMmM5YjcyZjRmZWMxNWMzNlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiZGU2NTU3Nzc2ZDk1MzA0YWJhNTM0NmY4NTllMWQ3Y2ZcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOKAnOWUlOKApuKApuKAnVwifSx7XCJrZXlcIjpcIjNhYjc2YjYxYTVjMTU0NTkzY2MxYjVkODE3MjkwMGIyXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlnKjmrabppobop5LokL3kvY3nva7nmoTkuIDkuKrmiL/pl7TlhoXvvIzkuIDkuKrlubTnuqbljYHkuIPlhavlsoHnmoTlsJHlubTvvIzourrlnKjmnKjluorkuIrvvIzlj5Hlh7rkuIDpmLXovbvlkJ/vvIzntKfpl63nmoTnnLznmq7vvIznvJPnvJPnnYHlvIDjgIJcIn0se1wia2V5XCI6XCI5OTg0N2I2ZTA2MDI5MzYzOWE5YzQ0YjkwOTJiYzVmNVwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNTkxY2JkNTNkM2EzOTAyZmExZmY3MTRjNjQwODAwNDdcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOeci+edgOWbm+WRqOeGn+aCieeahOeOr+Wig++8jOadqOaYreW+ruW+ruS4gOaEo++8jOS4jei/h+maj+WNs+S7luWDj+aYr+aDs+i1t+S6huS7gOS5iO+8jOW/g+S4rea2jOi1t+S4gOiCoeW8uueDiOeahOaAkueBq+OAglwifSx7XCJrZXlcIjpcIjE1N2E1MTJiMTZmZmVmMDFmNzI1ZjcwYzUyYzJmMjNmXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI0ZmE2YzA5ZTMyMTJjNWIwOTNlMzdiZGQzZDZiZDYyNFwiLFwiY29udGVudFwiOlwi44CA44CA44CA4oCc546L5LqR77yM5L2g5Lus6L+Z576k54uX5Lic6KW/77yM5biI5YKF6L+H5LiW6L+Y5rKh5Yiw5LiA5Liq5pyI77yM5bCx6YO95aaC5q2k5qy65oiR44CC4oCdXCJ9LHtcImtleVwiOlwiNmMxMWQxMTNlMDBmNzFlMzY1Yjg0NTVhMTM1YjYxZWVcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjFjZDViNzJhYzY5Nzk0NTI5NGZiNDQ4NWY4MDIzNjQ3XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDmg7PotbfkuI3kuYXliY3nmoTpga3pgYfvvIzmnajmmK3miYvmjozmj6HntKfvvIzllonlkpnkuK3lj5Hlh7rkuIDpmLXkvY7lkLzjgIJcIn0se1wia2V5XCI6XCI0YzI2YjliOWIyYmRlMTdiYWU0ZGVhNzRhMTBjMGQ0NlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNmU3YWM1NmVhMDhkN2NlOGI3YzhmNjQ2OGRhZmQzNzZcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOadqOaYre+8jOS7luaYjumdouS4iueahOi6q+S7ve+8jOaYr+Wkp+WogeatpummhummhuS4u+S9leaWueiIn+eahOacgOWQjuS6suS8oOW8n+WtkOOAglwifSx7XCJrZXlcIjpcIjE4MjgyNTFiOTA2ZmEzYmE2MTA0MmM3Y2IwMjU3NjVkXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI5MDVjZWVjOTM3NDRhMzBmZGQ4MmM4ODdmYWQ0MzUxY1wiLFwiY29udGVudFwiOlwi44CA44CA44CA5L2G5Y+q5pyJ5LuW6Ieq5bex5riF5qWa77yM5YW25a6e5LuW5piv5p2l6Ieq5Y+m5aSW5LiA5Liq5LiW55WM55qE5pmu6YCa5Lq677yM5Y+q5piv5Zug5Li65LiA5qyh5oSP5aSW77yM54G16a2C5p2l5Yiw5LqG6L+Z5Liq5LiW55WM77yM5bm25LiU6ZmE6Lqr5Yiw5LqG5LiA5Liq5bCR5bm05a2k5YS/55qE6Lqr5LiK44CCXCJ9LHtcImtleVwiOlwiNjI5MTQzN2Q3Mjk1NGRjZmFlZTdmNjRkNWUwNWEzMDBcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjhmNGFkNGRkYWRhZTk5Yjk3Nzc4NjI1N2IyOTVjOWM4XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDku5bkuYvmiYDku6Xog73ooqvkvZXmlrnoiJ/loILloILkuIDkvY3mrabppobppobkuLvvvIzmlLbkuLrkurLkvKDlvJ/lrZDvvIzpgqPlgJLkuI3mmK/lm6DkuLrku5bnmoTmrabpgZPotYTotKjpq5jnu53vvIznm7jlj43vvIzku5bpmYTouqvnmoTov5nlhbfouqvouq/vvIzotYTotKjlvojkuIDoiKzjgIJcIn0se1wia2V5XCI6XCI0NGJkMTQwMTEzZGY2Y2EyMTkwMzhhNGViMmQ5NzM2Y1wiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiZDMzODc0Y2YwOGIyODYzMmQ5ZDVjMjYxM2Q1OTI2YTJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOecn+ato+iuqeS9leaWueiIn+eci+mHjeeahO+8jOaYr+S7lueahOWVhuS4muiDveWKm+OAglwifSx7XCJrZXlcIjpcImFkNGVhYjYxYmNiZGVkMjM3NjZlYzZiNDg1ODU4YzY5XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI1NDMyNjk3N2ZkM2NkNjZiNDRlOWY4ZWJiNDljYjY0Y1wiLFwiY29udGVudFwiOlwi44CA44CA44CA5Zyo6L+Z5Liq5q2m6YGT5piM55ub77yM5Y+q6KaB5Liq5Lq65a6e5Yqb6Laz5aSf77yM5bCx5Y+v5Lul5YeM6am+5LqO5LiA5YiH56S85rOV5LmL5LiK55qE5LiW55WM77yM5ZWG5Lia55qE5Y+R5bGV77yM55u45a+55LqO6YKj5Y+m5LiA5Liq5LiW55WM77yM5peg55aR5piv5Y2B5YiG5rue5ZCO55qE44CCXCJ9LHtcImtleVwiOlwiNjcyOGI3OTFiY2Y2ZTExMmNmNjY3OWY3MDVhZWZjNTNcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImNlNDIwNWRhYmRiNjY4ZTM1MTI5N2JlNWZkMzMwODliXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDmnajmmK3lgJ/pibTliY3kuJbnmoTkuIDkupvnu4/llYbmqKHlvI/vvIzlho3phY3lkIjlpKflqIHmrabppobnmoTlir/lipvvvIzlj6/nnYDlrp7kuLrmrabppoblj5HlsZXkuobkuI3lsJHkuqfkuJrvvIzotZrkuobkuI3lsJHpkrHjgIJcIn0se1wia2V5XCI6XCI3ODgyY2E0YWZiNDdlMjJjYmFmZjMxODI0N2Y1YTZjM1wiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMTAxMThhM2IxNjM0ZGI0NTc5NjdkNTA0YTI5YjFiNmJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOadqOaYreeahOi/meenjeaJjeiDve+8jOiuqeS9leaWueiIn+WZqOmHjeS4jeW3su+8jOeUmuiHs+WQjuadpei/mOacieS8oOmXu++8jOS7luimgeWwhuiHquW3seeahOeLrOWls++8jOiuuOmFjee7meadqOaYre+8jOW5tuWcqOiHquW3seeZvuW5tOS5i+WQju+8jOWwhuWkp+Wogeatpummhu+8jOS5n+e7p+aJv+WIsOadqOaYreaJi+S4iuOAglwifSx7XCJrZXlcIjpcIjEzYjM4NTM0ZjBkMWQ3OGUyYWU5NWM0Yzg3NjU5ZWY1XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJmZTI4MjViYmVlNmFkYWYzMzNjM2U5MWNjMDk0MmQxNlwiLFwiY29udGVudFwiOlwi44CA44CA44CA6L+Z5qC35LiA5p2l77yM6Ieq54S26K6p5p2o5pit77yM6KKr5L2V5pa56Iif55qE5YW25LuW5Yeg5L2N5Lqy5Lyg5byf5a2Q77yM6KeG5Li65LqG55y85Lit6ZKJ77yM6IKJ5Lit5Yi644CCXCJ9LHtcImtleVwiOlwiOTM4Y2JlMGM4ZWYyZmE2OWJkNGM2YTk2N2JlYTI4ZjdcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImUxMGM0ZjRkOTU2YTU3MjFlMjg2OTkyNzcwNjkyOTRlXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDmnKzmnaXvvIzkvZXmlrnoiJ/opoHmmK/lnKjkuJbvvIzku5bpgqPlh6DkuKrkurLkvKDlvJ/lrZDvvIzlsL3nrqHkuI3mu6HmnajmmK3vvIzkvYbkuZ/kuI3mlaLlpoLkvZXooajnjrDlh7rmnaXjgIJcIn0se1wia2V5XCI6XCIzODVhNjA4M2JhNTNhZTIyNDcxZmFhMTlhYmE2MzJmZFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNDNkNDg3MjRmMDhhNjNkMWJjZDdiOTMwN2ZiYzM3MzlcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOS9huWBj+WBj+WcqOS4jeS5heWJje+8jOS9leaWueiIn+WboOS4uumHh+aRmOS4gOenjeeBteiNr++8jOa3seWFpeS6keWkqeWxseiEie+8jOS4jeW5uOatu+WcqOS6humHjOmdouW8uuWkp+WHtuWFveWPo+S4i+OAglwifSx7XCJrZXlcIjpcIjMwNjE4MjY2MTA1ZTM3MmM3NmUxMmJmOTZmNGZiN2VlXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJlMGQ3N2RiMGFjMjMyN2RmZDMzZGEzM2JjNWU3MWVkNFwiLFwiY29udGVudFwiOlwi44CA44CA44CA5aSx5Y675LqG6L+Z5L2N5aSn6Z2g5bGx77yM5L2/5b6X6Ieq6Lqr5a6e5Yqb5bm25LiN5by655qE5p2o5pit77yM5Zyo5aSn5aiB5q2m6aaG55qE5aSE5aKD77yM56uL5Yi75LiA6JC95Y2D5LiI77yM5Y+X5Yiw5L2V5pa56Iif5Yeg5L2N5Lqy5Lyg5byf5a2Q5omT5Y6L5o6S5oyk44CCXCJ9LHtcImtleVwiOlwiZTUyYzNiZjMxY2VmNjcwNjIyYmQxMTE1ZjNiOWE5NDhcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImU1ZGY0Y2QxOTVjNmUwOTY4YWM3YjQxODM3NDBiMmE1XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDku4rlpKnvvIzpgqPkvY3njovkupHvvIzmm7TmmK/luKbmnaXkuoblhbbku5blh6DkvY3kurLkvKDlvJ/lrZDnmoTmhI/mgJ3vvIzmmI7nmb3lnLDmjIflh7ropoHmnajmmK3ljbfpk7rnm5botbDkurrjgIJcIn0se1wia2V5XCI6XCJlNTQyMmI2YWQxYWMyOTM1MDEyNjk0YjJhYjgyNThhNFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMTE1ZDA2YTQ3MDg0NTVkNzMzZWY3MTJiMzM4MWY0N2RcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOadqOaYreW9k+aXtuaEpOaAkuS5i+S4i++8jOWSjOeOi+S6kemhtuS6huWHoOWPpeWYtO+8jOe7k+aenOiiq+WQjuiAheeLoOeLoOaatOaPjeS4gOmhv++8jOi/mOiiq+aJk+W+l+aYj+S6hui/h+WOu+OAglwifSx7XCJrZXlcIjpcIjIwYjhiNjZmMzJkYTMxYTIzMGVhNjI0OTVlYWZkN2ZiXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI2MTg4YmEzM2JjNDU3YmMwZWMxYTk4ZjQyZDI4ODQxNFwiLFwiY29udGVudFwiOlwi44CA44CA44CA5LiN6L+H6IKJ6Lqr5LiK55qE55eb5qWa77yM5a+55LqO5p2o5pit5p2l6K+06L+Y5LiN566X5LuA5LmI77yM5Y+q5piv5b2T5LuW5oOz6LW36YKj5L2N5riF5Li95aWz5a2Q5pe277yM5b+D5Lit5bCx5Lya6Zeq6L+H5LiA6Zi15Yi655eb44CCXCJ9LHtcImtleVwiOlwiZTYzODJlYWMyYjE1NDIxMzZjYzM1MTY3Mjc4ZTNlYzlcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjJmNDhmYWZiNWM4NmE1ZTU0NDU1ZTg3ZjViMzhkMDBjXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDpgqPnu53nvo7lrrnpopzkuK3vvIzluKbnnYDnmoTlhrfmt6HlkozmvKDop4bvvIzorqnmnajmmK3msLjov5zpg73pmr7ku6Xlv5jmjonjgIJcIn0se1wia2V5XCI6XCJjMGExMjJkZTg2N2Y0MjU1ZWNkM2JjZjliMGJkM2VkZFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiM2I1OGY5MTYwNGNhN2YxODE0NjliNDI0ZjcxN2M2NWFcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOKAnOWmguatpOS5n+Wlve+8jOa4healmuS6huS9oOeahOW/g+aEj++8jOaIkeS5n+WPr+S7peS6huaXoOeJteaMgueahOemu+W8gOS6huOAguKAneadqOaYreaDqOeEtuS4gOeske+8jOWvueS6juatpummhuWGjeaXoOeVmeaBi+OAglwifSx7XCJrZXlcIjpcImUwYjEwZDY4ZjA4YjYxZGJkYTAxNDExZThlMjMxZDQwXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJkM2FkOGM0MTA3YjJkODc3Y2Q0MWFlYTc3MjFiOTk5M1wiLFwiY29udGVudFwiOlwi44CA44CA44CA6ICM5LiU57uP6L+H5LuK5aSp55qE5LqL5oOF77yM5LuW5bey57uP5rex5Yi75Zyw5piO55m95LqG6Ieq5bex546w5Zyo55qE5aSE5aKD44CCXCJ9LHtcImtleVwiOlwiOTMwOTc4YmU0ZTYwNGE2NWEwYWEyMWVhYTI4NThmODRcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjVhNDI2NTU5Njg3ZDY5Yjg3ZGMwNTFmN2Y0ZjIxM2VkXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlho3kuI3nprvlvIDmrabppobvvIzoh6rlt7HmgZDmgJXml6nmmZropoHooqvnjovkupHnrYnkurrpmLTmrbvjgIJcIn0se1wia2V5XCI6XCI4ZmIxZDgwMWI1MmVmOWNmYTg2YmEzOTU3ZGI5OTM3NVwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiZjg5NDZlOWRhYWFiNWNmNmViMTFkNDk4OTBjZGI4NGZcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOKAnOS5n+S4jeefpemBk+mCo+Wwj+WtkOmGkuS6huayoeacie+8n+eOi+S6keW4iOWFhOWPr+aYr+ivtOS6hu+8jOS7iuWkqemdnuiuqeS7lua7muibi+S4jeWPr+OAguKAnVwifSx7XCJrZXlcIjpcImM1MGU1OWNiYjg5YWFlZWU1YjI4ZjE2ZjkyZmU3NTFiXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJiMzA0OTQxODE4YTcxZWI3YmU2NTdlZDU2YzQ1NjFkYlwiLFwiY29udGVudFwiOlwi44CA44CA44CA4oCc5Zi/5Zi/77yM5rKh6YaS5bCx5rWH55uG5YeJ5rC05LiL5Y6777yM5LiN5oCV5LuW5LiN6YaS44CC4oCdXCJ9LHtcImtleVwiOlwiOTZhYzU5YTY4Y2MwM2ZhYzdjNDQyZjc1ZDY3ZDcwYzBcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjEwMjc5ZDRkNTVlNWNhZDc0YjA5MTQxZGYwYmVmYzIwXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlsLHlnKjov5nml7bvvIzmiL/lpJbkvKDmnaXkuIDpmLXlrInnrJHlo7DvvIzntKfot5/nnYDvvIzigJznoLDigJ3nmoTkuIDlo7DvvIzmiL/pl6jooqvouLnkuoblvIDmnaXjgIJcIn0se1wia2V5XCI6XCI4NjA2OTkzNjRlYTZjZjkwM2JkNDcyYjlkZDE1Mzk2MVwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMWUxNjQ5ZDJlZWI1NWJlNTc2NDAxMzZkMjJjZTNhODlcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOS4pOS4qui6q+epv+e7g+WKn+acjeeahOW5tOi9u+eUt+WtkO+8jOebuOe7p+i1sOi/m+Wxi+WGheOAglwifSx7XCJrZXlcIjpcIjg3MWY5NDMzZTNkNWY5NGE3NzI4OTcwOTk3NjNlNWQ4XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI5N2ZlOTMzNmFjYmRmMDM5ZGQxNjI0MmY2YWZlZTU0ZlwiLFwiY29udGVudFwiOlwi44CA44CA44CA55yL5Yiw5Z2Q5Zyo5bqK5LiK55qE5p2o5pit77yM5b2T5YWI6YKj55S35a2Q6L2756yR5LiA5aOw6YGT77ya4oCc5Y6f5p2l5oiR5Lus55qE4oCY5p2o5biI5YWE4oCZ5bey57uP6YaS5LqG77yM6YKj6LW257Sn55qE5ZCn44CC546L5LqR5biI5YWE6K+05LuK5pel4oCY5p2o5biI5YWE4oCZ5L2g6KaB56a75byA5q2m6aaG5LqG77yM6L+Y54m55oSP5Y+s6ZuG5LqG5biI5YWE5byf5Lus77yM6YO95Zyo5YmN6Zmi77yM562J552A6KaB5Li65L2g6YCB6KGM5ZGi44CC4oCdXCJ9LHtcImtleVwiOlwiNGEyODlhZmYyOWUyMWExMzJlMzA4OWIwZWFjNzA5ZDdcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImQzYzFjMDIwZDE1ZGUxMGVkMDdhN2ZmM2JmYmE1OGZmXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDigJzkuI3plJnvvIzotbbntKfnmoTlkKfvvIzkuI3opoHorqnkuIDkvJfluIjlhYTlvJ/nrYnkuYXkuobjgILmnajluIjlhYTkvaDopoHmmK/ooYzliqjkuI3kvr/vvIzmiJHku6zlj6/ku6XluK7kuIDluK7kvaDjgILigJ3lj6bkuIDkvY3nlLflrZDvvIzohLjkuIrpmLTnrJHov57ov57jgIJcIn0se1wia2V5XCI6XCJkNDA4YTljYjkxMjRkOWViNGFkZjhlZTg4ZWVjMjlmYlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMzgyZWQyN2ZjMGQzODk5NzBlZmNiYTBhNzExNWJmN2NcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOadqOaYreecuOWFieWGt+WGve+8jOayoeacieeQhuS8mui/meS4pOS4queUt+WtkO+8jOS4i+W6iuWQju+8jOW+hOebtOemu+W8gOWxi+WtkOOAglwifSx7XCJrZXlcIjpcIjE3M2U3OTE4Yjg2YmI4NWY2OThmNjI5ODQ3ZmVjZDUyXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI2YThlZTgyZTMwNThmNDBhNmZkZDQxY2ZmMWQ0OTNiNFwiLFwiY29udGVudFwiOlwi44CA44CA44CA4oCc5ZO877yB5ou95LuA5LmI5ZGA77yM6L+Y5Lul5Li65piv5Lul5YmN6aaG5Li75Zyo55qE5pe25YCZ5ZCX77yB4oCd6YKj5b2T5YWI6L+b5p2l55qE55S35a2Q77yM6KeB5Yiw5p2o5pit5peg6KeG6Ieq5bex77yM5LiN55Sx5Y+R5Ye65Ya35ZO844CCXCJ9LHtcImtleVwiOlwiMzhkYzEzNWQ2OTM5Y2I0NTVkZGVlMDVmZmQ1MzY2MTJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjA2ZDIyMzI5YzYyOWYxMmUzMjBlODc3MDA1ZmEwYzE4XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDpmo/ljbPvvIzkuozkurrkuZ/ot5/nnYDmnajmmK3lh7rljrvjgIJcIn0se1wia2V5XCI6XCJhMzFhZGQ0Y2QzNWM4NTdhNTBlODcwMzJlZWE1OTA1YlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNGRkZWI4NGJjZTAzZjJiZTU1OGQzYWY5MTlmNTcxM2VcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOatpOWIu+WcqOWkp+WogeatpummhueahOWJjemZou+8jOS4gOWkp+e+pOeahOatpummhuW8n+WtkO+8jOmDveWBnOS4i+S6huavj+aXpem7hOaYj+WNgeWIhueahOS/rueCvOWKn+ivvu+8jOebuOS6kuWcqOS9juWjsOiuruiuuuedgOS7gOS5iOOAglwifSx7XCJrZXlcIjpcIjZjMDE4YmU0OGUyZjZiZDVmMDQzNmQ3MzRmYjE5OTJiXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJhYWViNTNkZGJkNmE3MmUwMTFkMmQwNDY0YjcyNjNmOVwiLFwiY29udGVudFwiOlwi44CA44CA44CA4oCc5Zev77yB5p2o5pit5Ye65p2l5LqG44CC4oCdXCJ9LHtcImtleVwiOlwiOGRjYjM4ODM2NDFjMmYwNzhjZWNjM2ViYWE0NDMxYTBcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjU4Mjg4MWM1Yjc1MTg0NjkzNjRjNzdkMWVlNjE5MDMzXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlv73nhLbvvIzlhbbkuK3kuIDkuKrmrabppobnmoTlrablvpLvvIzlj5Hlh7rkuIDpmLXkvY7lkbzvvIzkvb/lvpfpmYTov5HnmoTkurrvvIzpg73mnJ3nnYDmn5DkuIDkuKrmlrnlkJHnnIvljrvjgIJcIn0se1wia2V5XCI6XCJlZmQ1MzNjNmNjZTcyODhjODliMGExMzA5Y2RjYmY3Y1wiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMDNkN2ZmMjVmM2Q0ZDcxN2ViYjkxNTgyYWM4NzM1ZDNcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOS4gOi6q+eZveiho+eahOadqOaYre+8jOmdouiJsui/mOacieWHoOWIhuiLjeeZve+8jOiuqeS6uuS4gOeci+S5i+S4i++8jOabtOinieW+l+WDj+aYr+S4gOS4quaWh+W8seS5pueUn+OAglwifSx7XCJrZXlcIjpcImFiMGNlMGVhZTI3MDVjNDA1NjA5ZmJjNjI1YzNjMzgyXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI5ZTExMzk0YjA5MGUxYzNmZmNlZDA2ZjkzZGI1MDI0OVwiLFwiY29udGVudFwiOlwi44CA44CA44CA5Y+q5piv5Zyo55yL5ZCR5p2o5pit5LmL5pe277yM6YKj576k5Lq65Lit77yM5LiN6K665piv5q2m6aaG55qE5a2m5b6S77yM6L+Y5piv5ouz5biI77yM55uu5YWJ5Lit6YO96ZqQ6ZqQ5bim552A5LiA5Lid6YSZ5aS35ZKM5LiN5bGR44CCXCJ9XVxuICB9XG4gIHJldHVybiB7IGNoYXB0ZXIgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3ZlbFZpZXdlciJdfQ== */\n/*@ sourceURL=C:\\Users\\ajc\\Staff\\tap2.top\\pages\\novel.js */"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    ref: viewer,
    style: appStyle,
    className: "jsx-3150692238",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Prerender, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    chapter: chapter,
    titleStyle: titleStyle,
    viewportHeight: viewportHeight,
    setPages: setPages,
    appStyle: appStyle,
    paragraphStyle: paragraphStyle
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  })), pages ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Novel, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    chapter: chapter,
    pages: pages,
    appStyle: appStyle,
    titleStyle: titleStyle,
    paragraphStyle: paragraphStyle,
    marginTop: marginTop,
    viewportHeight: viewportHeight
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  })) : null));
};

NovelViewer.getInitialProps = function () {
  var chapter = {
    title: '第一章',
    paragraphs: [{
      "key": "f06c6be0a2ad133b5be2758dc0349eb4",
      "content": "　　　黄昏的余辉，倾洒而下，使得整座云天城，都蒙城了一层淡淡的金霞。"
    }, {
      "key": "98dc5d99ce040bed44d4bed8453571d9",
      "content": "　　　"
    }, {
      "key": "9b47fbad4700b45b9d4ec842a671a53c",
      "content": "　　　大威武馆位于云天城最繁华的地段，不过相比较于往常来，此时的武馆，显得有些冷寂。"
    }, {
      "key": "40ef5b63e6a2d5ef2c9b72f4fec15c36",
      "content": "　　　"
    }, {
      "key": "de6557776d95304aba5346f859e1d7cf",
      "content": "　　　“唔……”"
    }, {
      "key": "3ab76b61a5c154593cc1b5d8172900b2",
      "content": "　　　在武馆角落位置的一个房间内，一个年约十七八岁的少年，躺在木床上，发出一阵轻吟，紧闭的眼皮，缓缓睁开。"
    }, {
      "key": "99847b6e060293639a9c44b9092bc5f5",
      "content": "　　　"
    }, {
      "key": "591cbd53d3a3902fa1ff714c64080047",
      "content": "　　　看着四周熟悉的环境，杨昭微微一愣，不过随即他像是想起了什么，心中涌起一股强烈的怒火。"
    }, {
      "key": "157a512b16ffef01f725f70c52c2f23f",
      "content": "　　　"
    }, {
      "key": "4fa6c09e3212c5b093e37bdd3d6bd624",
      "content": "　　　“王云，你们这群狗东西，师傅过世还没到一个月，就都如此欺我。”"
    }, {
      "key": "6c11d113e00f71e365b8455a135b61ee",
      "content": "　　　"
    }, {
      "key": "1cd5b72ac697945294fb4485f8023647",
      "content": "　　　想起不久前的遭遇，杨昭手掌握紧，喉咙中发出一阵低吼。"
    }, {
      "key": "4c26b9b9b2bde17bae4dea74a10c0d46",
      "content": "　　　"
    }, {
      "key": "6e7ac56ea08d7ce8b7c8f6468dafd376",
      "content": "　　　杨昭，他明面上的身份，是大威武馆馆主何方舟的最后亲传弟子。"
    }, {
      "key": "1828251b906fa3ba61042c7cb025765d",
      "content": "　　　"
    }, {
      "key": "905ceec93744a30fdd82c887fad4351c",
      "content": "　　　但只有他自己清楚，其实他是来自另外一个世界的普通人，只是因为一次意外，灵魂来到了这个世界，并且附身到了一个少年孤儿的身上。"
    }, {
      "key": "6291437d72954dcfaee7f64d5e05a300",
      "content": "　　　"
    }, {
      "key": "8f4ad4ddadae99b977786257b295c9c8",
      "content": "　　　他之所以能被何方舟堂堂一位武馆馆主，收为亲传弟子，那倒不是因为他的武道资质高绝，相反，他附身的这具身躯，资质很一般。"
    }, {
      "key": "44bd140113df6ca219038a4eb2d9736c",
      "content": "　　　"
    }, {
      "key": "d33874cf08b28632d9d5c2613d5926a2",
      "content": "　　　真正让何方舟看重的，是他的商业能力。"
    }, {
      "key": "ad4eab61bcbded23766ec6b485858c69",
      "content": "　　　"
    }, {
      "key": "54326977fd3cd66b44e9f8ebb49cb64c",
      "content": "　　　在这个武道昌盛，只要个人实力足够，就可以凌驾于一切礼法之上的世界，商业的发展，相对于那另一个世界，无疑是十分滞后的。"
    }, {
      "key": "6728b791bcf6e112cf6679f705aefc53",
      "content": "　　　"
    }, {
      "key": "ce4205dabdb668e351297be5fd33089b",
      "content": "　　　杨昭借鉴前世的一些经商模式，再配合大威武馆的势力，可着实为武馆发展了不少产业，赚了不少钱。"
    }, {
      "key": "7882ca4afb47e22cbaff318247f5a6c3",
      "content": "　　　"
    }, {
      "key": "10118a3b1634db457967d504a29b1b6b",
      "content": "　　　杨昭的这种才能，让何方舟器重不已，甚至后来还有传闻，他要将自己的独女，许配给杨昭，并在自己百年之后，将大威武馆，也继承到杨昭手上。"
    }, {
      "key": "13b38534f0d1d78e2ae95c4c87659ef5",
      "content": "　　　"
    }, {
      "key": "fe2825bbee6adaf333c3e91cc0942d16",
      "content": "　　　这样一来，自然让杨昭，被何方舟的其他几位亲传弟子，视为了眼中钉，肉中刺。"
    }, {
      "key": "938cbe0c8ef2fa69bd4c6a967bea28f7",
      "content": "　　　"
    }, {
      "key": "e10c4f4d956a5721e28699277069294e",
      "content": "　　　本来，何方舟要是在世，他那几个亲传弟子，尽管不满杨昭，但也不敢如何表现出来。"
    }, {
      "key": "385a6083ba53ae22471faa19aba632fd",
      "content": "　　　"
    }, {
      "key": "43d48724f08a63d1bcd7b9307fbc3739",
      "content": "　　　但偏偏在不久前，何方舟因为采摘一种灵药，深入云天山脉，不幸死在了里面强大凶兽口下。"
    }, {
      "key": "30618266105e372c76e12bf96f4fb7ee",
      "content": "　　　"
    }, {
      "key": "e0d77db0ac2327dfd33da33bc5e71ed4",
      "content": "　　　失去了这位大靠山，使得自身实力并不强的杨昭，在大威武馆的处境，立刻一落千丈，受到何方舟几位亲传弟子打压排挤。"
    }, {
      "key": "e52c3bf31cef670622bd1115f3b9a948",
      "content": "　　　"
    }, {
      "key": "e5df4cd195c6e0968ac7b4183740b2a5",
      "content": "　　　今天，那位王云，更是带来了其他几位亲传弟子的意思，明白地指出要杨昭卷铺盖走人。"
    }, {
      "key": "e5422b6ad1ac2935012694b2ab8258a4",
      "content": "　　　"
    }, {
      "key": "115d06a4708455d733ef712b3381f47d",
      "content": "　　　杨昭当时愤怒之下，和王云顶了几句嘴，结果被后者狠狠暴揍一顿，还被打得昏了过去。"
    }, {
      "key": "20b8b66f32da31a230ea62495eafd7fb",
      "content": "　　　"
    }, {
      "key": "6188ba33bc457bc0ec1a98f42d288414",
      "content": "　　　不过肉身上的痛楚，对于杨昭来说还不算什么，只是当他想起那位清丽女子时，心中就会闪过一阵刺痛。"
    }, {
      "key": "e6382eac2b1542136cc35167278e3ec9",
      "content": "　　　"
    }, {
      "key": "2f48fafb5c86a5e54455e87f5b38d00c",
      "content": "　　　那绝美容颜中，带着的冷淡和漠视，让杨昭永远都难以忘掉。"
    }, {
      "key": "c0a122de867f4255ecd3bcf9b0bd3edd",
      "content": "　　　"
    }, {
      "key": "3b58f91604ca7f181469b424f717c65a",
      "content": "　　　“如此也好，清楚了你的心意，我也可以了无牵挂的离开了。”杨昭惨然一笑，对于武馆再无留恋。"
    }, {
      "key": "e0b10d68f08b61dbda01411e8e231d40",
      "content": "　　　"
    }, {
      "key": "d3ad8c4107b2d877cd41aea7721b9993",
      "content": "　　　而且经过今天的事情，他已经深刻地明白了自己现在的处境。"
    }, {
      "key": "930978be4e604a65a0aa21eaa2858f84",
      "content": "　　　"
    }, {
      "key": "5a426559687d69b87dc051f7f4f213ed",
      "content": "　　　再不离开武馆，自己恐怕早晚要被王云等人阴死。"
    }, {
      "key": "8fb1d801b52ef9cfa86ba3957db99375",
      "content": "　　　"
    }, {
      "key": "f8946e9daaab5cf6eb11d49890cdb84f",
      "content": "　　　“也不知道那小子醒了没有？王云师兄可是说了，今天非让他滚蛋不可。”"
    }, {
      "key": "c50e59cbb89aaeee5b28f16f92fe751b",
      "content": "　　　"
    }, {
      "key": "b304941818a71eb7be657ed56c4561db",
      "content": "　　　“嘿嘿，没醒就浇盆凉水下去，不怕他不醒。”"
    }, {
      "key": "96ac59a68cc03fac7c442f75d67d70c0",
      "content": "　　　"
    }, {
      "key": "10279d4d55e5cad74b09141df0befc20",
      "content": "　　　就在这时，房外传来一阵嬉笑声，紧跟着，“砰”的一声，房门被踹了开来。"
    }, {
      "key": "860699364ea6cf903bd472b9dd153961",
      "content": "　　　"
    }, {
      "key": "1e1649d2eeb55be57640136d22ce3a89",
      "content": "　　　两个身穿练功服的年轻男子，相继走进屋内。"
    }, {
      "key": "871f9433e3d5f94a772897099763e5d8",
      "content": "　　　"
    }, {
      "key": "97fe9336acbdf039dd16242f6afee54f",
      "content": "　　　看到坐在床上的杨昭，当先那男子轻笑一声道：“原来我们的‘杨师兄’已经醒了，那赶紧的吧。王云师兄说今日‘杨师兄’你要离开武馆了，还特意召集了师兄弟们，都在前院，等着要为你送行呢。”"
    }, {
      "key": "4a289aff29e21a132e3089b0eac709d7",
      "content": "　　　"
    }, {
      "key": "d3c1c020d15de10ed07a7ff3bfba58ff",
      "content": "　　　“不错，赶紧的吧，不要让一众师兄弟等久了。杨师兄你要是行动不便，我们可以帮一帮你。”另一位男子，脸上阴笑连连。"
    }, {
      "key": "d408a9cb9124d9eb4adf8ee88eec29fb",
      "content": "　　　"
    }, {
      "key": "382ed27fc0d389970efcba0a7115bf7c",
      "content": "　　　杨昭眸光冷冽，没有理会这两个男子，下床后，径直离开屋子。"
    }, {
      "key": "173e7918b86bb85f698f629847fecd52",
      "content": "　　　"
    }, {
      "key": "6a8ee82e3058f40a6fdd41cff1d493b4",
      "content": "　　　“哼！拽什么呀，还以为是以前馆主在的时候吗！”那当先进来的男子，见到杨昭无视自己，不由发出冷哼。"
    }, {
      "key": "38dc135d6939cb455ddee05ffd536612",
      "content": "　　　"
    }, {
      "key": "06d22329c629f12e320e877005fa0c18",
      "content": "　　　随即，二人也跟着杨昭出去。"
    }, {
      "key": "a31add4cd35c857a50e87032eea5905b",
      "content": "　　　"
    }, {
      "key": "4ddeb84bce03f2be558d3af919f5713e",
      "content": "　　　此刻在大威武馆的前院，一大群的武馆弟子，都停下了每日黄昏十分的修炼功课，相互在低声议论着什么。"
    }, {
      "key": "6c018be48e2f6bd5f0436d734fb1992b",
      "content": "　　　"
    }, {
      "key": "aaeb53ddbd6a72e011d2d0464b7263f9",
      "content": "　　　“嗯！杨昭出来了。”"
    }, {
      "key": "8dcb3883641c2f078cecc3ebaa4431a0",
      "content": "　　　"
    }, {
      "key": "582881c5b7518469364c77d1ee619033",
      "content": "　　　忽然，其中一个武馆的学徒，发出一阵低呼，使得附近的人，都朝着某一个方向看去。"
    }, {
      "key": "efd533c6cce7288c89b0a1309cdcbf7c",
      "content": "　　　"
    }, {
      "key": "03d7ff25f3d4d717ebb91582ac8735d3",
      "content": "　　　一身白衣的杨昭，面色还有几分苍白，让人一看之下，更觉得像是一个文弱书生。"
    }, {
      "key": "ab0ce0eae2705c405609fbc625c3c382",
      "content": "　　　"
    }, {
      "key": "9e11394b090e1c3ffced06f93db50249",
      "content": "　　　只是在看向杨昭之时，那群人中，不论是武馆的学徒，还是拳师，目光中都隐隐带着一丝鄙夷和不屑。"
    }]
  };
  return {
    chapter: chapter
  };
};

/* harmony default export */ __webpack_exports__["default"] = (NovelViewer);

/***/ })

})
//# sourceMappingURL=novel.js.b02369caf00d94f814fd.hot-update.js.map