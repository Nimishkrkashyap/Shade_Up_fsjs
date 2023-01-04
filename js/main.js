function randompickerbtn() {
  
}

// Color by HEX code
function hexFindbtn() {
    const hexInput = document.getElementById("hexInput")
    const color_box = document.getElementById("color-box")

    color_box.style.backgroundColor = hexInput.value;
 }

// Color by RGB Code
function RGBFindbtn() {
    const red = document.getElementById("RInput").value
    const green = document.getElementById("GInput").value
    const blue = document.getElementById("BInput").value

    const color = `rgb(${red}, ${green}, ${blue})`
    document.getElementById("rgb-color-box").style.backgroundColor = color;
}

// Select RGB by Range
function RangeSelector() {
    const red = document.getElementById("RrInput").value
    const green = document.getElementById("GrInput").value
    const blue = document.getElementById("BrInput").value

    const color = `rgb(${red}, ${green}, ${blue})`
    document.getElementById("range-color-box").style.backgroundColor = color;
}


// hex to rgb converter

String.prototype.convertToRGB = function () {
  
};

function hexConvbtn() {
  
}

// RGB To HEX
function rgbConvbtn() {
    function rgbToHex(rgbValue) {
        let hexValue = Number(rgbValue).toString(16)
        if (hexValue.length < 2) {
            hexValue = 0 + hexValue;
        }
        return hexValue;
    }

    const red = rgbToHex(document.getElementById("RCInput").value)
    const green = rgbToHex(document.getElementById("GCInput").value)
    const blue = rgbToHex(document.getElementById("BCInput").value)

    const color = `#${red}${green}${blue}`
    // console.log(color)

    document.getElementById("rgbCOut").innerHTML = color;
}
