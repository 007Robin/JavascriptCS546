function simplify(text) {
    //Convert the text to lowercase
    //Remove all characters except for letters and whitespace characters
    var s = text.toString().toLowerCase().replace(/[^a-zA-Z\s]/g,'');
    //Convert all white space and duplicate spaces to simple spaces
    //Trim the whitespace off the start and end of the text
    s = s.replace(/\s\s+/g, ' ').replace(/[\n\r\t]/g, ' ');
    s = s.replace(/^\s+|\s+$/gm,'');
    return s;
    //console.log(s);
}

function createMetrics(text) {

    //totalLetters: total number of letter characters in the simplified text,
    //totalWords: total number of words in the simplified text,
    //uniqueWords: total number of unique words that appear in the simplified text,
    //longWords: number of words in the text that are 6 or more letters long; this is a total count of individual words, not unique words,
    //averageWordLength: the average number of letters in a word in the text; this is counting the individual words, not unique words,
    //wordOccurrences: a dictionary of each word and how many times each word occurs in the text.
    text = simplify(text);
    var totalLetters = 0, totalWords = 0, uniqueWords = 0, longWords = 0, averageWordLength = 0;
    var wordOccurrences = new Map();
    //put string into array
    var arr = text.split(" ");  
    
    for(var i = 0; i < arr.length; ++i) {
        if(arr[i].length >= 6) 
            longWords++;
        if(wordOccurrences.has(arr[i])) {
            wordOccurrences.set(arr[i], wordOccurrences.get(arr[i]) + 1);
        }
        else{
            wordOccurrences.set(arr[i], 1);
        }
    }
    
    totalLetters = text.length - arr.length + 1;
    totalWords = arr.length;
    uniqueWords = wordOccurrences.size;
    averageWordLength = totalLetters / totalWords;
    /*
    console.log(totalLetters);
    console.log(totalWords);
    console.log(uniqueWords);
    console.log(longWords);
    console.log(averageWordLength);
    console.log(wordOccurrences);
    */
    var mapObj = {};
    for(var x of wordOccurrences) {
        mapObj[x[0]] = x[1];
    };
    var result = {
        "totalLetters" : totalLetters,
        "totalWords" : totalWords,
        "uniqueWords" :uniqueWords,
        "longWords" : longWords,
        "averageWordLength" : averageWordLength,
        "wordOccurrences" : mapObj
    };
    //console.log(result);
    return result;
}
//simplify("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23");
//createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23");

module.exports = {simplify, createMetrics}
