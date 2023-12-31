"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Campaign = require("./build/Campaign.json");

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var campaign = function campaign(address) {
  return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
exports.default = campaign;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImNhbXBhaWduIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBcUIsQUFBckI7Ozs7OztBQUVBLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQyxBQUFELFNBQWEsQUFDNUI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsS0FBSyxBQUFMLE1BQVcsbUJBQVMsQUFBcEIsQUFBdEIsWUFBc0QsQUFBdEQsQUFBUCxBQUNEO0FBRkQsQUFHQTtrQkFBZSxBQUFmIiwiZmlsZSI6ImNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JhbWVlbGEva2lja3N0YXJ0In0=