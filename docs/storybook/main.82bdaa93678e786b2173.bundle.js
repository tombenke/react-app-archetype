(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_tombenke_topics_react_app_archetype_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(195),_home_tombenke_topics_react_app_archetype_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(196),_home_tombenke_topics_react_app_archetype_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(199),_home_tombenke_topics_react_app_archetype_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(197),_home_tombenke_topics_react_app_archetype_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(200),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_logo_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(198),_logo_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_6__),_package_json__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(500),__webpack_require__(88)),Logo=function(_Component){function Logo(){return Object(_home_tombenke_topics_react_app_archetype_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Logo),Object(_home_tombenke_topics_react_app_archetype_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_tombenke_topics_react_app_archetype_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Logo).apply(this,arguments))}return Object(_home_tombenke_topics_react_app_archetype_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Logo,_Component),Object(_home_tombenke_topics_react_app_archetype_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Logo,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"Logo"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header",{className:"Logo-header"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,_package_json__WEBPACK_IMPORTED_MODULE_8__.name),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3",null,"v",_package_json__WEBPACK_IMPORTED_MODULE_8__.version," / ","production",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br",null),_package_json__WEBPACK_IMPORTED_MODULE_8__.description),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:_logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,className:"Logo-logo",alt:"logo"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null,"Edit ",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code",null,"src/Logo.js")," and save to reload."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{className:"Logo-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React.")))}}]),Logo}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=Logo},198:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo.5d5d9eef.svg"},201:function(module,exports,__webpack_require__){__webpack_require__(202),__webpack_require__(281),module.exports=__webpack_require__(282)},282:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(87),req=__webpack_require__(381);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(140)(module))},381:function(module,exports,__webpack_require__){var map={"./components/Logo/Logo.stories.js":382};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=381},382:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(87),_Logo__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(383),__webpack_require__(493),__webpack_require__(495),__webpack_require__(194));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Logo",module).add("Logo component",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_5__.a,null)})}.call(this,__webpack_require__(140)(module))},500:function(module,exports,__webpack_require__){},88:function(module){module.exports={name:"react-app-archetype",description:"A template project for react frontends",version:"1.0.0",author:{name:"Tamás Benke",email:"tombenke@gmail.com"},bugs:{url:"https://github.com/tombenke/react-app-archetype/issues"},license:"MIT",homepage:"./",repository:{type:"git",url:"http://github.com/tombenke/react-app-archetype.git"},engines:{node:">= 9.11.1",npm:">= 6.5.0"},private:!1,dependencies:{react:"^16.7.0","react-dom":"^16.7.0","react-scripts":"2.1.2"},devDependencies:{"@babel/core":"^7.2.2","@storybook/addon-actions":"^4.1.4","@storybook/addon-links":"^4.1.4","@storybook/addons":"^4.1.4","@storybook/react":"^4.1.4","babel-loader":"^8.0.4",coveralls:"^3.0.2","cross-env":"^5.2.0",husky:"^1.3.1","lint-staged":"^8.1.0","node-sass":"^4.11.0",prettier:"^1.15.3","source-map-explorer":"^1.6.0"},husky:{hooks:{"pre-commit":"npm run prettier && lint-staged && npm run build-storybook"}},jest:{collectCoverageFrom:["src/**/*.{js,jsx}","!src/**/*/index.js","!src/index.js","!src/jest.config.js","!**/serviceWorker.js","!<rootDir>/node_modules/","!**/*.stories.js"],coverageThreshold:{global:{branches:80,functions:80,lines:80,statements:80}},coverageReporters:["text","lcov"]},"lint-staged":{"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}":["prettier --single-quote --write","git add"]},prettier:{printWidth:120,tabWidth:4,semi:!1,singleQuote:!0,trailingComma:"none"},eslintConfig:{extends:"react-app"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"],scripts:{analyze:"source-map-explorer build/static/js/main.*",build:"react-scripts build",coverage:"npm test -- --coverage",coveralls:"npm test -- --coverage && cat ./coverage/lcov.info | coveralls",eject:"react-scripts eject",prettier:"prettier --single-quote --write 'src/**/*.{js,jsx,ts,tsx,json,css,scss,md}'",start:"react-scripts start",storybook:"start-storybook -p 9009 -s public","build-storybook":"build-storybook -c .storybook -o ./docs/storybook",test:"react-scripts test","test-single":"cross-env CI=true react-scripts test --verbose --runInBand"}}}},[[201,1,2]]]);
//# sourceMappingURL=main.82bdaa93678e786b2173.bundle.js.map