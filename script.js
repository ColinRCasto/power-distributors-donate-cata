var goal = 5000
var donatorsAmount = 70
var moneyRaised = 3500


function percentRaised(){
  return (moneyRaised / goal) * 100
}

function remainingToGoal(){
  return (goal - moneyRaised)
}

function get(tag){
  return document.querySelector(tag)
}

function renderPage() {
  if (percentRaised() >= 100) {
    //Set progress bar to green once the goal has been reached
    get('.progress-fill').style.background = 'green'
    get('.progress-fill').style.width = percentRaised().toString()+'%'
    get('.left-to-raise').innerHTML = 'We\'ve reached our goal!'
    get('.donators-ammount').innerHTML = donatorsAmount
    }else {
    get('.donators-ammount').innerHTML = donatorsAmount
    get('.progress-fill').style.width = percentRaised().toString()+'%'
    get('.left-to-raise').innerHTML = 'We need $' + remainingToGoal().toString() + ' to reach our goal!'
  }
}

function donate(){
  if (percentRaised() < 100) {
    donatorsAmount += 1
    moneyRaised += 50
    renderPage()
  }
}

document.addEventListener('DOMContentLoaded', function(){
  renderPage()
}, false);

get('.donate-button').addEventListener('click', function() {
  return donate()
},false)
