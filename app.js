const gridLayout = document.querySelector('.grid')
let moveCarId 
let scoreDisplay = document.querySelector('.score')
const res = document.querySelector('.res')
const play = document.querySelector('.play')
let score = 0
const width = 5
const height = 8
const l = document.querySelector('.l')
const t = document.querySelector('.t')
const r = document.querySelector('.r')
const d = document.querySelector('.d')
const nitroUp = document.querySelector('.nitro-up')
const stop = document.querySelector('.stop')
let nitro = 125

for(let i=0; i<width*height; i++){
    const grid = document.createElement('div')
    gridLayout.appendChild(grid)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

let playerIdx = 31
squares[playerIdx].classList.add('player')

let marginIdx = Math.floor(width/2)


function draw() {
    let marginIdx = Math.floor(width/2)
    squares[marginIdx].classList.add('margin')
    function moveaMargin(){
        squares[marginIdx].classList.remove('margin')
        marginIdx +=width
        squares[marginIdx].classList.add('margin')
    }
    
    setInterval(moveaMargin, nitro);
}

play.addEventListener('click', () => {
    let MarginId = setInterval(draw, 400);
    const carsId = setInterval(cars, 400);
    res.innerHTML = 'score'
    score = 0
    function cars() {
        let path = Math.floor(Math.random()*width)
        let currPathIdx = path;
        squares[currPathIdx].classList.add('car')
        
        function moveCar() {
            squares[currPathIdx].classList.remove('car') 
            currPathIdx += width
            squares[currPathIdx].classList.add('car')

            if(squares[playerIdx].classList.contains('car')){
                
            clearInterval(carsId)
            clearInterval(MarginId)
        }

        }
        score += 100
        scoreDisplay.innerHTML = score 


        moveCarId = setInterval(moveCar, nitro); 
        setTimeout(() => (
            clearInterval(carsId)
            
            
        ), 40000);   
        setTimeout(() => {
            clearInterval(MarginId)
        }, 40000);
        
    }
})


function moveLeft(){
    const leftEdge = playerIdx%width == 0
    if(!leftEdge){
        squares[playerIdx].classList.remove('player')
        playerIdx--
        squares[playerIdx].classList.add('player')
    }
}
function moveRight(){
    const rightEdge = playerIdx%width == width-1
    if(!rightEdge){
        squares[playerIdx].classList.remove('player')
        playerIdx++
        squares[playerIdx].classList.add('player')
    }
}
function moveUP(){
    const topEdge = playerIdx<width
    if(!topEdge){
        squares[playerIdx].classList.remove('player')
        playerIdx -= width
        squares[playerIdx].classList.add('player')
    }
}
function moveDown(){
    const BottomEdge = playerIdx>squares.length-width-1
    if(!BottomEdge){
        squares[playerIdx].classList.remove('player')
        playerIdx += width
        squares[playerIdx].classList.add('player')
    }
}
function Nitro() {
    while(nitro>50){
        nitro -= 25
        score += 25
    }
}
function Stop() {
    while(nitro<140){
        nitro +=25
        score -= 25
    }
}
function playerMove(e) {
    
    if(e.key == 'a'){
        moveLeft() 
    } else if(e.key == 'd'){
        moveRight()  
    } else if(e.key == 'w'){
        moveUP()
    } else if(e.key == 's'){
        moveDown()
    } else if(e.key == 'ArrowUp'){
        Nitro()
    } else if(e.key == 'ArrowDown'){
        Stop()
    }
    
}
document.addEventListener('keydown', playerMove)
l.addEventListener('click', () => {
    moveLeft() 
})
r.addEventListener('click', () => {
    moveRight()
})
t.addEventListener('click', () => {
    moveUP()
})
d.addEventListener('click', () => {
    moveDown()
})
nitroUp.addEventListener('click', () => {
    Nitro()
})
stop.addEventListener('click', () => {
    Stop()
})



