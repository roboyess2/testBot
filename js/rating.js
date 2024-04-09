let ratingProgress = document.getElementById('ratingProgress')
ratingProgress.disabled = true;
const leagueName = document.getElementById('leagueName');
console.log(leagueName)

const bronze = 3000;
const silver = 100_000;
const gold = 1_000_000;
const platina = 2_000_000;
const dimond = 10_000_000;

ratingProgress.value = scoreCounter.dataset.score

leagueName.addEventListener('', () => {
    checkLeague(scoreCounter.dataset.score)
})

const checkLeagueButton = document.getElementById("checkLeague");

function checkLeague(score) {
    if (score <= bronze) {
        leagueName.textContent = 'Bronze'
        ratingProgress.max = bronze
    } else if (score <= silver) {
        leagueName.textContent = 'Silver'
        ratingProgress.max = silver;
    } else if (score <= gold) {
        leagueName.textContent = 'Gold'
        ratingProgress.max = gold;
    } else if (score <= platina) {
        leagueName.textContent = 'Platina'
        ratingProgress.max = platina;
    } else {
        leagueName.textContent = 'Dimond'
        ratingProgress.max = dimond;
    }
}

checkLeague(scoreCounter.dataset.score)

ratingProgress.max = bronze;
console.log(ratingProgress.max)




console.log(scoreCounter.dataset.score)