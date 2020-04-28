// Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for(var i = 0; i < officeItems.length; i++){
  if(officeItems[i] === "computer"){
      console.log(officeItems[i])
  }
}

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= "18"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Old Enough");
    }else 
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Not Old Enough");
    }


for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)[
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[0].name + " is not old enough to see Mad Max")
]

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[1].name + " is old enough to see Mad Max")
}

// Check to see if the movie goer is a male or female for an even more personalized message.

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
   if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[0].name + " is not old enough to see Mad Max Fury Road, don't let HIM in.")
   }
   else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[1].name + " is old enough. SHE'S good to see Mad Max Fury Road..")
    }
}