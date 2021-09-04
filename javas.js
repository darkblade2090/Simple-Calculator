
var input_box=document.getElementById("Calculation");
const display = document.querySelector('.calculator-screen')
const op= ["+", "-", "*","/","."];
var c=0,dot=0;  
nop=["+", "-", "*","/"];

function UserClickButton(input){
    var oldinput = input_box.value;

    if (oldinput.slice(-1) === "+" && input.includes("+")) return;
    if (oldinput.slice(-1) === "." && input.includes(".")) return;
    if (oldinput.slice(-1) === "*" && input.includes("*")) return;
    if (oldinput.slice(-1) === "*" && input.includes("+")) return;
    if (oldinput.slice(-1) === "*" && input.includes("-")) return;
    if (oldinput.slice(-1) === "*" && input.includes("/")) return;
    if (oldinput.slice(-1) === "-" && input.includes("-")) return;
    if (oldinput.slice(-1) === "/" && input.includes("/")) return;
    if (oldinput.slice(-1) === "/" && input.includes("*")) return;
    if (oldinput.slice(-1) === "/" && input.includes("+")) return;
    if (oldinput.slice(-1) === "/" && input.includes("-")) return;
    
    for(let i=0; i< oldinput.length;i++)
    {
      for(let j=0; j< op.length;j++)
         { if(oldinput.slice(-1)===op[i] && input===op[j])
          return;
           
          
        }
        
    }
if(oldinput==="0"&&(input!=="."&&input!=="+"&&input!=="-"&&input!=="*"&&input!=="/"))
input_box.value=input;
else
{ 
  var newinput = oldinput +"" +input;
  expressionData = newinput;
  input_box.value = newinput;}
}
 function CalculateValue()
 {
    console.log("Click");
    var input=input_box.value;
    input = input.replace('"', "").replace("'", "");
    var result= eval(input);
    
    input_box.value=result;
 }

 function ClearData()
     {
        input_box.value="0";
     }
 
  function Del()
     {  
       var oldinput = input_box.value;
        input_box.value=oldinput.slice(0,-1);
        if(input_box.value==="")
        input_box.value="0";
     }   
     