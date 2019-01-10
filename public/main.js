function loadPage() {
    let xhr = new XMLHttpRequest()
    xhr.addEventListener('load', add_page)
    xhr.open('GET', '/data.json')
    xhr.send()
}

function add_page() {
    page = parse_response(this.responseText)
    let div = document.querySelector('#main')
    div.innerHTML = page
}
function parse_response(json){
    json = JSON.parse(json)
    page = "<h1>Hi my name is " + json.name + " and my email is " + json.email + "</h1>"
    return page
}
document.querySelector('#load_page_btn').addEventListener('click', loadPage)