let response = fetch(
    "https://dummyjson.com/comments?skip=9&limit=7&select=body,postId'"
)
    .then((res) => res.json())
    .then((res) => parse(res.comments));

async function comment_generator(username, comment) {
    let reviews = document.querySelector(".reviews");
    const com = document.createElement("com");
    let commentNew = `
        <div class="comment">
            <h3>${username}</h3>
            <p>${comment}</p>
        </div>`;
    com.innerHTML = commentNew;
    reviews.append(com);
}

async function parse(data) {
    for (let i = 0; i < data.length; i++) {
        let username = await data[i].user.username;
        let comment = await data[i].body;
        comment_generator(username, comment);
    }
}   