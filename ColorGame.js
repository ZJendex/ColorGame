/**
 * author : ZJendex
 * date : 7/16/2020
 * location : Amherst, MA
 * last edited : 7/17/2020
 */
//getting objects
let colors = [];
let squareNum = 6;
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let goalColor = document.querySelector("#goalColor");
let tryAgain = document.querySelector("#tryAgain");
let newColor = document.querySelector("#newColor");
let modes = document.querySelectorAll(".mode");
let goalIdx = null;
let hasWon = false;


main = function(){
    initGame();
    addEventsListener()
};
main();

function initGame(){
    initSquare();
    setGoal();
    initOtherParameter();
}

// add other events listener
function addEventsListener(){
    newColor.addEventListener("click", initGame);
    modesEventListenerAdded();
    squareEventListenerAdded();
}

function initSquare(){
    for (let i = 0; i < squareNum; i++) {
        colors[i] = [];
        for (let j = 0; j < 3; j++) {
            colors[i][j] = Math.floor(Math.random()*256);
        }
        squares[i].style.backgroundColor = "rgb(" + colors[i][0] + ", " + colors[i][1] + ", " + colors[i][2] + ")";
    }
}
function setGoal(){
    goalIdx = Math.floor(Math.random()*(squareNum));
    goalColor.textContent = squares[goalIdx].style.backgroundColor;
}
function initOtherParameter(){
    hasWon = 0;
    h1.style.backgroundColor = "#FFA07A";
    if(tryAgain.textContent !== "try again!") {
        tryAgain.textContent = "try again!";
        tryAgain.classList.add("lightgoldenrodyellow");
    }
}
function modesEventListenerAdded(){
    modes[0].addEventListener("click", function () {
        modes[0].classList.add("selected");
        modes[1].classList.remove("selected");
        squareNum = 3;
        for (let i = 3; i < 6; i++) {
            squares[i].style.display = "none";
        }
        initGame();
    });
    modes[1].addEventListener("click", function () {
        modes[0].classList.remove("selected");
        modes[1].classList.add("selected");
        squareNum = 6;
        for (let i = 3; i < 6; i++) {
            squares[i].style.display = "block";
        }
        initGame();
    });
}
function squareEventListenerAdded(){
    for (let i = 0; i < squares.length; i++) {
        // squares[i].addEventListener("click", function () {
        //     if(i === goalIdx){
        //         let colorI = "rgb(" + colors[i][0] + ", " + colors[i][1] + ", " + colors[i][2] + ")";
        //         for (let j = 0; j < squares.length; j++) {
        //             squares[j].style.backgroundColor = colorI;
        //         }
        //         tryAgain.textContent = "YOU WIN!!";
        //         h1.style.backgroundColor = colorI;
        //         hasWon = 1;
        //     }else{
        //         if(!hasWon){
        //             tryAgain.classList.remove("lightgoldenrodyellow");
        //             squares[i].style.backgroundColor = "rgb(1,1,1)";
        //         }
        //     }
        // });
        //Ending version II
        squares[i].addEventListener("click", function () {
            if(i === goalIdx){
                tryAgain.textContent = "YOU WIN!!";
                h1.style.backgroundColor = "rgb(" + colors[i][0] + ", " + colors[i][1] + ", " + colors[i][2] + ")";
                hasWon = 1;
                for (let j = 0; j < squares.length; j++) {
                    if(j !== i){
                        squares[j].style.backgroundColor = "rgb(1, 1, 1)";
                    }
                }
            }else{
                if(!hasWon){
                    tryAgain.classList.remove("lightgoldenrodyellow");
                    squares[i].style.backgroundColor = "rgb(1,1,1)";
                }
            }
        });
    }
}





