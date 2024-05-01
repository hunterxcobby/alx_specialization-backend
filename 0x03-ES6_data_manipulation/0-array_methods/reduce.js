
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// use a for loop
let sum = 0; 
for (let i = 0; i < ages.length; i++)
{
    sum += ages[i];
}

// reduce 
// reduce to also work on all other methods 

const sumAge = ages.reduce(function (total, age) {
    return total + age;
}, 0);

console.log(sumAge);
