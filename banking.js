function getInputValue(inputId){
  const inputField =document.getElementById(inputId)
  const inputAmountText = inputField.value
  const amountValue = parseFloat(inputAmountText)
      // clear inputField 
      inputField.value = ''
  return amountValue
}

function totalAmountField(amountId,inputAmount){
  // debugger;
  const amountTotal =document.getElementById(amountId)
  const totalAmountText = amountTotal.innerText
  const previousTotalAmount =parseFloat(totalAmountText)
  const newTotalAmount =previousTotalAmount + inputAmount 
  amountTotal.innerText = newTotalAmount
}

function getCurrentBalance(){
  const balanceTotal = document.getElementById('Balance-total')
  const balanceTotalText =balanceTotal.innerText
  const previousBalanceTotal =parseFloat(balanceTotalText)
  return previousBalanceTotal
}

function updateBalance(depositAmount,isAdd){
  const balanceTotal = document.getElementById('Balance-total')
  // const balanceTotalText =balanceTotal.innerText
  // const previousBalanceTotal =parseFloat(balanceTotalText)
 const previousBalanceTotal = getCurrentBalance()
    if(isAdd === true){
       newBalanceTotal = previousBalanceTotal + depositAmount
    }
else{
   newBalanceTotal = previousBalanceTotal - depositAmount
}
    balanceTotal.innerText = newBalanceTotal
}
// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click',function(){
    // get the amount deposited 
    // const depositInput =document.getElementById('deposit-amount')
    // const newdepositAmountText = depositInput.value
    // const newdepositAmount = parseFloat(newdepositAmountText)
    // console.log(depositInput)
    const depositAmount = getInputValue('deposit-amount')
    // const depositTotal =document.getElementById('deposit-total')
    // const previousDepositAmountText = depositTotal.innerText
    // const previousDepositAmount =parseFloat(previousDepositAmountText)
    // const newdepositTotal =previousDepositAmount + depositAmount 
    // depositTotal.innerText = newdepositTotal
if(depositAmount > 0){
totalAmountField('deposit-total',depositAmount)
updateBalance(depositAmount,true)}
    // update account balance  
    //  const balanceTotal = document.getElementById('Balance-total')
    //  const balanceTotalText =balanceTotal.innerText
    //  const previousBalanceTotal =parseFloat(balanceTotalText)
    //    const newBalanceTotal = previousBalanceTotal + depositAmount

    //    balanceTotal.innerText = newBalanceTotal

})

// add event withdrow handler 
 document.getElementById('withdraw-btn').addEventListener('click',function(){
  //  const withdrawTotal = document.getElementById('withdraw-total')
  //  const previousWithdrawTotalText = withdrawTotal.innerText
  //  const previousWithdrawTotal = parseFloat(previousWithdrawTotalText)

  //  const withdrawAmount = document.getElementById('withdraw-amount')
  //  const newWithdrawAmountText = withdrawAmount.value
  //  const newWithdrawAmount = parseFloat(newWithdrawAmountText)
  const withdrawAmount =getInputValue('withdraw-amount',)
  const currentBalance = getCurrentBalance()
  if(withdrawAmount > 0 && withdrawAmount < currentBalance){
    totalAmountField('withdraw-total',withdrawAmount)
    updateBalance(withdrawAmount,false)
  }
  //  const newTotalWithdrawAmount = previousWithdrawTotal + withdrawAmount
  //  withdrawTotal.innerText = newTotalWithdrawAmount

  //  update balance 


//  const balance = document.getElementById('Balance-total');

//  const previousBalanceText = balance.innerText;
//  const previousBalance = parseFloat(previousBalanceText);
//  const newTotalBalance = previousBalance - withdrawAmount
//  balance.innerText = newTotalBalance
 


 })