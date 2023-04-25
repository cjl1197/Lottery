// script page for lottery program written by Craig Lawyer


// the below functions are used by other functions for regularly used syntax
function focusAndClear()
{
    document.getElementById("pickNumbers").value = ""
    document.getElementById("pickNumbers").focus()    
}

function addHtmlText(location, text)
{
    document.getElementById(location).innerHTML += text;
}

function alertMessage()
{
    window.alert("You did not enter a valid number. Enter a valid number to continue.")
}

function displayType(idName, displayProperty)
{
    document.getElementById(idName).style.display = displayProperty;
}

function playAgain()
{
    window.location = href="index.html";
}

function backGround()
{
    document.body.style.backgroundImage = "url('../images/giphy.gif";
}

// Array that stores the images for the lottery balls
let lotteryBall = new Array('<img width="150" height="147" src="images/ball1.png">','<img width="150" height="147" src="images/ball2.png">'
,'<img width="150" height="147" src="images/ball3.png">', '<img width="150" height="147" src="images/ball4.png">' 
,'<img width="150" height="147" src="images/ball5.png">', '<img width="150" height="147" src="images/ball6.png">'
, '<img width="150" height="147" src="images/ball7.png">', '<img width="150" height="147" src="images/ball8.png">'
, '<img width="150" height="147" src="images/ball9.png">', '<img width="150" height="147" src="images/ball10.png">'
, '<img width="150" height="147" src="images/ball11.png">', '<img width="150" height="147" src="images/ball12.png">'
, '<img width="150" height="147" src="images/ball13.png">', '<img width="150" height="147" src="images/ball14.png">'
, '<img width="150" height="147" src="images/ball15.png">', '<img width="150" height="147" src="images/ball16.png">'
, '<img width="150" height="147" src="images/ball17.png">', '<img width="150" height="147" src="images/ball18.png">'
, '<img width="150" height="147" src="images/ball19.png">', '<img width="150" height="147" src="images/ball20.png">'
, '<img width="150" height="147" src="images/ball21.png">', '<img width="150" height="147" src="images/ball22.png">'
, '<img width="150" height="147" src="images/ball23.png">', '<img width="150" height="147" src="images/ball24.png">'
, '<img width="150" height="147" src="images/ball25.png">', '<img width="150" height="147" src="images/ball26.png">'
, '<img width="150" height="147" src="images/ball27.png">', '<img width="150" height="147" src="images/ball28.png">'
, '<img width="150" height="147" src="images/ball29.png">', '<img width="150" height="147" src="images/ball30.png">'
, '<img width="150" height="147" src="images/ball31.png">', '<img width="150" height="147" src="images/ball32.png">'
, '<img width="150" height="147" src="images/ball33.png">', '<img width="150" height="147" src="images/ball34.png">'
, '<img width="150" height="147" src="images/ball35.png">', '<img width="150" height="147" src="images/ball36.png">'
, '<img width="150" height="147" src="images/ball37.png">', '<img width="150" height="147" src="images/ball38.png">'
, '<img width="150" height="147" src="images/ball39.png">', '<img width="150" height="147" src="images/ball40.png">');

let userNumbers = new Array();
let lotteryNumbers = new Array();
let counter = 0;
let number = 0;
let matches = 0;


// main functions of the program

function storeNumber(pickNumbers) //gets input from the user, ensures it's valid and stores the data in an array.
{
    let testNumber = parseInt(pickNumbers);
    let found = false;

    if(pickNumbers.includes(' ') || pickNumbers.includes('.') || isNaN(pickNumbers) || pickNumbers === "" 
        || testNumber <= 0 || testNumber > 40)
    {
        alertMessage();
        focusAndClear();
    }

    else
    {
        if (userNumbers.length === 0)
        {
            displayType("balls", "none");
            addHtmlText("userNum", "You picked: " + "<br>") ;
        }    
    
        for (let i = 0; i < counter; ++i)
        {
            if (testNumber == userNumbers[i])  
            {      
                found = true;
                window.alert("You have already chosen that number. Please choose a different one!")
                focusAndClear();
            }                  
        }

        if (found === false && counter < 6)
        {
            userNumbers.push(testNumber);
            let userPick = testNumber;
            addHtmlText("userNum", lotteryBall[userPick - 1] + " ");
            focusAndClear();
            ++counter
            
        }     
    
        if (userNumbers.length === 6)
        {
            displayType("submitNumber", "none");
            displayType("drawNumbers", "inline");
            displayType("pickNumbers", "none");
            displayType("numberInput", "none");
            document.getElementById("drawNumbers").focus();
        }
       
    }
}

function lotteryNumbersDraw() //checks for dubplicate numbers and calls the function to generate random numbers.
{
   let i = 0;

   displayType("headingText", "none");
   displayType("submitNumber", "none");
   displayType("drawNumbers", "none");
   displayType("playAgain", "inline");

   if (userNumbers.length < 6)
   {
       window.alert("Nice try, but no cheating allowed. Pick all six numbers and try again.")
   }
   else
   {

   addHtmlText("lotteryNum", "The winning numbers are: " + "<br>");
   while (lotteryNumbers.length < 6)
   {   
    randomNumbers();
    if(number !== lotteryNumbers[0] && number !== lotteryNumbers[1] &&number !== lotteryNumbers[2] &&number !== lotteryNumbers[3]
       &&number !== lotteryNumbers[4] &&number !== lotteryNumbers[5])
    {
        lotteryNumbers.push(parseInt(number));
        let ballNum = number;
     addHtmlText("lotteryNum", lotteryBall[ballNum - 1] + " ");
        ++i;  
    }   
   } 
   findMatches();
   print();
   } 
}

function randomNumbers() //generates random numbers and returns the value to the lotteryNumbersDraw function.
{
    number = Math.floor(Math.random() * 6 + 1);
    return number;
}

function findMatches() //checks users input vs random(lottery) numbers to calculate the number of matches.
{
    for (let i = 0; i < 6; ++i)
    {
        for(let j = 0; j < 6; ++j)
        {
            if (userNumbers[i] === lotteryNumbers[j])
            {
                let matchedNumbers = userNumbers[i];
                addHtmlText("matchedBalls", lotteryBall[matchedNumbers - 1] + " ");
               ++matches;
            }
        }
    }
    if (matches > 2)
    {
        document.body.style.backgroundImage = "url(images/winner.gif)";
        document.getElementById("win").play();
    }
     if (matches <= 2)
     {
        document.getElementById("lost").play();
     }
}

function winningsCalcualtion()// sets conditions for earnings from the lottery
{
    let earnings;

    if (matches === 3)
        earnings = "$5.00"

    else if (matches === 4)
        earnings = "$50.00"

    else if (matches === 5)
        earnings = "$100.00"

    else
        earnings = "$100,000.00"

        return earnings;
}

function print() // prints data to the index.html
{
    addHtmlText("userMatches", "The total number of matches was: " + matches + "<br /><br />");    
     
    if (matches === 0)  
        addHtmlText("userWinnings", "Sorry you did not get any matches and won $0.00. Please try again!!");

    else if (matches === 1)
        addHtmlText("userWinnings", "Sorry you but your " + matches + " match was not enough and you won $0.00.  Please try again!");

    else if (matches === 2)
        addHtmlText("userWinnings", "Sorry you but your " + matches + " matches was not enough and you won $0.00.  Please try again!");
     
    else
        addHtmlText("userWinnings", "Congratualations, you had " + matches + " matches and won " + winningsCalcualtion() + "!!!");
    }


