
ar = JSON.parse(sessionStorage.getItem("ar"));
var inp1val = sessionStorage.getItem('inp1val',inp1val)
var inp2val = sessionStorage.getItem('inp2val',inp2val)
var inp3val = sessionStorage.getItem('inp3val',inp3val)
var inp4val = sessionStorage.getItem('inp4val',inp4val)
var inp5val = sessionStorage.getItem('inp5val',inp5val)
var txt1val = sessionStorage.getItem('txt1val',txt1val)

var Balance = sessionStorage.getItem('Balance',Balance)

console.log(inp5val)

var len = ar.length

var amount = 34 - len

for (let i = 0; i<amount; i++){
    ar.push('')
}
document.getElementById('fullname').innerHTML = inp1val
document.getElementById('name1').innerHTML = inp1val
document.getElementById('name2').innerHTML = inp1val
document.getElementById('pan').innerHTML = inp2val
document.getElementById('pan2').innerHTML = inp2val
document.getElementById('add').innerHTML = inp3val
document.getElementById('place').innerHTML = inp4val
document.getElementById('pin').innerHTML = inp5val
document.getElementById('balance').innerHTML = Balance
document.getElementById('total').innerHTML = txt1val

document.getElementById('one').innerHTML = ('  '+ ar[0])
document.getElementById('br').innerHTML = ar[1]
document.getElementById('two').innerHTML = ar[2]
document.getElementById('three').innerHTML = ar[3]
document.getElementById('four').innerHTML = ar[4]
document.getElementById('five').innerHTML = ar[5]
document.getElementById('six').innerHTML = ar[6]
document.getElementById('seven').innerHTML = ar[7]
document.getElementById('eight').innerHTML = ar[8]
document.getElementById('nine').innerHTML = ar[9]
document.getElementById('ten').innerHTML = ar[10]
document.getElementById('eleven').innerHTML = ar[11]
document.getElementById('twelve').innerHTML = ar[12]
document.getElementById('thirteen').innerHTML = ar[13]
document.getElementById('fourteen').innerHTML = ar[14]
document.getElementById('fifteen').innerHTML = ar[15]
document.getElementById('sixteen').innerHTML = ar[16]
document.getElementById('seventeen').innerHTML = ar[17]
document.getElementById('eighteen').innerHTML = ar[18]
document.getElementById('nineteen').innerHTML = ar[19]
document.getElementById('twenty').innerHTML = ar[20]
document.getElementById('twentyone').innerHTML = ar[21]
document.getElementById('twentytwo').innerHTML = ar[22]
document.getElementById('twentythree').innerHTML = ar[23]
document.getElementById('twentyfour').innerHTML = ar[24]
document.getElementById('twentyfive').innerHTML = ar[25]
document.getElementById('twentysix').innerHTML = ar[26]
document.getElementById('twentyseven').innerHTML = ar[27]
document.getElementById('twentyeight').innerHTML = ar[28]
document.getElementById('twentynine').innerHTML = ar[29]
document.getElementById('thirty').innerHTML = ar[30]
document.getElementById('thirtyone').innerHTML = ar[31]
document.getElementById('thirtytwo').innerHTML = ar[32]
document.getElementById('thirtythree').innerHTML = ar[33]


function expor() {
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("table"));
}

