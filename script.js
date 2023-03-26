'use strict';

function calcAge(birthYear) {
    const age = 2023 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            // reassigning outer scope's variable
            output = 'NEW OUTPUT';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        console.log(millenial);
        console.log(output);
        // console.log(add(2, 3));
    }
    printAge();
    return age;
}

const firstName = 'Kuba';
calcAge(1991);
