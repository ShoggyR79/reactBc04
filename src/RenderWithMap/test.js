/*
A two dimensional array of strings is given below. 
Sentences can be made by putting together one string from each dimension.
Write a program that outputs all possible sentences that can be made in this way.
The program should work regardless of how many strings are contained in each dimension (both the 1st and the 2nd dimension).

    var wordsList = [
        [ "さるが", "とりが", "いぬが" ,"桃太郎が"],
        [ "山で", "川で", "鬼ヶ島で"],
        [ "おじいさんと", "おばあさんと", "金太郎と" ,"浦島太郎と"],
        [ "洗濯をした", "芝刈りをした", "鬼退治をした" ]
    ];

    ［Sample Output］
        さるが山でおじいさんと洗濯をした
        さるが山でおじいさんと芝刈りをした
        さるが山でおじいさんと鬼退治をした
        .
        .
*/

console.log("Welcome to Goalist!");

var wordsList = [
    ["さるが", "とりが", "いぬが", "桃太郎が"],
    ["山で", "川で", "鬼ヶ島で"],
    ["おじいさんと", "おばあさんと", "金太郎と", "浦島太郎と"],
    ["洗濯をした", "芝刈りをした", "鬼退治をした"]
];

let createSentences = (arr) => {
    if (arr.length == 0) {
        console.log("empty Array passed");
    }
    else {
        let output = printSentences(arr);
        for (let i = 0; i < output.length; i++){
            console.log(output[i]);
        }
    }
}

let printSentences = (arr, n = 0, result = [], cur = "") => {
    if (n === arr.length) {
        result.push(cur);
    }
    for (let i = 0; i < arr[n].length; i++) {
        printSentences(arr, n++, result, cur += arr[n][i]);
    }


}




createSentences(wordsList);

