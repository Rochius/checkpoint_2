const API_URL= "../js/events.json"
// Promises using async await
const getUsersAsync = async() =>{
    const getFetch = await fetch(API_URL)
    const getData= await getFetch.json()
    console.log(getData.length)
    
    const eventsByDate = calsifyEventsByDate(getData)
    const eventDetail = getEventDetail(eventsByDate)
    paintDetailsDOM(eventDetail)
}

getUsersAsync()