(function() {
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
          throw "Must input at least one alphanumeric character.";
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
  
    const staticForm = document.getElementById("static-form");

    if (staticForm) {
        const testStrElement = document.getElementById("input_string");

        const errorContainer = document.getElementById("error-container");
        const errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

        const resultContainer = document.getElementById("result-container");
        const resultList = resultContainer.getElementsByClassName("attemps")[0];

        staticForm.addEventListener("submit", event =>{
            event.preventDefault();

            try {
                errorContainer.classList.add("hidden");
                errorTextElement.textContent = "";

                const testStrValue = testStrElement.value;
                validInput(testStrValue);
                let resultStr = lowerCase(testStrValue);
                resultStr = filter(resultStr);
                const resultBool = IsPalindromes(resultStr);

                if (resultBool){
                    let newEle = document.createElement("li");
                    newEle.append(testStrValue);
                    newEle.className = "is-palindrome"; 
                    resultList.appendChild(newEle);
                }
                else {
                    let newEle = document.createElement("li");
                    newEle.append(testStrValue);
                    newEle.className = "not-palindrome"; 
                    resultList.appendChild(newEle);
                }
                resultContainer.classList.remove("hidden");
            }
            catch (e){
                const message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }
})();