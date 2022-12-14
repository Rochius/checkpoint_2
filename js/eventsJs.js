

  //Fecha a convertir
  //split
  //convertir en una instancia date
  //convertir a timestamp gettime

  //convert date format
function convert_date(stringDate){
    const dateSplit = stringDate.split('-')
    const dateToCompare = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2])

    return dateToCompare.getTime()
}


//divides the events by past, future or all events
const calsifyEventsByDate = (data)=>{
    const futureEvents=[]
    const pastEvents = []
    const eventCategories = []
    console.log('eventos')
    const allEvents = data.events.map(evento => {
        if(convert_date(data.currentDate) < convert_date(evento.date)){
            futureEvents.push(evento);
        }
        else{
            pastEvents.push(evento);
        }
    
        return evento
    })

    return { 'allEvents': allEvents, 'futureEvents': futureEvents, 'pastEvents': pastEvents, 'categories': eventCategories}
}


//obtains the cateories from the json
const getCategories = (data)=>{
    const categories = []
    console.log(data.events)
    data.events.forEach(ev =>{
        if (!categories.includes(ev.category)){
            categories.push(ev.category)
          }
    })
    return categories
}


//displays the category checkboxes
const paintDOMCategories = (eventCategories) => {
    const tagToUpdate =  document.getElementById('container-category-check')
    let containerCategoryCheckbox = ``
    eventCategories.map(eventCategorie => {
        containerCategoryCheckbox += `
                <div class="form-check form-check-inline container-fluid me-0" >
                    <input class="form-check-input" type="checkbox" id="${eventCategorie.replace(" ","").toLowerCase()}"${eventCategorie.replace(" ","").toLowerCase()}" value="${eventCategorie.replace(" ","").toLowerCase()}"${eventCategorie.replace(" ","").toLowerCase()}">
                    <label class="form-check-label" for="${eventCategorie.replace(" ","").toLowerCase()}">${eventCategorie}</label></div>
                </div>
        `
    })
    tagToUpdate.innerHTML = containerCategoryCheckbox
}


//displays event cards
const paintDOM = (events) => {
    let cardContainer = ``
    const tagToUpdate = document.getElementById("card_container")
    const currentUrl = window.location.pathname;
    let urlDetails = ""
    if(currentUrl.toLowerCase().includes("pastevents") || currentUrl.toLowerCase().includes("upcomingevents")){
      urlDetails = "./details.html"
    }else{
      urlDetails = "./pages/details.html"
    }
    events.map(event => {
        cardContainer +=`
            <div class="col-9 col-sm-6 col-md-5 col-lg-3 card-search" id="${event.category.replace(" ", "")}">
                <h6 class="category-for-check" style="display:none">${event.category.replace(" ","").toLocaleLowerCase()}</h6>
                <div class="card my-3 mx-3">
                    <div class="img_card" style="background-image: url(${event.image});"></div>
                    <div class="card-body">
                      <h5 class="card-title text-center">${event.name}</h5>
                      <p class="card-text">${event.description}</p>
                      <div class="row">
                        <span class="col-6">$${event.price}</span>
                        <a href="${urlDetails}?name=${event.name.replace(/\s/g,'')}" class="btn btn-primary col-6">Details</a>
                      </div>
                    </div>
                </div>
            </div>
        `
    });
    tagToUpdate.innerHTML = cardContainer;
}


//adds event to the search bar
const searchEvent = ()=>{
    const inputEvent = document.getElementById("input-event")
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
  }
  

  //adds event to the checkboxes
  const checkboxEvent = (events)=>{
    const checkboxContainer = document.getElementById('container-category-check')
  const cardsCategories = document.getElementsByClassName('category-for-check')
  checkboxContainer.addEventListener('change', ()=>{
      const checkboxes = document.querySelectorAll('.form-check-input')
      let categoriesChecked = []
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          categoriesChecked.push(checkbox.value);
        } 
      })
      
      console.log(categoriesChecked)
      console.log(cardsCategories.length)
      console.log(cardsCategories)
      
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
      paintDOM(events)
    }
  
  })
  
  }


