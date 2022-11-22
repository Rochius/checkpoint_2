const data={
    "fechaActual": "2022-01-01",
    "eventos": [
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
        "name":"Collectivities Party",
        "date":"2021-12-12",
        "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":5
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
        "name":"Korean style",
        "date":"2021-08-12",
        "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":10
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
        "name":"Jurassic Park",
        "date":"2021-11-02",
        "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category":"Museum",
        "place":"Field",
        "capacity":82000,
        "assistance":65892,
        "price":15
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
        "name":"Parisian Museum",
        "date":"2022-11-02",
        "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
        "category":"Museum",
        "place":"Paris",
        "capacity":8200,
        "estimate":8200,
        "price":3500
       },
       {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
        "name":"Comicon",
        "date":"2021-02-12",
        "description":"For comic lovers, all your favourite characters gathered in one place.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":120000,
        "assistance":110000,
        "price":54
       },
       {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
          "name":"Halloween Night",
          "date":"2022-02-12",
          "description":"Come with your scariest costume and win incredible prizes.",
          "category":"Costume Party",
          "place":"Room C",
          "capacity":12000,
          "estimate":9000,
          "price":12
      },
      {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
          "name":"Metallica in concert",
          "date":"2022-01-22",
          "description":"The only concert of the most emblematic band in the world.",
          "category":"Music Concert",
          "place":"Room A"
          ,"capacity":138000,
          "estimate":138000,
          "price":150
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
        "name":"Electronic Fest",
        "date":"2021-01-22",
        "description":"The best national and international DJs gathered in one place.",
        "category":"Music Concert",
        "place":"Room A",
        "capacity":138000,
        "assistance":110300,
        "price":250
        },
      {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
          "name":"10K for life",
          "date":"2021-03-01",
          "description":"Come and exercise, improve your health and lifestyle.",
          "category":"Race",
          "place":"Campo de FutbÃ³l",
          "capacity":30000,
          "assistance":25698,
          "price":3
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
        "name":"15K NY",
        "date":"2021-03-01",
        "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category":"Race",
        "place":"New York",
        "capacity":3000000,
        "assistance":2569800,
        "price":3
        },
      {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
          "name":"School's book fair",
          "date":"2022-10-15",
          "description":"Bring your unused school book and take the one you need.",
          "category":"Book Exchange",
          "place":"Room D1",
          "capacity":150000,
          "estimate":123286,
          "price":1
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
        "name":"Just for your kitchen",
        "date":"2021-11-09",
        "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category":"Book Exchange",
        "place":"Room D6",
        "capacity":130000,
        "assistance":90000,
        "price":100
       },
       {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
        "name":"Batman",
        "date":"2021-3-11",
        "description":"Come see Batman fight crime in Gotham City.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":11000,
        "assistance":9300,
        "price":225
      },
      {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
          "name":"Avengers",
          "date":"2022-10-15",
          "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
          "category":"Cinema",
          "place":"Room D1",
          "capacity":9000,
          "estimate":9000,
          "price":250
      }
    ]
  }

  //Fecha a convertir
  //split
  //convertir en una instancia date
  //convertir a timestamp gettime

function convert_date(stringDate){
    const dateSplit = stringDate.split('-')
    const dateToCompare = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2])

    return dateToCompare.getTime()
}

const futureEvents=[]
const pastEvents = []
const eventCategories = []

const eventos = data.eventos.map(evento => {
    if(convert_date(data.fechaActual) < convert_date(evento.date)){
        futureEvents.push(evento);
    }
    else{
        pastEvents.push(evento);
    }

    if (!eventCategories.includes(evento.category)){
      eventCategories.push(evento.category)
    }

    return evento
})

console.log(eventCategories)

//ANTERIOR PAINTDOM()
const paintDOMCategories = (eventCategories) => {
    const tagToUpdate =  document.getElementById('container-category-check')
    let containerCategoryCheckbox = ``
    eventCategories.map(eventCategorie => {
        containerCategoryCheckbox += `
                <div class="form-check form-check-inline container-fluid me-0">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                    <label class="form-check-label" for="inlineCheckbox1">${eventCategorie}</label></div>
                </div>
        `
    })
    tagToUpdate.innerHTML = containerCategoryCheckbox
}
const paintDOM = (events) => {
    let cardContainer = ``
    const tagToUpdate = document.getElementById("card_container")
    events.map(event => {
        cardContainer +=`
            <div class="col-9 col-sm-6 col-md-5 col-lg-3">
                <div class="card my-3 mx-3">
                    <div class="img_card" style="background-image: url(${event.image});"></div>
                    <div class="card-body">
                      <h5 class="card-title text-center">${event.name}</h5>
                      <p class="card-text">${event.description}</p>
                      <div class="row">
                        <span class="col-6">$${event.price}</span>
                        <a href="./pages/details.html" class="btn btn-primary col-6">Details</a>
                      </div>
                    </div>
                </div>
            </div>
        `
    });
    tagToUpdate.innerHTML = cardContainer;
}


// function paintDOM(events){
//     let cardContainer = ``
//     const tagToUpdate = document.getElementById("card_container")
//     console.log('tagToUpdate', tagToUpdate)
//     // events.map(event => {
//     //     cardContainer +=`
//     //         <div class="col-9 col-sm-6 col-md-5 col-lg-3">
//     //             <div class="card my-3 mx-3">
//     //                 <div class="img_card" style="background-image: url(${event.image});"></div>
//     //                 <div class="card-body">
//     //                   <h5 class="card-title text-center">${event.name}</h5>
//     //                   <p class="card-text">${event.description}</p>
//     //                   <div class="row">
//     //                     <span class="col-6">$${event.price}</span>
//     //                     <a href="./pages/details.html" class="btn btn-primary col-6">Details</a>
//     //                   </div>
//     //                 </div>
//     //             </div>
//     //         </div>
//     //     `
//     // });
    
//     const fragment = document.createDocumentFragment()
//     events.forEach(event => {
//         console.log('event', event)
//         const divCardContainer = document.createElement(div)
//         divCardContainer.className
//         cardContainer =`
//             <div class="col-9 col-sm-6 col-md-5 col-lg-3">
//                 <div class="card my-3 mx-3">
//                     <div class="img_card" style="background-image: url(${event.image});"></div>
//                     <div class="card-body">
//                       <h5 class="card-title text-center">${event.name}</h5>
//                       <p class="card-text">${event.description}</p>
//                       <div class="row">
//                         <span class="col-6">$${event.price}</span>
//                         <a href="./pages/details.html" class="btn btn-primary col-6">Details</a>
//                       </div>
//                     </div>
//                 </div>
//             </div>
//         `

//         // '\n<div class="col-9 col-sm-6 col-md-5 col-lg-3">\n    <div class="card my-3 mx-3">\n        <div class="img_card" style="background-image: url('+event.image+');"></div>\n        <div class="card-body">\n          <h5 class="card-title text-center">'+event.name+'</h5>\n          <p class="card-text">'+event.description+'</p>\n          <div class="row">\n            <span class="col-6">$'+event.price+'</span>\n             <a href="./pages/details.html" class="btn btn-primary col-6">Details</a>\n          </div>\n        </div>\n   </div>\n</div>'

//         console.log("card dentro del for", cardContainer)

//         fragment.appendChild(cardContainer)
//     });

//     console.log("card fuera del for", cardContainer)
//     console.log('fragment', fragment)
//     tagToUpdate.appendChild(fragment)
// }