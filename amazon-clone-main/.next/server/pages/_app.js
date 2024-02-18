/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDQTtBQUUzQyxNQUFNRSxRQUFRRixnRUFBY0EsQ0FBQztJQUNsQ0csU0FBUztRQUNQQyxRQUFRSCwyREFBYUE7SUFDdkI7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1hem9uLWNsb25lLy4vc3JjL2FwcC9zdG9yZS5qcz81OGM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBiYXNrZXRSZWR1Y2VyIGZyb20gXCIuLi9zbGljZXMvYmFza2V0U2xpY2VcIjtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgYmFza2V0OiBiYXNrZXRSZWR1Y2VyLFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJiYXNrZXRSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwiYmFza2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n            store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Downloads\\\\amazon-clone-main\\\\amazon-clone-main\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Downloads\\\\amazon-clone-main\\\\amazon-clone-main\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Downloads\\\\amazon-clone-main\\\\amazon-clone-main\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNGO0FBQ047QUFDbUI7QUFFbEQsTUFBTUcsUUFBUSxDQUFDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQUs7SUFDMUMscUJBQ0UsOERBQUNILDREQUFlQTtRQUFDSSxTQUFTRCxVQUFVQyxPQUFPO2tCQUN6Qyw0RUFBQ04saURBQVFBO1lBQUNDLE9BQU9BLDZDQUFLQTtzQkFDcEIsNEVBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FtYXpvbi1jbG9uZS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcC9zdG9yZVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiU2Vzc2lvblByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToBasket\": () => (/* binding */ addToBasket),\n/* harmony export */   \"basketSlice\": () => (/* binding */ basketSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeFromBasket\": () => (/* binding */ removeFromBasket),\n/* harmony export */   \"selectItems\": () => (/* binding */ selectItems)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: []\n};\nconst basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"basket\",\n    initialState,\n    reducers: {\n        addToBasket: (state, action)=>{\n            state.items = [\n                ...state.items,\n                action.payload\n            ];\n        },\n        removeFromBasket: (state, action)=>{\n            const index = state.items.findIndex((basketItem)=>basketItem.id === action.payload.id);\n            let newBasket = [\n                ...state.items\n            ];\n            if (index >= 0) {\n                newBasket.splice(index, 1);\n            } else {\n                console.warn(`Can't remove product (id: ${action.payload.id}) as its not in the basket.`);\n            }\n            state.items = newBasket;\n        }\n    }\n});\nconst { addToBasket , removeFromBasket  } = basketSlice.actions;\n// Selectors - This is how we pull information from the Global store slice\nconst selectItems = (state)=>state.basket.items;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basketSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpY2VzL2Jhc2tldFNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsZUFBZTtJQUNuQkMsT0FBTyxFQUFFO0FBQ1g7QUFFTyxNQUFNQyxjQUFjSCw2REFBV0EsQ0FBQztJQUNyQ0ksTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ1JDLGFBQWEsQ0FBQ0MsT0FBT0MsU0FBVztZQUM5QkQsTUFBTUwsS0FBSyxHQUFHO21CQUFJSyxNQUFNTCxLQUFLO2dCQUFFTSxPQUFPQyxPQUFPO2FBQUM7UUFDaEQ7UUFDQUMsa0JBQWtCLENBQUNILE9BQU9DLFNBQVc7WUFDbkMsTUFBTUcsUUFBUUosTUFBTUwsS0FBSyxDQUFDVSxTQUFTLENBQ2pDLENBQUNDLGFBQWVBLFdBQVdDLEVBQUUsS0FBS04sT0FBT0MsT0FBTyxDQUFDSyxFQUFFO1lBR3JELElBQUlDLFlBQVk7bUJBQUlSLE1BQU1MLEtBQUs7YUFBQztZQUVoQyxJQUFJUyxTQUFTLEdBQUc7Z0JBQ2RJLFVBQVVDLE1BQU0sQ0FBQ0wsT0FBTztZQUMxQixPQUFPO2dCQUNMTSxRQUFRQyxJQUFJLENBQ1YsQ0FBQywwQkFBMEIsRUFBRVYsT0FBT0MsT0FBTyxDQUFDSyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFFL0UsQ0FBQztZQUNEUCxNQUFNTCxLQUFLLEdBQUdhO1FBQ2hCO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFVCxZQUFXLEVBQUVJLGlCQUFnQixFQUFFLEdBQUdQLFlBQVlnQixPQUFPLENBQUM7QUFFckUsMEVBQTBFO0FBQ25FLE1BQU1DLGNBQWMsQ0FBQ2IsUUFBVUEsTUFBTWMsTUFBTSxDQUFDbkIsS0FBSyxDQUFDO0FBRXpELGlFQUFlQyxZQUFZbUIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1hem9uLWNsb25lLy4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcz84OTYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpdGVtczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYmFza2V0XCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBhZGRUb0Jhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLml0ZW1zID0gWy4uLnN0YXRlLml0ZW1zLCBhY3Rpb24ucGF5bG9hZF07XG4gICAgfSxcbiAgICByZW1vdmVGcm9tQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXgoXG4gICAgICAgIChiYXNrZXRJdGVtKSA9PiBiYXNrZXRJdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgKTtcblxuICAgICAgbGV0IG5ld0Jhc2tldCA9IFsuLi5zdGF0ZS5pdGVtc107XG5cbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIG5ld0Jhc2tldC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBDYW4ndCByZW1vdmUgcHJvZHVjdCAoaWQ6ICR7YWN0aW9uLnBheWxvYWQuaWR9KSBhcyBpdHMgbm90IGluIHRoZSBiYXNrZXQuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgc3RhdGUuaXRlbXMgPSBuZXdCYXNrZXQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcblxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNrZXRTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJiYXNrZXRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFRvQmFza2V0Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVtb3ZlRnJvbUJhc2tldCIsImluZGV4IiwiZmluZEluZGV4IiwiYmFza2V0SXRlbSIsImlkIiwibmV3QmFza2V0Iiwic3BsaWNlIiwiY29uc29sZSIsIndhcm4iLCJhY3Rpb25zIiwic2VsZWN0SXRlbXMiLCJiYXNrZXQiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/slices/basketSlice.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();