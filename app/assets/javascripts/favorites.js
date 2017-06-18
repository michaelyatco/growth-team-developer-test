function addToListFavGems(star){
  var favGems = [];
  gemName = star.previousSibling.parentNode.innerText;
  if (favGems.indexOf(gemName) === -1) { // check if gem is in local storage
    favGems.push(gemName);
  } else {
    removeGemNames();
  }
  if(window.localStorage){
    localStorage.setItem('gemNameKey', JSON.stringify(favGems))
  }
  if (star.src.indexOf("gray") === -1) {
    star.src = star.src.replace("blue", "gray");
  } else {
    star.src = star.src.replace("gray", "blue");
  }
}

function removeGemNames(){
  if (window.localStorage) {
    var gemNames = localStorage.removeItem('gemNameKey');
  }
}

function readGemNames(){
  if (window.localStorage && window.location.href.indexOf('favorites') !== -1) {
    var gemNames = localStorage.getItem('gemNameKey');
    console.log(gemNames);
    var resultGemNames = JSON.parse(gemNames);
    console.log(resultGemNames);
      document.getElementById('displayGemNames').innerHTML = resultGemNames;

    }
  }

$(document).ready(function() {
  readGemNames();
});



