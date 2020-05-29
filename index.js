function dwarfRollCall(dwarves) {
  //Loop through an array of dwarves to 
  //return string of numbered dwarves "1. Doc 2.Dopey 3.Bashful"
  var numberedDwarves = []
    // set new variable to numberedDwarves = empty array to push the new value of 
  for (let i = 0 ; i < dwarves.length ; i++) {
    numberedDwarves.push(`${i+1}. ${dwarves[i]} `)
  }
  return numberedDwarves.join("")
}


function summonCaptainPlanet(planeteerCalls) {
  //change array elements to uppercase and add a ! at the end of each element 
  //return an array of elements 
  var upperCaseCalls = []
  for (let i=0 ; i<planeteerCalls.length ; i++)
  {
    upperCaseCalls.push(planeteerCalls[i].toUpperCase() + '!') 
  }
  return upperCaseCalls 
}


function longPlaneteerCalls(words) {
  // loop thought array to find calls with word length greater than 4 - if none, return 'false'
  for (let i = 0 ; i<words.length ; i++) { 
   let word = words[i]
   if (word.length>4) {
     return true 
   }
  }
  return false 
} 


function findTheCheese (foods) {
  //loop through array elements to find cheeses 'cheddar', 'gouda', or camembert - if no cheese, 'no cheese!' 
  for (let i=0 ; i<foods.length ; i++) { 
   let food = foods[i]
   if (food.includes('cheddar')) {
     return 'cheddar'
   }
   else if (food.includes('gouda')) {
     return 'gouda'
   }
   else if (food.includes('camembert')) {
     return 'camembert'
   }
  }
  return 'no cheese!'
}
