const colorsArr = ["rgb(22, 27, 34)", "rgb(99, 28, 3)", "rgb(189, 86, 29)", "rgb(250, 122, 24)", "rgb(253, 223, 104)"]

themeContributionGraph(colorsArr)
themeActivityOverview(colorsArr)

function themeActivityOverview(colorArr){
	const style =document.querySelector('.js-highlight-blob').style
	const color = colorArr[colorArr.length-1]
	style.fill = color
	style.stroke = color
}

function themeContributionGraph(colorArr){
	const style = document.querySelector(':root').style;
	
	colorArr.forEach((color, i)=>{
		style.setProperty(`--color-calendar-graph-day-L${i}-bg`, color)
	})
}
