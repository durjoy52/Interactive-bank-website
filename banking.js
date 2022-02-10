function getInputValue(){
  const depositInput =document.getElementById('deposit-amount')
  const newdepositAmountText = depositInput.value
  const newdepositAmount = parseFloat(newdepositAmountText)
      // clear inputField 
      depositInput.value = ''
  return newdepositAmount
}

// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click',function(){
    // get the amount deposited 
    // const depositInput =document.getElementById('deposit-amount')
    // const newdepositAmountText = depositInput.value
    // const newdepositAmount = parseFloat(newdepositAmountText)
    // console.log(depositInput)
    const depositAmount = getInputValue()
    const depositTotal =document.getElementById('deposit-total')
    const previousDepositAmountText = depositTotal.innerText
    const previousDepositAmount =parseFloat(previousDepositAmountText)
    const newdepositTotal =previousDepositAmount + depositAmount 
    depositTotal.innerText = newdepositTotal

    // update account balance  
     const balanceTotal = document.getElementById('Balance-total')
     const balanceTotalText =balanceTotal.innerText
     const previousBalanceTotal =parseFloat(balanceTotalText)
       const newBalanceTotal = previousBalanceTotal + depositAmount

       balanceTotal.innerText = newBalanceTotal

})

// add event withdrow handler 
 document.getElementById('withdraw-btn').addEventListener('click',function(){
   const withdrawTotal = document.getElementById('withdraw-total')
   const previousWithdrawTotalText = withdrawTotal.innerText
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalText)

   const withdrawAmount = document.getElementById('withdraw-amount')
   const newWithdrawAmountText = withdrawAmount.value
   const newWithdrawAmount = parseFloat(newWithdrawAmountText)

   const newTotalWithdrawAmount = previousWithdrawTotal + newWithdrawAmount
   withdrawTotal.innerText = newTotalWithdrawAmount

  //  update balance 

 const balance = document.getElementById('Balance-total');

 const previousBalanceText = balance.innerText;
 const previousBalance = parseFloat(previousBalanceText);
 const newTotalBalance = previousBalance - newWithdrawAmount
 balance.innerText = newTotalBalance
 


  //  clear inputField 
  withdrawAmount.value =''
 })