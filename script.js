function replaceAll() {
    let str = document.getElementById("inputText").value;

    let strResult = str.replaceAll(" ", "");
    document.getElementById("textResult").innerHTML = strResult;
}

function countCharacters() {
    let str = document.getElementById("inputLetter").value;
    let trimmedStr = str.trim();
    let charCount = trimmedStr.length;
            
    document.getElementById("cntResult").innerHTML = charCount;
}

/*

Author: Raphael Miguel P. Dumdum
Date Created: December 12, 2025

*/

