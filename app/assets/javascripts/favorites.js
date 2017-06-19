function addToListFavGems(star) {
  if (localStorage.getItem('gemNameKey')) {
    var favGems = JSON.parse(localStorage.getItem('gemNameKey'));
  } else {
    favGems = [];
  }
  var gemName = (star.previousSibling.parentNode.innerText).replace(" ", "");//Extra space per element of LocalStor Array
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
// JQuery-method below works but need to figure out AngularJS for consistency in my code. NOTE - Success.

// $(document).ready(function() {
//   var gems = JSON.parse(window.localStorage.getItem('gemNameKey'));
//   html = "<ul>";
//   for (var i = 0; i < gems.length; i++) {
//     html += "<li>" + gems[i] + "<img src='/assets/star-blue' onclick='addToListFavGems(this)'/>" + "</li>";
//   }
//   html += "</ul>";
//   document.getElementById('favorites').innerHTML = html;
// });

