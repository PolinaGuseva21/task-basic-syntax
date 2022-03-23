export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let res = [];
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'I':
                res.push(1);
                break;
            case 'V':
                res.push(5);
                break;
            case 'X':
                res.push(10);
                break;
            case 'L':
                res.push(50);
                break;
            case 'C':
                res.push(100);
                break;
            case 'D':
                res.push(500);
                break;
            case 'M':
                res.push(1000);
                break;
        }
    }
    while (res.length != 0) {
        if (res[res.length - 1] > res[res.length - 2]) {
            result += res[res.length - 1] - res[res.length - 2];
            res.pop();
            res.pop();
        } else {
            result += res[res.length - 1];
            res.pop();
        }
    }
    return result;
}
