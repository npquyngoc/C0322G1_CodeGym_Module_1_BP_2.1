function getImagesOnLoad() {
    getImagesOnClick_1();
    getImagesOnClick_2();
    getImagesOnClick_3();
    getImagesOnClick_4();
    getImagesOnClick_5();
}

function getImagesOnClick_1() {
    const getImage_1 = document.getElementById("Image_1");
    getImage_1.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x1.jpg`;
}

function getImagesOnClick_2() {
    const getImage_2 = document.getElementById("Image_2");
    getImage_2.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x2.jpg`;
}

function getImagesOnClick_3() {
    const getImage_3 = document.getElementById("Image_3");
    getImage_3.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x3.jpg`;
}

function getImagesOnClick_4() {
    const getImage_4 = document.getElementById("Image_4");
    getImage_4.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x4.jpg`;
}

function getImagesOnClick_5() {
    const getImage_5 = document.getElementById("Image_5");

    getImage_5.src = `Cores/Images/${Math.floor(Math.random() * (3)) + 1}x5.jpg`;
}

getImagesOnLoad();
