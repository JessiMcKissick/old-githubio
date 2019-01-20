function test(){
    let out = document.getElementById('output');
    let title = document.getElementById('title');
    let content = document.getElementById('content');
    console.log(title.value)
    let date = document.getElementById('date');
    let output = 'title: "' + title.value + '",' + ' content: "' + content.value + '", date: "' + date.value + '"';
    let p = document.createElement('p');
    p.textContent = output;
    out.appendChild(p);
}