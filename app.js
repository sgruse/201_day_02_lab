
var counter = 0;

var user = prompt("Welcome to my guessing game, what is your name?");
alert("Hello " + user + ", I'm going to ask you a few questions now and see how well you know me");
console.log("The user's name is " + user);


var answer1 = prompt("Please answer Y or N, do you think baseball is my favorite sport?").toUpperCase();
if (answer1 === "Y" || answer1 === "YES"){
  console.log(user + " replied " + answer1)
  alert("I'm sorry " + user + " but that's not correct, football is my favorite sport");
}
else if (answer1 === "N" || answer1 === "NO") {
  console.log(user + " replied " + answer1)
  alert("You're right! My favorite sport is football. Great answer!");
  counter += 1;
}
else {
  alert("That's not an acceptable answer please try again");
  answer1 = prompt("Please answer Y or N, do you think baseball is my favorite sport?").toUpperCase();
  if (answer1 === "Y" || answer1 === "YES"){
    console.log(user + " replied " + answer1)
    alert("I'm sorry " + user + " but that's not correct, football is my favorite sport");
  }
  else if (answer1 === "N" || answer1 === "NO") {
    alert("You're right! My favorite sport is football. Great answer!");
    counter += 1;
  }
  else {
    alert("That's not an acceptable answer, lets move on");}
}

var answer2 = prompt("Next question, am I allergic to almonds? Please answer with either Y or N").toUpperCase();
if (answer2 === "Y" || answer2 === "YES"){
  console.log(user + " replied " + answer2);
  alert("WRONG! I love almonds, they're a great source of fat and nutrients");
}
  else if (answer2 === "N" || answer2 === "NO")
{
  console.log(user + " replied " + answer2)
  alert("You're correct! I'm not allergic to almonds and eat them all the time");
  counter += 1;
}
  else {
    alert("That's not an acceptable answer, please try again");
    answer2 = prompt("Next question, am I allergic to almonds? Please answer with either Y or N").toUpperCase();
    if (answer2 === "Y" || answer2 === "YES"){
      alert("WRONG! I love almonds, they're a great source of fat and nutrients");
    }
      else if (answer2 === "N" || answer2 === "NO")
    {
      alert("You're correct! I'm not allergic to almonds and eat them all the time");
    }
      else {
        alert("That's not an acceptable answer, lets move on");
      }
    }

    alert("Okay " + user + " this is the final question");
    var foodAnswer = prompt("Which do you think is my favorite food? Pizza, chicken strips or french fries?").toUpperCase();
    var answer3 = false;
    while (answer3 === false) {
    switch(foodAnswer){
      case 'PIZZA':
        console.log(user + " replied " + foodAnswer);
        alert("Great choice but I'm sorry " + user + " that's not my favorite food");
        answer3 = true;
        break;
      case 'CHICKEN STRIPS':
        console.log(user + " replied " + foodAnswer);
        alert(user + " you know me to well, I love chicken strips, they are my favorite food!");
        answer3 = true;
        counter += 1;
        break;
      case 'FRENCH FRIES':
        console.log(user + " replied " + foodAnswer);
        alert("Good answer" + user + ", I do love fench fries, but they're my second favorite food");
        answer3 = true;
        break;
        default:
        console.log(user + " replied " + foodAnswer);
        alert("That's not one of the choices! Guess again");
        var foodAnswer = prompt("Which do you think is my favorite food? Pizza, chicken strips or french fries?").toUpperCase();

    }
}

  var answer4 = prompt("Wait!!! One last BONUS question. How old do you think I am?");
  answer4 = parseInt(answer4);
  while (answer4 !== 26){
    if (answer4 > 26){
    alert("Wrong, I'm younger than that");
  }
  else
  alert("Wrong, I'm older than that");
    answer4 = parseInt(prompt("You're getting closer, try again"));
}

counter += 1;
alert("Wow " + user + " you know me better than I thought you did and got " + counter + " questions correctly. Thanks for playing my guessing game! We can be friends now.");

console.log(counter);
