let imageElement = document.getElementById("image");
let originalImageWidth = "200px";
imageElement.style.width = originalImageWidth;
let originalImageSize = 200;
let warning = document.getElementById("warningMessage");
let imgWidth = document.getElementById("imageWidth");
imgWidth.textContent = originalImageWidth;

function onIncrement() {
    if (originalImageSize >= 300) {
        warning.textContent = "Too big. Decrease the size of the Image.";
    } else {
        originalImageSize += 5;
        let inPixel = originalImageSize + "px";
        warning.textContent = "";
        imageElement.style.width = inPixel;
        imgWidth.textContent = inPixel;
    }
}

function onDecrement() {
    if (originalImageSize <= 100) {
        warning.textContent = "Can't Visible. Increase the size of the Image.";
    } else {
        originalImageSize -= 5;
        let inPixel = originalImageSize + "px";
        warning.textContent = "";
        imageElement.style.width = inPixel;
        imgWidth.textContent = inPixel;
    }
}