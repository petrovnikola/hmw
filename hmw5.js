//1
function exclaim(string){
    return  string + "!";
}
console.log(exclaim("Javascript"));

//2
var books = [
    {
    Title:  "Studija vo skarletna boja" ,
    Author:  "Artur Konan Dojl" ,
    Price:  900 },

    {Title: "Avanturite na Arsen Lupin",
    Author:  "Moris Leblan",
    Price: 450},

    {Title: "Stapica",
    Author:  "Lilja Sigurdardotir",
    Price: 500},

    {Title: "American Sniper",
    Author:  "Chris Kyle",
    Price: 350},

    {Title: "The Monk Who Sold His Ferrari",
    Author:  "Robin S. Sharma",
    Price: 799}
];

var filteredBooks = books.filter(books => {
    return books.Price <= 400;
});
console.log(filteredBooks);


//3

function CountMS(number) 
{
 let letterMM = 0;
 for (let i = 0; i <= number.length; i++) 
 {
    if (number[i] == "M" ) 
      {
        letterMM++;
      }
  }
  return "'M' in " + number + " = " + letterMM ;
}

console.log(CountMS("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM"));


//4
var number = [14, 42, 222, 26, 62, 75, 49, 72];
var largest = number[0];

for (var i = 0; i <= number.length; i++) {
    if (largest < number[i] ) {
        largest = number[i];
    }
}
console.log(largest);