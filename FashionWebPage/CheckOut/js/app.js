function selectCountry(country) {
    document.getElementById("countryInput").value = country;
}
function selectStateOrCountry(stateOrCountry) {
    document.getElementById("stateCountryInput").value = stateOrCountry;
}
function selectCity(city) {
    document.getElementById("cityInput").value = city;
}
$('.Language').on('click', function() {
    var selectedLanguage = $(this).text();
    $('#selectedLanguage').text(selectedLanguage);
});
$('.arrivales').on('click', function() {
    var NewArrivals = $(this).text();
    $('#NewArrivals').text(NewArrivals);
});
$('.Categories').on('click', function() {
    var Categories = $(this).text();
    $('#Categories').text(Categories);
});
$('.Sales').on('click', function() {
    var Sales = $(this).text();
    $('#Sales').text(Sales);
});
$('.Brands').on('click', function() {
    var Brands = $(this).text();
    $('#Brands').text(Brands);
});
document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");
    const inputField = searchInput.querySelector("input");
    searchIcon.addEventListener("click", function (event) {
      event.preventDefault(); 
      if (searchInput.style.display === "none") {
        const iconRect = searchIcon.getBoundingClientRect();
        searchInput.style.position = "absolute";
        searchInput.style.left = `${750}px`;
        searchInput.style.top = `${5}px`;
        searchInput.style.display = "block";
        inputField.focus();
      } else {
        searchInput.style.display = "none";
        inputField.value = "";
        inputField.blur();
      }
    });
  });