
function linearConversion() {
  let inputValue = document.getElementById("value").value; 
  let fromUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit").value;
  
  let listUnits = ["inches", "feet", "yards", "miles", "centimeters", "meters", "kilometers"];

    // The idea for this aray was shared by Wade Roberts. 
	// The top row is the converstions from in to in, ft, yd, mi, cm, m, and km, respectively.
	// Subsequent rows follow the same idea.
	// The order of the rows and columns matches "listUnits"
	
	let convRates = [
        [1.0, 0.083333, 0.027778, 1.57828e-5, 2.54, 0.0254, 2.54e-5],
        [12.0, 1.0, 0.333333, 0.000189394, 30.48, 0.3048, 0.0003048],
        [36.0, 3.0, 1.0, 0.000568182, 91.44, 0.9144, 0.0009144],
        [63360.0, 5280.0, 1760.0, 1.0, 160934, 1609.34, 1.60934],
		[0.393701, 0.0328084, 0.0109361, 6.2137e-6, 1, .01, 1e-5],
        [39.3701, 3.28084, 1.09361, 0.000621371, 100, 1.0, 0.001],
        [39370.1, 3280.84, 1093.61, 1093.61, 10000, 1000, 1.0]
     ];

    let convFactor = convRates[fromUnit][toUnit];

    let answer = (inputValue * convFactor);

	// This converts the answer into the text string I want to display:
	// eg: 24 inches = 2 feet
    let answerText = `${inputValue} ${listUnits[fromUnit]} = ${answer} ${listUnits[toUnit]}`;
	
	document.getElementById("finalAnswer").innerHTML = answerText;
}
