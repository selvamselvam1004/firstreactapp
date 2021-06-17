"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import App from './App';
//import reactDom from 'react-dom';
// function AppTwo(){
//   return <h1>this is the second app</h1>;
// }
_reactDom["default"].render(_react["default"].createElement("ul", null, _react["default"].createElement("li", null, "monday"), _react["default"].createElement("li", null, "tuesday"), _react["default"].createElement("li", null, "wednesday")), document.getElementById("root")); //ReactDOM.render(<div><App /><AppTwo /></div>,document.getElementById("root"));