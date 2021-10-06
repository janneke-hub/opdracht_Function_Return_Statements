const hunderd = function(number1, number2){
    const sum = number1 + number2;
    if (sum >100) {
        return sum
    }
    return 'false';
}

const result = hunderd(45, 56);
console.log(result);


const bouncerBot = function(maxPeople, actualPeople, age){
    if (age < 18) return "this is a club for adults";
    if (actualPeople >= maxPeople)
        return "it's too busy now, come back later";
    return "come in";
}

console.log(bouncerBot(250, 122, 21));


const calculateAverage = function(number1, number2, number3){
    const total = number1 + number2 + number3;
    const average = total / 3;
    return average;
};

console.log(calculateAverage(251, 160, 550));


