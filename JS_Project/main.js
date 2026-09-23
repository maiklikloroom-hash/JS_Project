// Завдання 1

const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

function getRow(firstRow, secondRow) {
    let firstCount = 0;
    let secondCount = 0;

    for (let char of firstRow) {
        if (char.toLowerCase() === 'a') {
            firstCount++;
        }
    }

    for (let char of secondRow) {
        if (char.toLowerCase() === 'a') {
            secondCount++;
        }
    }

    if (firstCount > secondCount) {
        return firstRow;
    } else {
        return secondRow;
    }
}

console.log(getRow(firstRow, secondRow));


// Завдання 2

function formattedPhone(phone) {
    return phone.slice(0, 2) + ' (' +
           phone.slice(2, 5) + ') ' +
           phone.slice(5, 8) + '-' +
           phone.slice(8, 10) + '-' +
           phone.slice(10, 12);
}

console.log(formattedPhone('+80664567890'));