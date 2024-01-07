function fetchData() {
    var title = document.getElementById("title");
    var prof = document.getElementById("prof");
    var content = document.getElementById("content");
    var date = new Date().toLocaleDateString();
    fetch('https://example.com/api/data', {
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
document.getElementById(send).addEventListener('click', fetchData)