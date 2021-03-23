/*
//calculating John

var johnMass, johnHeight;
johnMass = 50; //in kg
johnHeight = 1.8; // in meters
var johnBmi = johnMass / (johnHeight * johnHeight);
// 50 / (1.8 * 1.8) = 15.43

// Calculating Mark

var markMass, markHeight;
markMass = 60; //kg
markHeight = 1.5; // meters
var markBmi = markMass / (markHeight * markHeight);
// 60 / (1.5 * 1.5) = 26.66

// calculating difference

var difference = markBmi > johnBmi;

console.log(difference); // true

*/

/*
// ---to calculate dog age to human age---


var dogAge = prompt('How old is your dog?');
var humanAge = ((dogAge -2) * 4) + 21;
alert('Your dog is ' + humanAge + ' years old in human years.');
*/

// ---basketball average winner coding challenge---

/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (116 + 97 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

console.log(scoreJohn, scoreMike, scoreMary);
*/

// result written as if else statements

/*
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team is the winner with an average score of  ' + scoreJohn + '!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team is the winner with an average score of  ' + scoreMike + '!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team is the winner with an average score of  ' + scoreMary + '!');
} else {
    console.log('It is all a draw!');
}
*/

//result written as a switch

/*
switch (true) {
    case scoreJohn > scoreMike && scoreJohn > scoreMary:
        console.log('John\'s team is the winner with an average score of  ' + Math.floor(scoreJohn) + '!');
        break;
    case scoreMike > scoreJohn && scoreMike > scoreMary:
        console.log('Mike\'s team is the winner with an average score of  ' + Math.floor(scoreMike) + '!');
        break;
    case scoreMary > scoreJohn && scoreMary > scoreMike:
        console.log('Mary\'s team is the winner with an average score of  ' + Math.floor(scoreMary) + '!');
        break;
    default:
        console.log('There is  a draw!');
}
*/

//---life in weeks challenge---

/*
function lifeInWeeks(age) {

    //Write your code here.
    var days = (90 - age) * 365;
    var weeks = (90 - age) * 52;
    var months = (90 - age) * 12;

    console.log('You have ' + days + ' days, ' + weeks + ' weeks, and ' + months + ' months left.');

}

lifeInWeeks(38);
*/

//-----second bmi calculator challenge------

/*function bmiCalculator(weight, height) {
    var bmi  = weight / (height * height);
    bmi =  Math.floor(bmi);

    if (bmi < 18.5) {
        console.log ('Your BMI is ' + bmi + ', so you are underweight.');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log('Your BMI is ' + bmi + ', so you have a normal weight.');
    } else {
        console.log('Your BMI is ' + bmi + ';

bmiCalculator(65, 1.8);
*/


/*var loveCalculator = Math.floor(Math.random() * 100);
loveCalculator = loveCalculator + 1;
console.log('Your love score is ' + loveCalculator + '%.');*/

/*var guestList = ['Jack', 'Angela', 'Pam', 'Joey', 'Olu'];
var name = prompt('What is your name?');
if (guestList.includes(name)) {
    alert('Welcome ' + name + '!');
} else {
    alert('Sorry, maybe next time.');
}*/

// --------- FizzBuzz challenge ----------
/*
Write a code of numbers printing 1 to 100 where any number divisible by 3 prints Fizz, any number divisible by 5 prints Buzz, and any number divisible by both 3 and 5 prints FizzBuzz
*/

/*var n = [];
var count = 1;

function fizzBuzz () {

    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            n.push('FizzBuzz');
        } else if (count % 3 === 0) {
            n.push('Fizz');
        } else if (count % 5 === 0) {
            n.push('Buzz');
        } else {
            n.push(count);
        }
        count++;
    }
    console.log(n);
}

fizzBuzz();
*/

// --OR, AS A FOR LOOP --
/*
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
}
*/

/* var numberOfBottles = 99;
while (numberOfBottles >= 1) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    } else if (numberOfBottles > 1) {
        bottleWord = "bottles";
    } else {
        console.log('No more bottles of beer on the wall');
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
*/

/*function fibonacciGenerator (n) {
    var output = [];
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
             output.push(output[output.length - 2] + output[output.length - 1]);
        }

    }

    return output;

}

output = fibonacciGenerator(10);
console.log(output);
*/

//BMI challenge 2 -- objects, properties and methods

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass:75,
    height: 1.8,
    johnBmi: function() {
        this.bmi = Math.floor(this.mass / (this.height * this.height));
        return this.bmi;
    }
};

