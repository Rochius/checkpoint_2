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