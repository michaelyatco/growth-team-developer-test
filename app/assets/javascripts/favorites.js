function addToListFavGems(star) {
  if (localStorage.getItem('gemNameKey')) {
    var favGems = JSON.parse(localStorage.getItem('gemNameKey'));
  } else {
    favGems = [];
  }
  var gemName = (star.previousSibling.parentNode.innerText).replace(" ", "");
  if (favGems.indexOf(gemName) === -1) {
    favGems.push(gemName);
  } else {
    removeGemNames(favGems, gemName);
  }
  if (window.localStorage) {
    localStorage.setItem('gemNameKey', JSON.stringify(favGems));
  }
  toggleStars(star);
}

function deleteFromListFavGems(star) {
  var favGems = JSON.parse(localStorage.getItem('gemNameKey'));
  var gemName = (star.previousSibling.parentNode.innerText);
  var indexToRemove = favGems.indexOf(gemName.replace("  ", ""));
  favGems.splice(indexToRemove, 1);
  localStorage.setItem('gemNameKey', JSON.stringify(favGems));
}



function toggleStars(star) {
  if (star.src.indexOf("gray") === -1) {
    star.src = star.src.replace("blue", "gray");
  } else {
    star.src = star.src.replace("gray", "blue");
  }
}

function removeGemNames(favGems, gemName) {
  if (window.localStorage) {
    if (favGems.indexOf(gemName) !== -1) {
      favGems.splice(favGems.indexOf(gemName), 1);
      localStorage.removeItem('gemNameKey');
      localStorage.setItem('gemNameKey', JSON.stringify(favGems));
    }
  }
}

function readGemNames() {
  if (window.localStorage && window.location.href.indexOf('favorites') !== -1) {
    var gemNames = localStorage.getItem('gemNameKey');
    var resultGemNames = JSON.parse(gemNames);
    document.getElementById('displayGemNames').innerHTML = resultGemNames;

  }
}