//gets the event detail
const getEventDetail = (events)=>{
    const cardDetail = new URLSearchParams(window.location.search)
    console.log(cardDetail)
    const params = cardDetail.get('name')
    console.log(params)
  
    let eventDetail = {}
    let attendance = ""
    let attendanceLabel = ""
  
    events.allEvents.forEach(event => {
        if(event.name.replace(/\s/g,'') == params){
            eventDetail = event
          if(events.pastEvents.includes(event)){
            attendance = event.assistance
            attendanceLabel = "Attendance"
          }
          else{
            attendance = event.estimate
            attendanceLabel = "Estimate"
          }
        }
    });
    console.log(eventDetail)
    return [eventDetail, attendanceLabel, attendance]
  }
  
  
  // displays details information
  const paintDetailsDOM = (event) =>{
      const detailContainer = document.getElementById('details_container')
      detailContainer.innerHTML = `
      <div class="d-flex flex-column flex-md-row">
      <div class="img-details d-flex justify-content-center rounded">
        <img src="${event[0].image}" alt="" class="rounded">
      </div>
      <div class="card-details-body border border-secondary rounded d-flex flex-column justify-content-center">
        <h2 class="card-title text-center">${event[0].name}</h2>
        <p class="description">Description: ${event[0].description}</p>
        <div class="d-flex flex-wrap">
          <p class="card-text-details">Date: <span>${event[0].date}</span></p>
          <p class="card-text-details">Category: <span>${event[0].category}</span></p>
          <p class="card-text-details">Place: <span>${event[0].place}</span></p>
          <p class="card-text-details">Capacity: <span>${event[0].capacity}</span></p>
          <p class="card-text-details">${event[1]}: <span>${event[2]}</span></p>
          <p class="card-text-details">Price: <span>$${event[0].price}</span></p>
        </div>
      </div>
    </div>
      `
  }



//Calculates the 10% of events
const percentageOfEvents = (events)=>{
  return parseInt((events.length * 10)/100)
}


//calculates the persentage of attendance of eache event, returns each event with its percentage, name, and capacity
const calculatePercentageAssistance = (events)=>{
  const percentages = events.map(event =>{
    let assistance = event.assistance || event.estimate
    let percentage = (100 * Number(assistance))/Number(event.capacity)
    return {'percentage': percentage, 'eventId': event._id, 'capacity': Number(event.capacity), 'name':event.name}
  })

  return percentages.sort((a,b) => {return a.percentage - b.percentage})
}

//calculates the revenues and attendance percentage of each category
const revenuesAndAttendanceCategories = (events, categories)=>{
    let listPerCategory = []
    categories.forEach(category => {
        const eventsSameCategory = events.filter(event => event.category === category)
        let revenues = 0
        let percentageAssistance = 0
        let assistance = 0
        let capacity = 0
        eventsSameCategory.forEach(eventSameCategory => {

            revenues += eventSameCategory.price * (Number(eventSameCategory.assistance) || Number(eventSameCategory.estimate))
            assistance = Number(eventSameCategory.assistance) || Number(eventSameCategory.estimate)
            capacity = Number(eventSameCategory.capacity)

            if(assistance == 0 || capacity == 0){
                percentageAssistance += 0
            }else{
                percentageAssistance += (assistance * 100)/capacity
            }
        })

        console.log(percentageAssistance)
        listPerCategory.push({'category':category, 'revenues': revenues, 'percentageAssistance': (percentageAssistance/eventsSameCategory.length)})
    });

    return listPerCategory
}

//displays the events state table
const tableEventsStats = (events)=>{
    const lwrToHgh = calculatePercentageAssistance(events)
    const hghToLwr = calculatePercentageAssistance(events).reverse()
    const hghToLwrCapacity = calculatePercentageAssistance(events).sort((a,b) => {return b.capacity - a.capacity})
    const percentageEvents = percentageOfEvents(events)

    const tableBody = document.getElementById("event_stats")
    for(let i=0; i<percentageEvents; i++){
        tableBody.innerHTML += `
        <tr>
            <td class="column-width-1 text-center">${hghToLwr[i].name}: ${Math.round(hghToLwr[i].percentage)}%</td>
            <td class="column-width-1 text-center">${lwrToHgh[i].name}: ${Math.round(lwrToHgh[i].percentage)}%</td>
            <td class="text-center">${hghToLwrCapacity[i].name}: ${hghToLwrCapacity[i].capacity}</td>
        </tr>
        `
    }
}

//displays the upcoming and past events table
const tableUpcomingPastEvents = (events, categories, id)=>{
    console.log(id)
    const tableBody = document.getElementById(id)
    const listPerCategory = revenuesAndAttendanceCategories(events, categories)
    for(let i=0; i<listPerCategory.length; i++){
        tableBody.innerHTML += `
                <tr>
                    <td class="column-width-1 text-center">${listPerCategory[i].category}</td>
                    <td class="column-width-1 text-center">${listPerCategory[i].revenues}</td>
                    <td class="text-center">${Math.round(listPerCategory[i].percentageAssistance)}%</td>
                </tr>
        `
    }
}


