// Function to create table to hold calendar
function createTable() {
    // Grab the content element, gets saved in array
    const content = document.getElementById("calendar-content")
    // Create the table element
    const tbl = document.createElement("table");
    // Give it an id
    tbl.setAttribute("id", "calendar-table");
    // Give it a css class
    tbl.setAttribute("class", "calendar-table");
    // Create the table body element
    const tblBody = document.createElement("tbody");
    // Give it an id
    tblBody.setAttribute("id", "calendar-table-body");
    // Give it a css class
    tblBody.setAttribute("class", "calendar-table-body");
    // Set a variable to be used for creating ID's for all of the td elements
    let k = 0;

    // Create loop to create table elements
    for (let i = 0; i < 5; i++) {
        // Create the rows
        const row = document.createElement("tr");
        // Give it a css class
        row.setAttribute("class", "calendar-row");

        // Use another for loop to fill rows with td elements
        for (let j = 0; j < 7; j++) {
            // Create the td element
            const cell = document.createElement("td");
            // Set the id value equal to k
            cell.setAttribute("id", k+1);
            // Give it a css class
            cell.setAttribute("class", "calendar-day");

            // Append the td into the row
            row.appendChild(cell);
            // Increment k by 1
            k++;
        }

        // Append the row to the table body
        tblBody.appendChild(row);
    }

    // Append the table body to the table
    tbl.appendChild(tblBody);
    
    // Append the table to the content element
    content.appendChild(tbl);
}

// Get the first and last days of the month in index form
function getMonthStartAndEnd(year, month) {
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0);

    return {
        startDay: start.getDay(),
        endDay: end.getDay()
    }
}

// Fill the td elements with their corresponding dates
function fillDates() {
    // Create new date object
    const today = new Date();
    // Get the current month and year
    const [month, year] = [
        today.getMonth(),
        today.getFullYear()
    ];

    // Get the first and last day of the month
    const { startDay, endDay } = getMonthStartAndEnd(year, month);

    // Get the rows of the table as an array
    const weeks = Array.from(document.querySelector("table tbody").rows);
    // Use k to track day of the month
    let k = 1;

    // Fill in the rows, i stands in for the weeks
    for (let i = 0; i < 5; i++) {
        const currentWeek = weeks[i];
        for (let j = 0; j < 7; j++) {
            // First week: start at startDay
            if (i === 0) {
                for (let l = startDay; l < 7; l++) {
                    const day = currentWeek.children[l];
                    const p = document.createElement('p');
                    p.setAttribute("class", "date");
                    p.textContent = `${k}`;
                    day.appendChild(p);
                    k++;
                }
                break;
            }

            // Last week: only go through endDay
            if (i === 4) {
                for (let m = 0; m <= endDay; m++) {
                    const day = currentWeek.children[m];
                    const p = document.createElement('p');
                    p.setAttribute("class", "date");
                    p.textContent = `${k}`;
                    day.appendChild(p);
                    k++;
                }
                break;
            }

            // Middle weeks: j from 0–6
            const day = currentWeek.children[j];
            const p = document.createElement('p');
            p.setAttribute("class", "date");
            p.textContent = `${k}`;
            day.appendChild(p);
            k++;
        }
    }
}

function addEvents() {
    // Get the rows of the table as an array
    const weeks = Array.from(document.querySelector("table tbody").rows);

    // Fill in the rows, i stands in for the weeks
    for (let i = 0; i < 5; i++) {
        const currentWeek = weeks[i];
        for (let j = 0; j < 7; j++) {
            const day = currentWeek.children[j];
            // grab the date from the first <p> inside this td
            const dateStr = day.querySelector('p')?.textContent;
            const date = Number(dateStr);

            if (date === 18) {
                const evt1 = "Pediatric Community Support Group";
                const evt2 = "Pediatric Community Support Group (18+)";
                const p1 = document.createElement('p');
                const p2 = document.createElement('p');
                p1.setAttribute("class", "evt");
                p2.setAttribute("class", "evt");
                p1.textContent = evt1;
                p2.textContent = evt2;
                day.appendChild(p1);
                day.appendChild(p2);
            } 
            else if ([20, 21, 22].includes(date)) {
                const evt = "Trans-New Hampshire Bike Ride";
                const p = document.createElement('p');
                p.setAttribute("class", "evt");
                p.textContent = evt;
                day.appendChild(p);
            } 
            else if (date === 25) {
                const evt = "Wings Over Wall Street Gala";
                const p = document.createElement('p');
                p.setAttribute("class", "evt");
                p.textContent = evt;
                day.appendChild(p);
            }
        }
    }
}

// When the dom tree loads, run table functions
document.body.onload = () => {
    // Create the table
    createTable();
    // Fill the table with days of the month in proper positions
    fillDates();

    addEvents();
}