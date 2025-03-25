function expandBox(selectedBox, price, index) {
    // Get all boxes
    let boxes = document.querySelectorAll(".box");
    let totalPrice = document.getElementById("total-price");

    // Reset all boxes
    boxes.forEach(box => {
        box.classList.remove("selected");
    });

    // Expand only the clicked box
    selectedBox.classList.add("selected");

    // Update Total Price
    totalPrice.textContent = `$${price.toFixed(2)} USD`;

    // Check the correct radio button
    let radioButtons = document.querySelectorAll("input[type='radio']");
    radioButtons[index - 1].checked = true;
}
