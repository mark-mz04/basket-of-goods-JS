/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/basket.js":
/*!******************************!*\
  !*** ./src/server/basket.js ***!
  \******************************/
/***/ ((module) => {

eval("// методы обработки корзины\n// добавление товара\nvar add = function add(basket, req) {\n  basket.contents.push(req.body);\n  return JSON.stringify(basket, null, 4);\n}; // увеличение количества товара в корзине\n\n\nvar increase = function increase(basket, req) {\n  var find = basket.contents.find(function (item) {\n    return item.id_product === +req.params.id;\n  });\n  find.quantity += req.body.quantity;\n  return JSON.stringify(basket, null, 4);\n}; // уменьшение количества товара в корзине\n\n\nvar decrease = function decrease(basket, req) {\n  var find = basket.contents.find(function (item) {\n    return item.id_product === +req.params.id;\n  });\n  find.quantity -= req.body.quantity;\n  return JSON.stringify(basket, null, 4);\n}; // удаление товара из корзины\n\n\nvar del = function del(basket, req) {\n  var find = basket.contents.find(function (item) {\n    return item.id_product === +req.params.id;\n  });\n  basket.contents.splice(basket.contents.indexOf(find), 1);\n  return JSON.stringify(basket, null, 4);\n}; // экспорт всех методов\n\n\nmodule.exports = {\n  add: add,\n  increase: increase,\n  decrease: decrease,\n  del: del\n};\n\n//# sourceURL=webpack://appexpress/./src/server/basket.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar basket = __webpack_require__(/*! ./basket */ \"./src/server/basket.js\");\n\nvar app = express();\napp.use(express.json());\napp.use('/', express[\"static\"]('dist/public')); // get запрос к каталогу товаров\n\napp.get('/api/products', function (req, res) {\n  fs.readFile('dist/server/dataBase/products.json', function (err, data) {\n    if (err) {\n      console.log(err);\n      res.send({\n        result: 0,\n        text: err\n      });\n      return;\n    }\n\n    res.send(data);\n  });\n}); // get запрос к корзине товаров\n\napp.get('/api/basket', function (req, res) {\n  fs.readFile('dist/server/dataBase/userBasket.json', function (err, data) {\n    if (err) {\n      console.log(err);\n      res.send({\n        result: 0,\n        text: err\n      });\n      return;\n    }\n\n    res.send(data);\n  });\n}); // post запрос к корзине товаров (добавление товара)\n\napp.post('/api/basket', function (req, res) {\n  fs.readFile('dist/server/dataBase/userBasket.json', function (err, data) {\n    if (err) {\n      console.log(err);\n      res.send({\n        result: 0,\n        text: err\n      });\n      return;\n    }\n\n    var newBasket = basket.add(JSON.parse(data), req);\n    fs.writeFile('dist/server/dataBase/userBasket.json', newBasket, function (err) {\n      if (err) {\n        console.log(err);\n        res.send({\n          result: 0,\n          text: err\n        });\n        return;\n      }\n\n      res.send({\n        result: 1\n      });\n    });\n  });\n}); // put запрос к корзине товаров (увеличение товара)\n\napp.put('/api/basket/:id', function (req, res) {\n  fs.readFile('dist/server/dataBase/userBasket.json', function (err, data) {\n    if (err) {\n      console.log(err);\n      res.send({\n        result: 0,\n        text: err\n      });\n      return;\n    }\n\n    var newBasket = basket.increase(JSON.parse(data), req);\n    fs.writeFile('dist/server/dataBase/userBasket.json', newBasket, function (err) {\n      if (err) {\n        console.log(err);\n        res.send({\n          result: 0,\n          text: err\n        });\n        return;\n      }\n\n      res.send({\n        result: 1\n      });\n    });\n  });\n}); // put запрос к корзине товаров (уменьшение товара)\n\napp.put('/api/basket/:id', function (req, res) {\n  fs.readFile('dist/server/dataBase/userBasket.json', function (err, data) {\n    if (err) {\n      console.log(err);\n      res.send({\n        result: 0,\n        text: err\n      });\n      return;\n    }\n\n    var newBasket = basket.decrease(JSON.parse(data), req);\n    fs.writeFile('dist/server/dataBase/userBasket.json', newBasket, function (err) {\n      if (err) {\n        console.log(err);\n        res.send({\n          result: 0,\n          text: err\n        });\n        return;\n      }\n\n      res.send({\n        result: 1\n      });\n    });\n  });\n}); // delete запрос к корзине товаров (удаление товара)\n\napp[\"delete\"]('/api/basket/:id', function (req, res) {\n  fs.readFile('dist/server/dataBase/userBasket.json', function (err, data) {\n    if (err) {\n      console.log(err);\n      res.send({\n        result: 0,\n        text: err\n      });\n      return;\n    }\n\n    var newBasket = basket.del(JSON.parse(data), req);\n    fs.writeFile('dist/server/dataBase/userBasket.json', newBasket, function (err) {\n      if (err) {\n        console.log(err);\n        res.send({\n          result: 0,\n          text: err\n        });\n        return;\n      }\n\n      res.send({\n        result: 1\n      });\n    });\n  });\n});\napp.listen(4200, function () {\n  return console.log('Server 4200 started...');\n});\n\n//# sourceURL=webpack://appexpress/./src/server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;