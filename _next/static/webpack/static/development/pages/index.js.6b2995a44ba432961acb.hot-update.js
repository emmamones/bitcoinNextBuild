webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Master */ "./components/Master.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Precio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Precio */ "./components/Precio.js");
/* harmony import */ var _components_Noticias__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Noticias */ "./components/Noticias.js");
/* harmony import */ var _components_Eventos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Eventos */ "./components/Eventos.js");


var _jsxFileName = "C:\\Users\\Emman\\Home_projects\\FullStack\\ReactReduxPrincipiantes\\bitcoinNext\\pages\\index.js";







var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Master__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Precio del Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Precio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    precio: props.precioBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Noticias sobre Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.noticias.map(function (noticia) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Noticias__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: noticia.url,
      noticia: noticia,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    });
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Proximos Eventos Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, props.eventos.map(function (evento) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Eventos__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: evento.id,
      evento: evento,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    });
  })))));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var key, objectHeader, precio, noticias, eventos, resPrecio, resNoticias, resEventos;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          key = "f4f78a35-6a06-4f02-a9f6-3c069020ac4e";
          objectHeader = {
            headers: {
              "X-CMC_PRO_API_KEY": key,
              "Accept-Encoding": "deflate"
            },
            json: true,
            gzip: true
          };
          _context.next = 4;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC", objectHeader);

        case 4:
          precio = _context.sent;
          _context.next = 7;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=8d494850ef354af79995041e802b0404&language=es");

        case 7:
          noticias = _context.sent;
          _context.next = 10;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&token=EOYEFXAOYM2DJTUQ5YIE");

        case 10:
          eventos = _context.sent;
          _context.next = 13;
          return precio.json();

        case 13:
          resPrecio = _context.sent;
          _context.next = 16;
          return noticias.json();

        case 16:
          resNoticias = _context.sent;
          _context.next = 19;
          return eventos.json();

        case 19:
          resEventos = _context.sent;
          return _context.abrupt("return", {
            precioBitcoin: resPrecio.data.BTC.quote.USD,
            noticias: resNoticias.articles,
            eventos: resEventos.events
          });

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.6b2995a44ba432961acb.hot-update.js.map