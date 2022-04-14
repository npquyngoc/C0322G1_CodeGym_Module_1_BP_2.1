const carImage = document.querySelector("img");

function carControlSettings() {
    carImage.src = "Cores/Images/Car_Right.jpg";

    carImage.style.position = "fixed";

    carImage.style.top = "0px";
    carImage.style.left = "0px";

    document.addEventListener("keydown", eventPressKey);
}

function pressKeyUp() {
    if(parseInt(carImage.style.top) > 0) {
        carImage.style.top = parseInt(carImage.style.top) - 15 + "px";
        carImage.src = "Cores/Images/Car_Up.jpg";
    }
}

function pressKeyDown() {
    if(parseInt(carImage.style.top) + 470 < window.innerHeight) {
        carImage.style.top = parseInt(carImage.style.top) + 15 + "px";
        carImage.src = "Cores/Images/Car_Down.jpg";
    }
}

function pressKeyLeft() {
    if(parseInt(carImage.style.left) > 0) {
        carImage.style.left = parseInt(carImage.style.left) - 15 + "px";
        carImage.src = "Cores/Images/Car_Left.jpg";
    }
}

function pressKeyRight() {
    if(parseInt(carImage.style.left) + 470 < window.innerWidth) {
        carImage.style.left = parseInt(carImage.style.left) + 15 + "px";
        carImage.src = "Cores/Images/Car_Right.jpg";
    }
}

function eventPressKey(key) {
    switch (key.keyCode) {
        case 37:
        case 65:
            pressKeyLeft();
            break;

        case 39:
        case 68:
            pressKeyRight();
            break;

        case 38:
        case 87:
            pressKeyUp();
            break;

        case 40:
        case 83:
            pressKeyDown();
            break;
    }
}

carControlSettings();