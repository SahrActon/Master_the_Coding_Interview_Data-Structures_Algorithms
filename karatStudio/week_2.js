"use strict";

/*
Like the previous question, suppose we have a list of clicks and corresponding urls as follows:

url_counts = ["50,google.com",
     "60,yahoo.com",
     "10,yahoo.com",
     "1,wikipedia.org",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "2,wikipedia.org",
     "1,stackoverflow.com",
     "1,google.com"]

This time, we want to write a function that takes in this input as a parameter and returns a data structure containing the total number of clicks that were recorded on each url.

Note: Use of functions like "split", "index", "indexOf" are now permitted if desired.

Sample output:

url_clicks(counts) =>
google.com           51
yahoo.com:           370
wikipedia.org        3
sports.yahoo.com     40
stackoverflow.com    1

Complexity variables:
n: the number of strings in the list
(The length of the input string has a constant upper limit.)
*/

const url_counts = [
    "50,google.com",
    "60,yahoo.com",
    "10,yahoo.com",
    "1,wikipedia.org",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "2,wikipedia.org",
    "1,stackoverflow.com",
    "1,google.com"
];

function url_clicks(arrayString){
    let websiteObjects = {};

    for(let i =0; i < arrayString.length; i++){
        let current = arrayString[i];
        let getNum = current.split(",")[0];
        let getWebsiteName = current.split(",")[1];

        websiteObjects[getWebsiteName] = getNum;

        if (websiteObjects[getWebsiteName]){

        }

    }
    console.log(websiteObjects)
}

// function getIntCount(arrayString){

//   let sum = 0
//   // Loop through counts
//   for(let i =0; i < arrayString.length; i++){
//     let current = arrayString[i];

//     let intValue = ""; // O(1)

//      for(let j =0; j < current.length; j++){
//         if (current[j] === ","){
//           break;
//         }
//         intValue = intValue + current[j];// O(1)
//      }
//      sum = sum + parseInt(intValue);
//   }
//   return sum;
// }


console.log(url_clicks(url_counts));