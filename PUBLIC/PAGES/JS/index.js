var loading = document.getElementById("loading");
    function loadingShow() {
        loading.style.display = 'block';
    }
setTimeout(function(){
    loading.style.display = 'none';
}, 2000);
document.getElementById("menu").addEventListener('click', function(){
    document.querySelector(".menuMain").style.left = "0";
});
document.getElementById("back").addEventListener('click', function(){
    document.querySelector(".menuMain").style.left = "-100%";
});