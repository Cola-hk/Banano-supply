Chart.Legend.prototype.afterFit = function() {
    this.height = this.height + 20;
};

//Fetch
fetch('https://api.creeper.banano.cc/supply')
.then(response => response.json())
.then(data => {
let rawCirculating = data['circulating'];
let rawUncirculating = data['uncirculating'];
let rawBurned = data['burned']

var Circulating = Math.round(rawCirculating);
var Uncirculating = Math.round(rawUncirculating);
var Burned = Math.round(rawBurned);

let array2 = new Array(Circulating, Uncirculating, Burned);
console.log(array2)
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Burned', 'Circulating', 'Uncirculating - Team Funds'],
        datasets: [{
            label: '# of Banano',
            data: (array2),
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
            ],
            borderWidth: 4
        }]
    },
}) 
});
