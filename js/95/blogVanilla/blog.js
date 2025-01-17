(async function () {
    "use strict";
    const container = document.getElementById("container");
    let userHolder;
    let postholder;



    function unloadComments(id, h) {
        const e = document.getElementById(id);


        h.removeChild(e);

    }
    async function loadComments(id, h) {




        console.log("handled comment  click for ", id);



        try {
            const r = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id} `);
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText}`);
            }
            const comments = await r.json();
            console.log(comments);

            const commentsHolder = document.createElement("div");
            commentsHolder.id = id;

            comments.forEach(c => {
                const commentDiv = document.createElement("div");

                //usersDiv.id = "user div";


                commentDiv.innerHTML = ` <p >${c.email}:</p>${c.body}<hr>`;
                commentsHolder.appendChild(commentDiv);
                h.appendChild(commentsHolder);


            });
        } catch (error) {
            console.error(error);

        }

    }

    async function loadPosts(UserId, userNme) {
        container.removeChild(userHolder);
        postholder = document.createElement("div");
        postholder.id = "posts";

        postholder.innerHTML = "";
        postholder.innerHTML = `<h1>posts by ${userNme}</h1>`;
        const backButton = document.createElement("button");
        backButton.innerText = "go back to bloggers";
        backButton.id = "backButton";
        backButton.addEventListener("click", () => {
            container.removeChild(postholder);
            container.appendChild(userHolder);
        });
        postholder.append(backButton);


        try {
            const r = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${UserId}`);
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText}`);
            }
            const userPosts = await r.json();
            console.log(userPosts);

            userPosts.forEach(p => {
                const postDiv = document.createElement("div");
                postDiv.id = "post";

                postDiv.innerHTML = `<h1>${p.title}</h1> <p>${p.body}</p>`;
                const button = document.createElement("button");
                button.innerText = " show comments";
                button.addEventListener("click", () => {
                    if (button.innerText === "show comments") {
                        loadComments(p.id, postDiv);
                        button.innerText = "hide comments";


                    } else {
                        unloadComments(p.id, postDiv);
                        button.innerText = "show comments";


                    }
                });
                postDiv.append(button);
                postholder.appendChild(postDiv);


            });

            container.appendChild(postholder);
        } catch (error) {
            console.error(error);

        }


        console.log("handeled click");


    }

    async function loadUsers() {
        try {
            const r = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText}`);
            }
            const users = await r.json();
            console.log(users);
            userHolder = document.createElement("div");
            userHolder.id = "users";
            userHolder.innerHTML = `<h1>bloggers</h1>`;


            users.forEach(u => {
                const user = document.createElement("div");
                //usersDiv.id = "user div";
                user.id = "user";
                const seePostButton = document.createElement("button");
                seePostButton.innerText = "see posts"
                seePostButton.addEventListener("click", () => {
                    loadPosts(u.id, u.name);

                });



                user.innerHTML = `<h1>${u.name}</h1> <p>${u.company.name}</p>${u.email} <p></p>`;
                user.append(seePostButton);
                userHolder.appendChild(user);
                container.appendChild(userHolder);


            });


        } catch (error) {
            console.error(error);

        }
    }
    loadUsers();




}());