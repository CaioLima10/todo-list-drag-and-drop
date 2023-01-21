

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

// drop card
const dropzone = document.getElementsByClassName("dropzone")

//create card
const card = document.getElementsByClassName("card")

// Mudar Number ToDo 
const toDoAccount = document.querySelector("#one")
toDoAccount.innerHTML = '0'

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
                <div onclick="marcarTarefa(${contador})">
                      <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
                <div/>
                 <div>
                 <svg class ="editCard" onclick="editCard()" width="7" height="12" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1" cy="1" r="1" fill="#D9D9D9"/>
                            <circle cx="1" cy="4" r="1" fill="#D9D9D9"/>
                            <circle cx="1" cy="7" r="1" fill="#D9D9D9"/>
                      </svg>
                </div>
                 <div>
                      <svg  class="removeCard" onclick ="deleteCard(${contador})" width="17" height="17" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="15.981" y="5.56293" width="1.73333" height="14.7333" rx="0.866667" transform="rotate(45 15.981 5.56293)" fill="white"/>
                      <rect x="17.2068" y="15.981" width="1.43333" height="14.7333" rx="0.866667" transform="rotate(135 17.2068 15.981)" fill="white"/>
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
    const doingAccount = document.querySelector("#zero")
    doingAccount.innerHTML = main.childElementCount


 } };

  // função deletar os cards

  function deleteCard(id){
      var cards = document.getElementById(id)
      cards.remove()
  }

  function marcarTarefa(id){
  var card = document.getElementById(id)
  var classe = card.getAttribute('class')

  console.log(classe)

  if(classe == 'card'){
    card.classList.add('clicado')
    var icone = document.getElementById('icone_'+ id)
    icone.classList.remove('mdi-circle-outline')
    icone.classList.add('mdi-check-circle')
  }
  else{
    card.classList.remove('clicado')
    var icone = document.getElementById('icone_'+ id)
    icone.classList.remove('mdi-check-circle')
    icone.classList.add('mdi-circle-outline')
  }
 }  



 