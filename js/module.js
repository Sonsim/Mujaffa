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

const people =  [
    { 
        name: 'young',
        your_greetings: ['Hey','Hi there','Wagwan bruv!'],
        their_greetings: ['Wagwan, dench whip bruv','Shut ut wasteman'],
        image: 'Teenager.png',
        cool_require: 0,
        cool_reward: 2,
        cool_decrease: 1,
        correct_greet: 2,
    },
    { 
        name: 'middle',
        your_greetings: ['Hi','Yo Man','Old geezer'],
        their_greetings: ['Hi, nice car you got!','Who do you think you are'],
        image: 'Adult.png',
        cool_require: 0,
        cool_reward: 2,
        cool_decrease: 1,
        correct_greet: 0,
    },
    { 
        name: 'Old Man',
        your_greetings: ['Check out me wheels','Good day Sir','Yo, waddup old man'],
        their_greetings: ['Hoho, nice young man you are!','Hmph, young fools'],
        image: 'Old.png',
        cool_require: 0,
        cool_reward: 2,
        cool_decrease: 1,
        correct_greet: 1,
    },
];

