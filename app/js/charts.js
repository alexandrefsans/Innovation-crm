new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#619f95", "#619f95","#619f95","#619f95","#619f95"],
          data: [5,15,25,35,10]
        }
      ]
    },

    options: {
      legend: { display: false },
      title: {
        display: true,
        position: 'bottom'
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
                  display: false
              }
          }],
          yAxes: [{
              ticks: {
                  display: false
              },
              gridLines: {
                display: false
              }
          }]
      },
      tooltips: {
  callbacks: {
    label: function(tooltipItem, data) {
      return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
    }
  }
}
    }
});