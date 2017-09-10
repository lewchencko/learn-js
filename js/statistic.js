var month = ['January' ,'February' ,'March','April','May','June','July','August','September','October','November','December'];
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
var yearStatistic =[];
for (var i = 0;i < 12; i++) {
    var profit = Math.floor(getRandomArbitrary(100000,500000));
    var fillcolor = Math.floor(30 + (profit- 100000) / 20000 * 10);
    yearStatistic [i] = {
        profit: profit,
        fillcolor: fillcolor
    }
    delete fillcolor;
    delete profit;
}
var x = 20 ;
var canvas = document.getElementById('histogram');
var ctx = canvas.getContext('2d');
for (var i = 0;i < yearStatistic.length;i++){
    var y = 1000 - yearStatistic[i].profit % 1000;
    ctx.fillStyle = 'rgb(' + yearStatistic[i].fillcolor + ',0,0)';
    ctx.fillRect(x,y,30,yearStatistic[i].profit % 1000);
    x += 50;
    console.log(yearStatistic)
}
