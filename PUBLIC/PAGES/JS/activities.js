var main = document.querySelector('.activities');
var loading = document.getElementById('loading');
var query = window.location.search;
var params = new URLSearchParams(query);
var Exerciseid = params.get('id');
var visualizer = document.querySelector("#view");
var head = document.querySelector('.header');
var exerciseDiv = document.querySelector('.exerciseDiv');
var div;
fetch("/GETEXERCISES")
    .then(response => response.json())
        .then(data => {
            if(!Exerciseid){
                if(JSON.stringify(data) != '[]'){
                    for(var i = 0; i < data.length; i++){
                        div +=`<div class="exercicies"><h1>${data[i].name}</h1><h5>Prof.${data[i].prof}</h5><br><h6>${data[i].date}</h6><br><br><button onclick="window.location.assign('activities.html?id=${data[i].id}')">Abrir</button></div>`;
                    }
                    main.innerHTML = div.replace('undefined', '');
                    setTimeout(function(){
                        loading.style.display = 'none';
                    }, 2000);
                } else {
                    main.innerHTML = "<h1>Sem atividades para hoje!</h1>";
                    setTimeout(function(){
                        loading.style.display = 'none';
                    }, 2000);
                }
            } else {
                for(var i = 0; i < data.length; i++){
                    if(data[i].id === Exerciseid){
                        let exerciseElement = `<p>${data[i].content}</p>`;
                        visualizer.innerHTML = exerciseElement;
                        head.innerHTML = `<h2>${data[i].name}</h2>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" width="40" class="littlePicture">
                        <h6 class="nameProf">prof.${data[i].prof}</h6>`;
                        exerciseDiv.style.display = 'block';
                        setTimeout(function(){
                            loading.style.display = 'none';
                        }, 1000);
                    }
                }
            }
            
        });