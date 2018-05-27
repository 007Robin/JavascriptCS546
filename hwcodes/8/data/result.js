const validInput = (str) =>{
    if (typeof(str) !== "string"){
        throw "Must provide a string";
    }
    if (str.length === 0){
        throw "Must provide a non-empty string";
    }
};

const lowerCase = (str) =>{
    return str.toLowerCase();
};

const filter = (str) =>{
    return str.replace(/[\W_]+/g, ""); 
};

const IsPalindromes = (str) =>{
    if (str.length === 0){
        throw "Input string should contain at least one alphanumeric character.";
    }
    let i = 0, j = str.length - 1;
    while (i < j){
        if (str[i] != str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
};
    
let exportedMethods = {      
    checkpalindrome(text) {    
        validInput(text);
        let resultStr = lowerCase(text);
        resultStr = filter(resultStr);
        const result = IsPalindromes(resultStr);
        return result; 
    
    }
};
module.exports = exportedMethods;

