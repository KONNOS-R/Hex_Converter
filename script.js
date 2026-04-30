window.addEventListener("load", () => {
    document.getElementById("hexInput").value = "";
});

const hexInput = document.getElementById("hexInput");

hexInput.addEventListener("input", function () {
    this.value = this.value.toUpperCase().replace(/[^0-9A-F]/g, "");
});

function convertHex(){
    const hexInput = document.getElementById("hexInput").value.trim();

    if (!/^[0-9a-fA-F]+$/.test(hexInput)) {
        alert("Invalid input, please enter a valid hexadecimal number.");
        return;
    }

    const decimal = BigInt("0x" + hexInput);
    const binary = decimal.toString(2);

    document.getElementById("decimalOutput").textContent = decimal;
    document.getElementById("binaryOutput").textContent = binary;

    document.getElementById("decimalCount").textContent = decimal.toString().length;
    document.getElementById("binaryCount").textContent = binary.length;
}
