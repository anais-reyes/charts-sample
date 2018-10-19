var target = 5;
var chartOptions = {
	type: 'bar',
	data: {
		labels: ['2016', '2017', '2018', '2019'],
		datasets: [
			{
				type: 'line',
				data: [5, 5, 5, 5],
				fill: false,
				borderColor: '#007aff',
				backgroundColor: '#007aff',
				pointRadius: [3, 0, 0, 3],
			},
			{
				data: [],
			},
		],
	},
	options: {
		tooltips: {
			enabled: false,
		},
		legend: {
			display: false,
		},
		scales: {
			yAxes: [
				{
					gridLines: {
						drawBorder: false,
						display: false,
					},
					ticks: {
						display: false,
						beginAtZero: true,
						max: 10,
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						drawBorder: false,
						display: false,
					},
				},
			],
		},
		layout: {},
	},
};

var canvas = document.getElementById('container-canvas').getContext('2d');
var chart = new Chart(canvas, chartOptions);
var barChartData = chart.data.datasets[1];

function updateChart() {
	var barColors = [];
	barChartData.data = [];

	for (var i = 0; i < 4; i++) {
		var value = Math.floor(Math.random() * 10 + 1);
		barChartData.data.push(value);

		switch (true) {
			case value < target - 1:
				barColors.push('#cc0429');
				break;
			case value > target + 1:
				barColors.push('#97cf57');
				break;
			default:
				barColors.push('#ffb700');
				break;
		}
	}

	barChartData.backgroundColor = barColors;

	chart.update();
}

document.getElementById('randomise-data').addEventListener('click', function() {
	updateChart();
});

window.onload = updateChart();
