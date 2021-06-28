// простая функция для склонения количества на русском языке 
// на входе - число и масссив из трех вариантов подписей:
// в единственном числе (дерево), множественное от двух до четырех (дерева) и общее множественное (деревьев) 

function declension(d, names) {
	if((d%100 > 10) && (d%100 < 15)) {
		return (d + " "+ names[2]);
	} else {
		switch(d%10){
			case 1:
				return d + " "+ names[0];
				break;
			case 2:
			case 3:
			case 4:
				return d + " "+ names[1];
				break;
			default:
				return d + " "+ names[2]
				break;
		}		
	}
}
//проверка 
alert(declension(Math.ceil(Math.random()*1000), ["дерево","дерева","деревьев"]));
