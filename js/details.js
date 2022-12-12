const cardDetail = new URLSearchParams(window.location.search)
console.log(cardDetail)
const params = cardDetail.get('name')
console.log(params)

let eventDetail = {}
let attendance = ""
let attendanceLabel = ""

data.events.forEach(event => {
    if(event.name.replace(/\s/g,'') == params){
        eventDetail = event
      if(pastEvents.includes(event)){
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
const paintDetailsDOM = (event) =>{
    const detailContainer = document.getElementById('details_container')
    detailContainer.innerHTML = `
    <div class="d-flex flex-column flex-md-row">
    <div class="img-details d-flex justify-content-center rounded">
      <img src="${event.image}" alt="" class="rounded">
    </div>
    <div class="card-details-body border border-secondary rounded d-flex flex-column justify-content-center">
      <h2 class="card-title text-center">${event.name}</h2>
      <p class="description">Description: ${event.description}</p>
      <div class="d-flex flex-wrap">
        <p class="card-text-details">Date: <span>${event.date}</span></p>
        <p class="card-text-details">Category: <span>${event.category}</span></p>
        <p class="card-text-details">Place: <span>${event.place}</span></p>
        <p class="card-text-details">Capacity: <span>${event.capacity}</span></p>
        <p class="card-text-details">${attendanceLabel}: <span>${attendance}</span></p>
        <p class="card-text-details">Price: <span>$${event.price}</span></p>
      </div>
    </div>
  </div>
    `
}

paintDetailsDOM(eventDetail)