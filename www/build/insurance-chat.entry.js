import { r as registerInstance, h, g as getElement } from './index-6daa3064.js';

function t(){return t=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);}return t},t.apply(this,arguments)}var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:Infinity,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,s){},onStringTyped:function(t,s){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,s){},onTypingResumed:function(t,s){},onReset:function(t){},onStop:function(t,s){},onStart:function(t,s){},onDestroy:function(t){}},e=new(/*#__PURE__*/function(){function e(){}var n=e.prototype;return n.load=function(e,n,i){if(e.el="string"==typeof i?document.querySelector(i):i,e.options=t({},s,n),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(t){return t.trim()}),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(e.stringsElement.children),o=r.length;if(o)for(var a=0;a<o;a+=1)e.strings.push(r[a].innerHTML.trim());}for(var u in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[u]=u;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e));},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(e);}},n.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(e);}},e}()),n=new(/*#__PURE__*/function(){function t(){}var s=t.prototype;return s.typeHtmlChars=function(t,s,e){if("html"!==e.contentType)return s;var n=t.substring(s).charAt(0);if("<"===n||"&"===n){var i;for(i="<"===n?">":";";t.substring(s+1).charAt(0)!==i&&!(1+ ++s>t.length););s++;}return s},s.backSpaceHtmlChars=function(t,s,e){if("html"!==e.contentType)return s;var n=t.substring(s).charAt(0);if(">"===n||";"===n){var i;for(i=">"===n?"<":"&";t.substring(s-1).charAt(0)!==i&&!(--s<0););s--;}return s},t}()),i=/*#__PURE__*/function(){function t(t,s){e.load(this,s,t),this.begin();}var s=t.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop();},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this));},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this));},s.destroy=function(){this.reset(!1),this.options.onDestroy(this);},s.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin());},s.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos);},this.startDelay);},s.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout(function(){s=n.typeHtmlChars(t,s,e);var i=0,o=t.substring(s);if("^"===o.charAt(0)&&/^\^\d+/.test(o)){var a=1;a+=(o=/\d+/.exec(o)[0]).length,i=parseInt(o),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+a),e.toggleBlinking(!0);}if("`"===o.charAt(0)){for(;"`"!==t.substring(s+r).charAt(0)&&(r++,!(s+r>t.length)););var u=t.substring(0,s),p=t.substring(u.length+1,s+r),c=t.substring(s+r+1);t=u+p+c,r--;}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,r),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e));},i);},i):this.setPauseStatus(t,s,!0);},s.keepTyping=function(t,s,e){0===s&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,s+=e);this.replaceText(n),this.typewrite(t,s);},s.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s);},this.backDelay));},s.backspace=function(t,s){var e=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=n.backSpaceHtmlChars(t,s,e);var i=t.substring(0,s);if(e.replaceText(i),e.smartBackspace){var r=e.strings[e.arrayPos+1];e.stopNum=r&&i===r.substring(0,s)?s:0;}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s));},i);}else this.setPauseStatus(t,s,!1);},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0;},s.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s;},s.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")));},s.humanizer=function(t){return Math.round(Math.random()*t/2)+t},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}));},s.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0);},this.fadeOutDelay)},s.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t;},s.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop();}),this.el.addEventListener("blur",function(s){t.el.value&&0!==t.el.value.length||t.start();}));},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)));},t}();

'use strict';

function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

'use strict';

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0];
  }

  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({source, data}) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);

    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    }
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === 'function',
  isFunction(_global.postMessage)
);

const asap = typeof queueMicrotask !== 'undefined' ?
  queueMicrotask.bind(_global) : ( typeof process !== 'undefined' && process.nextTick || _setImmediate);

// *********************

const utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
};

'use strict';

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError$1(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}

utils$1.inherits(AxiosError$1, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});

const prototype$1 = AxiosError$1.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError$1, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError$1.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils$1.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError$1.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

// eslint-disable-next-line strict
const httpAdapter = null;

'use strict';

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData$1(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (httpAdapter || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils$1.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);

  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils$1.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError$1('Blob is not supported. Use a Buffer instead.');
    }

    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils$1.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

'use strict';

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData$1(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

'use strict';

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

'use strict';

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

'use strict';

const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

'use strict';
const URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

'use strict';

const FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

'use strict';

const Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

const platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = hasBrowserEnv && window.location.href || 'http://localhost';

const utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hasBrowserEnv: hasBrowserEnv,
  hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
  hasStandardBrowserEnv: hasStandardBrowserEnv,
  navigator: _navigator,
  origin: origin
});

const platform = {
  ...utils,
  ...platform$1
};

'use strict';

function toURLEncodedForm(data, options) {
  return toFormData$1(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

'use strict';

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};

    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

'use strict';

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);

    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils$1.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils$1.isArrayBuffer(data) ||
      utils$1.isBuffer(data) ||
      utils$1.isStream(data) ||
      utils$1.isFile(data) ||
      utils$1.isBlob(data) ||
      utils$1.isReadableStream(data)
    ) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData$1(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }

    if (data && utils$1.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

'use strict';

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
const parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

'use strict';

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils$1.isString(value)) return;

  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders$1 {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils$1.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils$1.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders$1.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils$1.freezeMethods(AxiosHeaders$1);

'use strict';

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

'use strict';

function isCancel$1(value) {
  return !!(value && value.__CANCEL__);
}

'use strict';

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError$1(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError$1.call(this, message == null ? 'canceled' : message, AxiosError$1.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils$1.inherits(CanceledError$1, AxiosError$1, {
  __CANCEL__: true
});

'use strict';

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError$1(
      'Request failed with status code ' + response.status,
      [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

'use strict';

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

'use strict';

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if ( passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return throttle(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };

    listener(data);
  }, freq);
};

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};

const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));

'use strict';

const isURLSameOrigin = platform.hasStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils$1.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })();

const cookies = platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils$1.isString(path) && cookie.push('path=' + path);

      utils$1.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  };

'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

'use strict';

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

'use strict';

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig$1(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({caseless}, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

const resolveConfig = (config) => {
  const newConfig = mergeConfig$1({}, config);

  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

  newConfig.headers = headers = AxiosHeaders$1.from(headers);

  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }

  let contentType;

  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
};

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

const xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    let {responseType, onUploadProgress, onDownloadProgress} = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;

    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }

    let request = new XMLHttpRequest();

    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError$1('Request aborted', AxiosError$1.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError$1('Network Error', AxiosError$1.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError$1(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      ([downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true));
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      ([uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress));

      request.upload.addEventListener('progress', uploadThrottled);

      request.upload.addEventListener('loadend', flushUpload);
    }

    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError$1(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(_config.url);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError$1('Unsupported protocol ' + protocol + ':', AxiosError$1.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const composeSignals = (signals, timeout) => {
  const {length} = (signals = signals ? signals.filter(Boolean) : []);

  if (timeout || length) {
    let controller = new AbortController();

    let aborted;

    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err));
      }
    };

    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError$1(`timeout ${timeout} of ms exceeded`, AxiosError$1.ETIMEDOUT));
    }, timeout);

    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    };

    signals.forEach((signal) => signal.addEventListener('abort', onabort));

    const {signal} = controller;

    signal.unsubscribe = () => utils$1.asap(unsubscribe);

    return signal;
  }
};

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };

  return new ReadableStream({
    async pull(controller) {
      try {
        const {done, value} = await iterator.next();

        if (done) {
         _onFinish();
          controller.close();
          return;
        }

        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
};

const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
);

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false
  }
};

const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;

  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    },
  }).headers.has('Content-Type');

  return duplexAccessed && !hasContentType;
});

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const supportsResponseStream = isReadableStreamSupported &&
  test(() => utils$1.isReadableStream(new Response('').body));


const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};

isFetchSupported && (((res) => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res) => res[type]() :
      (_, config) => {
        throw new AxiosError$1(`Response type '${type}' is not supported`, AxiosError$1.ERR_NOT_SUPPORT, config);
      });
  });
})(new Response));

const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }

  if(utils$1.isBlob(body)) {
    return body.size;
  }

  if(utils$1.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: 'POST',
      body,
    });
    return (await _request.arrayBuffer()).byteLength;
  }

  if(utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
    return body.byteLength;
  }

  if(utils$1.isURLSearchParams(body)) {
    body = body + '';
  }

  if(utils$1.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};

const resolveBodyLength = async (headers, body) => {
  const length = utils$1.toFiniteNumber(headers.getContentLength());

  return length == null ? getBodyLength(body) : length;
};

