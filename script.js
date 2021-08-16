const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output-box");

function validateLuckyOrNot(){
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if(sum % luckyNumber.value == 0){
    output.innerHTML= "You were born under lucky stars!";
  }
  else{
    output.innerHTML="Lucky numbers are for amateurs! You make your own luck!";
  }
}

function calculateSum(dob){
dob = dob.replaceAll("-","");
let sum =0;
for ( let index = 0; index<dob.length; index++){
  sum = sum + Number(dob.charAt(index));
} 
return sum;
}

checkButton.addEventListener
('click', validateLuckyOrNot)


  

   