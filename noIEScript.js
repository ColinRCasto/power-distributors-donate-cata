var goal = 5000
var donatorsAmount = 70
var moneyRaised = 3500

var startingState = {
  donatorsAmount: 70,
  moneyRaised: 3500
}
var curState,prevState 

function percentRaised(){
  return (curState.moneyRaised / goal) * 100
}

function remainingToGoal(){
  return (goal - curState.moneyRaised)
}

function get(tag){
  return document.querySelector(tag)
}

function renderPage() {
  // Render our page without touching any DOM elements that don't need to be updated
  if(prevState) {
    if (curState.moneyRaised != prevState.moneyRaised){
      // grow the progress bar based on how many donations we've recieved
      get('.progress-fill').style.width = percentRaised().toString()+'%'
      get('.left-to-raise').innerHTML = 'We need $' + remainingToGoal().toString() + ' to reach our goal!'
      
      if (percentRaised() >= 100) {
        //Set progress bar to green once the goal has been reached
        get('.progress-fill').style.background = 'green'
        get('.left-to-raise').innerHTML = 'We\'ve reached our goal!'
      }
    }

    if (curState.donatorsAmount != prevState.donatorsAmount){
      // Display the correct amount of donations so far
      get('.donators-ammount').innerHTML = curState.donatorsAmount
    }
  } else {
    get('.donators-ammount').innerHTML = curState.donatorsAmount
    get('.progress-fill').style.width = percentRaised().toString()+'%'
    get('.left-to-raise').innerHTML = 'We need $' + remainingToGoal().toString() + ' to reach our goal!'
  }
  
  prevState = {...curState}
}



function donate(){
  curState.donatorsAmount += 1
  curState.moneyRaised += 50
  renderPage()
}






document.addEventListener('DOMContentLoaded', function(){
  curState = {...startingState}
  renderPage()
}, false);

get('.donate-button').addEventListener('click', function() {
  return donate()
},false)
