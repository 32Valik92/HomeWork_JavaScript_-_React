// Фібоначі без рекурсії

function fib(count) {
    if (typeof(count) !== 'number' || count <= 0 || !Number.isInteger(count)) {
        return "";
    }

    let first = 0;
    let second = 1;
    let temp = first + second;
    let strResult = '';

    for (let i = 0; i < count; i++) {
        if (i + 1 === count) {
            strResult += `${first}`;
        } else {
            strResult += `${first} `;
        }

        temp = first + second;
        first = second;
        second = temp;
    }

    return strResult;
}
