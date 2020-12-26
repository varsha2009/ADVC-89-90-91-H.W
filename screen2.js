function send(){
   number1 = document.getElementById("number1_input").value;
   number2 = document.getElementById("number2_input").value;
   actual_answer = parseInt(number1) * parseInt(number2);

   question_number = "<h4>"+number1+"*"+number2+"</h4>";
   input_box = "<br> Answer : <input type='text' id='input_check_box'>";
   check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>check</button>";
   img = "<img src = 'female-clipart-thinking-9.png' width = 100px height = 125px>"
   row = question_number + input_box + check_button + img;

   document.getElementById("output").innerHTML = row;
   document.getElementById("number1_input").value = " ";
   document.getElementById("number2_input").value = " ";
}
var player1_nameVar = localStorage.getItem("player1");
var player2_nameVar = localStorage.getItem("player2");

document.getElementById("player1_name").innerHTML = player1_nameVar + " :  ";
document.getElementById("player2_name").innerHTML = player2_nameVar + " :  ";

document.getElementById("player_question").innerHTML ="Queston turn : " + player1_nameVar ;
document.getElementById("player_answer").innerHTML = "Answer turn : " + player2_nameVar ;

var player1_scoreVar = 0;
var player2_scoreVar = 0;

document.getElementById("player1_score").innerHTML = " " + player1_scoreVar;
document.getElementById("player2_score").innerHTML = " " + player2_scoreVar;