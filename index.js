function dwarfRollCall(dwarves) {
  var numberedDwarves = []
  let i = 0 
  while (i < dwarves.length) {
    numberedDwarves.push(`${i+1}. ${dwarves[i]} `) 
    i++ 
  }
  return numberedDwarves.join("")
}


function summonCaptainPlanet(planeteerCalls) {
  var upperCaseCalls = []
  for (let i=0 ; i<planeteerCalls.length ; i++)
  {
    upperCaseCalls.push(planeteerCalls[i].toUpperCase() + '!') 
  }
  return upperCaseCalls 
}


function longPlaneteerCalls(words) {
  for (let i = 0 ; i<words.length ; i++) { 
   let word = words[i]
   if (word.length>4) {
     return true 
   }
  }
  return false 
} 


function findTheCheese (foods) {
  //loop through array to find cheeses 'cheddar', 'gouda', or camembert 
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
