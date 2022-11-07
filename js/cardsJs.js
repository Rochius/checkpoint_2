function paintDOM(events){
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
