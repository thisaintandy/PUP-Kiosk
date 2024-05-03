function showSceneryBox(imgSource, heading, description) {
    let dis = document.getElementById("display");
    let bod = document.getElementById("body");

    bod.style.overflow = "hidden";
    document.addEventListener('mousemove', displayFollowCamera);
    dis.style.left = event.clientX + 5 + "px";
    dis.style.top = event.clientY - dis.offsetHeight - 5 + "px"; // Subtract div height from Y-coordinate
    dis.innerHTML = "<div id='wrapper'><img id='imgid' src='" + imgSource + "'>" + "<p>" + heading + "</p>" + "<p>" + description + "</p></div>";
}

function sceneryBoxNoImg(heading, description) {
    let dis = document.getElementById("display");
    let bod = document.getElementById("body");

    bod.style.overflow = "hidden";
    document.addEventListener('mousemove', displayFollowCamera);
    dis.style.left = event.clientX + 5 + "px";
    dis.style.top = event.clientY - dis.offsetHeight - 5 + "px"; // Subtract div height from Y-coordinate
    dis.innerHTML = "<div id = 'wrapper2'>" + "<p>" + heading + "</p>" + description + "</p></div>"
}

function showLongText(imgSource, heading, description) {
    let dis = document.getElementById("display");
    let bod = document.getElementById("body");

    bod.style.overflow = "hidden";
    document.addEventListener('mousemove', displayFollowCamera);
    dis.style.left = event.clientX + 5 + "px";
    dis.style.top = event.clientY - dis.offsetHeight - 5 + "px"; // Subtract div height from Y-coordinate
    dis.innerHTML = "<div id='wrapper3'><img id='imgid' src='" + imgSource + "'>" + "<p>" + heading + "</p>" + "<p>" + description + "</p></div>";
}

function displayFollowCamera() {
    let b = document.getElementById('display');
    b.style.left = event.clientX + 5 + "px";
    b.style.top = event.clientY - b.offsetHeight - 5 + "px"; // Subtract div height from Y-coordinate
}

function removeSceneryBox() {
    let c = document.getElementById('display');
    let d = document.getElementById('body');
    c.removeAttribute('style');
    d.removeAttribute('style');
    document.removeEventListener('mousemove', displayFollowCamera);
    c.removeChild(c.childNodes[0]);
}
