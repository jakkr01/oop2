const scores: number[] = [75, 85, 95, 64, 35];
const student: [number, string] = [1, "John Doe"];

console.log(`Student ID: ${student[0]}, Name: ${student[1]}`);

let total = 0;

for (let i = 0; i < scores.length; i++) {
    console.log(`Test ${i + 1} Score: ${scores[i]}`);
    total += scores[i];
}

console.log(`Total Score: ${total}`);
console.log(`Average Score: ${total / scores.length}`);