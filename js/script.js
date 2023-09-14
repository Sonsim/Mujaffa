function UpdateView() {
    document.getElementById('car').innerHTML = /*HTML*/ `
        <img class="car" src="img/${car_Image}.png"/>
    `;

    document.getElementById('my_greetings').innerHTML = Greetings_HTML;

    person_HTML = /*HTML*/ `
        <img src="img/${people[ActivePerson_index].image}" class="person_img"/>
    `;
    document.getElementById('person_object').innerHTML = person_HTML;
    document.getElementById('person_answer').innerHTML = answer_HTML;
}

function animateFrameLoop() {
    if (!inAnimation) {
        return;
    }

    animation_frame++;
    document.getElementById('app').classList.toggle("nextFrame");

    if (animation_frame > 1){
        animation_frame = 0;
    }
}

function meetStranger() {
    let random = Math.floor(Math.random() * people.length);

    while (random == LastPerson_index) {
        random = Math.floor(Math.random() * people.length);
    }
    ActivePerson_index = random;
    LastPerson_index = random;

    answer_HTML = `<div class="person_name">${people[ActivePerson_index].name}:</div>`;

    inAnimation = false;

    loadGreeting();
    UpdateView();
}

function loadGreeting(){
    //Johnny
    Greetings_HTML = ``;

    for (let i=0; i < people[ActivePerson_index].your_greetings.length; i++) {
        Greetings_HTML += /*HTML*/ `<div onClick="clickGreet(${i})" class="greet">${people[ActivePerson_index].your_greetings[i]} </div> `;
    }
    
    UpdateView();
}

function clickGreet(input) {
    console.log(input);
    const Active_Person = people[ActivePerson_index];

    // Hei der Joanathan
    Greetings_HTML = ``;

    if (Active_Person.correct_greet === input) {
        console.log('Dette er riktig');
        
        cool += Active_Person.cool_reward;
        answer_HTML = `<div class="person_name">${Active_Person.name}:</div>${Active_Person.their_greetings[0]}`;
    }
    else {
        cool -= Active_Person.cool_decrease;
        answer_HTML = `<div class="person_name">${Active_Person.name}:</div>${Active_Person.their_greetings[1]}`;
    }
    carChange();
    UpdateView();

    setTimeout(() => {

        if (cool >= 10) {
            gameVictory();
        }
        else if (cool <= 0) {
            gameOver();
        }
        else {
            inAnimation = true;
            setTimeout(() => {
                meetStranger();
            }, 2000);
        }
    }, 2000);
}

function gameVictory() {
    document.getElementById('app').innerHTML = "";
    const victoryOverlay = document.getElementById('victoryscreen');

    victoryOverlay.style.display = "block";
    victoryOverlay.innerHTML = /*HTML*/ `
    <div class="victoryWrapper victoryCenter">
        <h2 class="victorytitle victoryCenter victoryFlex"> You win! </h2>
            <div class="victoryBox">
                <p class="victoryP">Congratulations</p>
                <p class="victoryP">You have a brilliant car!</p>
            </div>
        <div class="victoryCenter victoryFlex">
            <button onclick="RestartGame()" class="victorybutton">Restart</button> 
        </div>
            
    </div>
    `
    
}

function gameOver() {
    // clearInterval(Interval);
    document.getElementById('app').innerHTML = "";

    const gameOverOverlay = document.getElementById("gameOverOverlay");
    //cool = 0; 

    gameOverOverlay.style.display = "block";
    gameOverOverlay.innerHTML = `
    <div class="gameOverWrapper gameOverCenter">
        <h2 class="gameOverTitle gameOverCenter gameOverFlex">Game Over</h2>
        <div class="gameOverCenter gameOverFlex">
            <div class="gameOverBox">
                <P class="gameOverP">You Lost</P>
                <p class="gameOverP">Your Car is now a wreck</p>
                <p class="gameOverP">Try Again!</p>
            </div>
            <img class="gameOverImg" src="img/cryingstick.png">
        </div>
        <div class="gameOverCenter gameOverFlex">
            <button class="gameOverButton onclick="RestartGame()">Restart</button>
        </div>
    </div>
    `;
}

function carChange() {
    /*coolnes 1-10*/
    car_Image = "car_1";

    if (cool > 5) {
        car_Image = "car_2";
    }
    if (cool > 8) {
        car_Image = "car_3";
    }
}

function RestartGame() {
    location.reload();

}

answer_HTML = `<div class="person_name">${people[ActivePerson_index].name}:</div>`;
loadGreeting();
UpdateView();
const Interval = setInterval(animateFrameLoop, 500);

setTimeout(() => {
    UpdateView();
}, 2000);

var Audio = document.getElementById('backgroundsound');
Audio.volume = 0.3;
Audio.loop = true;
Audio.play();
