/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* blah blah blah */
*{
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}

html,
body{
    height: 100%;
    width: 100%;
}

.content{
    width: 100%;
    height: 100%;
}

.introPage{
    width: 100%;
    height: 100%;
    display: flexbox;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

button{
    margin: 0;
    padding: 0;
}

.container {
    resize: both;
    overflow: auto;
    display: grid;
    gap: 1px;
    padding: 2px;
    border: 1px solid grey;
    background-color: skyblue;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(10, 1fr);
}

.plot {
    background-color: #444;
    text-align: center;
    color: #ddd;
    font-family: sans-serif;
    font-size: 1.5rem;
    padding: 12px;
}

.colorIntroShips{
    background-color: yellow;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;IACI,UAAU;IACV,SAAS;IACT,yCAAyC;AAC7C;;AAEA;;IAEI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,aAAa;IACb,QAAQ;IACR,YAAY;IACZ,sBAAsB;IACtB,yBAAyB;IACzB,mCAAmC;IACnC,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":["/* blah blah blah */\n*{\n    padding: 0;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nhtml,\nbody{\n    height: 100%;\n    width: 100%;\n}\n\n.content{\n    width: 100%;\n    height: 100%;\n}\n\n.introPage{\n    width: 100%;\n    height: 100%;\n    display: flexbox;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\nbutton{\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    resize: both;\n    overflow: auto;\n    display: grid;\n    gap: 1px;\n    padding: 2px;\n    border: 1px solid grey;\n    background-color: skyblue;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.plot {\n    background-color: #444;\n    text-align: center;\n    color: #ddd;\n    font-family: sans-serif;\n    font-size: 1.5rem;\n    padding: 12px;\n}\n\n.colorIntroShips{\n    background-color: yellow;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((module) => {

function Ship(shipNo, length) {
  let hits = 0;
  let shipCoordinate = [];
  let sunk = false;
  let placed = false;

  function hit() {
    hits++;
  }

  function isSunk() {
    if (hits == length) {
      sunk = true;
    }
  }

  return {
    shipNo,
    length,
    hits,
    placed,
    shipCoordinate,
    sunk,
    hit,
    isSunk,
  };
}

function GameBoard(gamePlacement) {
  let start = 0;
  let end = 0;
  let missedAttacks = [];
  let placedPlots = [];
  let unPlayablePlots = [];

  function shipPlacement(ship, placement) {
    console.log(placement);
    ship.shipCoordinate.push(placement[0]);
    ship.shipCoordinate.push(placement[1]);
    if (placement[0][0] != placement[1][0]) {
      start = placement[0][0];
      end = placement[1][0];
      let col = placement[0][1];
      for (start; start <= end; start++) {
        gamePlacement[start][col] = ship.shipNo;
        placedPlots.push([start, col]);
        if (col + 1 < 10) {
          unPlayablePlots.push([start, col + 1]);
        }
        if (col - 1 >= 0) {
          unPlayablePlots.push([start, col - 1]);
        }
      }

      if (placement[0][0] - 1 >= 0) {
        unPlayablePlots.push([placement[0][0] - 1, col]);
      }
      if (placement[1][0] + 1 < 10) {
        unPlayablePlots.push([placement[1][0] + 1, col]);
      }

      if (placement[0][0] - 1 >= 0 && col - 1 >= 0) {
        unPlayablePlots.push([placement[0][0] - 1, col - 1]);
      }
      if (placement[0][0] - 1 >= 0 && col + 1 < 10) {
        unPlayablePlots.push([placement[0][0] - 1, col + 1]);
      }
      if (placement[1][0] + 1 < 10 && col - 1 >= 0) {
        unPlayablePlots.push([placement[1][0] + 1, col - 1]);
      }
      if (placement[1][0] + 1 < 10 && col + 1 < 10) {
        unPlayablePlots.push([placement[1][0] + 1, col + 1]);
      }
    } else {
      start = placement[0][1];
      end = placement[1][1];
      let row = placement[0][0];
      for (start; start <= end; start++) {
        gamePlacement[row][start] = ship.shipNo;
        placedPlots.push([row, start]);
        if (row + 1 < 10) {
          unPlayablePlots.push([row + 1, start]);
        }
        if (row - 1 >= 0) {
          unPlayablePlots.push([row - 1, start]);
        }
      }

      if (placement[0][1] - 1 >= 0) {
        unPlayablePlots.push([row, placement[0][1] - 1]);
      }
      if (placement[1][1] + 1 < 10) {
        unPlayablePlots.push([row, placement[1][1] + 1]);
      }

      if (placement[0][1] - 1 >= 0 && row - 1 >= 0) {
        unPlayablePlots.push([row - 1, placement[0][1] - 1]);
      }
      if (placement[0][1] - 1 >= 0 && row + 1 < 10) {
        unPlayablePlots.push([row + 1, placement[0][1] - 1]);
      }
      if (placement[1][1] + 1 < 10 && row - 1 >= 0) {
        unPlayablePlots.push([row - 1, placement[1][1] + 1]);
      }
      if (placement[1][1] + 1 < 10 && row + 1 < 10) {
        unPlayablePlots.push([row + 1, placement[1][1] + 1]);
      }
    }
    ship.placed = true;
    console.log(gamePlacement);
    console.log(placedPlots);
    console.log(unPlayablePlots);
  }

  function receiveAttack(coordinate1, coordinate2, shipArray) {
    let num = gamePlacement[coordinate1][coordinate2];
    if (num != "O" && !missedAttacks.includes([coordinate1, coordinate2])) {
      shipArray[num].hit();
    } else {
      missedAttacks.push([coordinate1, coordinate2]);
      gamePlacement[coordinate1][coordinate2] = "X";
    }
  }

  function allShipsSunk(shipArray) {
    return shipArray.every((ship) => ship.sunk == true);
  }

  return {
    missedAttacks,
    placedPlots,
    unPlayablePlots,
    shipPlacement,
    receiveAttack,
    allShipsSunk,
  };
}

function Player() {
  let gamePlacement = [];
  for (let i = 0; i < 10; i++) {
    gamePlacement.push([]);
    for (let j = 0; j < 10; j++) {
      gamePlacement[i].push([]);
      gamePlacement[i][j] = "O";
    }
  }

  // use Ship factory to create five ships for player
  let carrier = Ship(0, 5);
  let battleship = Ship(1, 4);
  let cruiser = Ship(2, 3);
  let submarine = Ship(3, 3);
  let destroyer = Ship(4, 2);

  // list of player ships
  let playerShips = [carrier, battleship, cruiser, submarine, destroyer];

  return {
    gamePlacement,
    playerShips,
  };
}

// Create ship objects
let player1 = Player();
// use gameBoard factory to create gamePlacement
let player1Board = GameBoard(player1.gamePlacement);

let player2 = Player();
// use gameBoard factory to create gamePlacement
let player2Board = GameBoard(player2.gamePlacement);

module.exports = {
  player1,
  player1Board,
  player2,
  player2Board,
};


/***/ }),

/***/ "./src/intro.js":
/*!**********************!*\
  !*** ./src/intro.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship */ "./src/battleship.js");
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_battleship__WEBPACK_IMPORTED_MODULE_0__);


function opening() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");

  const introPage = document.createElement("div");
  introPage.classList.add("introPage");
  content.append(introPage);

  const welcome = document.createElement("div");
  welcome.classList.add("welcome");
  welcome.textContent = "Welcome to battleship game";

  const welcome2 = document.createElement("div");
  welcome2.classList.add("welcome2");
  welcome2.textContent = "Place your Carrier";

  const rotate = document.createElement("button");
  rotate.classList.add("rotate");
  rotate.textContent = "Rotate";
  rotate.value = "0";
  rotate.addEventListener("click", () => {
    if (rotate.value == "0") {
      rotate.value = "1";
    } else {
      rotate.value = "0";
    }
  });

  introPage.append(welcome);
  introPage.append(welcome2);
  introPage.append(rotate);

  const container = document.createElement("div");
  container.classList.add("container");
  introPage.append(container);

  // let i = 0;
  // let j = 0;
  // player1.gamePlacement.forEach((plots) => {
  //   j = 0;
  //   plots.forEach((plot) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let div = document.createElement("div");
      div.classList.add("plot");
      container.append(div);
      div.addEventListener("click", () => {
        let selectShip = -1;
        for (let a = 0; a < 5; a++) {
          if (_battleship__WEBPACK_IMPORTED_MODULE_0__.player1.playerShips[a].placed != true) {
            selectShip = a;
            break;
          }
        }
        let validClick = true;
        // player1.playerShips.forEach((player1.playerShips[selectShip]) => {
        if (selectShip >= 0) {
          if (
            rotate.value == "0" &&
            j + _battleship__WEBPACK_IMPORTED_MODULE_0__.player1.playerShips[selectShip].length < 10
          ) {
            for (
              let column = j;
              column < j + _battleship__WEBPACK_IMPORTED_MODULE_0__.player1.playerShips[selectShip].length;
              column++
            ) {
              // console.log(player1.placedPlots);
              // console.log(player1.unPlayablePlots);
              // if (
              //   player1Board.placedPlots.includes([i, column]) ||
              //   player1Board.unPlayablePlots.includes([i, column])
              // ) {
              //   validClick = false;
              //   break;
              // }
              // player1Board.placedPlots.forEach((placedPlot) => {
              //   if (placedPlot[0] == i && placedPlot[1] == column) {
              //     validClick = false;

              //   }
              // })

              for (
                let newI = 0;
                newI < _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.placedPlots.length;
                newI++
              ) {
                if (
                  _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.placedPlots[newI][0] == i &&
                  _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.placedPlots[newI][1] == column
                ) {
                  validClick = false;
                  break;
                }
              }

              for (
                let newI = 0;
                newI < _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.unPlayablePlots.length;
                newI++
              ) {
                if (
                  _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.unPlayablePlots[newI][0] == i &&
                  _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.unPlayablePlots[newI][1] == column
                ) {
                  validClick = false;
                  break;
                }
              }
            }
            if (validClick == true) {
              _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.shipPlacement(_battleship__WEBPACK_IMPORTED_MODULE_0__.player1.playerShips[selectShip], [
                [i, j],
                [i, j + _battleship__WEBPACK_IMPORTED_MODULE_0__.player1.playerShips[selectShip].length - 1],
              ]);
            }
          } else if (i + _battleship__WEBPACK_IMPORTED_MODULE_0__.player1.playerShips[selectShip].length < 10) {
            for (
              let tempRow = i;
              tempRow < i + _battleship__WEBPACK_IMPORTED_MODULE_0__.player1.playerShips[selectShip].length;
              tempRow++
            ) {
              // console.log(player1.placedPlots);
              // console.log(player1.unPlayablePlots);
              // if (
              //   player1Board.placedPlots.includes([tempRow, j]) ||
              //   player1Board.unPlayablePlots.includes([tempRow, j])
              // ) {
              //   validClick = false;
              //   break;
              // }

              for (
                let newI = 0;
                newI < _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.placedPlots.length;
                newI++
              ) {
                if (
                  _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.placedPlots[newI][0] == tempRow &&
                  _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.placedPlots[newI][1] == j
                ) {
                  validClick = false;
                  break;
                }
              }

              for (
                let newI = 0;
                newI < _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.unPlayablePlots.length;
                newI++
              ) {
                if (
                  _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.unPlayablePlots[newI][0] == tempRow &&
                  _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.unPlayablePlots[newI][1] == j
                ) {
                  validClick = false;
                  break;
                }
              }
            }

            if (validClick == true) {
              _battleship__WEBPACK_IMPORTED_MODULE_0__.player1Board.shipPlacement(_battleship__WEBPACK_IMPORTED_MODULE_0__.player1.playerShips[selectShip], [
                [i, j],
                [i + _battleship__WEBPACK_IMPORTED_MODULE_0__.player1.playerShips[selectShip].length - 1, j],
              ]);
            }
          }
        }
        // });
        colorGrid();
      });
    }
  }

  //     j++;
  //   });
  //   i++;
  // });
  // to color the selected plots
  function colorGrid() {
    let gridDivList = document.querySelectorAll(".plot");
    let currentDivNo = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (_battleship__WEBPACK_IMPORTED_MODULE_0__.player1.gamePlacement[i][j] != "O") {
          gridDivList[currentDivNo].classList.add("colorIntroShips");
        }
        currentDivNo++;
      }
    }
  }

  let play = document.createElement("button");
  play.classList.add("playButton");
  play.textContent = "Play";
  introPage.append(play);
  play.addEventListener("click", () => {
    introPage.remove();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (opening);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battleship */ "./src/battleship.js");
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_battleship__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro */ "./src/intro.js");



