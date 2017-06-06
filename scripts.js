      google.charts.load('current', {'packages':['line', 'corechart']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var button = document.getElementById('change-chart');
      var chartDiv = document.getElementById('chart_div');

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Month');
      data.addColumn('number', "Курс номинала");
      data.addColumn('number', "КПД по картам-людям");
      data.addColumn('number', "Сколько монет в сутки покупают");
      data.addColumn('number', "Сколько стали оплачивать покупки Номиналами");

      data.addRows([
        [new Date(2017, 0),  1,   1 , 1 , 1 ],
        [new Date(2017, 1),  4,   10, 14, 19],
        [new Date(2017, 2),  6,   14, 18, 28],
        [new Date(2017, 3),  7,   19, 13, 33],
        [new Date(2017, 4),  11,  21, 21, 41],
        [new Date(2017, 5),  16,  31, 31, 51],
        [new Date(2017, 6),  17,  41, 55, 65],
        [new Date(2017, 7),  19,  51, 59, 79],
        [new Date(2017, 8),  33,  61, 71, 81],
        [new Date(2017, 9),  44,  71, 81, 91],
        [new Date(2017, 10), 45,  81, 87, 106],
        [new Date(2017, 11), 55,  91, 91, 120]
      ]);

      var materialOptions = {
        chart: {
          title: 'Общая статистика'
        },
        width: 900,
        height: 500,
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: {axis: 'Номинал'}
        },
        axes: {
          // Adds labels to each axis; they don't have to match the axis names.
          y: {
            Номинал: {label: 'Номинал'}
          }
        }
      };

      var classicOptions = {
        title: 'Статистические данные по номиналу',
        width: 900,
        height: 500,
        // Gives each series an axis that matches the vAxes number below.
        series: {
          0: {targetAxisIndex: 0}
        },
        vAxes: {
          // Adds titles to each axis.
          0: {title: 'Номинал'}
        },
        hAxis: {
          ticks: [new Date(2017, 0), new Date(2017, 1, 15), new Date(2017, 2), new Date(2017, 3),
                  new Date(2017, 4),  new Date(2017, 5), new Date(2017, 6), new Date(2017, 7),
                  new Date(2017, 8), new Date(2017, 9), new Date(2017, 10), new Date(2017, 11)
                 ]
        },
        vAxis: {
          viewWindow: {
            max: 30
          }
        }
      };

      function drawMaterialChart() {
        var materialChart = new google.charts.Line(chartDiv);
        materialChart.draw(data, materialOptions);
        button.innerText = 'Change to Classic';
        button.onclick = drawClassicChart;
      }

      function drawClassicChart() {
        var classicChart = new google.visualization.LineChart(chartDiv);
        classicChart.draw(data, classicOptions);
        button.innerText = 'Change to Material';
        button.onclick = drawMaterialChart;
      }

      drawMaterialChart();

    }

    
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawVisualization);


  function drawVisualization() {
      // Some raw data (not necessarily accurate)
      var data = google.visualization.arrayToDataTable([
       ['Month', 'Курс номинала', 'КПД по картам/людям', 'Сколько монет в сутки покупают', 'Сколько стали оплачивать покупки Номиналами', 'Сколько карт подарили', 'Сколько всего выпущено монет'],
       ['2004/05',  165,      938,         522,             998,           450,      614.6],
       ['2005/06',  135,      1120,        599,             1268,          288,      682],
       ['2006/07',  157,      1167,        587,             807,           397,      623],
       ['2007/08',  139,      1110,        615,             968,           215,      609.4],
       ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    ]);

  var options = {
    title : 'Статистика по номиналу',
    vAxis: {title: 'Величина'},
    hAxis: {title: 'Месяц'},
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}


 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawCharts);

      function drawCharts() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Сколько стали покупать за Номинал',      150],
          ['Кол-во людей активировавших карты ',  250]
        ]);

        var options = {
          title: 'КПД по картам/людям'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawCharts2);

      function drawCharts2() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Сколько всего выпущено монет',      1250],
          ['Сколько монет в сутки покупают ',  250],
          ['На какую сумму в долларах покупают ',  550],
          ['Курс номинала ',  150]
        ]);

        var options = {
          title: 'Статистические данные по номиналу'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

        chart.draw(data, options);
      }
