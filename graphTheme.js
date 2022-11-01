function generateQuerySelector(num){
	return document.querySelector(`.ContributionCalendar-day[data-level="${num}"]`)
}

const level1 = generateQuerySelector(1)
const level2 = generateQuerySelector(2)
const level3 = generateQuerySelector(3)
const level4 = generateQuerySelector(4)