console.log(john);
var mark = {
    firstName: 'Mark',
    lastName: 'Murray',
    mass: 60,
    height: 1.5,
    markBmi: function() {
        this.bmi = Math.floor(this.mass / (this.height * this.height));
        return this.bmi;
    }
};

console.log(mark);

if (john.johnBmi() > mark.markBmi()) {
    console.log('John Smith has the higher BMI of ' + john.johnBmi());
} else {
    console.log('Mark Murray has the higher BMI of ' + mark.markBmi());
}
*/

// ---to capitalise given names and lowercase every other letter---

/*
var name = prompt('what is your name?')
name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
console.log(`Hello ${name}!`);
*/

// ----codecademy iterators challenge---

/*let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
let storyWords = story.split(' ');
console.log(storyWords.length);
let betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
});
console.log(betterWords);
*/

/*let artistes = ['modenine', 'tuface', 'wizkid', 'tiwa', 'davido'];

artistes.forEach(artiste=>{
    console.log(artiste + ' is a popular Nigerian artiste.');
});

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

    for (let i = 0; i < coolStuff.length; i++){
        for (let j = 0; j < myStuff.length; j++) {
            if (coolStuff[i] === myStuff[j]) {
                console.log(coolStuff[i]);
            }
        }
    }

    */

// to find the maximum value in a list of values

/*
function findMax() {
    var max = -Infinity;
    for ( var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
 var x = findMax(1, 123, 500, 115, 44, 88);
console.log(x);
*/

// to sum up all values in a list

/*function sumAll (){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

var x = sumAll(1, 12, 26, 13);
console.log(x);
*/

// create a factorial function 
/*
function factorial(n){
  if(n===0||n===1){
    return 1;
  }
  return n*factorial(n-1);
 }

console.log(factorial(6));
*/

/* Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

const subLength = (str, char) => {
  let charCount = 0;
  let len = -1;

  for (let i=0; i<str.length; i++) {
    if (str[i] == char) {
      charCount++;
      if (charCount > 2) {
        return 0;
      }
      if (len == -1) {
        len = i;
      } else {
        len = i - len + 1
      }
    }
  }
  if (charCount < 2) {
    return 0;
  }

  return len;
};
*/


/*Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
*/

// examples
// groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

// groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
/*const groceries = list => {
    let listString = ''

    for (let i=0; i<list.length; i++) {
      listString += list[i].item;
      if (i < list.length - 2) {
        listString += ', ';
      } else if (i == list.length - 2){
        listString += ' and ';
      }
    }

    return listString;
  }
  */
//  Classes and Inheritance
/*
  class Fairview {
      constructor(name) {
          this._name = name;
          this._gender = 'male';
      }

      get name() {
          return this._name;
      }
      
      get gender() {
          return this._gender;
      }
  }

  class Housemate extends Fairview {
      constructor(name, origin) {
        super(name);
        this._origin = origin;
      }

      get origin(){
        return this._origin;
      }
  }

  let olu = new Housemate('Olu', 'Nigeria');
  console.log(olu.name)

  // parent class and child classes example

  class Media {
  constructor (title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title () {
    return this._title;
  }
  get isCheckedOut () {
    return this._isCheckedOut;
  }
  get ratings () {
    return this._ratings;
  }
  set isCheckedOut (checkedOut) {
    this._isCheckedOut = checkedOut;
  }
  toggleCheckOutStatus () {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating () {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
  return ratingsSum / this.ratings.length;
  }
  addRating (rate) {
    this.ratings.push(rate);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author () {
    return this._author;
  }
  get pages () {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director () {
    return this._director;
  }
  get runtime () {
    return this._runTime;
  }
}
const historyOfEverything = new Book ('Bill Bryson', 'A Short History Of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie ('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


class CD extends Media {
  constructor(title, artiste, songs) {
    super(title);
    this._artiste = artiste;
    this._songs = songs;
  }
  get artiste () {
    return this._artiste;
  }
  get songs () {
    return this._songs;
  }
  addSongs(song){
    this._songs.push(song);
  }
  shuffle() {
    let shuffledSongs = Math.floor(Math.random() * this._songs.length);
     return this._songs[shuffledSongs];
  }
}

const deuces = new CD('Deuces', 'Chris Brown', ['Deuces', 'Kisses', 'Dont judge me', 'Loyal', 'Forever']);
deuces.addRating(4);
console.log(deuces);
console.log(deuces.shuffle());
console.log(deuces.songs.length)
deuces.addSongs('Kiss Kiss');
console.log(deuces.songs.length);
console.log(deuces.shuffle());
*/
