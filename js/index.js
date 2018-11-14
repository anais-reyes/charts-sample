var barTarget = 5;
var barChartOptions = {
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
		hover: {
			mode: 'nearest',
		},
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

var barCanvas = document.getElementById('bar-canvas').getContext('2d');
var barChart = new Chart(barCanvas, barChartOptions);
var barChartData = barChart.data.datasets[1];

function updateBarChart() {
	var barColors = [];
	barChartData.data = [];

	for (var i = 0; i < 4; i++) {
		var value = Math.floor(Math.random() * 10 + 1);
		barChartData.data.push(value);

		switch (true) {
			case value < barTarget - 1:
				barColors.push('#cc0429');
				break;
			case value > barTarget + 1:
				barColors.push('#97cf57');
				break;
			default:
				barColors.push('#ffb700');
				break;
		}
	}

	barChartData.backgroundColor = barColors;

	barChart.update();
}

var lineTarget = 5;
var dataIndex = null;

var lineChartOptions = {
	type: 'line',
	data: {
		labels: ['2016', '2017', '2018', '2019'],
		datasets: [
			{
				data: [],
				fill: false,
				lineTension: 0,
				borderWidth: 2,
				pointRadius: 1.5,
				backgroundColor: '#007aff',
				borderColor: '#007aff',
			},
			{
				type: 'line',
				data: [lineTarget, lineTarget, lineTarget, lineTarget],
				fill: false,
				borderWidth: 2,
				pointRadius: [2, 0, 0, 2],
				pointHoverRadius: [2, 0, 0, 2],
				pointHoverBackgroundColor: '#97cf57',
				pointHoverBorderColor: '#97cf57',
				borderColor: '#97cf57',
				backgroundColor: '#97cf57',
			},
		],
	},
	options: {
		hover: {
			mode: 'nearest',
		},
		onClick: function(event, item) {
			console.log(event);
			if (item.length !== 0) {
				var index = item[0]['_index'];
				console.log(chart.data.datasets[0].data[index]);
			}
		},
		/*
		onHover: function(event, item) {
			console.log(event, 'event');
			console.log(item, 'item');
		},*/

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
						max: 11,
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						drawBorder: false,
						display: true,
					},
				},
			],
		},
		layout: {},
	},
};

var canvas = document.getElementById('line-canvas').getContext('2d');
var chart = new Chart(canvas, lineChartOptions);
var chartData = chart.data.datasets[0];

function updateChart(newDataIndex) {
	if (dataIndex !== newDataIndex && newDataIndex <= 8 && newDataIndex >= 0) {
		chartData.data = [];
		chartLabels = [];
		dataIndex = newDataIndex;
		for (var i = dataIndex; i < dataIndex + 4; i++) {
			chartData.data.push(dataSet[i].value);
			chartLabels.push(dataSet[i].quarter);
		}

		chart.data.labels = chartLabels;
		chart.update();
	}
}

//dataSet
var dataSet = [
	{
		value: 8,
		quarter: 'Q1\n2017',
	},
	{
		value: 5,
		quarter: 'Q2\n2017',
	},
	{
		value: 3,
		quarter: 'Q3\n2017',
	},
	{
		value: 7,
		quarter: 'Q4\n2017',
	},
	{
		value: 10,
		quarter: 'Q1\n2018',
	},
	{
		value: 5,
		quarter: 'Q2\n2018',
	},
	{
		value: 6,
		quarter: 'Q3\n2018',
	},
	{
		value: 4,
		quarter: 'Q4\n2018',
	},
	{
		value: 8,
		quarter: 'Q1\n2019',
	},
	{
		value: 7,
		quarter: 'Q2\n2019',
	},
	{
		value: 9,
		quarter: 'Q3\n2019',
	},
	{
		value: 9,
		quarter: 'Q4\n2019',
	},
];

// events
document.getElementById('randomise-data').addEventListener('click', function() {
	updateBarChart();
});

document.getElementById('farLeftButton').addEventListener('click', function() {
	updateChart(0);
});

document.getElementById('leftButton').addEventListener('click', function() {
	updateChart(dataIndex - 1);
});

document.getElementById('rightButton').addEventListener('click', function() {
	updateChart(dataIndex + 1);
});

document.getElementById('farRightButton').addEventListener('click', function() {
	updateChart(8);
});

// onload function
window.onload = function() {
	updateBarChart();
	updateChart(4);
};
