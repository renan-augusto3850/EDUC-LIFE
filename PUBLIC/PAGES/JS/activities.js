var main = document.querySelector(".activities");
var loading = document.getElementById("loading");
var div;
fetch("/GETEXERCISES")
    .then(response => response.json())
        .then(data => {
            for(var i = 0; i < data.Exercies.length; i++){
                div +=`<div class="exercicies"><h1>${data.Exercies[i].name}</h1><h5>Prof.${data.Exercies[i].prof}</h5><br><h6>${data.Exercies[i].date}</h6><br><br><button>Abrir</button></div>`;
            }
            main.innerHTML = div.replace('undefined', '');
            document.querySelector("body").style.opacity = "1";
            setTimeout(function(){
                loading.style.display = 'none';
            }, 2000);
        });