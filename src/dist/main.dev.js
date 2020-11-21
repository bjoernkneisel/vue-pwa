"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _firebase = require("./firebase.js");

var _vuefire = require("vuefire");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;
_vue["default"].prototype.$cards = [];
_vue["default"].prototype.$calendarConfig = false;

_vue["default"].use(_vuefire.firestorePlugin);

_vue["default"].use(_router["default"]);

var app;

_firebase.auth.onAuthStateChanged(function (user) {
  if (!app) {
    app = new _vue["default"]({
      router: _router["default"],
      store: _store["default"],
      render: function render(h) {
        return h(_App["default"]);
      }
    }).$mount('#app');
  }

  if (user) {
    _store["default"].dispatch('fetchUserProfile', user);
  }
});