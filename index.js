function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  let children = document.getElementById('grand-node').querySelectorAll('div');
  
  for (let i = 0, l = children.length; i < l; i++) {
  if (i === l - 1) {
      return children[i];
    }
  }
}