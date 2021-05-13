const counter = document.getElementById("counter") 
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const heartBtn = document.getElementById("heart")
const likesList = document.querySelector(".likes")
const pauseBtn = document.getElementById("pause")

setInterval(incrementTimer, 1000)

//setInterval(function(){ 
//    counter.innerText = ++counter.innerText
// }, 1000)

plusBtn.addEventListener("click", incrementTimer) 

function incrementTimer(){ 
    counter.innerText = ++counter.innerText
}


minusBtn.addEventListerner("click", () => {
    counter.innerText = --counter.innerText
})

heartBtn.addEventListener("click", likeNum)

function likeNum(){ 
    const foundLi = document.querySelector(`li(data-num="${counter.innerText}")`)
    if(!foundLi){ 
    const li = document.createElement('li')
    li.dataset.num = counter.innerText 
    li.innerHTML = `${counter.innerText} has been liked <span>1</span> time`
    likesList.append(li)
} else { 
    foundLi.children[0].innerText = ++foundLi.children[0].innerText
}

}

pauseBtn.addEventListener("click", (e) => { 
    console.log(e.target.innerText) 
    if(e.target.innerText === "pause"){ 
    clearInterval(intervalTime)
    e.target.innerText = "resume"
    } else { 
        intervalTimer() 
        e.target.innerText = "pause"
    }


})