let students = [{
    name: "John",
    scores: [80, 90, 70]
},
{
    name: "Jane",
    scores: [67, 89, 70]
},
{
    name: "Bob",
    scores: [56, 98, 70]
}
];

const average = (scores) => {
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

// console.log(average(students[0].scores));

function grade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
// console.log(grade(90));

students.forEach((student) => {
    let averageScore = average(student.scores);
    console.log(`Student: ${student.name} | Average: ${averageScore} | Grade: ${grade(averageScore)}`);
});