let cool = 3;
let car_Image = "car_1";
let animation_frame = 0;
let isGameover = false;
let isVictory = false;
let inAnimation = false;
let ActivePerson_index = 0;
let LastPerson_index = 0;

let Greetings_HTML = '';
let person_HTML = '';
let answer_HTML = '';
let Skip_HTML = '';

const people =  [
    { 
        name: 'young',
        your_greetings: ['hi','hello','yo'],
        their_greetings: ['yes','no'],
        image: 'Teenager.png',
        cool_require: 0,
        cool_reward: 2,
        cool_decrease: 1,
        correct_greet: 2,
    },
    { 
        name: 'middle',
        your_greetings: ['hi','hello','yo'],
        their_greetings: ['yes','no'],
        image: 'Adult.png',
        cool_require: 0,
        cool_reward: 2,
        cool_decrease: 1,
        correct_greet: 0,
    },
    { 
        name: 'old',
        your_greetings: ['hi','hello','yo'],
        their_greetings: ['yes','no'],
        image: 'Old.png',
        cool_require: 0,
        cool_reward: 2,
        cool_decrease: 1,
        correct_greet: 1,
    },
];

