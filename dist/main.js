let nav = 0;
let clicked = null;
// let dateRange?

// rename to root?
const calendar = document.getElementById('calendar');

// Used to figure out padding days
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// look into past projects 
function load() {
    // Always checks for current date
    const dt = new Date();

    // need to check what nav is
    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
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

    document.getElementById('monthDisplay').innerText = 
        `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;
    
    // wipes out everything in the cal
    calendar.innerHTML = '';
    
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');
    
    if (i > paddingDays) {
        daySquare.innerText = i - paddingDays;
        daySquare.addEventListener('click', () => {
            console.log('click');
        })
        // daySquare.addEventListener('click', () => console.log('click'))
        if (i - paddingDays === day && nav === 0) {
            daySquare.id = 'currentDay';
        }
    } else {
        daySquare.classList.add('padding');
    }
    calendar.appendChild(daySquare);
    }
}

// function initButtons() {
//     document.getElementById('nextButton').addEventListener('click', () => {
//         nav++;
//         load();
//     })
//     document.getElementById('backButton').addEventListener('click', () => {
//         nav--;
//         load();
//     })
// }

// initButtons();

function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        load();
    });

    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        load();
    });
}

initButtons();
load();
