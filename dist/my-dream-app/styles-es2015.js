(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --primerColor: #028090;\n  --segundoColor: #00a896;\n  --tercerColor: #fcb045;\n  --tercerColorB: #fefaf5;\n  --enlaceColor: #1c3835;\n  --cuartoColor: #FFFFFF;\n  --quintoColor: #ddd;\n  --letrasColor:#636363;\n  --grisOscuro: #444444;\n  --negroColor:#22262a;\n  --grisClaro: #CCCCCC;\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nbody {\n  background: #028090;\n  background: -webkit-gradient(left top, right top, color-stop(0%, #028090), color-stop(0%, #028090), color-stop(0%, #028090), color-stop(16%, #028090), color-stop(45%, #00a896), color-stop(95%, #fcb045), color-stop(100%, #fcb045));\n  background: linear-gradient(to right, #028090 0%, #028090 0%, #028090 0%, #028090 16%, #00a896 45%, #fcb045 95%, #fcb045 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#028090\", endColorstr=\"#fcb045\", GradientType=1 );\n  font-family: \"Prompt\", sans-serif;\n  color: var(--letrasColor);\n  font-weight: 300;\n}\n.modoLight {\n  display: block;\n  background-color: white !important;\n}\n.modoDark {\n  display: none;\n}\nsection {\n  background-color: var(--cuartoColor);\n  box-shadow: 0px 0px 7px -2px rgba(0, 0, 0, 0.75);\n  border-radius: 5px;\n}\nfooter {\n  color: var(--negroColor);\n}\nfooter > a {\n  color: var(--negroColor);\n}\n.raya {\n  height: 0.2em;\n  border-radius: 5px;\n  margin-top: 0.5em;\n  background: #028090;\n  background: -webkit-gradient(left top, right top, color-stop(0%, #028090), color-stop(0%, #028090), color-stop(0%, #028090), color-stop(16%, #028090), color-stop(45%, #00a896), color-stop(95%, #fcb045), color-stop(100%, #fcb045));\n  background: linear-gradient(to right, #028090 0%, #028090 0%, #028090 0%, #028090 16%, #00a896 45%, #fcb045 95%, #fcb045 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#028090\", endColorstr=\"#fcb045\", GradientType=1 );\n}\n.raya4 {\n  width: 30%;\n}\nh1 {\n  font-size: 4em;\n}\nh2 {\n  font-size: 3.5em;\n}\nh3 {\n  font-size: 2em;\n}\nh4 {\n  font-size: 1.5em;\n}\np {\n  line-height: 1.5;\n}\nb {\n  font-weight: 600;\n}\na {\n  color: var(--negroColor);\n  font-weight: 500;\n}\na:hover {\n  color: var(--tercerColor);\n}\nbutton {\n  outline: none !important;\n}\n.btn {\n  border: 1px solid var(--grisClaro);\n  color: var(--letrasColor);\n  outline: none !important;\n}\n.pad0 {\n  padding: 0;\n}\n.mar0 {\n  margin: 0;\n}\n.mar2 {\n  margin-right: 2em;\n}\n.pad2 {\n  padding: 2em;\n}\n.header1 {\n  color: var(--negroColor);\n  text-align: center;\n}\n.headerImg {\n  height: 40%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-bottom: 2em;\n  border-radius: 5px;\n}\n.titulo {\n  color: var(--negroColor);\n}\n.btnHome {\n  margin-left: 0.5em;\n}\n.destacar {\n  color: var(--primerColor);\n}\n.weiFontBold {\n  color: var(--negroColor);\n}\n/*media querys letras*/\n@media (min-width: 0px) and (max-width: 767px) {\n  h2 {\n    font-size: 200%;\n  }\n\n  h3 {\n    font-size: 170%;\n  }\n}\n.animaTrayector {\n  width: 100%;\n  align-items: center;\n}\n.columnaTray {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1em;\n  color: var(--cuartoColor);\n  width: 15%;\n  box-shadow: 0px 0px 7px -2px rgba(0, 0, 0, 0.75);\n  border-radius: 5px;\n  text-align: end;\n}\n.columnaTray > p {\n  text-align: center;\n}\n.flecha {\n  width: 5%;\n  height: 0.2em;\n  background-color: var(--segundoColor);\n}\n.columnaTray1 {\n  background-color: var(--primerColor);\n}\n.columnaTray2 {\n  background-color: #449e95;\n}\n.columnaTray3 {\n  background-color: var(--segundoColor);\n}\n.columnaTray4 {\n  background-color: #64a961;\n}\n.columnaTray5 {\n  background-color: var(--tercerColor);\n}\n.fa-arrow-right {\n  color: var(--segundoColor);\n  font-size: 1.2em;\n}\n.animacion {\n  overflow: hidden;\n  -webkit-animation: slidein 3s 1 linear;\n          animation: slidein 3s 1 linear;\n}\n@-webkit-keyframes slidein {\n  from {\n    opacity: 0.2;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slidein {\n  from {\n    opacity: 0.2;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.marLef {\n  margin-left: 0.5em;\n}\n.stretchRight {\n  animation-name: stretchRight;\n  -webkit-animation-name: stretchRight;\n  animation-duration: 3s;\n  -webkit-animation-duration: 3s;\n  animation-timing-function: ease-out;\n  -webkit-animation-timing-function: ease-out;\n  transform-origin: 0% 0%;\n  -ms-transform-origin: 0% 0%;\n  -webkit-transform-origin: 0% 0%;\n}\n@keyframes stretchRight {\n  0% {\n    transform: scaleX(0.3);\n  }\n  40% {\n    transform: scaleX(1.02);\n  }\n  60% {\n    transform: scaleX(0.98);\n  }\n  80% {\n    transform: scaleX(1.01);\n  }\n  100% {\n    transform: scaleX(0.98);\n  }\n  80% {\n    transform: scaleX(1.01);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n@-webkit-keyframes stretchRight {\n  0% {\n    -webkit-transform: scaleX(0.3);\n  }\n  40% {\n    -webkit-transform: scaleX(1.02);\n  }\n  60% {\n    -webkit-transform: scaleX(0.98);\n  }\n  80% {\n    -webkit-transform: scaleX(1.01);\n  }\n  100% {\n    -webkit-transform: scaleX(0.98);\n  }\n  80% {\n    -webkit-transform: scaleX(1.01);\n  }\n  100% {\n    -webkit-transform: scaleX(1);\n  }\n}\n.oscuro .modoDark1 {\n  background-color: black !important;\n  color: white !important;\n}\n.oscuro .modoLight {\n  display: none !important;\n}\n.oscuro .modoDark {\n  display: block !important;\n  background-color: black;\n}\n.oscuro .modoDark2 {\n  color: white !important;\n  text-shadow: black 0.1em 0.1em 0.2em;\n}\n.espacioBtn {\n  width: 3em;\n}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"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","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n\n:root{\n    --primerColor: #028090;\n    --segundoColor: #00a896;\n    --tercerColor: #fcb045;\n    --tercerColorB: #fefaf5;\n    --enlaceColor: #1c3835;\n    --cuartoColor: #FFFFFF;\n    --quintoColor: #ddd;\n    --letrasColor:#636363;\n    --grisOscuro: #444444;\n    --negroColor:#22262a;\n    --grisClaro: #CCCCCC;\n\n}\n\n// empieza formatear estilos\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n// termina formatear estilos\n\nbody{\n    background: rgba(2,128,144,1);\n    background: -moz-linear-gradient(left, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 16%, rgba(0,168,150,1) 45%, rgba(252,176,69,1) 95%, rgba(252,176,69,1) 100%);\n    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(2,128,144,1)), color-stop(0%, rgba(2,128,144,1)), color-stop(0%, rgba(2,128,144,1)), color-stop(16%, rgba(2,128,144,1)), color-stop(45%, rgba(0,168,150,1)), color-stop(95%, rgba(252,176,69,1)), color-stop(100%, rgba(252,176,69,1)));\n    background: -webkit-linear-gradient(left, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 16%, rgba(0,168,150,1) 45%, rgba(252,176,69,1) 95%, rgba(252,176,69,1) 100%);\n    background: -o-linear-gradient(left, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 16%, rgba(0,168,150,1) 45%, rgba(252,176,69,1) 95%, rgba(252,176,69,1) 100%);\n    background: -ms-linear-gradient(left, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 16%, rgba(0,168,150,1) 45%, rgba(252,176,69,1) 95%, rgba(252,176,69,1) 100%);\n    background: linear-gradient(to right, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 16%, rgba(0,168,150,1) 45%, rgba(252,176,69,1) 95%, rgba(252,176,69,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#028090', endColorstr='#fcb045', GradientType=1 ); \n    font-family: 'Prompt', sans-serif; \n    color: var(--letrasColor); \n    font-weight: 300;\n}\n.modoLight{\n    display: block;\n    background-color: white !important;\n}\n.modoDark{\n    display: none;\n}\nsection{\n    background-color: var(--cuartoColor);\n    -webkit-box-shadow: 0px 0px 7px -2px rgba(0,0,0,0.75);\n    -moz-box-shadow: 0px 0px 7px -2px rgba(0,0,0,0.75);\n    box-shadow: 0px 0px 7px -2px rgba(0,0,0,0.75);\n    border-radius: 5px;\n}\nfooter{\n    color: var(--negroColor);\n}\nfooter>a{\n    color: var(--negroColor);\n}\n.raya{\n    height: 0.2em;\n    border-radius: 5px;\n    margin-top: 0.5em;\n    background: rgba(2,128,144,1);\n    background: -moz-linear-gradient(left, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 16%, rgba(0,168,150,1) 45%, rgba(252,176,69,1) 95%, rgba(252,176,69,1) 100%);\n    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(2,128,144,1)), color-stop(0%, rgba(2,128,144,1)), color-stop(0%, rgba(2,128,144,1)), color-stop(16%, rgba(2,128,144,1)), color-stop(45%, rgba(0,168,150,1)), color-stop(95%, rgba(252,176,69,1)), color-stop(100%, rgba(252,176,69,1)));\n    background: -webkit-linear-gradient(left, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 16%, rgba(0,168,150,1) 45%, rgba(252,176,69,1) 95%, rgba(252,176,69,1) 100%);\n    background: -o-linear-gradient(left, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 16%, rgba(0,168,150,1) 45%, rgba(252,176,69,1) 95%, rgba(252,176,69,1) 100%);\n    background: -ms-linear-gradient(left, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 16%, rgba(0,168,150,1) 45%, rgba(252,176,69,1) 95%, rgba(252,176,69,1) 100%);\n    background: linear-gradient(to right, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 0%, rgba(2,128,144,1) 16%, rgba(0,168,150,1) 45%, rgba(252,176,69,1) 95%, rgba(252,176,69,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#028090', endColorstr='#fcb045', GradientType=1 );\n}\n.raya4{\n    width: 30%;\n}\nh1{\n    font-size: 4em;\n}\nh2{\n    font-size: 3.5em;\n}\nh3{\n    font-size: 2em;\n}\nh4{\n    font-size: 1.5em;  \n}\np{\n    line-height: 1.5;\n}\nb{\n    font-weight: 600;\n}\na{\n    color: var(--negroColor);\n    font-weight: 500;\n}\na:hover{\n    color: var(--tercerColor);\n}\nbutton{\n    outline:none !important;\n}\n.btn{\n    border: 1px solid var(--grisClaro);\n    color: var(--letrasColor);\n    outline:none !important;\n}\n.pad0{\n    padding:0;\n}\n.mar0{\n    margin: 0;\n}\n.mar2{\n    margin-right: 2em;\n}\n.pad2{\n    padding: 2em;\n}\n.header1{\n    color: var(--negroColor);\n    text-align: center;\n}\n.headerImg{\n    height: 40%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-bottom: 2em;\n    border-radius: 5px;\n}\n.titulo{\n    color: var(--negroColor);\n}\n.btnHome{\nmargin-left: 0.5em;\n}\n.destacar{\n    color: var(--primerColor);\n}\n.weiFontBold{\n    color: var(--negroColor);\n}\n/*media querys letras*/\n@media (min-width: 0px) and (max-width: 767px) {   \n    \n    h2{\n      font-size: 200%;\n    }\n    h3{\n        font-size: 170%;\n      }\n    \n  \n  }\n\n// animación de trayectoria:\n\n.animaTrayector{\n    width: 100%;\n    align-items: center;\n}\n\n.columnaTray{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1em;\n    color: var(--cuartoColor);\n    width: 15%;\n    -webkit-box-shadow: 0px 0px 7px -2px rgba(0,0,0,0.75);\n    -moz-box-shadow: 0px 0px 7px -2px rgba(0,0,0,0.75);\n    box-shadow: 0px 0px 7px -2px rgba(0,0,0,0.75);\n    border-radius: 5px;\n    text-align: end;\n}\n.columnaTray>p{\n    text-align: center;\n}\n.flecha{\n    width: 5%;\n    height: 0.2em;\n    background-color: var(--segundoColor);\n}\n.columnaTray1{\n    background-color: var(--primerColor);\n}\n.columnaTray2{\n    background-color: #449e95;  \n}\n.columnaTray3{\n    background-color: var(--segundoColor);\n}\n.columnaTray4{\n    background-color: #64a961;\n}\n.columnaTray5{\n    background-color: var(--tercerColor);\n}\n.fa-arrow-right{\n    color: var(--segundoColor);\n    font-size: 1.2em;\n}\n .animacion{\n     overflow:hidden;\n    animation: slidein 3s 1 linear;\n }\n\n\n @keyframes slidein {\n   from {\n    \n     opacity: 0.2;\n   }\n\n   to {\n   \n     opacity: 1;\n  }\n }\n.marLef{\n     margin-left: 0.5em;\n }\n.stretchRight{\n\tanimation-name: stretchRight;\n\t-webkit-animation-name: stretchRight;\t\n\n\tanimation-duration: 3s;\t\n\t-webkit-animation-duration: 3s;\n\n\tanimation-timing-function: ease-out;\t\n\t-webkit-animation-timing-function: ease-out;\t\n\n\ttransform-origin: 0% 0%;\n\t-ms-transform-origin: 0% 0%;\n\t-webkit-transform-origin: 0% 0%; \t\t\n}\n\n@keyframes stretchRight {\n\t0% {\n\t\ttransform: scaleX(0.3);\n\t}\n\t40% {\n\t\ttransform: scaleX(1.02);\n\t}\n\t60% {\n\t\ttransform: scaleX(0.98);\n\t}\n\t80% {\n\t\ttransform: scaleX(1.01);\n\t}\n\t100% {\n\t\ttransform: scaleX(0.98);\n\t}\t\t\t\t\n\t80% {\n\t\ttransform: scaleX(1.01);\n\t}\n\t100% {\n\t\ttransform: scaleX(1);\n\t}\t\t\t\t\t\t\t\n}\n\n@-webkit-keyframes stretchRight {\n\t0% {\n\t\t-webkit-transform: scaleX(0.3);\n\t}\n\t40% {\n\t\t-webkit-transform: scaleX(1.02);\n\t}\n\t60% {\n\t\t-webkit-transform: scaleX(0.98);\n\t}\n\t80% {\n\t\t-webkit-transform: scaleX(1.01);\n\t}\n\t100% {\n\t\t-webkit-transform: scaleX(0.98);\n\t}\t\t\t\t\n\t80% {\n\t\t-webkit-transform: scaleX(1.01);\n\t}\n\t100% {\n\t\t-webkit-transform: scaleX(1);\n\t}\t\t\n}\n\n// termina animación de trayectoria\n//modo DARK\n.oscuro{\n    .modoDark1{\n        background-color: black !important;\n        color: white !important;\n    }\n    .modoLight{\n        display: none !important;\n    }\n    .modoDark{\n        display: block !important;\n        background-color: black;\n    }\n    .modoDark2{\n        color: white !important;\n        text-shadow: black 0.1em 0.1em 0.2em\n    }\n}\n.espacioBtn{\n    width: 3em;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elena/Documents/GitHub/myWebAngular/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map