const fetchAdapter = isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = resolveConfig(config);

  responseType = responseType ? (responseType + '').toLowerCase() : 'text';

  let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);

  let request;

  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
  });

  let requestContentLength;

  try {
    if (
      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
    ) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });

      let contentTypeHeader;

      if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader);
      }

      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );

        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }

    if (!utils$1.isString(withCredentials)) {
      withCredentials = withCredentials ? 'include' : 'omit';
    }

    // Cloudflare Workers throws when credentials are defined
    // see https://github.com/cloudflare/workerd/issues/902
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });

    let response = await fetch(request);

    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

    if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
      const options = {};

      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });

      const responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));

      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];

      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }

    responseType = responseType || 'text';

    let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);

    !isStreamResponse && unsubscribe && unsubscribe();

    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders$1.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    })
  } catch (err) {
    unsubscribe && unsubscribe();

    if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError$1('Network Error', AxiosError$1.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      )
    }

    throw AxiosError$1.from(err, err && err.code, config, request);
  }
});

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter
};

utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;

const adapters = {
  getAdapter: (adapters) => {
    adapters = utils$1.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new AxiosError$1(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new AxiosError$1(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
};

'use strict';

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError$1(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel$1(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const VERSION$1 = "1.7.7";

'use strict';

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION$1 + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError$1(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError$1.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError$1('options must be an object', AxiosError$1.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError$1('option ' + opt + ' must be ' + result, AxiosError$1.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError$1('Unknown option ' + opt, AxiosError$1.ERR_BAD_OPTION);
    }
  }
}

const validator = {
  assertOptions,
  validators: validators$1
};

'use strict';

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios$1 {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy;

        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack;
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig$1(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils$1.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig$1(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios$1.prototype[method] = generateHTTPMethod();

  Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
});

'use strict';

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken$1 {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError$1(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken$1(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread$1(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

'use strict';

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError$1(payload) {
  return utils$1.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode$1 = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
  HttpStatusCode$1[value] = key;
});

'use strict';

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils$1.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError$1;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData$1;

// Expose AxiosError class
axios.AxiosError = AxiosError$1;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread$1;

// Expose isAxiosError
axios.isAxiosError = isAxiosError$1;

// Expose mergeConfig
axios.mergeConfig = mergeConfig$1;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios;

const generateSessionId = () => {
    const timestamp = Date.now();
    // const randomStr = Math.random().toString(36).substring(2, 8);
    // return `session-${timestamp}-${randomStr}`;
    return `session-${timestamp}`;
};
//old code
// export const validateInput = (value: string, rules?: ValidationRule[]): string => {
//   if (!rules) return '';
//   for (const rule of rules) {
//     if (rule.type === 'Required' && !value.trim()) {
//       return rule.message;
//     }
//     if (rule.type === 'CustomRule' && rule.validate && !rule.validate(value)) {
//       return rule.message;
//     }
//   }
//   return '';
// };
//new code
const validateInput = (value, rules) => {
    if (!rules)
        return '';
    // Handle single rule object
    if (!Array.isArray(rules)) {
        if (rules.type === 'Required' && !value.trim()) {
            return rules.message;
        }
        if (rules.type === 'CustomRule' && rules.validate && !rules.validate(value)) {
            return rules.message;
        }
        return '';
    }
    // Handle array of rules
    for (const rule of rules) {
        if (rule.type === 'Required' && !value.trim()) {
            return rule.message;
        }
        if (rule.type === 'CustomRule' && rule.validate && !rule.validate(value)) {
            return rule.message;
        }
    }
    return '';
};
const startTyping = async (element, text, typingSpeed, typingDelay) => {
    if (!text || !element)
        return;
    element.textContent = '';
    return new Promise(resolve => {
        const typed = new i(element, {
            strings: [text],
            typeSpeed: typingSpeed,
            startDelay: typingDelay,
            showCursor: false,
            onComplete: () => {
                setTimeout(() => {
                    resolve(typed);
                }, 500); // Add delay after typing completes
            },
        });
    });
};
/** Actually - Bedrock */
const getMockBedrockResponse1 = async (sessionId, inquiry, answersLength = 1) => {
    try {
        const url1 = 'https://4nm82v58i4.execute-api.us-east-1.amazonaws.com/dev/chat';
        const url2 = 'http://localhost:7000/chat2';
        console.log('message to api');
        console.log(inquiry);
        const response = await axios.post(url1, {
            session_id: sessionId,
            message: `${inquiry}`,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        //AXIOS PUTS ENTIRE RESPONSE IN DATA
        const data = response.data;
        console.log('data:::::');
        console.log(data);
        // const currentQuestion = data[answersLength - 1] || data[data.length - 1];
        const currentQuestion = response.data;
        // console.log('currentQuestion:::::');
        // console.log(currentQuestion);
        const progressValue = parseInt(data.progress, 10);
        console.log('progressValue:::::');
        console.log(progressValue);
        return {
            text: currentQuestion.text,
            component: currentQuestion.component,
            dataCollected: currentQuestion.data,
            progress: progressValue,
        };
    }
    catch (error) {
        console.error('Error calling NODEJS API:', error);
        throw error;
    }
};
const EditMockBedrockResponse1 = async (sessionId, previousQuestion, previousAnswer, answersLength = 1) => {
    try {
        console.log('Sending Edit Request');
        console.log('previousQuestion:::::');
        console.log(previousQuestion);
        console.log('previousAnswer:::::');
        console.log(previousAnswer);
        const response = await axios.post('https://4nm82v58i4.execute-api.us-east-1.amazonaws.com/dev/chat', {
            session_id: sessionId,
            message: `Previous question: ${previousQuestion}. Previous answer: ${previousAnswer}. Reset all information after this field in the flow. No confirmation required.`,
            // previousQuestion: `${previousQuestion}`,
            // previousAnswer: `${previousAnswer}. Reset all information after this field in the flow. No confirmation required.`,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        //AXIOS PUTS ENTIRE RESPONSE IN DATA
        const data = response.data;
        console.log('data:::::');
        console.log(data);
        // console.log('data:::::');
        // console.log(data);
        // const currentQuestion = data[answersLength - 1] || data[data.length - 1];
        const currentQuestion = response.data;
        // console.log('currentQuestion:::::');
        // console.log(currentQuestion);
        const progressValue = parseInt(data.progress, 10);
        console.log('progressValue:::::');
        console.log(progressValue);
        return {
            text: currentQuestion.text,
            component: currentQuestion.component,
            dataCollected: currentQuestion.dataCollected,
            progress: progressValue,
        };
    }
    catch (error) {
        console.error('Error calling NODEJS API:', error);
        throw error;
    }
};
//
/** MOCK OLD API */
// export const getMockBedrockResponse1 = async (sessionId: string, userName: string, inquiry: string, answersLength: number = 1): Promise<BedrockResponse> => {
//   try {
//     const response = await axios.post(
//       'http://localhost:7000/chat',
//       {
//         session_id: sessionId,
//         message: `${inquiry}`,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       },
//     );
//     //AXIOS PUTS ENTIRE RESPONSE IN DATA
//     const data = response.data;
//     // console.log('data:::::');
//     // console.log(data);
//     const currentQuestion = data[answersLength - 1] || data[data.length - 1];
//     // console.log('currentQuestion:::::');
//     // console.log(currentQuestion);
//     return {
//       text: currentQuestion.text,
//       component: currentQuestion.component,
//       dataCollected: [
//         {
//           name: userName,
//           inquiry: inquiry,
//         },
//       ],
//       progress: currentQuestion.progress,
//     };
//   } catch (error) {
//     console.error('Error calling NODEJS API:', error);
//     throw error;
//   }
// };

const insuranceChatCss = ".app-wrapper{min-height:100vh;display:flex;flex-direction:column}.container{display:flex;justify-content:center;flex:1;background:#fff;padding:76px 20px 20px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;user-select:none;overflow:hidden}.chat-interface{width:100%;max-width:600px;margin:0;padding:20px;overflow-y:auto;max-height:calc(100vh - 96px);position:relative;scroll-behavior:smooth;display:flex;flex-direction:column-reverse;justify-content:flex-start;background:#fff;gap:16px}.typing-indicator{display:flex;align-items:center;gap:4px;padding:10px 0}.typing-indicator span{width:8px;height:8px;background-color:#96151d;border-radius:50%;animation:bounce 1.4s infinite ease-in-out}.typing-indicator span:nth-child(1){animation-delay:-0.32s}.typing-indicator span:nth-child(2){animation-delay:-0.16s}.typing-indicator span:nth-child(3){animation-delay:0s}@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-8px)}}.form-container{display:flex;flex-direction:column;gap:10px;width:100%}.form-container.address{display:grid;grid-template-columns:repeat(2, 1fr);gap:10px}.form-container.address .input-wrapper:first-child{grid-column:1 / -1}.form-container.security-questions{display:flex;flex-direction:column;gap:20px}.form-container.security-questions .question-pair-0,.form-container.security-questions .question-pair-1,.form-container.security-questions .question-pair-2{display:flex;flex-direction:column;gap:10px}.form-container.default{display:flex;flex-direction:column;gap:10px}.chat-interface::-webkit-scrollbar{width:6px}.chat-interface::-webkit-scrollbar-track{background:transparent}.chat-interface::-webkit-scrollbar-thumb{background:#fff;border-radius:3px}.previous-page{display:flex;flex-direction:column;gap:16px;padding-bottom:32px;margin-bottom:32px;border-bottom:1px solid #e0e0e0;opacity:0.7;transition:opacity 0.3s ease}.previous-page:hover{opacity:1}.current-page{display:flex;flex-direction:column;gap:16px;padding-top:16px;position:relative;background:#fff}.current-page::before{content:'';position:absolute;top:-20px;left:0;right:0;height:20px;background:linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);pointer-events:none}@keyframes slideUp{from{transform:translateY(20px)}to{transform:translateY(0)}}.previous-answer{display:flex;flex-direction:column;flex:0 0 auto;}.previous-answer{text-align:left;padding:0;position:relative;min-height:60px;background:#fff;animation:slideUp 0.3s ease-out forwards;opacity:1;transition:opacity 0.3s ease, transform 0.3s ease, height 0.3s ease, margin 0.3s ease}.previous-answer.hidden{opacity:0;transform:translateY(-20px);height:0;margin:0;padding:0;overflow:hidden;pointer-events:none}.current-question{opacity:1;transform:translateY(0);transition:opacity 0.3s ease, transform 0.3s ease}.current-question{display:flex;gap:12px;min-height:60px;max-width:500px;position:relative;opacity:0;animation:fadeInStatic 0.3s ease-out forwards;background:#fff;padding-bottom:calc(100vh - 40%);margin-top:10px}.answer-header{font-size:16px;margin-bottom:8px;color:#949494;font-weight:600}.answer-content{font-size:15px;color:#4a4a4a;font-weight:600;line-height:1.5;display:flex;justify-content:space-between;align-items:center;gap:20px}.edit-button{background:transparent;color:#666;min-width:auto;padding:4px;font-size:12px;width:24px;height:24px;border-radius:4px;display:flex;align-items:center;justify-content:center;position:absolute;right:-24px;top:50%;transform:translateY(-50%);cursor:pointer;opacity:0;transition:opacity 0.2s ease}.previous-answer:hover .edit-button{opacity:1}.edit-button:hover:not(:disabled){background:#f0f0f0}.edit-button::before{content:'';display:block;width:16px;height:16px;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'%3E%3C/path%3E%3C/svg%3E\");background-size:contain;background-repeat:no-repeat}.edit-input{flex:1;min-width:160px;padding:4px 8px;border:1px solid #e0e0e0;border-radius:6px;font-size:13px}.modal-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;z-index:1000;animation:fadeIn 0.2s ease-out}.modal-dialog{background:white;border-radius:12px;padding:24px;width:90%;max-width:400px;box-shadow:0 4px 20px rgba(0, 0, 0, 0.15);animation:slideIn 0.3s ease-out}.modal-header{font-size:18px;font-weight:500;color:#2d2d2d;margin-bottom:16px;text-align:center}.modal-content{font-size:14px;color:#666;margin-bottom:24px;text-align:center;line-height:1.5}.modal-buttons{display:flex;gap:12px;justify-content:center}.modal-button{flex:1;max-width:120px;height:40px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:all 0.2s ease}.modal-button.primary{background:#c20029;color:white;border:none}.modal-button.secondary{background:transparent;color:#2d2d2d;border:1px solid #e0e0e0}.modal-button:hover{opacity:0.9}@keyframes slideIn{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeInStatic{0%{opacity:0}100%{opacity:1}}.avatar{width:35px;height:35px;border-radius:50%;overflow:hidden;flex-shrink:0}.avatar img{width:100%;height:100%;object-fit:cover}.question-content{flex:1;background:#fff}.question-text{font-size:16px;color:#666;margin-bottom:16px;line-height:1.5;font-weight:400;min-height:20px}.typed-cursor{display:none}.question-form{opacity:0;transform:translateY(10px);transition:all 0.3s ease;pointer-events:none;background:#fff}.question-form.visible{opacity:1;transform:translateY(0);pointer-events:all}.input-group{display:flex;flex-direction:column;gap:8px;margin-bottom:12px;max-width:400px}.input-groupName{display:flex;gap:8px;margin-bottom:12px;max-width:400px}.input-wrapper{flex:1;display:flex;gap:4px}input,select{border:1px solid #e0e0e0;border-radius:6px;font-size:14px;color:#2d2d2d;background:#fff;transition:all 0.2s ease;height:36px;padding:0 12px;cursor:text;appearance:none;-webkit-appearance:none}input[type='text']{width:180px}input[type='date']{width:140px;padding-right:32px;color:#96151d}input[type='date']::-webkit-calendar-picker-indicator{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2396151D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E\");background-size:16px;cursor:pointer;filter:opacity(0.8)}input[type='date']::-webkit-datetime-edit{color:#96151d}input[type='date']::-webkit-datetime-edit-fields-wrapper{color:#96151d}input[type='date']::-webkit-datetime-edit-text{color:#96151d;padding:0 2px}input[type='date']::-webkit-datetime-edit-month-field,input[type='date']::-webkit-datetime-edit-day-field,input[type='date']::-webkit-datetime-edit-year-field{color:#96151d}input[type='date']::-webkit-inner-spin-button{display:none}select{width:100%;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right 8px center;background-size:16px;padding-right:32px;cursor:pointer}.radio-group{display:flex;gap:12px;flex-wrap:wrap}.radio-label{position:relative;flex:0 1 auto;}.radio-label input[type='radio']{position:absolute;opacity:0;width:0;height:0}.radio-label span{display:inline-block;padding:0 16px;font-size:14px;color:#2d2d2d;background:#fff;border:1px solid #e0e0e0;border-radius:6px;cursor:pointer;transition:all 0.2s ease;height:36px;line-height:36px;white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;}.radio-label input[type='radio']:checked+span{background:#96151d;color:#fff;border-color:#96151d}.radio-label:hover span{border-color:#96151d}input::placeholder,select::placeholder{color:#999}input:focus,select:focus{outline:none;border-color:#96151d;box-shadow:0 0 0 1px rgba(150, 21, 29, 0.1)}.validation-error{color:#dc3545;font-size:12px;margin-top:4px;animation:fadeIn 0.3s ease-out}button{display:inline-flex;align-items:center;justify-content:center;min-width:100px;padding:12px 32px;background-color:#c20029;color:#fff;border:none;border-radius:24px;font-size:16px;font-weight:500;cursor:pointer;transition:all 0.2s ease;height:48px}button:hover:not(:disabled){background-color:#a30022}button:disabled{background-color:#f5f5f5;color:#999;cursor:not-allowed}.progress-bar{margin-top:20px;height:2px;background-color:#f0f0f0;border-radius:1px;overflow:hidden}.progress{height:100%;background-color:#96151d;transition:width 0.3s ease-in-out}input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type='number']{-moz-appearance:textfield}@media (max-width: 480px){.chat-interface{padding:16px}.input-group{flex-direction:column}.question-text{font-size:15px}.answer-header{font-size:15px}button{width:100%}.modal-dialog{width:calc(100% - 32px);padding:20px}.radio-group{width:100%;justify-content:space-between}.radio-label span{width:100%;text-align:center}}";

const InsuranceChat = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.typingSpeed = 0;
        this.typingDelay = 500;
        this.initialQuestion = "Let's begin! What's your name?";
        this.handleFirstNameInput = (e) => {
            const input = e.target;
            this.firstName = input.value;
            this.validationError = '';
        };
        this.handleLastNameInput = (e) => {
            const input = e.target;
            this.lastName = input.value;
            this.validationError = '';
        };
        // private handleInput = (e: Event) => {
        //   const input = e.target as HTMLInputElement | HTMLSelectElement;
        //   this.primaryValue = input.value;
        //   this.validationError = '';
        // };
        //handling multiple form inputs
        this.handleInput = (e, index) => {
            const input = e.target;
            this.inputValues = Object.assign(Object.assign({}, this.inputValues), { [`component-${index}`]: input.value });
            // console.log('Input Values:', this.inputValues); // Debug log
            this.validationError = '';
        };
        this.currentQuestion = undefined;
        this.answers = [];
        this.firstName = '';
        this.lastName = '';
        this.primaryValue = '';
        this.userName = '';
        this.isLoading = false;
        this.showForm = false;
        this.progress = 0;
        this.validationError = '';
        this.showEditModal = false;
        this.pendingEditIndex = -1;
        this.inputValues = {};
    }
    updateScroll() {
        const chatInterface = this.chatInterface;
        // Smoothly scroll to the bottom
        chatInterface.scrollTo({
            top: chatInterface.scrollHeight,
            behavior: 'smooth',
        });
    }
    componentWillLoad() {
        this.sessionId = generateSessionId();
        this.currentQuestion = {
            text: this.initialQuestion,
            component: {
                type: 'TextBox',
                label: 'Name',
                validationRules: [
                    {
                        type: 'Required',
                        message: 'Please enter your name',
                    },
                ],
            },
        };
    }
    componentDidLoad() {
        this.initializeTyping(this.currentQuestion.text);
        this.setupIntersectionObserver();
        this.updateScroll();
    }
    // Lifecycle method: Runs after each update
    componentDidUpdate() {
        this.updateScroll();
    }
    disconnectedCallback() {
        if (this.typed) {
            this.typed.destroy();
        }
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    setupIntersectionObserver() {
        const options = {
            root: this.el.shadowRoot.querySelector('.chat-interface'),
            threshold: 0.5,
        };
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.target.classList.contains('previous-answer')) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                }
            });
        }, options);
        // Observe all previous answers
        setTimeout(() => {
            const previousAnswers = this.el.shadowRoot.querySelectorAll('.previous-answer');
            previousAnswers.forEach(answer => this.observer.observe(answer));
        }, 0);
    }
    async initializeTyping(text) {
        // Hide form and clear any existing text
        this.showForm = false;
        const element = this.el.shadowRoot.querySelector('.question-text');
        if (!element) {
            console.error('Question text element not found');
            return;
        }
        // Clear existing content and destroy previous typed instance
        element.textContent = '';
        if (this.typed) {
            this.typed.destroy();
        }
        // Create new typed instance
        return new Promise(resolve => {
            this.typed = new i(element, {
                strings: [text],
                typeSpeed: this.typingSpeed,
                startDelay: this.typingDelay,
                showCursor: false,
                onComplete: () => {
                    setTimeout(() => {
                        this.showForm = true;
                        setTimeout(() => {
                            if (!this.userName && this.firstNameInput) {
                                this.firstNameInput.focus();
                            }
                            else if (this.userName && this.primaryInput) {
                                this.primaryInput.focus();
                            }
                            // const currentQuestion = this.el.shadowRoot.querySelector('.current-question');
                            // if (currentQuestion) {
                            //   currentQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            // }
                            const chatInterface = this.el.shadowRoot.querySelector('.chat-interface');
                            // const chatInterface = this.chatInterface;
                            // Smoothly scroll to the bottom
                            chatInterface.scrollTo({
                                top: chatInterface.scrollHeight,
                                behavior: 'smooth',
                            });
                            // this.chatInterface.scrollTop = this.chatInterface.scrollHeight;
                        }, 100);
                        resolve();
                    }, 500);
                },
            });
        });
    }
    showEditConfirmation(index) {
        this.pendingEditIndex = index;
        this.showEditModal = true;
    }
    cancelEditConfirmation() {
        this.showEditModal = false;
        this.pendingEditIndex = -1;
    }
    async confirmEdit() {
        this.showEditModal = false;
        const index = this.pendingEditIndex;
        try {
            // Keep only the answers up to the edit point
            this.answers = this.answers.slice(0, index);
            this.primaryValue = '';
            this.validationError = '';
            this.showForm = false; // Hide form while typing animation plays
            this.isLoading = true; // Reset loading state
            if (index === 0) {
                // Reset everything for name edit
                this.userName = '';
                this.firstName = '';
                this.lastName = '';
                this.progress = 0;
                // this.sessionId = `test-12345i`; // so that session id remains same
                // Set current question
                this.currentQuestion = {
                    text: this.initialQuestion,
                    component: {
                        type: 'TextBox',
                        label: 'Name',
                        validationRules: [
                            {
                                type: 'Required',
                                message: 'Please enter your name',
                            },
                        ],
                    },
                };
                // Ensure DOM is updated before initializing typing
                await new Promise(resolve => setTimeout(resolve, 0));
                await this.initializeTyping(this.initialQuestion);
            }
            else {
                // Get the previous answer to maintain context //editting the previous answer
                console.log('index::::' + index);
                const previousAnswer = this.answers[index - 1].answer;
                const previousQuestion = this.answers[index - 1].question;
                const previousQuestionType = this.answers[index - 1].type;
                console.log('previousQuestion::::' + previousQuestion);
                console.log('previousAnswer::::' + previousAnswer);
                console.log('Type::::' + previousQuestionType);
                // const mockResponse = await getMockBedrockResponse1(this.sessionId, previousAnswer, index);
                const mockResponse = await EditMockBedrockResponse1(this.sessionId, previousQuestion, previousAnswer, index);
                // console.log('mockResponse::::');
                // console.log(mockResponse);
                // Set progress based on the current position in the conversation
                this.progress = mockResponse.progress;
                this.currentQuestion = {
                    text: mockResponse.text,
                    component: mockResponse.component,
                };
                await this.initializeTyping(mockResponse.text);
            }
        }
        catch (error) {
            console.error('Error during edit:', error);
            this.isLoading = false; // Ensure loading is reset on error
        }
        finally {
            this.pendingEditIndex = -1;
            this.isLoading = false; // Ensure loading is reset in finally block
        }
    }
    //typing edit for handle submit
    async handleSubmit(e) {
        var _a, _b;
        e.preventDefault();
        if (!this.userName && (!this.firstName.trim() || !this.lastName.trim())) {
            this.validationError = 'Please enter both first and last name';
            return;
        }
        // For non-name inputs, check if we have a value
        if (this.userName) {
            // For single component
            if (!Array.isArray(this.currentQuestion.component)) {
                if (!((_a = this.inputValues['component-0']) === null || _a === void 0 ? void 0 : _a.trim())) {
                    this.validationError = 'This field is required';
                    return;
                }
            }
            // For multiple components
            else {
                const hasEmptyInputs = this.currentQuestion.component.some((_, index) => { var _a; return !((_a = this.inputValues[`component-${index}`]) === null || _a === void 0 ? void 0 : _a.trim()); });
                if (hasEmptyInputs) {
                    this.validationError = 'All fields are required';
                    return;
                }
            }
            // Validate all components if there are multiple
            if (Array.isArray(this.currentQuestion.component)) {
                for (let i = 0; i < this.currentQuestion.component.length; i++) {
                    const validationError = validateInput(this.inputValues[`component-${i}`], this.currentQuestion.component[i].validationRules);
                    if (validationError) {
                        this.validationError = validationError;
                        return;
                    }
                }
            }
            else {
                const validationError = validateInput(this.inputValues['component-0'], (_b = this.currentQuestion.component) === null || _b === void 0 ? void 0 : _b.validationRules);
                if (validationError) {
                    this.validationError = validationError;
                    return;
                }
            }
        }
        this.validationError = '';
        this.isLoading = true;
        this.showForm = false;
        try {
            if (!this.userName) {
                this.userName = `${this.firstName} ${this.lastName}`;
                const nameAnswer = {
                    question: this.currentQuestion.text,
                    answer: this.userName,
                    type: Array.isArray(this.currentQuestion.component) ? this.currentQuestion.component[0].type : this.currentQuestion.component.type,
                };
                this.answers = [nameAnswer];
                setTimeout(() => {
                    const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
                    if (newAnswer && this.observer) {
                        this.observer.observe(newAnswer);
                    }
                }, 0);
                this.firstName = '';
                this.lastName = '';
                try {
                    const response = await getMockBedrockResponse1(this.sessionId, `Hi I am ${this.userName}`, 1);
                    this.progress = response.progress;
                    this.currentQuestion = {
                        text: response.text,
                        component: response.component,
                    };
                    this.isLoading = false;
                    await this.initializeTyping(response.text);
                }
                catch (error) {
                    console.error('Error getting response:', error);
                    this.isLoading = false;
                }
                return;
            }
            // Format multiple component answers as comma-separated string
            const formattedAnswer = Array.isArray(this.currentQuestion.component)
                ? this.currentQuestion.component.map((_, index) => this.inputValues[`component-${index}`]).join(', ')
                : this.inputValues['component-0'];
            // const answer = {
            //   question: this.currentQuestion.text,
            //   answer: formattedAnswer,
            //   type: Array.isArray(this.currentQuestion.component)
            //     ? this.currentQuestion.component.find(comp => comp.type === 'Password')?.type || this.currentQuestion.component[0].type
            //     : this.currentQuestion.component.type,
            // };
            // In handleSubmit:
            const answer = {
                question: this.currentQuestion.text,
                answer: formattedAnswer,
                type: Array.isArray(this.currentQuestion.component)
                    ? this.currentQuestion.component.map(comp => comp.type).join(',') // Store as "TextBox,Password,SSN"
                    : this.currentQuestion.component.type, // Store as single type e.g. "Password"
            };
            this.answers = [...this.answers, answer];
            setTimeout(() => {
                const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
                if (newAnswer && this.observer) {
                    this.observer.observe(newAnswer);
                }
            }, 0);
            const response = await getMockBedrockResponse1(this.sessionId, formattedAnswer, this.answers.length);
            this.progress = response.progress;
            this.currentQuestion = {
                text: response.text,
                component: response.component,
            };
            this.isLoading = false;
            await this.initializeTyping(response.text);
            // Clear all input values after submission
            this.inputValues = {};
        }
        catch (error) {
            console.error('Error processing answer:', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    //new code for handle submit
    // private async handleSubmit(e: Event) {
    //   e.preventDefault();
    //   if (!this.userName && (!this.firstName.trim() || !this.lastName.trim())) {
    //     this.validationError = 'Please enter both first and last name';
    //     return;
    //   }
    //   // For non-name inputs, check if we have a value
    //   if (this.userName) {
    //     // For single component
    //     if (!Array.isArray(this.currentQuestion.component)) {
    //       if (!this.inputValues['component-0']?.trim()) {
    //         this.validationError = 'This field is required';
    //         return;
    //       }
    //     }
    //     // For multiple components
    //     else {
    //       const hasEmptyInputs = this.currentQuestion.component.some((_, index) => !this.inputValues[`component-${index}`]?.trim());
    //       if (hasEmptyInputs) {
    //         this.validationError = 'All fields are required';
    //         return;
    //       }
    //     }
    //   }
    //   const validationError = this.userName
    //     ? validateInput(
    //         this.inputValues['component-0'],
    //         Array.isArray(this.currentQuestion.component) ? this.currentQuestion.component[0].validationRules : this.currentQuestion.component?.validationRules,
    //       )
    //     : '';
    //   if (validationError) {
    //     this.validationError = validationError;
    //     return;
    //   }
    //   this.validationError = '';
    //   this.isLoading = true;
    //   this.showForm = false;
    //   try {
    //     if (!this.userName) {
    //       this.userName = `${this.firstName} ${this.lastName}`;
    //       const nameAnswer = {
    //         question: this.currentQuestion.text,
    //         answer: this.userName,
    //         type: Array.isArray(this.currentQuestion.component) ? this.currentQuestion.component[0].type : this.currentQuestion.component.type,
    //       };
    //       this.answers = [nameAnswer];
    //       setTimeout(() => {
    //         const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
    //         if (newAnswer && this.observer) {
    //           this.observer.observe(newAnswer);
    //         }
    //       }, 0);
    //       this.firstName = '';
    //       this.lastName = '';
    //       this.isLoading = false;
    //       await new Promise(resolve => setTimeout(resolve, 100));
    //       try {
    //         const response = await getMockBedrockResponse1(this.sessionId, ' ', `Hi I am ${this.userName}`, 1);
    //         this.progress = response.progress;
    //         this.currentQuestion = {
    //           text: response.text,
    //           component: response.component,
    //         };
    //         await this.initializeTyping(response.text);
    //         this.isLoading = false;
    //       } catch (error) {
    //         console.error('Error getting response:', error);
    //         this.isLoading = false;
    //       }
    //       return;
    //     }
    //     // Format multiple component answers as comma-separated string
    //     const formattedAnswer = Array.isArray(this.currentQuestion.component)
    //       ? this.currentQuestion.component.map((_, index) => this.inputValues[`component-${index}`]).join(', ')
    //       : this.inputValues['component-0'];
    //     const answer = {
    //       question: this.currentQuestion.text,
    //       answer: formattedAnswer,
    //       type: Array.isArray(this.currentQuestion.component)
    //         ? this.currentQuestion.component.find(comp => comp.type === 'Password')?.type || this.currentQuestion.component[0].type
    //         : this.currentQuestion.component.type,
    //     };
    //     //old code
    //     // Format multiple component answers as comma-separated string
    //     // const formattedAnswer = Array.isArray(this.currentQuestion.component)
    //     //   ? this.currentQuestion.component.map((_, index) => this.inputValues[`component-${index}`]).join(', ')
    //     //   : this.inputValues['component-0'];
    //     // const answer = {
    //     //   question: this.currentQuestion.text,
    //     //   answer: formattedAnswer,
    //     //   type: Array.isArray(this.currentQuestion.component) ? this.currentQuestion.component[0].type : this.currentQuestion.component.type,
    //     // };
    //     this.answers = [...this.answers, answer];
    //     setTimeout(() => {
    //       const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
    //       if (newAnswer && this.observer) {
    //         this.observer.observe(newAnswer);
    //       }
    //     }, 0);
    //     await new Promise(resolve => setTimeout(resolve, 1000));
    //     const response = await getMockBedrockResponse1(this.sessionId, this.userName, formattedAnswer, this.answers.length);
    //     this.progress = response.progress;
    //     this.currentQuestion = {
    //       text: response.text,
    //       component: response.component,
    //     };
    //     await this.initializeTyping(response.text);
    //     // Clear all input values after submission
    //     this.inputValues = {};
    //   } catch (error) {
    //     console.error('Error processing answer:', error);
    //   } finally {
    //     this.isLoading = false;
    //   }
    // }
    // old code for handle submit
    // private async handleSubmit(e: Event) {
    //   e.preventDefault();
    //   if (!this.userName && (!this.firstName.trim() || !this.lastName.trim())) {
    //     this.validationError = 'Please enter both first and last name';
    //     return;
    //   }
    //   if (this.userName && !this.primaryValue.trim()) return;
    //   // if (this.userName && !this.primaryValue.trim()) {
    //   //   const component = Array.isArray(this.currentQuestion.component)
    //   //     ? this.currentQuestion.component[0]
    //   //     : this.currentQuestion.component;
    //   //   if (component?.validationRules?.type === 'Required') {
    //   //     this.validationError = component.validationRules.message;
    //   //     return;
    //   //   }
    //   // }
    //   const validationError = this.userName ? validateInput(this.primaryValue, this.currentQuestion.component?.validationRules) : '';
    //   if (validationError) {
    //     this.validationError = validationError;
    //     return;
    //   }
    //   this.validationError = '';
    //   this.isLoading = true;
    //   this.showForm = false;
    //   try {
    //     if (!this.userName) {
    //       this.userName = `${this.firstName} ${this.lastName}`;
    //       const nameAnswer = {
    //         question: this.currentQuestion.text,
    //         answer: this.userName,
    //         type: this.currentQuestion.component.type,
    //       };
    //       this.answers = [nameAnswer];
    //       // Observe the new answer after a short delay to ensure it's in the DOM
    //       setTimeout(() => {
    //         const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
    //         if (newAnswer && this.observer) {
    //           this.observer.observe(newAnswer);
    //         }
    //       }, 0);
    //       this.firstName = '';
    //       this.lastName = '';
    //       this.isLoading = false;
    //       await new Promise(resolve => setTimeout(resolve, 100));
    //       /* First Call to Bedrock API - for getting initial response */
    //       try {
    //         const response = await getMockBedrockResponse1(this.sessionId, ' ', `Hi I am ${this.userName}`, 1);
    //         this.progress = response.progress;
    //         this.currentQuestion = {
    //           text: response.text,
    //           component: response.component,
    //         };
    //         await this.initializeTyping(response.text);
    //         this.isLoading = false;
    //       } catch (error) {
    //         console.error('Error getting response:', error);
    //         this.isLoading = false;
    //       }
    //       return;
    //     }
    //     const answer = {
    //       question: this.currentQuestion.text,
    //       answer: this.primaryValue,
    //       type: this.currentQuestion.component.type,
    //     };
    //     this.answers = [...this.answers, answer];
    //     // Observe the new answer after a short delay to ensure it's in the DOM
    //     setTimeout(() => {
    //       const newAnswer = this.el.shadowRoot.querySelector('.previous-answer:last-child');
    //       if (newAnswer && this.observer) {
    //         this.observer.observe(newAnswer);
    //       }
    //     }, 0);
    //     if (this.answers.length <= 6) {
    //       //entry into the first call to bedrock response
    //       // console.log('hit agian' + this.answers.length);
    //       await new Promise(resolve => setTimeout(resolve, 1000));
    //       const mockResponse = await getMockBedrockResponse1(this.sessionId, this.userName, this.primaryValue, this.answers.length);
    //       this.progress = mockResponse.progress;
    //       this.currentQuestion = {
    //         text: mockResponse.text,
    //         component: mockResponse.component,
    //       };
    //       await this.initializeTyping(mockResponse.text);
    //     } else {
    //       await new Promise(resolve => setTimeout(resolve, 1000));
    //       const finalText = `Thank you ${this.userName}! We'll process your information and get back to you shortly.`;
    //       this.currentQuestion = {
    //         text: finalText,
    //       };
    //       this.progress = 100;
    //       await this.initializeTyping(finalText);
    //     }
    //     this.primaryValue = '';
    //   } catch (error) {
    //     console.error('Error processing answer:', error);
    //   } finally {
    //     this.isLoading = false;
    //     // this.chatInterface.scrollTop = this.chatInterface.scrollHeight;
    //   }
    // }
    getComponentPattern() {
        const components = this.currentQuestion.component;
        if (!Array.isArray(components))
            return 'default';
        // Check for address pattern (4 TextBoxes)
        if (components.length === 4 && components.every(c => c.type === 'TextBox') && components.some(c => c.label.toLowerCase().includes('street'))) {
            return 'address';
        }
        // Check for security questions pattern (pairs of Select/Dropdown and TextBox)
        if (components.length % 2 === 0 && components.every((c, i) => (i % 2 === 0 ? c.type === 'Select' || c.type === 'DropDown' : c.type === 'TextBox'))) {
            return 'security-questions';
        }
        return 'default';
    }
    //for adjusting css
    renderFormComponent() {
        if (!Array.isArray(this.currentQuestion.component) || this.currentQuestion.component.length === 0)
            return null;
        const pattern = this.getComponentPattern();
        const containerClass = `form-container ${pattern}`;
        return (h("div", { class: containerClass }, this.currentQuestion.component.map((component, index) => {
            var _a, _b;
            const wrapperClass = pattern === 'security-questions' ? `input-wrapper question-pair-${Math.floor(index / 2)}` : 'input-wrapper';
            switch (component.type) {
                case 'TextBox':
                    return (h("div", { class: wrapperClass, key: `textbox-${index}` }, h("input", { type: "text", placeholder: component.format || component.label, value: this.inputValues[`component-${index}`] || '', onInput: e => this.handleInput(e, index), ref: el => (this.primaryInput = el), required: true })));
                case 'DropDown':
                case 'Select':
                    return (h("div", { class: wrapperClass, key: `select-${index}` }, h("select", { onInput: e => this.handleInput(e, index), ref: el => (this.primaryInput = el), required: true }, h("option", { value: "" }, "Select ", component.label), (_a = component.options) === null || _a === void 0 ? void 0 :
                        _a.map(option => (h("option", { value: option, selected: this.inputValues[`component-${index}`] === option }, option))))));
                case 'RadioButton':
                case 'Radio':
                    return (h("div", { class: `${wrapperClass} radio-group`, key: `radio-${index}` }, (_b = component.options) === null || _b === void 0 ? void 0 : _b.map(option => (h("label", { class: "radio-label", key: `${option}-${index}` }, h("input", { type: "radio", name: `radio-option-${index}`, value: option, checked: this.inputValues[`component-${index}`] === option, onInput: e => this.handleInput(e, index) }), h("span", null, option))))));
                case 'DatePicker':
                    const twentyYearsAgo = new Date();
                    twentyYearsAgo.setFullYear(twentyYearsAgo.getFullYear() - 20);
                    const max = twentyYearsAgo.toISOString().split('T')[0];
                    return (h("div", { class: wrapperClass, key: `date-picker-${index}` }, h("input", { type: "date", max: max, value: this.inputValues[`component-${index}`] || '', onInput: e => this.handleInput(e, index), ref: el => (this.primaryInput = el), required: true })));
                case 'Email':
                    return (h("div", { class: wrapperClass, key: `email-${index}` }, h("input", { type: "email", placeholder: component.label || 'Enter email address', value: this.inputValues[`component-${index}`] || '', onInput: e => this.handleInput(e, index), ref: el => (this.primaryInput = el), required: true, pattern: "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}", title: "Please enter a valid email address" })));
                case 'Password':
                    return (h("div", { class: wrapperClass, key: `password-${index}` }, h("input", { type: "password", placeholder: component.label || 'Enter Password', value: this.inputValues[`component-${index}`] || '', onInput: e => this.handleInput(e, index), ref: el => (this.primaryInput = el), required: true, minLength: 8, pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", title: "Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, and a number." })));
                case 'SSN':
                    const formatSSN = event => {
                        let value = event.target.value.replace(/\D/g, '');
                        if (value.length > 3 && value.length <= 5) {
                            value = value.replace(/^(\d{3})(\d{0,2})/, '$1-$2');
                        }
                        else if (value.length > 5) {
                            value = value.replace(/^(\d{3})(\d{2})(\d{0,4})/, '$1-$2-$3');
                        }
                        event.target.value = value;
                        this.inputValues[`component-${index}`] = value;
                        this.handleInput(event, index);
                    };
                    return (h("div", { class: wrapperClass, key: `ssn-${index}` }, h("input", { type: "text", placeholder: component.label || 'Enter SSN', value: this.inputValues[`component-${index}`] || '', onInput: formatSSN, ref: el => (this.primaryInput = el), required: true, maxLength: 11, pattern: "\\d{3}-\\d{2}-\\d{4}", title: "SSN must be in the format ###-##-####" })));
                default:
                    return null;
            }
        })));
    }
    // working new multiple form inputs
    // private renderFormComponent() {
    //   if (!Array.isArray(this.currentQuestion.component) || this.currentQuestion.component.length === 0) return null;
    //   const pattern = this.getComponentPattern();
    //   const containerClass = `form-container ${pattern}`;
    //   return this.currentQuestion.component.map((component, index) => {
    //     switch (component.type) {
    //       case 'TextBox':
    //         return (
    //           <div class="input-wrapper" key={`textbox-${index}`}>
    //             <input
    //               type="text"
    //               placeholder={component.format || component.label}
    //               value={this.inputValues[`component-${index}`] || ''}
    //               onInput={e => {
    //                 // console.log('Input event:', e); // Debug log
    //                 this.handleInput(e, index);
    //               }}
    //               ref={el => (this.primaryInput = el)}
    //               required
    //             />
    //           </div>
    //         );
    //       case 'DropDown':
    //       case 'Select':
    //         return (
    //           <div class="input-wrapper" key={`select-${index}`}>
    //             <select onInput={e => this.handleInput(e, index)} ref={el => (this.primaryInput = el)} required>
    //               <option value="">Select {component.label}</option>
    //               {component.options?.map(option => (
    //                 <option value={option} selected={this.inputValues[`component-${index}`] === option}>
    //                   {option}
    //                 </option>
    //               ))}
    //             </select>
    //           </div>
    //         );
    //       case 'RadioButton':
    //       case 'Radio':
    //         return (
    //           <div class="radio-group" key={`radio-${index}`}>
    //             {component.options?.map(option => (
    //               <label class="radio-label" key={`${option}-${index}`}>
    //                 <input
    //                   type="radio"
    //                   name={`radio-option-${index}`}
    //                   value={option}
    //                   checked={this.inputValues[`component-${index}`] === option}
    //                   onInput={e => this.handleInput(e, index)}
    //                 />
    //                 <span>{option}</span>
    //               </label>
    //             ))}
    //           </div>
    //         );
    //       case 'DatePicker':
    //         const twentyYearsAgo = new Date();
    //         twentyYearsAgo.setFullYear(twentyYearsAgo.getFullYear() - 20);
    //         const max = twentyYearsAgo.toISOString().split('T')[0];
    //         return (
    //           <div class="input-wrapper" key={`date-picker-${index}`}>
    //             <input
    //               type="date"
    //               max={max}
    //               value={this.inputValues[`component-${index}`] || ''}
    //               onInput={e => this.handleInput(e, index)}
    //               ref={el => (this.primaryInput = el)}
    //               required
    //             />
    //           </div>
    //         );
    //       case 'Email':
    //         return (
    //           <div class="input-wrapper" key={`email-${index}`}>
    //             <input
    //               type="email"
    //               placeholder={component.label || 'Enter email address'}
    //               value={this.inputValues[`component-${index}`] || ''}
    //               onInput={e => this.handleInput(e, index)}
    //               ref={el => (this.primaryInput = el)}
    //               required
    //               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    //               title="Please enter a valid email address"
    //             />
    //           </div>
    //         );
    //       case 'Password':
    //         return (
    //           <div class="input-wrapper" key={`password-${index}`}>
    //             <input
    //               type="password"
    //               placeholder={component.label || 'Enter Password'}
    //               value={this.inputValues[`component-${index}`] || ''}
    //               onInput={e => this.handleInput(e, index)}
    //               ref={el => (this.primaryInput = el)}
    //               required
    //               minLength={8}
    //               pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    //               title="Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, and a number."
    //             />
    //           </div>
    //         );
    //       case 'SSN':
    //         const formatSSN = event => {
    //           let value = event.target.value.replace(/\D/g, '');
    //           if (value.length > 3 && value.length <= 5) {
    //             value = value.replace(/^(\d{3})(\d{0,2})/, '$1-$2');
    //           } else if (value.length > 5) {
    //             value = value.replace(/^(\d{3})(\d{2})(\d{0,4})/, '$1-$2-$3');
    //           }
    //           event.target.value = value;
    //           this.inputValues[`component-${index}`] = value;
    //           this.handleInput(event, index);
    //         };
    //         return (
    //           <div class="input-wrapper" key={`ssn-${index}`}>
    //             <input
    //               type="text"
    //               placeholder={component.label || 'Enter SSN'}
    //               value={this.inputValues[`component-${index}`] || ''}
    //               onInput={formatSSN}
    //               ref={el => (this.primaryInput = el)}
    //               required
    //               maxLength={11}
    //               pattern="\d{3}-\d{2}-\d{4}"
    //               title="SSN must be in the format ###-##-####"
    //             />
    //           </div>
    //         );
    //       default:
    //         return null;
    //     }
    //   });
    // }
    /** OLD CODE TO RENDER ONLY ONE ELEMENT */
    // private renderFormComponent() {
    //   if (!this.currentQuestion.component) return null;
    //   switch (this.currentQuestion.component.type) {
    //     case 'TextBox':
    //       return (
    //         <div class="input-wrapper">
    //           <input
    //             type="text"
    //             placeholder={this.currentQuestion.component.format || this.currentQuestion.component.label}
    //             value={this.primaryValue}
    //             onInput={this.handleInput}
    //             ref={el => (this.primaryInput = el)}
    //             required
    //           />
    //         </div>
    //       );
    //     case 'Select':
    //       return (
    //         <div class="input-wrapper">
    //           <select onInput={this.handleInput} ref={el => (this.primaryInput = el)} required>
    //             <option value="">Select {this.currentQuestion.component.label}</option>
    //             {this.currentQuestion.component.options?.map(option => (
    //               <option value={option} selected={this.primaryValue === option}>
    //                 {option}
    //               </option>
    //             ))}
    //           </select>
    //         </div>
    //       );
    //     case 'Radio':
    //       return (
    //         <div class="radio-group">
    //           {this.currentQuestion.component.options?.map(option => (
    //             <label class="radio-label">
    //               <input type="radio" name="radio-option" value={option} checked={this.primaryValue === option} onInput={this.handleInput} />
    //               <span>{option}</span>
    //             </label>
    //           ))}
    //         </div>
    //       );
    //     case 'DatePicker':
    //       // const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    //       const twentyYearsAgo = new Date();
    //       twentyYearsAgo.setFullYear(twentyYearsAgo.getFullYear() - 20);
    //       const max = twentyYearsAgo.toISOString().split('T')[0];
    //       return (
    //         <div class="input-wrapper">
    //           <input type="date" max={max} value={this.primaryValue} onInput={this.handleInput} ref={el => (this.primaryInput = el)} required />
    //         </div>
    //       );
    //     case 'Email':
    //       return (
    //         <div class="input-wrapper">
    //           <input
    //             type="email"
    //             placeholder={this.currentQuestion.component.label || 'Enter email address'}
    //             value={this.primaryValue}
    //             onInput={this.handleInput}
    //             ref={el => (this.primaryInput = el)}
    //             required
    //             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    //             title="Please enter a valid email address"
    //           />
    //         </div>
    //       );
    //     case 'Password':
    //       return (
    //         <div class="input-wrapper">
    //           <input
    //             type="password"
    //             placeholder={this.currentQuestion.component.label || 'Enter Password'}
    //             value={this.primaryValue}
    //             onInput={this.handleInput}
    //             ref={el => (this.primaryInput = el)}
    //             required
    //             minLength={8} // Example: Minimum length for password validation
    //             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" // Example: Regex for password strength
    //             title="Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, and a number."
    //           />
    //         </div>
    //       );
    //     case 'SSN':
    //       const formatSSN = event => {
    //         let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    //         if (value.length > 3 && value.length <= 5) {
    //           value = value.replace(/^(\d{3})(\d{0,2})/, '$1-$2'); // Format as ###-##
    //         } else if (value.length > 5) {
    //           value = value.replace(/^(\d{3})(\d{2})(\d{0,4})/, '$1-$2-$3'); // Format as ###-##-####
    //         }
    //         event.target.value = value; // Update the input value
    //         this.primaryValue = value; // Update the internal state
    //         this.handleInput(event); // Call the existing input handler
    //       };
    //       return (
    //         <div class="input-wrapper">
    //           <input
    //             type="text"
    //             placeholder={this.currentQuestion.component.label || 'Enter SSN'}
    //             value={this.primaryValue}
    //             onInput={formatSSN}
    //             ref={el => (this.primaryInput = el)}
    //             required
    //             maxLength={11} // SSN Format: ###-##-####
    //             pattern="\d{3}-\d{2}-\d{4}" // Regex to enforce SSN format
    //             title="SSN must be in the format ###-##-####"
    //           />
    //         </div>
    //       );
    //     default:
    //       return null;
    //   }
    // }
    //masks ssn
    maskSSN(ssn) {
        if (!ssn || typeof ssn !== 'string')
            return '';
        // Mask all but the last 4 digits: XXX-XX-####
        return ssn.replace(/^\d{3}-\d{2}-(\d{4})$/, 'XXX-XX-$1');
    }
    //masks password
    maskPassword(password) {
        if (!password || typeof password !== 'string')
            return '';
        return '*'.repeat(password.length); // Replace each character with '*'
    }
    // private renderPreviousAnswers() {
    //   const reversedAnswers = [...this.answers].reverse();
    //   return reversedAnswers.map((answer, index) => {
    //     const originalIndex = this.answers.length - 1 - index;
    //     let displayAnswer = answer.answer.toString();
    //     // If answer contains multiple parts (comma-separated)
    //     if (displayAnswer.includes(', ')) {
    //       const parts = displayAnswer.split(', ');
    //       const types = Array.isArray(this.currentQuestion.component) ? this.currentQuestion.component.map(comp => comp.type) : [this.currentQuestion.component?.type];
    //       displayAnswer = parts
    //         .map((part, i) => {
    //           // Only mask if the type is specifically SSN or Password
    //           if (types[i] === 'SSN') {
    //             return this.maskSSN(part);
    //           } else if (types[i] === 'Password') {
    //             return this.maskPassword(part);
    //           }
    //           return part; // Leave all other parts unchanged
    //         })
    //         .join(', ');
    //     } else {
    //       // Single answer - mask only if type is SSN or Password
    //       if (answer.type === 'SSN') {
    //         displayAnswer = this.maskSSN(displayAnswer);
    //       } else if (answer.type === 'Password') {
    //         displayAnswer = this.maskPassword(displayAnswer);
    //       }
    //     }
    //     return (
    //       <div class="previous-answer" key={originalIndex}>
    //         <div class="answer-header">{answer.question}</div>
    //         <div class="answer-content">
    //           <span>{displayAnswer}</span>
    //           <button class="edit-button" onClick={() => this.showEditConfirmation(originalIndex)} aria-label="Edit answer"></button>
    //         </div>
    //       </div>
    //     );
    //   });
    // }
    renderPreviousAnswers() {
        const reversedAnswers = [...this.answers].reverse();
        return reversedAnswers.map((answer, index) => {
            const originalIndex = this.answers.length - 1 - index;
            let displayAnswer = answer.answer.toString();
            // If answer contains multiple parts (comma-separated)
            if (displayAnswer.includes(', ')) {
                const parts = displayAnswer.split(', ');
                const types = answer.type.split(','); // Split "TextBox,Password,SSN" into ["TextBox", "Password", "SSN"]
                displayAnswer = parts
                    .map((part, i) => {
                    if (types[i] === 'SSN') {
                        return this.maskSSN(part);
                    }
                    else if (types[i] === 'Password') {
                        return this.maskPassword(part);
                    }
                    return part;
                })
                    .join(', ');
            }
            else {
                // Single answer - mask only if type is SSN or Password
                if (answer.type === 'SSN') {
                    displayAnswer = this.maskSSN(displayAnswer);
                }
                else if (answer.type === 'Password') {
                    displayAnswer = this.maskPassword(displayAnswer);
                }
            }
            return (h("div", { class: "previous-answer", key: originalIndex }, h("div", { class: "answer-header" }, answer.question), h("div", { class: "answer-content" }, h("span", null, displayAnswer), h("button", { class: "edit-button", onClick: () => this.showEditConfirmation(originalIndex), "aria-label": "Edit answer" }))));
        });
    }
    // private renderPreviousAnswers() {
    //   const reversedAnswers = [...this.answers].reverse();
    //   return reversedAnswers.map((answer, index) => {
    //     const originalIndex = this.answers.length - 1 - index;
    //     // Handle comma-separated answers
    //     const displayAnswer = answer.answer
    //       .toString()
    //       .split(', ')
    //       .map((part, partIndex) => {
    //         // Check if this part should be masked based on component type
    //         if (Array.isArray(this.currentQuestion.component)) {
    //           const componentType = this.currentQuestion.component[partIndex]?.type;
    //           if (componentType === 'Password') {
    //             return this.maskPassword(part);
    //           }
    //           if (componentType === 'SSN') {
    //             return this.maskSSN(part);
    //           }
    //         }
    //         return part;
    //       })
    //       .join(', ');
    //     // let displayAnswer = answer.answer.toString();
    //     // // Check the answer type directly
    //     // if (answer.type === 'Password') {
    //     //   displayAnswer = this.maskPassword(displayAnswer);
    //     // } else if (answer.type === 'SSN') {
    //     //   displayAnswer = this.maskSSN(displayAnswer);
    //     // }
    //     return (
    //       <div class="previous-answer" key={originalIndex}>
    //         <div class="answer-header">{answer.question}</div>
    //         <div class="answer-content">
    //           <span>{displayAnswer}</span>
    //           <button class="edit-button" onClick={() => this.showEditConfirmation(originalIndex)} aria-label="Edit answer"></button>
    //         </div>
    //       </div>
    //     );
    //   });
    // }
    renderCurrentQuestion() {
        var _a;
        if (!this.currentQuestion)
            return null;
        return (h("div", { class: "current-question" }, h("div", { class: "avatar" }, h("img", { src: "/assets/image/Bot Avatar 2.png", alt: "Agent avatar" })), h("div", { class: "question-content" }, h("div", { class: "question-text", style: { display: this.isLoading ? 'none' : 'block' } }), this.isLoading && (h("div", { class: "typing-indicator" }, h("span", null), h("span", null), h("span", null))), !this.isLoading && this.currentQuestion.component && this.showForm && (h("form", { onSubmit: e => this.handleSubmit(e), class: "question-form visible" }, h("div", { class: "input-groupName" }, !this.userName
            ? [
                h("div", { class: "input-wrapper" }, h("input", { type: "text", placeholder: "First name", value: this.firstName, onInput: this.handleFirstNameInput, ref: el => (this.firstNameInput = el), required: true })),
                h("div", { class: "input-wrapper" }, h("input", { type: "text", placeholder: "Last name", value: this.lastName, onInput: this.handleLastNameInput, required: true })),
            ]
            : this.renderFormComponent()), this.validationError && h("div", { class: "validation-error" }, this.validationError), h("button", { type: "submit", disabled: this.isLoading ||
                (!this.userName
                    ? !this.firstName.trim() || !this.lastName.trim()
                    : Array.isArray(this.currentQuestion.component)
                        ? this.currentQuestion.component.some((_, index) => { var _a; return !((_a = this.inputValues[`component-${index}`]) === null || _a === void 0 ? void 0 : _a.trim()); })
                        : !((_a = this.inputValues['component-0']) === null || _a === void 0 ? void 0 : _a.trim())) }, this.isLoading ? 'Loading...' : this.answers.length === 0 ? 'Get started' : 'Next'))), this.progress > 0 && (h("div", { class: "progress-bar" }, h("div", { class: "progress", style: { width: `${this.progress}%` } }))))));
    }
    // private renderCurrentQuestion() {
    //   if (!this.currentQuestion) return null;
    //   return (
    //     <div class="current-question">
    //       <div class="avatar">
    //         {/* <img src="https://www.egain.com/chatbot/robin/Chatbot-1-big.jpg" alt="Agent avatar" /> */}
    //         <img src="https://raw.githubusercontent.com/dpmanek/images/refs/heads/main/Deep%20Manek%20image.png" alt="Agent avatar" />
    //       </div>
    //       <div class="question-content">
    //         <div class="question-text"></div>
    //         {this.currentQuestion.component && this.showForm && (
    //           <form onSubmit={e => this.handleSubmit(e)} class="question-form visible">
    //             <div class="input-groupName">
    //               {!this.userName
    //                 ? [
    //                     <div class="input-wrapper">
    //                       <input type="text" placeholder="First name" value={this.firstName} onInput={this.handleFirstNameInput} ref={el => (this.firstNameInput = el)} required />
    //                     </div>,
    //                     <div class="input-wrapper">
    //                       <input type="text" placeholder="Last name" value={this.lastName} onInput={this.handleLastNameInput} required />
    //                     </div>,
    //                   ]
    //                 : this.renderFormComponent()}
    //             </div>
    //             {this.validationError && <div class="validation-error">{this.validationError}</div>}
    //             <button
    //               type="submit"
    //               disabled={
    //                 this.isLoading ||
    //                 (!this.userName
    //                   ? !this.firstName.trim() || !this.lastName.trim()
    //                   : Array.isArray(this.currentQuestion.component)
    //                   ? this.currentQuestion.component.some((_, index) => !this.inputValues[`component-${index}`]?.trim())
    //                   : !this.inputValues['component-0']?.trim())
    //               }
    //             >
    //               {this.isLoading ? 'Loading...' : this.answers.length === 0 ? 'Get started' : 'Next'}
    //             </button>
    //           </form>
    //         )}
    //         {this.progress > 0 && (
    //           <div class="progress-bar">
    //             <div class="progress" style={{ width: `${this.progress}%` }}></div>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   );
    // }
    // private renderCurrentQuestion() {
    //   if (!this.currentQuestion) return null;
    //   return (
    //     <div class="current-question">
    //       <div class="avatar">
    //         {/* <img src="https://www.egain.com/chatbot/robin/Chatbot-1-big.jpg" alt="Agent avatar" /> */}
    //         <img src="https://raw.githubusercontent.com/dpmanek/images/refs/heads/main/Deep%20Manek%20image.png" alt="Agent avatar" />
    //       </div>
    //       <div class="question-content">
    //         <div class="question-text"></div>
    //         {this.currentQuestion.component && this.showForm && (
    //           <form onSubmit={e => this.handleSubmit(e)} class="question-form visible">
    //             <div class="input-group">
    //               {!this.userName
    //                 ? [
    //                     <div class="input-wrapper">
    //                       <input type="text" placeholder="First name" value={this.firstName} onInput={this.handleFirstNameInput} ref={el => (this.firstNameInput = el)} required />
    //                     </div>,
    //                     <div class="input-wrapper">
    //                       <input type="text" placeholder="Last name" value={this.lastName} onInput={this.handleLastNameInput} required />
    //                     </div>,
    //                   ]
    //                 : this.renderFormComponent()}
    //             </div>
    //             {this.validationError && <div class="validation-error">{this.validationError}</div>}
    //             <button
    //               type="submit"
    //               disabled={this.isLoading || (!this.userName && (!this.firstName.trim() || !this.lastName.trim())) || (this.userName && !this.primaryValue.trim())}
    //             >
    //               {this.isLoading ? 'Loading...' : this.answers.length === 0 ? 'Get started' : 'Next'}
    //             </button>
    //           </form>
    //         )}
    //         {this.progress > 0 && (
    //           <div class="progress-bar">
    //             <div class="progress" style={{ width: `${this.progress}%` }}></div>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   );
    // }
    renderEditModal() {
        if (!this.showEditModal)
            return null;
        return (h("div", { class: "modal-overlay" }, h("div", { class: "modal-dialog" }, h("div", { class: "modal-header" }, "Edit question?"), h("div", { class: "modal-content" }, "If you do, you'll need to re-answer all questions that follow it"), h("div", { class: "modal-buttons" }, h("button", { class: "modal-button secondary", onClick: () => this.cancelEditConfirmation() }, "Cancel"), h("button", { class: "modal-button primary", onClick: () => this.confirmEdit() }, "Yes, Edit")))));
    }
    render() {
        return (h("div", { key: '552271188f1e6cc8da64214ccc88e0a8e4b07ddd', class: "app-wrapper" }, h("div", { key: 'daf2e0d0eddf432749947476e0dff891c4ea523b', class: "container" }, h("app-navbar", { key: '5b00bba33bd26d7c65e73d82e2d07da6b660c97b' }), h("div", { key: '2de0b38948db2bf06d4bba081f582092beefce87', class: "chat-interface", ref: el => (this.chatInterface = el) }, this.renderCurrentQuestion(), this.renderPreviousAnswers()), this.renderEditModal())));
    }
    get el() { return getElement(this); }
};
InsuranceChat.style = insuranceChatCss;

export { InsuranceChat as insurance_chat };

//# sourceMappingURL=insurance-chat.entry.js.map