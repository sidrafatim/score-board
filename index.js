let count = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")


function addOne() {
    count += 1
    homeScoreEl.textContent = count
}

function addTwo() {
    count += 2
    homeScoreEl.textContent = count
}

function addThree() {
    count += 3
    homeScoreEl.textContent = count
}

function addingOne() {
    count += 1
    guestScoreEl.textContent = count
}

function addingTwo() {
    count += 2
    guestScoreEl.textContent = count
}

function addingThree() {
    count += 3
    guestScoreEl.textContent = count
}
