
var user = prompt("Welcome to my guessing game, what is your name?");
alert("Hello " + user + ", I'm going to ask you a few questions now and see how well you know me");
console.log("The user's name is " + user)
var answer1 = prompt("Please answer Y or N, do you think baseball is my favorite sport?")
if (answer1 === "Y"){
  alert("I'm sorry " + user + " but that's not correct, football is my favorite sport");
}
else {
  alert("You're right! My favorite sport is football. Great answer!");

}
var answer2 = prompt("Next question, am I allergic to almonds? Please answer with either Y or N");
if (answer2 === "Y"){
  alert("WRONG! I love almonds, they're a great source of fat and nutrients")
}
else {
  alert("You're correct! I'm not allergic to almonds and eat them all the time")
}
alert("Okay this is the final question!")
var answer3 = prompt("Which do you think is my favorite food, pizza, chicken strips or french fries?");
if (answer3 === "pizza"){
  alert("Great choice but i'm sorry " + user + " that's not my favorite food")
}
  else if (answer3 === "chicken strips"){
    alert(user + " you know me to well, I love chicken strips, they are my favorite food!")
  }
  else {
    alert("Good answer " + user + ", I do love french fries, but they're my second favorite food")
  }

  var answer4 = prompt("Wait!! One last question. How old do you think I am?");
  while (answer4 != 26){
    alert("Wrong");
    answer4 = prompt("You're getting closer, try again")


  }
  alert("Wow " + user + " you know me better than I thought. Thanks for playing my guessing game! We can be friends now.")
