const displayInput = document.querySelector('.display .input');
const displayOutput = document.querySelector('.display .output');
const buttons = document.querySelectorAll('button');

let input = '';
let dotAdded = false;

buttons.forEach((item) => {
    item.onclick = () => {
        if (displayInput.innerText.toLowerCase() === '0') {
            displayInput.innerText = '';
        }

        if (item.id == 'clear') {
            input = '';
            dotAdded = false; // Reset the dotAdded flag
            displayInput.innerText = '0';
            displayOutput.innerText = '';
        } else if (item.id == 'backspace') {
            let string = displayInput.innerText.toString();
            let updatedStr = string.substr(0, string.length - 1) || '0';
            
            // To validate dot(.)
            if (string.charAt(string.length - 1) === '.') {
                dotAdded = false;
            }

            // To check whether the input is empty or not
            if (updatedStr == '0') {
                displayInput.innerText = '0';
                displayOutput.innerText = '';
            } else {
                displayInput.innerText = updatedStr;
            }
        } else if (item.id == 'equal') {
            if (displayInput.innerText.includes('%')) {
                const expression = displayInput.innerText.replace('%', '/100');
                displayOutput.innerText = eval(expression);
            } else if (displayInput.innerText != '') {
                displayOutput.innerText = eval(displayInput.innerText);
            } else {
                displayInput.innerText = '0';
            }
        } else {
            // Reset the dotAdded flag when a non-dot button or an operation button is clicked
            if (item.id !== '.') {
                dotAdded = false;
            }

            if (item.id === '.') {
                // Check if a dot has already been added to the current number
                if (!dotAdded) {
                    displayInput.innerText += item.id;
                    dotAdded = true;
                }
            } else {
                displayInput.innerText += item.id;
            }
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.dark');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;

    // Change the theme toggle text
    toggleIcon.innerText = isDark ? '🔆' : '🌙';
}