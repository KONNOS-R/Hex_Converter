window.addEventListener("load", () => {
    document.getElementById("hexInput").value = "";
    document.getElementById("decimalOutput").value = "";
    document.getElementById("binaryOutput").value = "";
    document.getElementById("decimalCount").textContent = "0";
    document.getElementById("binaryCount").textContent = "0";
});

const hexInput = document.getElementById("hexInput");

hexInput.addEventListener("input", function () {
    this.value = this.value.toUpperCase().replace(/[^0-9A-F]/g, "");
    convertHex();
});


function convertHex() {
    const value = document.getElementById("hexInput").value.trim();

    if (value === "") {
        document.getElementById("decimalOutput").value = "";
        document.getElementById("binaryOutput").value = "";
        document.getElementById("decimalCount").textContent = "0";
        document.getElementById("binaryCount").textContent = "0";
        return;
    }

    const decimal = BigInt("0x" + value);
    const binary = decimal.toString(2);

    document.getElementById("decimalOutput").value = decimal.toString();
    document.getElementById("binaryOutput").value = binary;

    document.getElementById("decimalCount").textContent = decimal.toString().length;
    document.getElementById("binaryCount").textContent = binary.length;
}


function copyDecimal() {
    const text = document.getElementById("decimalOutput").value;
    navigator.clipboard.writeText(text);
    showToast("Decimal copied!");
}

function copyBinary() {
    const text = document.getElementById("binaryOutput").value;
    navigator.clipboard.writeText(text);
    showToast("Binary copied!");
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1000);
}
