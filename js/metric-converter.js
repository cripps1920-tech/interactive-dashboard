document.getElementById("convertBtn").addEventListener("click", function(event) {
    event.preventDefault();

    let input_value = document.getElementById("valueInput").value;
    input_value = parseFloat(input_value);

    let conversionType = document.getElementById("conversionInput").value;
    let result;

    if (conversionType === "inch to centimeter") {
        result = (input_value * 2.54).toFixed(2);
    } else if (conversionType === "foot to centimeter") {
        result = (input_value * 30.48).toFixed(2);
    } else if (conversionType === "yard to meter") {
        result = (input_value * 0.91).toFixed(2);
    } else if (conversionType === "mile to kilometer") {
        result = (input_value * 1.61).toFixed(2);
    } else if (conversionType === "centimeter to inch") {
        result = (input_value * 0.39).toFixed(2);
    } else if (conversionType === "centimeter to foot") {
        result = (input_value * 0.0328).toFixed(2);
    } else if (conversionType === "meter to yard") {
        result = (input_value * 1.09).toFixed(2);
    } else if (conversionType === "kilometer to mile") {
        result = (input_value * 0.62).toFixed(2);
    } else {
        result = "Invalid conversion type selected.";
    }

    document.getElementById("outputArea").innerHTML =
        input_value + " " + conversionType + " = " + result;
});
