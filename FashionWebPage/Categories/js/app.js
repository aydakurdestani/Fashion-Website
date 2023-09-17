var dropdownCard=document.getElementById("dropdownCard");
var close=document.getElementById("close");
var Categories=document.getElementById("Categories");

Categories.addEventListener('click', function() {
    if (dropdownCard.style.display === 'block') {
        dropdownCard.style.display = 'none';
    } else {
        dropdownCard.style.display = 'block';
    }
});

close.addEventListener("click",()=>{
dropdownCard.style.display='none';
});