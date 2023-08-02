
let boxes = document.getElementsByClassName("box")

let x = document.getElementById("x")

let o = document.getElementById("o")

let v = document.getElementById("d")

let mainModal = document.getElementById("mainModal")

let btn = document.getElementById("btn")

let content = document.getElementById("content")

let i = 0, j = 0, k = 0

let move = true

function reset() {
    for (const element of boxes) {
        element.innerText = ""
    }
}

function winner(s) {
    content.innerText = `${s} wins`
    mainModal.style.display = 'block'
}

closeModal = () => {
    mainModal.style.display = 'none'
}



function draw() {
    let d = true
    for(let i = 0; i < 8; i++){
        if(boxes[i].innerText == '') d = false
    }
    if(d) {
        mainModal.style.display = 'block'
        content.innerText = "Draw"
        reset()
        v.innerText = ("Draw - ") + ++k + (" time(s)")
    }
}
function checkWinner(sym) {
    if(boxes[0].innerText == sym && boxes[1].innerText == sym && boxes[2].innerText == sym)
         return true
    else if(boxes[3].innerText == sym && boxes[4].innerText == sym && boxes[5].innerText == sym)
         return true
    else if(boxes[6].innerText == sym && boxes[7].innerText == sym && boxes[8].innerText == sym)
         return true
    else if(boxes[0].innerText == sym && boxes[3].innerText == sym && boxes[6].innerText == sym)
         return true
    else if(boxes[1].innerText == sym && boxes[4].innerText == sym && boxes[7].innerText == sym)
         return true
    else if(boxes[2].innerText == sym && boxes[5].innerText == sym && boxes[8].innerText == sym)
         return true
    else if(boxes[0].innerText == sym && boxes[4].innerText == sym && boxes[8].innerText == sym)
         return true
    else if(boxes[2].innerText == sym && boxes[4].innerText == sym && boxes[6].innerText == sym)
        return true
    else if(
        draw()
    )
    return false
}

btn.onclick = () => {
    closeModal()
}


// 2 гравця
for (const element of boxes) {
    element.addEventListener("click", function() {
        if(this.innerText == ''){
            if(move) {
                this.innerText = "X"
                if(checkWinner("X")) {
                    reset()
                    winner("X")
                    x.innerText = ("X wins ") + ++i + (" time(s)")
                }
                    
            }
            else {   
                this.innerText = "O"
                if(checkWinner("O")) {
                    reset()
                    winner("O")
                    o.innerText = ("O wins ") + ++i + (" time(s)")
                }
            }
            move = !move
        }
        else {
            mainModal.style.display = 'block'
            content.innerText = 'Виберіть іншу комірку'
            content.style.fontSize = 20 + 'px'
        }
    })
}



// Комп'ютер - людина
// for (const element of boxes) {
//     element.addEventListener("click", function() {
//         if(this.innerText == ''){
//                 this.innerText = "X"
//                 if(checkWinner("X")) {
//                     alert("X wins")
//                     reset()
//                 }
                    
//                 m = Math.floor(Math.random() * 9)
//                 console.log(m)
//                 boxes[m].innerText = "O"
//                 if(checkWinner("O")) {
//                     alert("O wins")
//                     reset()
//                 }
//             // }
//         }
//         else alert("Виберіть іншу комірку")
//     })
// }


