const colorsArr = ["rgb(22, 27, 34)", "rgb(99, 28, 3)", "rgb(189, 86, 29)", "rgb(250, 122, 24)", "rgb(253, 223, 104)"]
changeColors(colorsArr)


function changeColors(colorArr){
	const style = document.querySelector(':root').style;
	
	colorArr.forEach((color, i)=>{
		style.setProperty(`--color-calendar-graph-day-L${i}-bg`, color)
	})
}
