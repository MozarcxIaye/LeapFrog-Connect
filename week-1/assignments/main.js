
const scoreInput = document.getElementById("score-input")
const calcBtn = document.getElementById("calc-btn")
const result = document.getElementById("result")
const summary = document.getElementById("summary")


function gradeFromScore(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F"
}

function renderResult(el, text) {
    el.textContent = `Your grade is: ${gradeFromScore(text)}`
}

calcBtn.addEventListener('click', () => {
    const value = Number(scoreInput.value)
    console.log(value)
    renderResult(result, value)
})

const sampleScores = [55, 68, 72, 88, 93]

// sampleScores.forEach((el) => {
//     console.log(gradeFromScore(el))
// })

const grades = sampleScores.map((el) => {
    return gradeFromScore(el)
})
// console.log(`grades: ${grades}`)
summary.textContent = grades

// const pass = sampleScores.find(el => el > 60)
// console.log(`pass ${pass}`)





