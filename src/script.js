var date = new Date().getFullYear();

// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = new Date(`May 25, ${date}`).getTime();

// Setup Timer to tick every 1 second
let time = setInterval(tick, 1000);

function tick() {
    // Get current time
    let now = new Date().getTime();
    // Get the difference in time to get time left until reaches 0
    let diff = launchDate - now;

    // Check if time is above 0
    if (diff != 0) {
        // Setup Days, hours, seconds and minutes
        // Algorithm to calculate days...
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        // prefix any number below 10 with a "0" E.g. 1 = 01
        if (days < 10) { days = "0" + days; }

        // Algorithm to calculate hours
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }

        // Algorithm to calculate minutes
        let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }

        // Algorithm to calc seconds
        let secs = Math.floor((diff % (1000 * 60)) / 1000);
        if (secs < 10) { secs = "0" + secs; }

        // Create Time String
        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        // Set time on document
        document.getElementById('countdown').innerText = time;
        console.log(time)
    }
}