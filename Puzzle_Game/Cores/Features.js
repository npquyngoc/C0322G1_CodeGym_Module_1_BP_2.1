const getImage_1 = document.querySelector("#Image_1");
const getImage_2 = document.querySelector("#Image_2");
const getImage_3 = document.querySelector("#Image_3");
const getImage_4 = document.querySelector("#Image_4");
const getImage_5 = document.querySelector("#Image_5");

getImage_1.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x1.jpg`;
getImage_2.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x2.jpg`;
getImage_3.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x3.jpg`;
getImage_4.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x4.jpg`;
getImage_5.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x5.jpg`;

let compareImages = "";

const connectImages_1 = "1x1.jpg1x2.jpg1x3.jpg1x4.jpg1x5.jpg";
const connectImages_2 = "2x1.jpg2x2.jpg2x3.jpg2x4.jpg2x5.jpg";
const connectImages_3 = "3x1.jpg3x2.jpg3x3.jpg3x4.jpg3x5.jpg";

function getImagesOnClick_1() {
    getImage_1.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x1.jpg`;

    compareImages = getImage_1.src.split("/").pop() + getImage_2.src.split("/").pop() + getImage_3.src.split("/").pop() + getImage_4.src.split("/").pop() + getImage_5.src.split("/").pop();

    if (compareImages == connectImages_1 || compareImages == connectImages_2 || compareImages == connectImages_3) {
        gameFinished();
    }
    else {
        gameUnfinished();
    }
}

function getImagesOnClick_2() {
    getImage_2.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x2.jpg`;

    compareImages = getImage_1.src.split("/").pop() + getImage_2.src.split("/").pop() + getImage_3.src.split("/").pop() + getImage_4.src.split("/").pop() + getImage_5.src.split("/").pop();

    if (compareImages == connectImages_1 || compareImages == connectImages_2 || compareImages == connectImages_3) {
        gameFinished();
    }
    else {
        gameUnfinished();
    }
}

function getImagesOnClick_3() {
    getImage_3.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x3.jpg`;

    compareImages = getImage_1.src.split("/").pop() + getImage_2.src.split("/").pop() + getImage_3.src.split("/").pop() + getImage_4.src.split("/").pop() + getImage_5.src.split("/").pop();

    if (compareImages == connectImages_1 || compareImages == connectImages_2 || compareImages == connectImages_3) {
        gameFinished();
    }
    else {
        gameUnfinished();
    }
}

function getImagesOnClick_4() {
    getImage_4.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x4.jpg`;

    compareImages = getImage_1.src.split("/").pop() + getImage_2.src.split("/").pop() + getImage_3.src.split("/").pop() + getImage_4.src.split("/").pop() + getImage_5.src.split("/").pop();

    if (compareImages == connectImages_1 || compareImages == connectImages_2 || compareImages == connectImages_3) {
        gameFinished();
    }
    else {
        gameUnfinished();
    }
}

function getImagesOnClick_5() {
    getImage_5.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x5.jpg`;

    compareImages = getImage_1.src.split("/").pop() + getImage_2.src.split("/").pop() + getImage_3.src.split("/").pop() + getImage_4.src.split("/").pop() + getImage_5.src.split("/").pop();

    if (compareImages == connectImages_1 || compareImages == connectImages_2 || compareImages == connectImages_3) {
        gameFinished();
    }
    else {
        gameUnfinished();
    }
}

function gameFinished() {
    alert("You won the game.");

    getImage_1.style.boxShadow = "4px 4px 4px blue";
    getImage_2.style.boxShadow = "4px 4px 4px blue";
    getImage_3.style.boxShadow = "4px 4px 4px blue";
    getImage_4.style.boxShadow = "4px 4px 4px blue";
    getImage_5.style.boxShadow = "4px 4px 4px blue";
}

function gameUnfinished() {
    getImage_1.style.boxShadow = "4px 4px 4px black";
    getImage_2.style.boxShadow = "4px 4px 4px black";
    getImage_3.style.boxShadow = "4px 4px 4px black";
    getImage_4.style.boxShadow = "4px 4px 4px black";
    getImage_5.style.boxShadow = "4px 4px 4px black";
}
