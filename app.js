const cardArray = [
    {
        name: 'angel',
        img: 'images/angel.png'
    },
    {
        name: 'angry',
        img: 'images/angry.png'
    },
    {
        name: 'crying',
        img: 'images/crying.png'
    },
    {
        name: 'heart',
        img: 'images/heart.png'
    },
    {
        name: 'star-eyes',
        img: 'images/star-eyes.png'
    },
    {
        name: 'sunglasses',
        img: 'images/sunglasses.png'
    },
    {
        name: 'angel',
        img: 'images/angel.png'
    },
    {
        name: 'angry',
        img: 'images/angry.png'
    },
    {
        name: 'crying',
        img: 'images/crying.png'
    },
    {
        name: 'heart',
        img: 'images/heart.png'
    },
    {
        name: 'star-eyes',
        img: 'images/star-eyes.png'
    },
    {
        name: 'sunglasses',
        img: 'images/sunglasses.png'
    }
        
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
    console.log(cards)
    console.log('check for match!')
    if(optionOneId==optionTwoId){
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
