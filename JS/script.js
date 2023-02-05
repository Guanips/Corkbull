const publish = document.getElementById("commentPublish")

function addComment(){
    const commentContent = document.getElementById("commentBox").value
    const commentName = document.getElementById("commentName").value
    const contenedor = document.getElementById("comments")
    
    const card = document.createElement("div")
    card.innerHTML = '<div class="commentCard"> <p class="commentCardText">'+commentContent+'</p> <p class="commentCardName">'+commentName+'</p> <div class="voting"> <button class="voteButton" id="downvote"><box-icon name="downvote"></box-icon></button> <p class="voteCount">0</p> <button class="voteButton" id="upvote"><box-icon name="upvote"></box-icon></button> </div>'
    contenedor.appendChild(card)

    console.log("hola")
}
