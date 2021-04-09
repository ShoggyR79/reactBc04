var numJewelsInStones = function (jewels, stones) {
    let output = 0;
    let stoneArr = stones.split();
    for (let stone of stoneArr) {
        if (jewels.includes(stone)) {
            output++;
        }
    }
    return output;
};

numJewelsInStones("aA", "aAAbbbbb");

