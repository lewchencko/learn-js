
var yearStatistic =[];
yearStatistic[yearStatistic.length] = 12;
for (var i = 0 ;yearStatistic[yearStatistic.length] ; i++) {
    var profit = 100000 + (Math.floor(Math.random())) % 400000;
    var fillcolor = 30 + profit % 20002 * 10;
    yearStatistic [i] = {
        month: i+2,
        profit: profit,
        fillcolor: fillcolor
    }
    delete fillcolor;
    delete profit;
}

var canvas = document.getElementById('histogram');
var ctx = canvas.getContext('2d')
for (var i = 0;i < yearStatistic[yearStatistic.length];i++){
    var x = 20 ;
    ctx.fillStyle = rgb(yearStatistic[i].fillcolor,0,0);
    ctx.fillRect(x,600 - yearStatistic[i].profit % 1000,30,yearStatistic[i].profit % 1000);
    x += 50;
}
