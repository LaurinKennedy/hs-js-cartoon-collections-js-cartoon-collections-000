// function called dwarfRollCall takes in 1 argument, an array of dwarf names
function dwarfRollCall(dwarves) {
  //Loop through an array of dwarves to 
  //return them as a string of numbered dwarves (ie: "1. Doc 2. Dopey") 
  var numberedDwarves = []
    //created a new variable: numberedDwarves = empty array 
    //because I needed to have a new array to push this string into (at the end of the array)
    //value of index (+1 because index starts at 0 and I need it to start at 1 to represent a numbered person). 
    //and the value of the dwarf at that corresponding index 
  for (let i = 0 ; i < dwarves.length ; i++) {
    //use a for loop to loop thought all the dwarves in the array to ensure each dwarf is included in the final string 
    numberedDwarves.push(`${i+1}. ${dwarves[i]} `)
    //pushed this string into the end of the new array numberedDwarves after each iteration of the loop
    //used backtics to allow for embedded expressions ${} in the string 
  }
  return numberedDwarves.join("")
  //retruned the new array with join method to "join" the items of the array into a single string 
}

//function summonCaptainPlanet takes in one argument, an array of calls called planeteerCalls 
function summonCaptainPlanet(planeteerCalls) {
  //change array elements to uppercase and add a ! at the end of each element 
  //return an array of elements 
  var upperCaseCalls = []
  //created a new variable: upperCaseCalls to equal an empty array
  //because I needed a new array to push the string after each iteration of the loop into (at the end of the array)
  //array element [i] of planetter calls
  //method toUpperCase() to change each letter to uppercase 
  //+ '!' to add the ! to the end of each uppercased string 
  for (let i=0 ; i<planeteerCalls.length ; i++)
  {
    upperCaseCalls.push(planeteerCalls[i].toUpperCase() + '!') 
  }
  return upperCaseCalls 
  //returned array called upperCase becuase this is the new array with all uppercase letters and an ! at the end of each string (array element)
}

//function called longPlaneteerCalls takes in 1 argument, an array of calls called words 
function longPlaneteerCalls(words) {
  // loop though array to find calls with word length greater than 4 
  //if none, return 'false'
  for (let i = 0 ; i<words.length ; i++) { 
    //use a for loop to loop through each call 
   let word = words[i]
   //set variable word to equal each element of the array of words symbolized by words[i]
   if (word.length>4) {
     //looked for words[i] one at a time to see if their length is more than 4 characters 
     return true 
     //returned 'true' as soon as a word was found to have more than 4 characters
   }
  }
  return false 
  //returned false if after all the iterations of the loop happened and there were no words that are more than 4 characters 
} 

//function called findTheCheese takes 1 argument, an array of foods 
function findTheCheese (foods) {
  //loop through array elements to find cheeses 'cheddar', 'gouda', or camembert - if no cheese, 'no cheese!' 
  for (let i=0 ; i<foods.length ; i++) { 
    //use for loop to loop through all the foods in the array 
   let food = foods[i]
   //set variable food to represent each food[i] (array element) of the array at each index   
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
