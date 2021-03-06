(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("vue-i18n"));
	else if(typeof define === 'function' && define.amd)
		define(["vue", "vue-i18n"], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("vue"), require("vue-i18n"));
	else
		root["LibComponents"] = root["LibComponents"] || {}, root["LibComponents"]["index"] = factory(root["vue"], root["vue-i18n"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.QqGroup = exports.CommonFooter = undefined;
	
	var _CommonFooter = __webpack_require__(1);
	
	var _CommonFooter2 = _interopRequireDefault(_CommonFooter);
	
	var _QqGroup = __webpack_require__(10);
	
	var _QqGroup2 = _interopRequireDefault(_QqGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.CommonFooter = _CommonFooter2.default;
	exports.QqGroup = _QqGroup2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/CommonFooter.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CommonFooter.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CommonFooter.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "#common_footer .mdl-mega-footer__right-section a {\n  color: #8bc34a;\n}\n#common_footer .mdl-mega-footer__right-section a .material-icons {\n  position: relative;\n  top: 6px;\n}\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vue = __webpack_require__(7);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueI18n = __webpack_require__(8);
	
	var _vueI18n2 = _interopRequireDefault(_vueI18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueI18n2.default);
	
	exports.default = {
	    name: 'CommonFooter',
	    props: {
	        top: {
	            type: Object,
	            required: false,
	            default: function _default() {
	                return { left: [] };
	            }
	        },
	        middle: {
	            type: Array,
	            required: false,
	            default: function _default() {
	                return [{
	                    title: 'design_framework',
	                    links: [{
	                        url: 'https://github.com/vuejs/vue',
	                        label: 'vuejs'
	                    }, {
	                        url: 'https://github.com/google/material-design-lite',
	                        label: 'material_design_lite'
	                    }, {
	                        url: 'https://github.com/google/material-design-icons',
	                        label: 'material_design_icons'
	                    }]
	                }, {
	                    title: 'supports',
	                    links: [{
	                        url: 'https://pages.github.com/',
	                        label: 'github_pages'
	                    }, {
	                        url: 'https://gist.github.com/',
	                        label: 'github_gist'
	                    }]
	                }, {
	                    title: 'links',
	                    links: [{
	                        url: 'https://github.com/d3/d3',
	                        label: 'd3js_icon'
	                    }]
	                }];
	            }
	        },
	        bottom: {
	            type: Object,
	            required: false,
	            default: function _default() {
	                return {
	                    title: 'logo',
	                    links: [{
	                        url: 'http://visualcrew.github.io/one-book/',
	                        label: 'one_book'
	                    }, {
	                        url: '',
	                        label: 'd3_api_translation'
	                    }]
	                };
	            }
	        },
	        anythingEvents: {
	            type: Function,
	            required: false,
	            default: function _default() {
	                return function (key, type, event) {};
	            }
	        }
	    },
	    computed: {
	        topLeftBtns: function topLeftBtns() {
	            return (this.top || {}).left || [];
	        },
	        middleSections: function middleSections() {
	            return this.middle || [];
	        }
	    },
	    locales: {
	        "en-US": {
	            "logo": 'VisualCrew',
	            "back_to_top": "Back to Top",
	            "design_framework": "Design &amp; Framework",
	            "links": "Links",
	            "supports": "Supports",
	            "github_pages": "Github Pages",
	            "github_gist": "Github Gist",
	            "vuejs": "Vue.js",
	            "material_design_lite": "Material Design Lite",
	            "material_design_icons": "Material Design Icons",
	            "d3js_icon": "<img src='https://camo.githubusercontent.com/722a5cc12c7d40231ebeb8ca6facdc8547e2abf7/68747470733a2f2f64336a732e6f72672f6c6f676f2e737667' style='width: 15px;'>",
	            "one_book": "One Book",
	            "d3_api_translation": "D3 API Translation"
	        },
	        "zh-CN": {
	            "logo": '可视组',
	            "back_to_top": "返回顶部",
	            "design_framework": "UI &amp; 架构",
	            "links": "链接",
	            "supports": "服务支持",
	            "github_pages": "Github Pages",
	            "github_gist": "Github Gist",
	            "vuejs": "Vue.js",
	            "material_design_lite": "Material Design Lite",
	            "material_design_icons": "Material Design Icons",
	            "d3js_icon": "<img src='https://camo.githubusercontent.com/722a5cc12c7d40231ebeb8ca6facdc8547e2abf7/68747470733a2f2f64336a732e6f72672f6c6f676f2e737667' style='width: 15px;'>",
	            "one_book": "一本书",
	            "d3_api_translation": "D3 API 译"
	        }
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n<footer id=\"common_footer\" class=\"mdl-mega-footer\">\n    <div class=\"mdl-mega-footer__top-section\">\n        <div class=\"mdl-mega-footer__left-section\">\n            <button class=\"mdl-mega-footer__social-btn\"\n                v-for=\"d in topLeftBtns\"\n                v-on:click=\"anythingEvents(d.key, 'click', $event)\">{{{ $t(d.label) }}}</button>\n        </div>\n        <div class=\"mdl-mega-footer__right-section\">\n            <a href=\"#header\">\n                <span>{{ $t('back_to_top') }}</span>\n                <i class=\"material-icons\">expand_less</i>\n            </a>\n        </div>\n    </div>\n    <div class=\"mdl-mega-footer__middle-section\">\n        <div class=\"mdl-mega-footer__drop-down-section\"\n            v-for=\"d in middleSections\">\n            <h1 class=\"mdl-mega-footer__heading\">{{{ $t(d.title) }}}</h1>\n            <ul class=\"mdl-mega-footer__link-list\">\n                <li v-for=\"c in d.links\">\n                    <a :href=\"c.url\" target=\"_blank\">{{{ $t(c.label) }}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"mdl-mega-footer__bottom-section\">\n        <div class=\"mdl-logo\">\n            {{ $t(bottom.title) }}\n        </div>\n        <ul class=\"mdl-mega-footer__link-list\">\n            <li v-for=\"d in bottom.links\">\n                <a :href=\"d.url\" target=\"_blank\">{{{ $t(d.label) }}}</a>\n            </li>\n        </ul>\n    </div>\n</footer>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(11)
	__vue_script__ = __webpack_require__(13)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/widgets/QqGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./QqGroup.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./QqGroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".qq-group__code {\n  position: absolute;\n  margin-top: 48px;\n  padding: 0 24px;\n}\n.qq-group__code img {\n  width: 115px;\n}\n.qq-group .material-icons {\n  position: relative;\n  top: 6px;\n}\n", ""]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vue = __webpack_require__(7);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueI18n = __webpack_require__(8);
	
	var _vueI18n2 = _interopRequireDefault(_vueI18n);
	
	var _assetsConfig = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueI18n2.default);
	
	exports.default = {
	    name: 'QqGroup',
	    props: {
	        codePosition: {
	            type: String,
	            required: false,
	            default: 'bottom'
	        }
	    },
	    data: function data() {
	        return {
	            showCode: false,
	
	            ASSET_IMG_QQ_GROUP_CODE: _assetsConfig.ASSET_IMG_QQ_GROUP_CODE
	        };
	    },
	
	    locales: {
	        "en-US": {
	            "qq_group": "QQ Group"
	        },
	        "zh-CN": {
	            "qq_group": "D3数据可视化"
	        }
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ASSET_IMG_QQ_GROUP_CODE = exports.ASSET_IMG_QQ_GROUP_CODE = 'https://gist.githubusercontent.com/vc205076374/980477d9359ed6b8e664320dffdc27d6/raw/075173575729932bee8fcacb9dda873e29aae865/qq_group_code.png';

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"qq-group\">\n    <a target=\"_blank\"\n        href=\"http://shang.qq.com/wpa/qunwpa?idkey=2136e35b3977a9722ad61da453ddffe817a24f3196db8dc3050ec7e7516ba7a1\"\n        class=\"mdl-layout__tab\"\n        v-on:mouseenter=\"showCode = true\"\n        v-on:mouseleave=\"showCode = false\">\n        <i class=\"material-icons\">group_add</i>\n        <span>{{{ $t('qq_group') }}}</span>\n    </a>\n    <div class=\"qq-group__code\" v-show=\"showCode\">\n        <img :src=\"ASSET_IMG_QQ_GROUP_CODE\" alt=\"QR Code\" />\n    </div>\n</div>\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map