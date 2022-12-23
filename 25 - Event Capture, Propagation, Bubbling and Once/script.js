const divs = querySelector("div");

function logText(e) {
    console.log(this.classList.value);
}

divs.forEach(div => div.addEvent)