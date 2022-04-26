const cardArray = [
    {
        name: 'book',
        img: 'images/book.png'
    },
    {
        name: 'earth',
        img: 'images/earth.jpg'
    },
    {
        name: 'fish',
        img: 'images/fish.jpg'
    },
    {
        name: 'jar',
        img: 'images/jar.jpg'
    },
    {
        name: 'polaroid',
        img: 'images/polaroid.jpg'
    },
    {
        name: 'sun',
        img: 'images/sun.png'
    },
    {
        name: 'book',
        img: 'images/book.png'
    },
    {
        name: 'earth',
        img: 'images/earth.jpg'
    },
    {
        name: 'fish',
        img: 'images/fish.jpg'
    },
    {
        name: 'jar',
        img: 'images/jar.jpg'
    },
    {
        name: 'polaroid',
        img: 'images/polaroid.jpg'
    },
    {
        name: 'sun',
        img: 'images/sun.png'
    }, 
]

cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardsChosen=[]
let cardsChosenIds= []
const cardsWon = []


function createBoard () {
    for (let i=0; i< cardArray.length; i++) {
       const card=  document.createElement('img')
      card.setAttribute('src', 'images/pink.png')
      card.setAttribute('data-id',i)
      card.addEventListener('click', flipCard)
      gridDisplay.append(card)
    }
}

createBoard()

function checkMatch(){
   const cards = document.querySelectorAll('img')
    const optionOneId=cardsChosenIds[0]
    const optionTwoId= cardsChosenIds[1]
    //console.log(cards)
    console.log('check for match!')
    if(optionOneId==optionTwoId){
        cardsChosen[0]=[]
        cardsChosen[1]=[]
        cards[optionOneId].setAttribute('src','images/pink.png')
        cards[optionTwoId].setAttribute('src','images/pink.png')
        alert('You have clicked the same image!')
}

    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src','images/green.png')
        cards[optionTwoId].setAttribute('src','images/green.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src','images/pink.png')
        cards[optionTwoId].setAttribute('src','images/pink.png')
        alert('Sorry try again!')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen=[]
    cardsChosenIds=[]

    if (cardsWon.length==cardArray.length/2) {
        resultDisplay.textContent = 'You win!'
    }
}

function flipCard(){
    const cardId= this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length=== 2){
        setTimeout(checkMatch, 500)
    }
}
