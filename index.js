// Code your selectRandomEntry function here:
let crewArray = []; // create new, empty array to store items
function selectACrewMember(arr) { // function takes an array... idNumbers in this case from the call below
  return arr[Math.floor(Math.random()*arr.length)]; // return random #, FLOOR rounding DOWN to 0 (min) or up to 5 (max) - representing total # of indexes or positions in the idNumbers array
}
let idNumbers = [291, 414, 503, 599, 796, 890];
while (crewArray.length < 3) { // execute until crewArray is filled with 3 random numbers
  let randomCrew = selectACrewMember(idNumbers); // calling function with idNumbers array being plugged in, go back to function above to calculate
  console.log(randomCrew); // prints each of the 3 random idNumbers selected
  console.log("\n");
  if (!crewArray.includes(randomCrew)) { // if crewArray array does NOT! include the randomly-selected idNumbers item...
    crewArray.push(randomCrew); // push the new, unrepeated random item from randomCrew or whatever is in the ()s into the new array (empty on first loop) - crewArray... WHILE there are less than 3 indexes filled
  }
}

console.log(crewArray); // prints the newly-filled, formerly-empty crewArray array

// Code your buildCrewArray function here:
function buildCrewArray(randomIDArr,candidateArr) { // function with two parameters, taking two arguments from a future call to work with
  let crew = []; // create new, empty crew array
  for (element of randomIDArr){  
    for (candidate of candidateArr){
      if (candidate.astronautID === element) {
        crew.push(candidate);
      }
    }
  }
return crew;
}

console.log(selectACrewMember(idNumbers)); //calls function plugging in idNumbers array as argument, go back up to function to begin

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
let selectedCrew = buildCrewArray(crewArray,animals);

console.log(`${selectedCrew[0].name}, ${selectedCrew[1].name}, and ${selectedCrew[2].name} are going to space!`);