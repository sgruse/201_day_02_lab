
var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');
var res4 = document.getElementById('resultFour');
var counter = 0;

var user = prompt('Welcome to my guessing game, what is your name?');
alert("Hello " + user + ", I'm going to ask you a few questions now and see how well you know me");
console.log('The user\'s name is ' + user);

var questData = [['Do you think baseball is my favorite sport?', 'YES', 'Y', 'I\'m sorry ' + user + ' but that\'s not correct football is my favorite sport', 'N', 'NO', 'You\'re right! My favorite sport is football. Great answer!', res1],
['Next question, am I allergic to almonds? Please answer with either Y or N', 'Y', 'YES', 'WRONG! I love almonds, they\'re a great source of fat and nutrients', 'N', 'NO', 'You\'re correct! I\'m not allergic to almonds and eat them all the time', res2]
]


function questions() {
  var answer1 = prompt(questData [i][0]).toUpperCase();
  if (answer1 === questData[i][1] || answer1 === questData[i][2]){
    console.log(user + " replied " + answer1);
    // alert("I'm sorry " + user + " but that's not correct, football is my favorite sport");
  questData[i][7].textContent = questData[i][3]
  questData[i][7].className = "wrong";
  }
  else if (answer1 === "N" || answer1 === "NO") {
    console.log(user + " replied " + answer1);
    // alert("You're right! My favorite sport is football. Great answer!");
    questData[i][7].textContent = questData[i][6];
    questData[i][7].className = "correct";
    counter += 1;
  }
  else {
    alert("That's not an acceptable answer lets move on to the next question");
  }
}
for (var i = 0; i < questData.length; i++) {
  questions();
}

function thirdQuestion() {
  alert("Okay " + user + " this is the final question");
  var foodAnswer = prompt("Which do you think is my favorite food? Pizza, chicken strips or french fries?").toUpperCase();
  var answer3 = false;
  while (answer3 === false) {
    switch(foodAnswer){
      case 'PIZZA':
      console.log(user + " replied " + foodAnswer);
      // alert("Great choice but I'm sorry " + user + " that's not my favorite food");
      res3.textContent = "Great choice but I'm sorry " + user + " that's not my favorite food";
      res3.className = "wrong"
      answer3 = true;
      break;
      case 'CHICKEN STRIPS':
      console.log(user + " replied " + foodAnswer);
      // alert(user + " you know me to well, I love chicken strips, they are my favorite food!");
      res3.textContent = user + " you know me to well, I love chicken strips, they are my favorite food!";
      res3.className = "correct";
      answer3 = true;
      counter += 1;
      break;
      case 'FRENCH FRIES':
      console.log(user + " replied " + foodAnswer);
      // alert("Good answer" + user + ", I do love fench fries, but they're my second favorite food");
      res3.textContent = "Good answer " + user + ", I do love fench fries, but they're my second favorite food";
      res3.className = "wrong"
      answer3 = true;
      break;
      default:
      console.log(user + " replied " + foodAnswer);
      // alert("That's not one of the choices! Guess again");
      res3.textContent = "That's not one of the choices! Guess again";
      res3.className = "wrong"
      var foodAnswer = prompt("Which do you think is my favorite food? Pizza, chicken strips or french fries?").toUpperCase();
    }
  }

}
function fourthQuestion() {
var response4 = false;

  while(response4 === false) {
    var answer4 = prompt("Wait!!! One last BONUS question. How old do you think I am?");
    if(parseInt(answer4) < 26) {
      res4.textContent = "You're wrong I'm older than that";
      res4.className = "wrong"
    } else if(parseInt(answer4) > 26){
      res4.textContent = "Wrong, I'm younger than that";
      res4.className = "wrong";
      answer4 = parseInt(prompt("You're getting closer, try again"));
    } else {
    res4.textContent = user + " you're correct!";
    res4.className = "correct";
    response4 = true;
    }
  }
  
}
thirdQuestion();
fourthQuestion();


counter += 1;
alert("Wow " + user + " you know me better than I thought you did and got " + counter + " questions correctly. Thanks for playing my guessing game! We can be friends now.");

console.log(counter);
