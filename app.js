// Sum of array of numbers
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr)  {
    let sum = 0;

    // iterate over each value in the array
    // use each number in the sum
    arr.forEach((number) => {
        sum += number;
    });

    return sum;
}




console.log(arraySum(numbers));
console.log(arraySum([1, 2, 3, 4, 5]));

// Exercise 2: Book
let favBook = {};

favBook.title = "The Bible";
favBook.author = "Compilation";
favBook.pageCount = "1200";
favBook.readCount = 1;

console.log(favBook);

function info () {
    return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).`;
};

favBook.info = info;

console.log(favBook.info());

let favBook2 = {
    title: "Amityville Horror",
    author: "Jay Anson",
    pageCount: 256,
    readCount: 1,
    info,
};

console.log(favBook2.info());

// Exercise 3: Reverse every word in a sentence
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
let result = [];
    // Identify the words based on the spaces
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++){
    let letters = words[i].split("");
    letters.reverse();
    let reverseWords = letters.join("");
    result.push(reverseWords); 
}

return result.join(" ");
}

console.log(reverseWords(sentence));
console.log(reverseWords("My name is Sean"));
console.log(reverseWords("What is for lunch?"));

// Exercise 4:  CSV Conversion

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
    // Determine headers from the first row/line of the data
    // Split the header string to an array of headers
    let headers = data.slice(0, data.indexOf("\n")).split(","); // ["name", "age" ]

    // Determine the row data
    let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");

    const customArr= valuesList.map((row) => {
        // Separate the values into array values
        let values = row.split(",");
        let obj = {}
        
        values.forEach((col, idx) => {
            if(idx < headers.length)    {
                obj[headers[idx]] = col;
            } else {
                obj[`misc ${idx}`] = col;
            }
        });

        return obj;
    });

    return customArr; 
}

console.log(csvConverter(csvData));