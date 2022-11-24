paintDOMCategories(eventCategories)
paintDOM(futureEvents)

const inputEvent = document.getElementById("input-event")
const cardsContainer = document.getElementById("card_container")
const eventCards = document.querySelectorAll(".card-search");

inputEvent.addEventListener("keyup", (event)=>{
    eventCards.forEach((eventCard) => {
      eventCard.textContent
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
        ? eventCard.classList.remove("invisible")
        : eventCard.classList.add("invisible");
    });
})

const checkboxContainer = document.getElementById('container-category-check')
const cardsCategories = document.getElementsByClassName('category-for-check')
checkboxContainer.addEventListener('change', ()=>{
    const checkboxes = document.querySelectorAll('.form-check-input')
    let categoriesChecked = []
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        categoriesChecked.push(checkbox.value);
      }
      //   else{
      //     categoriesChecked.pop(checkbox.value);
      //   }
        
    })
    
    // console.log(categoriesChecked)
    // console.log(cardsCategories.length)
    // console.log(cardsCategories)
    
    for(let i=0; i<cardsCategories.length; i++){
      cardsCategories[i].textContent
      if(categoriesChecked.includes(cardsCategories[i].textContent)){
        cardsCategories[i].parentElement.classList.remove("invisible")
        // console.log('entro al if')
      }
      else if(!categoriesChecked.includes(cardsCategories[i].textContent)){
        cardsCategories[i].parentElement.classList.add("invisible")
        // console.log('entro al if')
      }

    }
  if(categoriesChecked.length === 0){
    paintDOM(eventos)
  }

})
