let generatePosts = () => {
    let origin = document.getElementById('postBox');
    posts.reverse().map((item) => {
        let newDiv = document.createElement('div');
        newDiv.className = 'newsPost';
        let title = document.createElement('h3');
        title.className = 'postTitle';
        title.textContent = item.title;
        let content = document.createElement('p');
        content.className = 'postContent'; 
        content.textContent = item.content;
        let date = document.createElement('h4');
        date.className = 'date';
        date.textContent = item.date;

        newDiv.appendChild(title);
        newDiv.appendChild(content);
        newDiv.appendChild(date);
        origin.appendChild(newDiv);
    });
}

generatePosts();
