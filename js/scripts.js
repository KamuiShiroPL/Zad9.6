function checkOnclickEvent(param) {
  console.log(param);
}

var add = document.getElementById('addElem');
var list = document.getElementById('list');

// Add items
add.addEventListener('click', function(e) {

  var element = document.createElement('li');
  var elementsQuantity = document.getElementsByTagName('li');

  element.innerHTML = 'item';
  element.innerHTML = 'item' + elementsQuantity.length;
  list.appendChild(element);

  checkOnclickEvent('Item was added');
});
