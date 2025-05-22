// Task 2
export function swapValues() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
}

// Task 4
export function resizeSquare(change) {
    const square = document.getElementById('square');
    if (!square) return;

    let currentWidth = square.offsetWidth;
    let currentHeight = square.offsetHeight;

    let newWidth = currentWidth + change;
    let newHeight = currentHeight + change;

    if (newWidth >= 15 && newHeight >= 15) {
        square.style.width = newWidth + 'px';
        square.style.height = newHeight + 'px';
    }
}

// Task 6
export function doubleValues() {
    const items = document.querySelectorAll('#numberList li');
    items.forEach(item => {
        let currentValue = parseInt(item.textContent);
        item.textContent = currentValue * 2;
    });
}