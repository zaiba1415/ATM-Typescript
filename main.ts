import inquirer from "inquirer";
let answer = await inquirer.prompt([
  {
    type : "input",
    name :  "userID",
    message : "enter your ID"
  },
  {
    type : "number",
    name : "userPIN",
    message : "enter your PIN"
  },
  {
    type : "list",
    name : "accountType",
    message :"select your accountType",
    choices :["current","saving"]
  },
  {
    type : "list",
    name : "transactionType",
    message : "select your transaction",
    choices :["Fastcash","Withdraw"],
    when(answer){
      return answer.accountType
    
    }
  },
  {
    type : "list",
    name : "amount",
    message : "select your amount",
    choices : [10000,20000,30000,40000],
    when(answer){
      return answer.transactionType == "Fastcash"
    }
  },
  {
    type : "list",
    name : "amount",
    message : "select your amount",
    when(answer){
      return answer.transactionType == "Withdraw"
    }
  }
])

if(answer.userID && answer.userPIN){
   let balanced = 50000;
   console.log("previous balanced:", balanced)
   let enteredamount = answer.amount
   if (balanced>=enteredamount){
    let remaining = balanced - enteredamount
    console.log("your remaining balanced is:", remaining)
   }
}
else {
  console.log("Insufficient Balanced");
}






