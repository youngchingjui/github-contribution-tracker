// Add a user

function addUser() {
    $('userBox').duplicate

}

data = json of each users contributions for last x days

users = users in data

for (user in users) {

    // Fill in the username
    $('#username_header').text = user

    // Add the dates dynamically
    var today = datetime.today()
        
    // last_day is always a Saturday. Depending on what day today is, add that amount to today
    weekday_dict = {
        'Sun': 6,
        'Mon': 5,
        'Tue': 4,
        'Wed': 3,
        'Thu': 2,
        'Fri': 1,
        'Sat': 0
    }
    var last_day = today + weekday_dict[today.weekday]
    var first_day = last_day - 41 // We have placeholders for 42 days
    
    var dayblocks = $('.dayblock') for this user specifically

    // Cycle through each day block and update it
    for (day in dayblock) {

        

        // Change the color of each day
        if data[day].color not null {
            dayblock.background = data[day].color
        }

        // Add the dates as necessary
        if day.weekday == 'Sun' or day == today {
            day.text = day.day
        }

        if day.day == 1 or day == first_day {
            day.text = day.day&day.month in "MM" format ('Mar')
        }

    }

}


