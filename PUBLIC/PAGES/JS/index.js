var loading = document.getElementById("loading");
    function loadingShow() {
        loading.style.display = 'block'
    }
loading.style.display = 'none'
document.getElementById("menu").addEventListener('click', function(){
    document.querySelector(".menuMain").style.left = "0";
});
document.getElementById("back").addEventListener('click', function(){
    document.querySelector(".menuMain").style.left = "-100%";
});