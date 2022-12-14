const API_URL= "../js/events.json"
// Promises using async await
const getUsersAsync = async() =>{
    const getFetch = await fetch(API_URL)
    const getData= await getFetch.json()
    console.log(getData.length)
    
    const eventsByDate = calsifyEventsByDate(getData)
    const eventCategories = getCategories(getData)

    tableEventsStats(eventsByDate.allEvents)
    tableUpcomingPastEvents(eventsByDate.futureEvents, eventCategories, "upcomin_events_stats")
    tableUpcomingPastEvents(eventsByDate.pastEvents, eventCategories, "past_events_stats")
}

getUsersAsync()