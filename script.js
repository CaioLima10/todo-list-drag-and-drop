// preventDefault
const body = document.querySelector("body")

// abrir e fechar modal
const transparentColor = document.querySelector("#transparent-color");
const formContainer = document.querySelector("#form-container");

// broqueio do modal
const btnContainer = document.getElementById("btnContainer")

//criar um card e contador do toDo e Card

let contador = 0
const inputTitle = document.getElementById("inputTitle")
const inputDescription = document.getElementById("inputDescription")
const main = document.getElementById("areaCard")
const typeInformation = document.getElementById("typeInformation")
const containerDoing = document.getElementsByClassName("containerDoing")
const containerDone = document.getElementsByClassName("containerDone")

// drop card
const dropzone = document.getElementsByClassName("dropzone")

//create card
const card = document.getElementsByClassName("card")

// Mudar Number ToDo 
const toDoAccount = document.querySelector("#one")
toDoAccount.innerHTML = '0'

const doing = document.querySelector("#zero")
toDoAccount.innerHTML = '0'

// Pegar os cards do localstorage

function functionGetItems() {
  const cardsLocalStorageJson = window.localStorage.getItem('cards');
  const cardsLocalStorage = JSON.parse(cardsLocalStorageJson)
  console.log(cardsLocalStorage)
  

  cardsLocalStorage?.map((card)=> {
    const typeColor = card.Type.split(' , ')
    const id = Math.random(); 

    const newCard =`
     <div class="arealist">
     <div  id="${id}"class="card" draggable="true">
     <div id="BorderCorOption" style="background:${typeColor[1]}"> 
                 <div>
                 <svg class ="editCard" onclick="editCard()" width="7" height="12" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1" cy="1" r="1" fill="#D9D9D9"/>
                            <circle cx="1" cy="4" r="1" fill="#D9D9D9"/>
                            <circle cx="1" cy="7" r="1" fill="#D9D9D9"/>
                      </svg>
                </div>
              
                 <div id="treinarText">${card.Title}</div> 
                 <p>type:</p>
                 <div id="tarefas">${typeColor[0]}</div>
                 <div id="informationText">${card.Description}</div>
                 <div id="numberCard">0${card.id}</div>
                 <div> 
                 </div>
              </div>
          </div>        
      </div>`
     
      main.innerHTML += newCard;

    closeForm()
  })
}

functionGetItems()

// Mudar Number Doing

body.onsubmit =(e) => {
  e.preventDefault()
  
}

// codigo para anular numero nos input
inputDescription.addEventListener('keypress', function(e){
 const keyCode = (e.keyCode ? e.keyCode : e.wich)
 if(keyCode > 47 && keyCode < 58){
  e.preventDefault()
}})
 inputTitle.addEventListener('keypress', function(e){
  const keyCode = (e.keyCode ? e.keyCode : e.wich)
  if(keyCode > 47 && keyCode < 58){
   e.preventDefault()
}})


function openForm() {
  transparentColor.style.display = 'flex';
  formContainer.style.display = 'flex';

}
function closeForm() {
  transparentColor.style.display = 'none';
  formContainer.style.display = 'none';
}


inputDescription.addEventListener("keyup", (e) =>{

  const value = e.currentTarget.value

     btnContainer.disabled = false
     btnContainer.style.cursor = 'pointer';
     btnContainer.style.backgroundColor = "blue"

  if (value === ""){

    btnContainer.disabled = true
    btnContainer.style.cursor = 'not-allowed';
    btnContainer.style.backgroundColor = "#5b5f6e"
  } 
}) 


// criando Card
function createCard(){

 ++contador

    const valorInput = inputTitle.value;
    const valorInput2 = inputDescription.value
    const valorInputSelect = typeInformation.value.split(' , ')

    const newCard =`
     <div class="arealist">
     <div  id="${contador}"class="card" draggable="true">
     <div id="BorderCorOption" style="background:${valorInputSelect[1]}"> 
                 <div>
                 <svg class ="editCard" onclick="editCard()" width="7" height="12" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1" cy="1" r="1" fill="#D9D9D9"/>
                            <circle cx="1" cy="4" r="1" fill="#D9D9D9"/>
                            <circle cx="1" cy="7" r="1" fill="#D9D9D9"/>
                      </svg>
                </div>
                 <div id="treinarText">${valorInput}</div> 
                 <p>type:</p>
                 <div id="tarefas">${valorInputSelect[0]}</div>
                 <div id="informationText">${valorInput2}</div>
                 <div id="numberCard">0${contador}</div>
                 <div> 
                 </div>
              </div>
          </div>        
      </div>`
     
      main.innerHTML += newCard;
      
      // contador do toDo 
      toDoAccount.innerHTML = main.childElementCount
      


      closeForm() 

         // localStorage basico para ler informac??es dos cards
              cards = localStorage.setItem
            ("cards", JSON.stringify([...JSON.parse(localStorage.getItem("cards") || "[]"),

            { Title: inputTitle.value, 
              Type: typeInformation.value, 
              Description: inputDescription.value,
              id: contador,
              colum: card 
              // Adicionar valor de coluna
            }]));
        
               
      // drop Card : arrastar os cards para o doing e done
   dragCard = newCard

  for(var index of card){
      index.addEventListener('dragstart', dragStart)
      index.addEventListener('dragend', dragEnd)
  }

  function dragStart(){
    dragCard = this;
    setTimeout(() => this.style.display = "none", 0)
    
  }
  function dragEnd(){
    setTimeout(() => this.style.display = "block", 0)
    dragCard = null
  }

  for(DoingDone of dropzone){
    DoingDone.addEventListener('dragover', dragOver)
    DoingDone.addEventListener('dragenter', dragEnter)
    DoingDone.addEventListener('dragleave', dragLeave)
    DoingDone.addEventListener('drop', Drop)
  }
  function Drop(){ this.append(dragCard)  }
  
  function dragOver(e){e.preventDefault()} 
  
  function dragEnter(e){e.preventDefault()  }
  
  function dragLeave(){  
if(card.colum === "doing"){
    containerDoing.colum += newCard
  }
 } };

//  drop para celular
document.addEventListener("touchmove", () => {

  for(var index of card){
    index.addEventListener('dragstart', dragStart)
    index.addEventListener('dragend', dragEnd)
}

function dragStart(){
  dragCard = this;
  setTimeout(() => this.style.display = "none", 0)
  
}
function dragEnd(){
  setTimeout(() => this.style.display = "block", 0)
  dragCard = null
}

for(DoingDone of dropzone){
  DoingDone.addEventListener('dragover', dragOver)
  DoingDone.addEventListener('dragenter', dragEnter)
  DoingDone.addEventListener('dragleave', dragLeave)
  DoingDone.addEventListener('drop', Drop)
}
function Drop(){ this.append(dragCard)  }

function dragOver(e){e.preventDefault()} 

function dragEnter(e){e.preventDefault()  }

function dragLeave(){  

}
});

document.addEventListener("touchstart", e => {
 ;[...e.changedTouches].forEach(touch => {
  const card = document.getElementsByClassName(touch.identifier)
  card.style.top = `${touch.pageY}px`
  card.style.left = `${touch.pageX}px`
 })
})
document.addEventListener("touchmove" , e => {
  ;[...e.changedTouches].forEach(touch => {
    const card = document.getElementsByClassName(touch.identifier)
    card.style.top = `${touch.pageY}px`
    card.style.left = `${touch.pageX}px`
  })
})
document.addEventListener("touchend", e => {
  ;[...e.changedTouches].forEach(touch => {
    const card = document.getElementsByClassName(touch.identifier)
    card.remove()
  })
})
