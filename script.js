// Get the buttons and dropdowns
const boldButton = document.querySelector('.bold-button');
const italicButton = document.querySelector('.italic-button');
const underlineButton = document.querySelector('.underline-button');
const resetDesignButton = document.querySelector('.reset-design-button');
const redButton = document.querySelector('.red-button');
const greenButton = document.querySelectorAll('.green-button');
const blueButton = document.querySelectorAll('.blue-button');

// Add event listeners to the buttons and dropdowns
boldButton.addEventListener('click', toggleBold);
italicButton.addEventListener('click', toggleItalic);
underlineButton.addEventListener('click', toggleUnderline);
resetDesignButton.addEventListener('click', resetDesign);
redButton.addEventListener('click', changeTextColor);
greenButton.addEventListener('click', changeTextColor);
blueButton.addEventListener('click', changeTextColor);

// Function to toggle bold font style
function toggleBold() {
  document.execCommand('bold', false, null);
}

// Function to toggle italic font style
function toggleItalic() {
  document.execCommand('italic', false, null);
}

// Function to toggle underline font style
function toggleUnderline() {
  document.execCommand('underline', false, null);
}

// Function to reset all font styles
function resetDesign() {
  document.execCommand('removeFormat', false, null);
}

// Function to set font color to red
function setRedFont() {
  document.execCommand('foreColor', false, 'red');
}

// Function to set font color to green
function setGreenFont() {
  document.execCommand('foreColor', false, 'green');
}

// Function to set font color to blue
function setBlueFont() {
  document.execCommand('foreColor', false, 'blue');
}
// Function to increase font size of selected text
function increaseFontSize() {
  document.execCommand('fontSize', false, '4');
}

// Function to decrease font size of selected text
function decreaseFontSize() {
  document.execCommand('fontSize', false, '2');
}