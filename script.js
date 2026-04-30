function convertHex(){
    const hexInput = document.getElementById("hexInput").value.trim();

    if (!/^[0-9a-fA-F]+$/.test(hexInput)) {
        alert("Invalid input, please enter a valid hexadecimal number.");
        return;
    }

    const decimal = parseInt(hexInput, 16);
    const binary = decimal.toString(2);

    document.getElementById("decimalOutput").textContent = decimal;
    document.getElementById("binaryOutput").textContent = binary;
}