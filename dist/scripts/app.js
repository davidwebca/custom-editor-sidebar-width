/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/scripts/app"],{

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/plugins */ \"@wordpress/plugins\");\n/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/edit-post */ \"@wordpress/edit-post\");\n/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/api */ \"@wordpress/api\");\n/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar current_user = new wp.api.models.UsersMe();\nvar initialWidthValue = 280;\ncurrent_user.fetch().then(function (response) {\n  if (response.meta.editor_width) {\n    initialWidthValue = response.meta.editor_width;\n    document.documentElement.style.setProperty('--cesw-sidebar-width', response.meta.editor_width + 'px');\n  }\n});\n\nvar SidebarWidthRangeControl = /*#__PURE__*/function (_Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(SidebarWidthRangeControl, _Component);\n\n  var _super = _createSuper(SidebarWidthRangeControl);\n\n  function SidebarWidthRangeControl(props) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SidebarWidthRangeControl);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      value: props.initialValue\n    };\n    _this.debouncedSave = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.debounce)(function (width) {\n      var model = new wp.api.models.UsersMe({\n        meta: {\n          'editor_width': width\n        }\n      });\n      model.save().then(function (response) {\n        _this.setState({\n          value: response.meta.editor_width\n        });\n\n        initialWidthValue = response.meta.editor_width;\n      });\n\n      _this.setWidth(width);\n    }, 500);\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SidebarWidthRangeControl, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      _wordpress_api__WEBPACK_IMPORTED_MODULE_10__.loadPromise.then(function () {\n        var current_user = new wp.api.models.UsersMe();\n        current_user.fetch().then(function (response) {\n          if (response.meta.editor_width) {\n            _this2.setState({\n              value: response.meta.editor_width\n            });\n\n            _this2.setWidth(response.meta.editor_width);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"setWidth\",\n    value: function setWidth(width) {\n      document.documentElement.style.setProperty('--sidebar-width', width + 'px');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.RangeControl, {\n        label: \"Largeur\",\n        onChange: function onChange(width) {\n          _this3.setState({\n            value: width\n          });\n\n          _this3.debouncedSave(width);\n        },\n        value: this.state.value,\n        min: 280,\n        max: 680\n      });\n    }\n  }]);\n\n  return SidebarWidthRangeControl;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Component);\n\nvar arrow_icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createElement)(\"svg\", {\n  width: \"33\",\n  height: \"18\",\n  viewBox: \"0 0 33 18\"\n}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createElement)(\"path\", {\n  d: \"M21.183 12.174H11.97v4.39a.64.64 0 0 1-1.044.494L.824 9.208a.639.639 0 0 1-.113-.896C3.042 5.981 8.1 2.545 10.939.339a.639.639 0 0 1 1.03.504l.002 4.39h9.212V.843a.64.64 0 0 1 1.044-.494l10.103 7.85a.639.639 0 0 1 .113.896c-2.33 2.33-7.39 5.767-10.228 7.973a.64.64 0 0 1-1.03-.505l-.002-4.389z\"\n}));\n\nvar CustomSidebarWidthPlugin = function CustomSidebarWidthPlugin() {\n  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_8__.PluginSidebarMoreMenuItem, {\n    target: \"plugin-sidebar-width\",\n    icon: arrow_icon\n  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)(\"Sidebar width\", \"sidebarwidth\")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_8__.PluginSidebar, {\n    name: \"plugin-sidebar-width\",\n    title: \"Largeur la barre d'outils\",\n    icon: arrow_icon\n  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createElement)(SidebarWidthRangeControl, {\n    initialValue: initialWidthValue\n  })))));\n};\n\n(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__.registerPlugin)('plugin-sidebar-width', {\n  render: CustomSidebarWidthPlugin\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hcHAuanM/Y2U0ZCJdLCJuYW1lcyI6WyJjdXJyZW50X3VzZXIiLCJ3cCIsImFwaSIsIm1vZGVscyIsIlVzZXJzTWUiLCJpbml0aWFsV2lkdGhWYWx1ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwibWV0YSIsImVkaXRvcl93aWR0aCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsIlNpZGViYXJXaWR0aFJhbmdlQ29udHJvbCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImluaXRpYWxWYWx1ZSIsImRlYm91bmNlZFNhdmUiLCJkZWJvdW5jZSIsIndpZHRoIiwibW9kZWwiLCJzYXZlIiwic2V0U3RhdGUiLCJzZXRXaWR0aCIsImxvYWRQcm9taXNlIiwiQ29tcG9uZW50IiwiYXJyb3dfaWNvbiIsIkN1c3RvbVNpZGViYXJXaWR0aFBsdWdpbiIsIl9fIiwicmVnaXN0ZXJQbHVnaW4iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFHQTtBQUVBLElBQUlBLFlBQVksR0FBRyxJQUFJQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsTUFBUCxDQUFjQyxPQUFsQixFQUFuQjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLEdBQXhCO0FBQ0FMLFlBQVksQ0FBQ00sS0FBYixHQUFxQkMsSUFBckIsQ0FBMkIsVUFBQ0MsUUFBRCxFQUFjO0FBQ3JDLE1BQUdBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxZQUFqQixFQUErQjtBQUMzQkwscUJBQWlCLEdBQUdHLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxZQUFsQztBQUNBQyxZQUFRLENBQUNDLGVBQVQsQ0FBeUJDLEtBQXpCLENBQStCQyxXQUEvQixDQUEyQyxzQkFBM0MsRUFBbUVOLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxZQUFkLEdB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QUNJLGtFQUFDLHdCQUFEO0FBQTBCLGdCQUFZLEVBQUV4QjtBQUF4QyxJQURKLENBREosQ0FESixDQUpKLENBRDZCO0FBQUEsQ0FBakM7O0FBZUEyQixrRUFBYyxDQUFFLHNCQUFGLEVBQTBCO0FBQUVDLFFBQU0sRUFBRUg7QUFBVixDQUExQixDQUFkIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAd29yZHByZXNzL3BsdWdpbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIENvbXBvbmVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBQbHVnaW5TaWRlYmFyLCBQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtIH0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0LXBvc3QnO1xuaW1wb3J0IHsgXG4gICAgUmFuZ2VDb250cm9sLCBcbiAgICBQYW5lbCxcbiAgICBQYW5lbEJvZHksXG4gICAgUGFuZWxSb3dcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7XG4gICAgbG9hZFByb21pc2Vcbn0gZnJvbSAnQHdvcmRwcmVzcy9hcGknO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5sZXQgY3VycmVudF91c2VyID0gbmV3IHdwLmFwaS5tb2RlbHMuVXNlcnNNZSgpO1xubGV0IGluaXRpYWxXaWR0aFZhbHVlID0gMjgwO1xuY3VycmVudF91c2VyLmZldGNoKCkudGhlbiggKHJlc3BvbnNlKSA9PiB7XG4gICAgaWYocmVzcG9uc2UubWV0YS5lZGl0b3Jfd2lkdGgpIHtcbiAgICAgICAgaW5pdGlhbFdpZHRoVmFsdWUgPSByZXNwb25zZS5tZXRhLmVkaXRvcl93aWR0aDtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWNlc3ctc2lkZWJhci13aWR0aCcsIHJlc3BvbnNlLm1ldGEuZWRpdG9yX3dpZHRoICsgJ3B4Jyk7XG4gICAgfVxufSlcblxuY2xhc3MgU2lkZWJhcldpZHRoUmFuZ2VDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG4gICAgICAgIHN1cGVyKCBwcm9wcyApXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlYm91bmNlZFNhdmUgPSBkZWJvdW5jZSggKHdpZHRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSBuZXcgd3AuYXBpLm1vZGVscy5Vc2Vyc01lKHtcbiAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICdlZGl0b3Jfd2lkdGgnOndpZHRoXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtb2RlbC5zYXZlKCkudGhlbiggKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6cmVzcG9uc2UubWV0YS5lZGl0b3Jfd2lkdGh9KVxuICAgICAgICAgICAgICAgIGluaXRpYWxXaWR0aFZhbHVlID0gcmVzcG9uc2UubWV0YS5lZGl0b3Jfd2lkdGg7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgICAgIH0sIDUwMClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbG9hZFByb21pc2UudGhlbiggKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRfdXNlciA9IG5ldyB3cC5hcGkubW9kZWxzLlVzZXJzTWUoKTtcbiAgICAgICAgICAgIGN1cnJlbnRfdXNlci5mZXRjaCgpLnRoZW4oIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLm1ldGEuZWRpdG9yX3dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOnJlc3BvbnNlLm1ldGEuZWRpdG9yX3dpZHRofSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRXaWR0aChyZXNwb25zZS5tZXRhLmVkaXRvcl93aWR0aClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zaWRlYmFyLXdpZHRoJywgd2lkdGggKyAncHgnKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgbGFiZWw9XCJMYXJnZXVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHdpZHRoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6d2lkdGh9KVxuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkU2F2ZSh3aWR0aCk7XG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIHZhbHVlPXsgdGhpcy5zdGF0ZS52YWx1ZSB9XG4gICAgICAgICAgICBtaW49eyAyODAgfVxuICAgICAgICAgICAgbWF4PXsgNjgwIH1cbiAgICAgICAgLz4pXG4gICAgfVxufVxuXG5sZXQgYXJyb3dfaWNvbiA9IDxzdmcgd2lkdGg9XCIzM1wiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAzMyAxOFwiPjxwYXRoIGQ9XCJNMjEuMTgzIDEyLjE3NEgxMS45N3Y0LjM5YS42NC42NCAwIDAgMS0xLjA0NC40OTRMLjgyNCA5LjIwOGEuNjM5LjYzOSAwIDAgMS0uMTEzLS44OTZDMy4wNDIgNS45ODEgOC4xIDIuNTQ1IDEwLjkzOS4zMzlhLjYzOS42MzkgMCAwIDEgMS4wMy41MDRsLjAwMiA0LjM5aDkuMjEyVi44NDNhLjY0LjY0IDAgMCAxIDEuMDQ0LS40OTRsMTAuMTAzIDcuODVhLjYzOS42MzkgMCAwIDEgLjExMy44OTZjLTIuMzMgMi4zMy03LjM5IDUuNzY3LTEwLjIyOCA3Ljk3M2EuNjQuNjQgMCAwIDEtMS4wMy0uNTA1bC0uMDAyLTQuMzg5elwiLz48L3N2Zz47XG5cbiBcbmNvbnN0IEN1c3RvbVNpZGViYXJXaWR0aFBsdWdpbiA9ICgpID0+IChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtIHRhcmdldD1cInBsdWdpbi1zaWRlYmFyLXdpZHRoXCIgaWNvbj17IGFycm93X2ljb24gfT5cbiAgICAgICAge19fKFwiU2lkZWJhciB3aWR0aFwiLCBcInNpZGViYXJ3aWR0aFwiKX1cbiAgICAgICAgPC9QbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtPlxuICAgICAgICA8UGx1Z2luU2lkZWJhciBuYW1lPVwicGx1Z2luLXNpZGViYXItd2lkdGhcIiB0aXRsZT1cIkxhcmdldXIgbGEgYmFycmUgZCdvdXRpbHNcIiBpY29uPXsgYXJyb3dfaWNvbiB9PlxuICAgICAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgICAgIDxQYW5lbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyV2lkdGhSYW5nZUNvbnRyb2wgaW5pdGlhbFZhbHVlPXtpbml0aWFsV2lkdGhWYWx1ZX0+PC9TaWRlYmFyV2lkdGhSYW5nZUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICA8L1BsdWdpblNpZGViYXI+XG4gICAgPC9GcmFnbWVudD5cbik7XG4gXG5yZWdpc3RlclBsdWdpbiggJ3BsdWdpbi1zaWRlYmFyLXdpZHRoJywgeyByZW5kZXI6IEN1c3RvbVNpZGViYXJXaWR0aFBsdWdpbiB9ICk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/app.js\n");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api":
/*!*****************************!*\
  !*** external ["wp","api"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["api"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__("./src/scripts/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);