function setup() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  (0,_intro__WEBPACK_IMPORTED_MODULE_2__["default"])();
}
setup();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGtEQUFrRCxpQkFBaUIsZ0JBQWdCLGdEQUFnRCxHQUFHLGdCQUFnQixtQkFBbUIsa0JBQWtCLEdBQUcsYUFBYSxrQkFBa0IsbUJBQW1CLEdBQUcsZUFBZSxrQkFBa0IsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsb0NBQW9DLDBCQUEwQixHQUFHLFdBQVcsZ0JBQWdCLGlCQUFpQixHQUFHLGdCQUFnQixtQkFBbUIscUJBQXFCLG9CQUFvQixlQUFlLG1CQUFtQiw2QkFBNkIsZ0NBQWdDLDBDQUEwQyw2Q0FBNkMsR0FBRyxXQUFXLDZCQUE2Qix5QkFBeUIsa0JBQWtCLDhCQUE4Qix3QkFBd0Isb0JBQW9CLEdBQUcscUJBQXFCLCtCQUErQixHQUFHLG1CQUFtQjtBQUM5OEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDOUQxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xMcUQ7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsY0FBYyxnREFBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0RBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQSx1QkFBdUIscURBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFZO0FBQzlCLGtCQUFrQixxREFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIscURBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFZO0FBQzlCLGtCQUFrQixxREFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscURBQVksZUFBZSxnREFBTztBQUNoRDtBQUNBLHdCQUF3QixnREFBTztBQUMvQjtBQUNBO0FBQ0EsWUFBWSxhQUFhLGdEQUFPO0FBQ2hDO0FBQ0E7QUFDQSw0QkFBNEIsZ0RBQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHFEQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxREFBWTtBQUM5QixrQkFBa0IscURBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHFEQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxREFBWTtBQUM5QixrQkFBa0IscURBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxxREFBWSxlQUFlLGdEQUFPO0FBQ2hEO0FBQ0EscUJBQXFCLGdEQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QixZQUFZLGdEQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7O1VDNU12QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1RDtBQUM5QztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFPO0FBQ1Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW50cm8uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGJsYWggYmxhaCBibGFoICovXG4qe1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLFxuYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmludHJvUGFnZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleGJveDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcmVzaXplOiBib3RoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxcHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLnBsb3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZGRkO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmc6IDEycHg7XG59XG5cbi5jb2xvckludHJvU2hpcHN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQkFBbUI7QUFDbkI7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHlDQUF5QztBQUM3Qzs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixRQUFRO0lBQ1IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBibGFoIGJsYWggYmxhaCAqL1xcbip7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5pbnRyb1BhZ2V7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXhib3g7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b257XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHJlc2l6ZTogYm90aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXB4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnBsb3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZGRkO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5jb2xvckludHJvU2hpcHN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBTaGlwKHNoaXBObywgbGVuZ3RoKSB7XG4gIGxldCBoaXRzID0gMDtcbiAgbGV0IHNoaXBDb29yZGluYXRlID0gW107XG4gIGxldCBzdW5rID0gZmFsc2U7XG4gIGxldCBwbGFjZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgaGl0cysrO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGlmIChoaXRzID09IGxlbmd0aCkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzaGlwTm8sXG4gICAgbGVuZ3RoLFxuICAgIGhpdHMsXG4gICAgcGxhY2VkLFxuICAgIHNoaXBDb29yZGluYXRlLFxuICAgIHN1bmssXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cblxuZnVuY3Rpb24gR2FtZUJvYXJkKGdhbWVQbGFjZW1lbnQpIHtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgbGV0IGVuZCA9IDA7XG4gIGxldCBtaXNzZWRBdHRhY2tzID0gW107XG4gIGxldCBwbGFjZWRQbG90cyA9IFtdO1xuICBsZXQgdW5QbGF5YWJsZVBsb3RzID0gW107XG5cbiAgZnVuY3Rpb24gc2hpcFBsYWNlbWVudChzaGlwLCBwbGFjZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhwbGFjZW1lbnQpO1xuICAgIHNoaXAuc2hpcENvb3JkaW5hdGUucHVzaChwbGFjZW1lbnRbMF0pO1xuICAgIHNoaXAuc2hpcENvb3JkaW5hdGUucHVzaChwbGFjZW1lbnRbMV0pO1xuICAgIGlmIChwbGFjZW1lbnRbMF1bMF0gIT0gcGxhY2VtZW50WzFdWzBdKSB7XG4gICAgICBzdGFydCA9IHBsYWNlbWVudFswXVswXTtcbiAgICAgIGVuZCA9IHBsYWNlbWVudFsxXVswXTtcbiAgICAgIGxldCBjb2wgPSBwbGFjZW1lbnRbMF1bMV07XG4gICAgICBmb3IgKHN0YXJ0OyBzdGFydCA8PSBlbmQ7IHN0YXJ0KyspIHtcbiAgICAgICAgZ2FtZVBsYWNlbWVudFtzdGFydF1bY29sXSA9IHNoaXAuc2hpcE5vO1xuICAgICAgICBwbGFjZWRQbG90cy5wdXNoKFtzdGFydCwgY29sXSk7XG4gICAgICAgIGlmIChjb2wgKyAxIDwgMTApIHtcbiAgICAgICAgICB1blBsYXlhYmxlUGxvdHMucHVzaChbc3RhcnQsIGNvbCArIDFdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sIC0gMSA+PSAwKSB7XG4gICAgICAgICAgdW5QbGF5YWJsZVBsb3RzLnB1c2goW3N0YXJ0LCBjb2wgLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBsYWNlbWVudFswXVswXSAtIDEgPj0gMCkge1xuICAgICAgICB1blBsYXlhYmxlUGxvdHMucHVzaChbcGxhY2VtZW50WzBdWzBdIC0gMSwgY29sXSk7XG4gICAgICB9XG4gICAgICBpZiAocGxhY2VtZW50WzFdWzBdICsgMSA8IDEwKSB7XG4gICAgICAgIHVuUGxheWFibGVQbG90cy5wdXNoKFtwbGFjZW1lbnRbMV1bMF0gKyAxLCBjb2xdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYWNlbWVudFswXVswXSAtIDEgPj0gMCAmJiBjb2wgLSAxID49IDApIHtcbiAgICAgICAgdW5QbGF5YWJsZVBsb3RzLnB1c2goW3BsYWNlbWVudFswXVswXSAtIDEsIGNvbCAtIDFdKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGFjZW1lbnRbMF1bMF0gLSAxID49IDAgJiYgY29sICsgMSA8IDEwKSB7XG4gICAgICAgIHVuUGxheWFibGVQbG90cy5wdXNoKFtwbGFjZW1lbnRbMF1bMF0gLSAxLCBjb2wgKyAxXSk7XG4gICAgICB9XG4gICAgICBpZiAocGxhY2VtZW50WzFdWzBdICsgMSA8IDEwICYmIGNvbCAtIDEgPj0gMCkge1xuICAgICAgICB1blBsYXlhYmxlUGxvdHMucHVzaChbcGxhY2VtZW50WzFdWzBdICsgMSwgY29sIC0gMV0pO1xuICAgICAgfVxuICAgICAgaWYgKHBsYWNlbWVudFsxXVswXSArIDEgPCAxMCAmJiBjb2wgKyAxIDwgMTApIHtcbiAgICAgICAgdW5QbGF5YWJsZVBsb3RzLnB1c2goW3BsYWNlbWVudFsxXVswXSArIDEsIGNvbCArIDFdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnQgPSBwbGFjZW1lbnRbMF1bMV07XG4gICAgICBlbmQgPSBwbGFjZW1lbnRbMV1bMV07XG4gICAgICBsZXQgcm93ID0gcGxhY2VtZW50WzBdWzBdO1xuICAgICAgZm9yIChzdGFydDsgc3RhcnQgPD0gZW5kOyBzdGFydCsrKSB7XG4gICAgICAgIGdhbWVQbGFjZW1lbnRbcm93XVtzdGFydF0gPSBzaGlwLnNoaXBObztcbiAgICAgICAgcGxhY2VkUGxvdHMucHVzaChbcm93LCBzdGFydF0pO1xuICAgICAgICBpZiAocm93ICsgMSA8IDEwKSB7XG4gICAgICAgICAgdW5QbGF5YWJsZVBsb3RzLnB1c2goW3JvdyArIDEsIHN0YXJ0XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdyAtIDEgPj0gMCkge1xuICAgICAgICAgIHVuUGxheWFibGVQbG90cy5wdXNoKFtyb3cgLSAxLCBzdGFydF0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwbGFjZW1lbnRbMF1bMV0gLSAxID49IDApIHtcbiAgICAgICAgdW5QbGF5YWJsZVBsb3RzLnB1c2goW3JvdywgcGxhY2VtZW50WzBdWzFdIC0gMV0pO1xuICAgICAgfVxuICAgICAgaWYgKHBsYWNlbWVudFsxXVsxXSArIDEgPCAxMCkge1xuICAgICAgICB1blBsYXlhYmxlUGxvdHMucHVzaChbcm93LCBwbGFjZW1lbnRbMV1bMV0gKyAxXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbGFjZW1lbnRbMF1bMV0gLSAxID49IDAgJiYgcm93IC0gMSA+PSAwKSB7XG4gICAgICAgIHVuUGxheWFibGVQbG90cy5wdXNoKFtyb3cgLSAxLCBwbGFjZW1lbnRbMF1bMV0gLSAxXSk7XG4gICAgICB9XG4gICAgICBpZiAocGxhY2VtZW50WzBdWzFdIC0gMSA+PSAwICYmIHJvdyArIDEgPCAxMCkge1xuICAgICAgICB1blBsYXlhYmxlUGxvdHMucHVzaChbcm93ICsgMSwgcGxhY2VtZW50WzBdWzFdIC0gMV0pO1xuICAgICAgfVxuICAgICAgaWYgKHBsYWNlbWVudFsxXVsxXSArIDEgPCAxMCAmJiByb3cgLSAxID49IDApIHtcbiAgICAgICAgdW5QbGF5YWJsZVBsb3RzLnB1c2goW3JvdyAtIDEsIHBsYWNlbWVudFsxXVsxXSArIDFdKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGFjZW1lbnRbMV1bMV0gKyAxIDwgMTAgJiYgcm93ICsgMSA8IDEwKSB7XG4gICAgICAgIHVuUGxheWFibGVQbG90cy5wdXNoKFtyb3cgKyAxLCBwbGFjZW1lbnRbMV1bMV0gKyAxXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNoaXAucGxhY2VkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhnYW1lUGxhY2VtZW50KTtcbiAgICBjb25zb2xlLmxvZyhwbGFjZWRQbG90cyk7XG4gICAgY29uc29sZS5sb2codW5QbGF5YWJsZVBsb3RzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZTEsIGNvb3JkaW5hdGUyLCBzaGlwQXJyYXkpIHtcbiAgICBsZXQgbnVtID0gZ2FtZVBsYWNlbWVudFtjb29yZGluYXRlMV1bY29vcmRpbmF0ZTJdO1xuICAgIGlmIChudW0gIT0gXCJPXCIgJiYgIW1pc3NlZEF0dGFja3MuaW5jbHVkZXMoW2Nvb3JkaW5hdGUxLCBjb29yZGluYXRlMl0pKSB7XG4gICAgICBzaGlwQXJyYXlbbnVtXS5oaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKFtjb29yZGluYXRlMSwgY29vcmRpbmF0ZTJdKTtcbiAgICAgIGdhbWVQbGFjZW1lbnRbY29vcmRpbmF0ZTFdW2Nvb3JkaW5hdGUyXSA9IFwiWFwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbFNoaXBzU3VuayhzaGlwQXJyYXkpIHtcbiAgICByZXR1cm4gc2hpcEFycmF5LmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN1bmsgPT0gdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1pc3NlZEF0dGFja3MsXG4gICAgcGxhY2VkUGxvdHMsXG4gICAgdW5QbGF5YWJsZVBsb3RzLFxuICAgIHNoaXBQbGFjZW1lbnQsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTaGlwc1N1bmssXG4gIH07XG59XG5cbmZ1bmN0aW9uIFBsYXllcigpIHtcbiAgbGV0IGdhbWVQbGFjZW1lbnQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZ2FtZVBsYWNlbWVudC5wdXNoKFtdKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGdhbWVQbGFjZW1lbnRbaV0ucHVzaChbXSk7XG4gICAgICBnYW1lUGxhY2VtZW50W2ldW2pdID0gXCJPXCI7XG4gICAgfVxuICB9XG5cbiAgLy8gdXNlIFNoaXAgZmFjdG9yeSB0byBjcmVhdGUgZml2ZSBzaGlwcyBmb3IgcGxheWVyXG4gIGxldCBjYXJyaWVyID0gU2hpcCgwLCA1KTtcbiAgbGV0IGJhdHRsZXNoaXAgPSBTaGlwKDEsIDQpO1xuICBsZXQgY3J1aXNlciA9IFNoaXAoMiwgMyk7XG4gIGxldCBzdWJtYXJpbmUgPSBTaGlwKDMsIDMpO1xuICBsZXQgZGVzdHJveWVyID0gU2hpcCg0LCAyKTtcblxuICAvLyBsaXN0IG9mIHBsYXllciBzaGlwc1xuICBsZXQgcGxheWVyU2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgY3J1aXNlciwgc3VibWFyaW5lLCBkZXN0cm95ZXJdO1xuXG4gIHJldHVybiB7XG4gICAgZ2FtZVBsYWNlbWVudCxcbiAgICBwbGF5ZXJTaGlwcyxcbiAgfTtcbn1cblxuLy8gQ3JlYXRlIHNoaXAgb2JqZWN0c1xubGV0IHBsYXllcjEgPSBQbGF5ZXIoKTtcbi8vIHVzZSBnYW1lQm9hcmQgZmFjdG9yeSB0byBjcmVhdGUgZ2FtZVBsYWNlbWVudFxubGV0IHBsYXllcjFCb2FyZCA9IEdhbWVCb2FyZChwbGF5ZXIxLmdhbWVQbGFjZW1lbnQpO1xuXG5sZXQgcGxheWVyMiA9IFBsYXllcigpO1xuLy8gdXNlIGdhbWVCb2FyZCBmYWN0b3J5IHRvIGNyZWF0ZSBnYW1lUGxhY2VtZW50XG5sZXQgcGxheWVyMkJvYXJkID0gR2FtZUJvYXJkKHBsYXllcjIuZ2FtZVBsYWNlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwbGF5ZXIxLFxuICBwbGF5ZXIxQm9hcmQsXG4gIHBsYXllcjIsXG4gIHBsYXllcjJCb2FyZCxcbn07XG4iLCJpbXBvcnQgeyBwbGF5ZXIxLCBwbGF5ZXIxQm9hcmQgfSBmcm9tIFwiLi9iYXR0bGVzaGlwXCI7XG5cbmZ1bmN0aW9uIG9wZW5pbmcoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBpbnRyb1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbnRyb1BhZ2UuY2xhc3NMaXN0LmFkZChcImludHJvUGFnZVwiKTtcbiAgY29udGVudC5hcHBlbmQoaW50cm9QYWdlKTtcblxuICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2VsY29tZS5jbGFzc0xpc3QuYWRkKFwid2VsY29tZVwiKTtcbiAgd2VsY29tZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBiYXR0bGVzaGlwIGdhbWVcIjtcblxuICBjb25zdCB3ZWxjb21lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdlbGNvbWUyLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lMlwiKTtcbiAgd2VsY29tZTIudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgQ2FycmllclwiO1xuXG4gIGNvbnN0IHJvdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJvdGF0ZS5jbGFzc0xpc3QuYWRkKFwicm90YXRlXCIpO1xuICByb3RhdGUudGV4dENvbnRlbnQgPSBcIlJvdGF0ZVwiO1xuICByb3RhdGUudmFsdWUgPSBcIjBcIjtcbiAgcm90YXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHJvdGF0ZS52YWx1ZSA9PSBcIjBcIikge1xuICAgICAgcm90YXRlLnZhbHVlID0gXCIxXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdGF0ZS52YWx1ZSA9IFwiMFwiO1xuICAgIH1cbiAgfSk7XG5cbiAgaW50cm9QYWdlLmFwcGVuZCh3ZWxjb21lKTtcbiAgaW50cm9QYWdlLmFwcGVuZCh3ZWxjb21lMik7XG4gIGludHJvUGFnZS5hcHBlbmQocm90YXRlKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgaW50cm9QYWdlLmFwcGVuZChjb250YWluZXIpO1xuXG4gIC8vIGxldCBpID0gMDtcbiAgLy8gbGV0IGogPSAwO1xuICAvLyBwbGF5ZXIxLmdhbWVQbGFjZW1lbnQuZm9yRWFjaCgocGxvdHMpID0+IHtcbiAgLy8gICBqID0gMDtcbiAgLy8gICBwbG90cy5mb3JFYWNoKChwbG90KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInBsb3RcIik7XG4gICAgICBjb250YWluZXIuYXBwZW5kKGRpdik7XG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IHNlbGVjdFNoaXAgPSAtMTtcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCA1OyBhKyspIHtcbiAgICAgICAgICBpZiAocGxheWVyMS5wbGF5ZXJTaGlwc1thXS5wbGFjZWQgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2VsZWN0U2hpcCA9IGE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZhbGlkQ2xpY2sgPSB0cnVlO1xuICAgICAgICAvLyBwbGF5ZXIxLnBsYXllclNoaXBzLmZvckVhY2goKHBsYXllcjEucGxheWVyU2hpcHNbc2VsZWN0U2hpcF0pID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdFNoaXAgPj0gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHJvdGF0ZS52YWx1ZSA9PSBcIjBcIiAmJlxuICAgICAgICAgICAgaiArIHBsYXllcjEucGxheWVyU2hpcHNbc2VsZWN0U2hpcF0ubGVuZ3RoIDwgMTBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgIGxldCBjb2x1bW4gPSBqO1xuICAgICAgICAgICAgICBjb2x1bW4gPCBqICsgcGxheWVyMS5wbGF5ZXJTaGlwc1tzZWxlY3RTaGlwXS5sZW5ndGg7XG4gICAgICAgICAgICAgIGNvbHVtbisrXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyMS5wbGFjZWRQbG90cyk7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcjEudW5QbGF5YWJsZVBsb3RzKTtcbiAgICAgICAgICAgICAgLy8gaWYgKFxuICAgICAgICAgICAgICAvLyAgIHBsYXllcjFCb2FyZC5wbGFjZWRQbG90cy5pbmNsdWRlcyhbaSwgY29sdW1uXSkgfHxcbiAgICAgICAgICAgICAgLy8gICBwbGF5ZXIxQm9hcmQudW5QbGF5YWJsZVBsb3RzLmluY2x1ZGVzKFtpLCBjb2x1bW5dKVxuICAgICAgICAgICAgICAvLyApIHtcbiAgICAgICAgICAgICAgLy8gICB2YWxpZENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgLy8gcGxheWVyMUJvYXJkLnBsYWNlZFBsb3RzLmZvckVhY2goKHBsYWNlZFBsb3QpID0+IHtcbiAgICAgICAgICAgICAgLy8gICBpZiAocGxhY2VkUGxvdFswXSA9PSBpICYmIHBsYWNlZFBsb3RbMV0gPT0gY29sdW1uKSB7XG4gICAgICAgICAgICAgIC8vICAgICB2YWxpZENsaWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICBsZXQgbmV3SSA9IDA7XG4gICAgICAgICAgICAgICAgbmV3SSA8IHBsYXllcjFCb2FyZC5wbGFjZWRQbG90cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbmV3SSsrXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIHBsYXllcjFCb2FyZC5wbGFjZWRQbG90c1tuZXdJXVswXSA9PSBpICYmXG4gICAgICAgICAgICAgICAgICBwbGF5ZXIxQm9hcmQucGxhY2VkUGxvdHNbbmV3SV1bMV0gPT0gY29sdW1uXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgIGxldCBuZXdJID0gMDtcbiAgICAgICAgICAgICAgICBuZXdJIDwgcGxheWVyMUJvYXJkLnVuUGxheWFibGVQbG90cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbmV3SSsrXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIHBsYXllcjFCb2FyZC51blBsYXlhYmxlUGxvdHNbbmV3SV1bMF0gPT0gaSAmJlxuICAgICAgICAgICAgICAgICAgcGxheWVyMUJvYXJkLnVuUGxheWFibGVQbG90c1tuZXdJXVsxXSA9PSBjb2x1bW5cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbGlkQ2xpY2sgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBwbGF5ZXIxQm9hcmQuc2hpcFBsYWNlbWVudChwbGF5ZXIxLnBsYXllclNoaXBzW3NlbGVjdFNoaXBdLCBbXG4gICAgICAgICAgICAgICAgW2ksIGpdLFxuICAgICAgICAgICAgICAgIFtpLCBqICsgcGxheWVyMS5wbGF5ZXJTaGlwc1tzZWxlY3RTaGlwXS5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpICsgcGxheWVyMS5wbGF5ZXJTaGlwc1tzZWxlY3RTaGlwXS5sZW5ndGggPCAxMCkge1xuICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgbGV0IHRlbXBSb3cgPSBpO1xuICAgICAgICAgICAgICB0ZW1wUm93IDwgaSArIHBsYXllcjEucGxheWVyU2hpcHNbc2VsZWN0U2hpcF0ubGVuZ3RoO1xuICAgICAgICAgICAgICB0ZW1wUm93KytcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIxLnBsYWNlZFBsb3RzKTtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyMS51blBsYXlhYmxlUGxvdHMpO1xuICAgICAgICAgICAgICAvLyBpZiAoXG4gICAgICAgICAgICAgIC8vICAgcGxheWVyMUJvYXJkLnBsYWNlZFBsb3RzLmluY2x1ZGVzKFt0ZW1wUm93LCBqXSkgfHxcbiAgICAgICAgICAgICAgLy8gICBwbGF5ZXIxQm9hcmQudW5QbGF5YWJsZVBsb3RzLmluY2x1ZGVzKFt0ZW1wUm93LCBqXSlcbiAgICAgICAgICAgICAgLy8gKSB7XG4gICAgICAgICAgICAgIC8vICAgdmFsaWRDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICBsZXQgbmV3SSA9IDA7XG4gICAgICAgICAgICAgICAgbmV3SSA8IHBsYXllcjFCb2FyZC5wbGFjZWRQbG90cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbmV3SSsrXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIHBsYXllcjFCb2FyZC5wbGFjZWRQbG90c1tuZXdJXVswXSA9PSB0ZW1wUm93ICYmXG4gICAgICAgICAgICAgICAgICBwbGF5ZXIxQm9hcmQucGxhY2VkUGxvdHNbbmV3SV1bMV0gPT0galxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgdmFsaWRDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICBsZXQgbmV3SSA9IDA7XG4gICAgICAgICAgICAgICAgbmV3SSA8IHBsYXllcjFCb2FyZC51blBsYXlhYmxlUGxvdHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG5ld0krK1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBwbGF5ZXIxQm9hcmQudW5QbGF5YWJsZVBsb3RzW25ld0ldWzBdID09IHRlbXBSb3cgJiZcbiAgICAgICAgICAgICAgICAgIHBsYXllcjFCb2FyZC51blBsYXlhYmxlUGxvdHNbbmV3SV1bMV0gPT0galxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgdmFsaWRDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWxpZENsaWNrID09IHRydWUpIHtcbiAgICAgICAgICAgICAgcGxheWVyMUJvYXJkLnNoaXBQbGFjZW1lbnQocGxheWVyMS5wbGF5ZXJTaGlwc1tzZWxlY3RTaGlwXSwgW1xuICAgICAgICAgICAgICAgIFtpLCBqXSxcbiAgICAgICAgICAgICAgICBbaSArIHBsYXllcjEucGxheWVyU2hpcHNbc2VsZWN0U2hpcF0ubGVuZ3RoIC0gMSwgal0sXG4gICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICAgICAgY29sb3JHcmlkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyAgICAgaisrO1xuICAvLyAgIH0pO1xuICAvLyAgIGkrKztcbiAgLy8gfSk7XG4gIC8vIHRvIGNvbG9yIHRoZSBzZWxlY3RlZCBwbG90c1xuICBmdW5jdGlvbiBjb2xvckdyaWQoKSB7XG4gICAgbGV0IGdyaWREaXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbG90XCIpO1xuICAgIGxldCBjdXJyZW50RGl2Tm8gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmIChwbGF5ZXIxLmdhbWVQbGFjZW1lbnRbaV1bal0gIT0gXCJPXCIpIHtcbiAgICAgICAgICBncmlkRGl2TGlzdFtjdXJyZW50RGl2Tm9dLmNsYXNzTGlzdC5hZGQoXCJjb2xvckludHJvU2hpcHNcIik7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudERpdk5vKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IHBsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwbGF5LmNsYXNzTGlzdC5hZGQoXCJwbGF5QnV0dG9uXCIpO1xuICBwbGF5LnRleHRDb250ZW50ID0gXCJQbGF5XCI7XG4gIGludHJvUGFnZS5hcHBlbmQocGxheSk7XG4gIHBsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpbnRyb1BhZ2UucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvcGVuaW5nO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHBsYXllcjEsIHBsYXllcjFCb2FyZCwgcGxheWVyMiwgcGxheWVyMkJvYXJkIH0gZnJvbSBcIi4vYmF0dGxlc2hpcFwiO1xuaW1wb3J0IG9wZW5pbmcgZnJvbSBcIi4vaW50cm9cIjtcbmZ1bmN0aW9uIHNldHVwKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIG9wZW5pbmcoKTtcbn1cbnNldHVwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=