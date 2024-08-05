"use strict";

var _response = _interopRequireDefault(require("./response"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var featuredProductsContainer = document.querySelector('.row');
_response["default"].forEach(function (product) {
  var productHTML = "\n    <div class=\"col-4\">\n      <img src=\"".concat(product.image, "\" />\n      <h4>").concat(product.name, "</h4>\n      <div class=\"rating\">\n        ").concat(getRatingHTML(product.rating), "\n      </div>\n      <p>$").concat(product.price, ".00</p>\n    </div>\n  ");
  featuredProductsContainer.innerHTML += productHTML;
});
function getRatingHTML(rating) {
  var ratingHTML = '';
  for (var i = 0; i < 5; i++) {
    if (i < rating) {
      ratingHTML += '<i class="fa fa-star"></i>';
    } else {
      ratingHTML += '<i class="fa fa-star-o"></i>';
    }
  }
  return ratingHTML;
}