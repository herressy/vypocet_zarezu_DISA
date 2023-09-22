// Get references to HTML elements
const weightInput = document.getElementById("weight-input");
const timeInput = document.getElementById("time-input");
const gatingSystemRadio = document.getElementsByName("gating-system");
const heightInput = document.getElementById("height-input");
const bInput = document.getElementById("b-input");
const cInput = document.getElementById("c-input");
const mInput = document.getElementById("m-input");
const ratioRadio = document.getElementsByName("ratio");
const calculateButton = document.getElementById("calculate-button");
const resultDisplay = document.getElementById("result");

// Define a function to calculate the area
function calculateArea() {
    // Retrieve input values and perform calculations
    const G = parseFloat(weightInput.value.replace(',', '.'));
    const t = parseFloat(timeInput.value.replace(',', '.'));
    const a = parseFloat(heightInput.value.replace(',', '.'));
    const c = parseFloat(cInput.value.replace(',', '.'));
    const m = parseFloat(mInput.value.replace(',', '.'));

    let H = 0;
    if (gatingSystemRadio[0].checked) {
        const b = parseFloat(bInput.value.replace(',', '.'));
        H = a - b / 2;
    } else if (gatingSystemRadio[1].checked) {
        H = a - c / 2;
    }

    const A = (1036 * G) / (t * m * Math.sqrt(H));

    let A1, A2;
    if (ratioRadio[0].checked) {
        A1 = A * 1.2;
        A2 = A * 1.4;
    } else if (ratioRadio[1].checked) {
        A1 = A * 1.5;
        A2 = A * 2;
    }

    // Display the results
    resultDisplay.innerHTML = `<p>Zárez: ${A2.toFixed(2)} mm².</p><p>Lapač trosky: ${A1.toFixed(2)} mm².</p><p>Vtokový kanál: ${A.toFixed(2)} mm².</p>`;
}

// Attach the calculateArea function to the button click event
calculateButton.addEventListener("click", calculateArea);
