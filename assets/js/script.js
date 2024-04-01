// Function to save item details to local storage
function saveItem() {
  // Get item details from input fields
  let itemName = document.getElementById('itemName').value;
  let itemID = document.getElementById('itemID').value;
  let itemWeight = document.getElementById('itemWeight').value;

  // Create an object to represent the item
  let item = {
      'Item Name': itemName,
      'Item ID': itemID,
      'Item Weight': itemWeight
  };

  // Store the item details in local storage
  localStorage.setItem('item', JSON.stringify(item));

  // Generate and display barcode for the item
  generateBarcode(item);

  // Hide the form elements after generating the barcode
  document.getElementById('itemForm').style.display = 'none';
}

// Function to generate and display barcode
function generateBarcode(item) {
  // Concatenate item details into a string
  let detailsStr = `${item['Item Name']} - ${item['Item ID']} - ${item['Item Weight']}`;

  // Generate barcode using JsBarcode library
  JsBarcode("#barcode", detailsStr, {
      format: "CODE128"
  });
}

// Function to print the barcode
function printBarcode() {
  // Generate the barcode (if not already generated)
  let storedItem = localStorage.getItem('item');
  if (storedItem) {
      let item = JSON.parse(storedItem);
      generateBarcode(item);
  }

  // Hide non-essential elements
  document.getElementById('itemForm').style
