function addToListFavGems(star){
  if (localStorage.getItem('gemNameKey')) {
    var favGems = JSON.parse(localStorage.getItem('gemNameKey'));
  } else {
    var favGems = [];
  }
  gemName = star.previousSibling.parentNode.innerText;
  if (favGems.indexOf(gemName) === -1) {
    favGems.push(gemName);
  } else {
    console.log("time to remove!");
    removeGemNames(favGems, gemName);
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

function removeGemNames(favGems, gemName) {
  if (window.localStorage) {
    console.log("I'm removing the gem")
    if (favGems.indexOf(gemName) !== -1) {
      console.log(favGems);
      favGems.splice(favGems.indexOf(gemName), 1);
      console.log(favGems);
      localStorage.removeItem('gemNameKey');
      localStorage.setItem('gemNameKey', JSON.stringify(favGems));
    }
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



