// 1. Returns a list of everyone older than 18, 
// 2. Sorted alphabetically by last name,
// 3. Each name and age is embedded in a string that looks like an HTML <li> element
/*
Output: 
[ 
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>" 
]
*/

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },    
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },    
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },    
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },    
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },    
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },    
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }    
];    

function sortedOfAge(arr){
    return arr.filter(function(num){
        if( num.age >= 18){
            return num
        }
    }).sort(function(a,b){
        if(a.lastName > b.lastName){
            return 1
        } else if (a.lastName < b.lastName){
            return -1
        } else {
            return 0
        }
    }).map(function(list){
        return `<li> ${list.firstName} ${list.lastName} is ${list.age} </li>`
    }) 
};

console.log(sortedOfAge(peopleArray));