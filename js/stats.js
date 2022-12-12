const tableEventsStats = (events)=>{
    const lwrToHgh = calculatePercentageAssistance(events)
    const hghToLwr = calculatePercentageAssistance(events).reverse()
    const hghToLwrCapacity = calculatePercentageAssistance(events).sort((a,b) => {return b.capacity - a.capacity})
    const percentageEvents = percentageOfEvents(events)

    const tableBody = document.getElementById("event_stats")
    for(let i=0; i<percentageEvents; i++){
        const eventHgh = events.find(element => element._id === hghToLwr[i].eventId)
        const eventLwr = events.find(element => element._id === lwrToHgh[i].eventId)
        const capacity = events.find(element => element._id === hghToLwrCapacity[i].eventId)
        tableBody.innerHTML += `
        <tr>
            <td class="column-width-1 text-center">${eventHgh.name}: ${Math.round(hghToLwr[i].percentage)}%</td>
            <td class="column-width-1 text-center">${eventLwr.name}: ${Math.round(lwrToHgh[i].percentage)}%</td>
            <td class="text-center">${capacity.name}: ${hghToLwrCapacity[i].capacity}</td>
        </tr>
        `
    }
}

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

tableEventsStats(eventos)
tableUpcomingPastEvents(futureEvents, eventCategories, "upcomin_events_stats")
tableUpcomingPastEvents(pastEvents, eventCategories, "past_events_stats")