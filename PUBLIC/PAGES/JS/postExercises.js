function fetchData() {
    var title = document.getElementById("title").value;
    var prof = document.getElementById("prof").value;
    var content = document.getElementById("content").value;
    var date = new Date().toLocaleDateString();
    fetch('/POSTEXERCISES', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title,
        prof,
        content,
        date
    })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
document.getElementById("send").addEventListener('click', fetchData)