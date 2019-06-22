// for (let i = 0; i < 2; i++) {
//     console.log('a');
// }

// if (true) {
//     let i = 0
// }

// console.log(i);

// for (let i = 0; i < 2; i++) {
//     let a = 0;
//     if (true) {
//         console.log(a);
//     }
// }
// console.log(i);

// console.log(a);

// Создает поле видимости:
// условия;
// функции;
// циклы.

// document.addEventListener('loaded', function() {}); 
// хорошо для первоначальной загрузки html

// pattern observer

// scope - поле видимости

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(i, j);
//     }
// }

// let i = 0;

// function tigidik() {
//     console.log(i);
// }

//tigidik();

// let i = 0;

// function jr() {
//     let b = 5;
//     if (true) {
//         let c = 6;
//     }
//     console.log(b, c);
// }

// jr();

// Записываем объекты

// let kachok = {
//     name: 'Serega',
//     surname: 'Mashina',
//     fullname: function() {
//         console.log(this.name, this.surname)
//     }
// }

// kachok.fullname();

// console.log(kachok.name, kachok.surname);

// let a = kachok; // ссылочный тип данных
// kachok = null;
// a.fullname();

// kachok.name = 123;
// kachok = null;
// console.log(a.name);

let first = document.querySelector('.first');
let second = document.querySelector('.second');
let plus = document.querySelector('[data-id=plus]');
let minus = document.querySelector('[data-id="minus"]');
let division = document.querySelector('[data-id=division]');;
let mult = document.querySelector('[data-id="mult"]');
let button = document.querySelectorAll('button');
let result = document.querySelector('.result');

plus.addEventListener('click', function() {
    calc.first = first.value;
    calc.second = second.value;
    calc.sum();
});

minus.addEventListener('click', function() {
    calc.first = first.value;
    calc.second = second.value;
    calc.minusFunc();
});

division.addEventListener('click', function() {
    calc.first = first.value;
    calc.second = second.value;
    calc.divisionFunc();
});

mult.addEventListener('click', function() {
    calc.first = first.value;
    calc.second = second.value;
    calc.multFunc();
});

let calc = {
    first: first.value,
    second: second.value,
    sum: function() {
        result.innerHTML = +this.first + +this.second;
    },
    minusFunc: function() {
        result.innerHTML = +this.first - +this.second;
    },
    divisionFunc: function() {
        result.innerHTML = +this.first / +this.second;
    },
    multFunc: function() {
        result.innerHTML = +this.first * +this.second;
    }
}