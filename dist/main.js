let nav = 0;
let clicked = null;
// let dateRange?

// rename to root?
const calendar = document.getElementById('calendar');

// Used to figure out padding days
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// look into past projects 
function load() {
    const dt = new Date();

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1)
    // Need to understand this better
    // gives us last date in jan (31)
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric', // change to long?
        day: 'numeric' // change to long?
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    
    for (let i = 0; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');
        
        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;
            daySquare.addEventListener('click', () => {
                console.log('click');
            })
            // daySquare.addEventListener('click', () => console.log('click'))
        } else {
            daySquare.classList.add('padding');
        }
        calendar.appendChild(daySquare)
    }
}

load();