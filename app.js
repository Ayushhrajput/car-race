const gridLayout = document.querySelector('.grid')
let moveCarId 
let scoreDisplay = document.querySelector('.score')
const res = document.querySelector('.res')
let score = 0
const width = 5
const height = 8
const l = document.querySelector('.l')
const t = document.querySelector('.t')
const r = document.querySelector('.r')
const d = document.querySelector('.d')

for(let i=0; i<width*height; i++){
    const grid = document.createElement('div')
    gridLayout.appendChild(grid)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

let playerIdx = 36
squares[playerIdx].classList.add('player')

const margin = []
function draw() {
    
        for(let i=0; i<squares.length; i++){
            
            if(i%width == 2 && i%2 == 0){
                squares[i].classList.add('margin')
                console.log(squares[i])
            }
        }
}
draw()


function cars() {
        let path = Math.floor(Math.random()*5)
        let currPathIdx = path;
        squares[currPathIdx].classList.add('car')
        
        function moveCar() {
            squares[currPathIdx].classList.remove('car') 
            currPathIdx += width
            squares[currPathIdx].classList.add('car')

        }
        score += 100
        scoreDisplay.innerHTML = score 
        

        moveCarId = setInterval(moveCar, 100); 
        setTimeout(() => (
            clearInterval(carsId)
            
            
        ), 60000);   
        
        
        if(squares[playerIdx].classList.contains('car')){
            
            clearInterval(carsId)
            res.innerHTML = 'score'
        }
}
const carsId = setInterval(cars, 400);


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
function playerMove(e) {
    
    if(e.key == 'ArrowLeft'){
        moveLeft() 
    } else if(e.key == 'ArrowRight'){
        moveRight()  
    } else if(e.key == 'ArrowUp'){
        moveUP()
    } else if(e.key == 'ArrowDown'){
        moveDown()
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



