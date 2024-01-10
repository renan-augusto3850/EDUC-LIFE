function fetchData() {
    var title = document.getElementById("title").value;
    var prof = document.getElementById("prof").value;
    var content = document.getElementById("content").value;
    var date = new Date().toLocaleDateString();
    var data = {name: title, prof: prof, content: content, date: date};
    fetch('/POSTEXERCISES', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    window.location.assign("/activities.html");
}
document.getElementById("send").addEventListener('click', fetchData)