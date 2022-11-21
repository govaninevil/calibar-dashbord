$(document).ready(function() {
        $(".width-btn").on("click", function(){
            $(".calibarapqr").toggleClass("mobile");
        });


        $(".mobile-nav").on("click", function(){
            $("body").toggleClass("nav-small");
        });
});

// google.load("visualization", "1", {packages:["corechart"]});
// google.setOnLoadCallback(drawChart1);
// function drawChart1() {
//   var data = google.visualization.arrayToDataTable([
//     ['Year', 'Sales', 'Expenses'],
//     ['Jan',  60,        40],
//     ['Fab',  70,        60],
//     ['Mar',  90,        110],
//     ['Apr',  130,       110],
//     ['May',  90,        85],
//     ['Jun',  115,       100],
//     ['Jul',  100,       80],
//     ['Aug',  80,        110],
//     ['sep',  60,        110],
//     ['Oct',  60,        80],
//     ['Nov',  90,        70],
//     ['Dec',  120,       100]

//   ]);

//   var options = {
//     title: 'Company Performance',
//     hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
//  };

// var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
//   chart.draw(data, options);
// }

// $(window).resize(function(){
//   drawChart1();
// });


// var data = {
//   // A labels array that can contain any sort of values
//   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
//   // Our series array that contains series objects or in this case series data arrays
//   series: [
//     [5, 2, 4, 2, 0]
//   ]
// };

// // Create a new line chart object where as first parameter we pass in a selector
// // that is resolving to our chart container element. The Second parameter
// // is the actual data object.
// new Chartist.Line('.ct-chart', data);

var data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [50, 70, 30, 70, 50, 10, 30, 40, 80, 10, 60, 80],
    [30, 20, 60, 50, 40, 60, 40, 60, 70, 80, 70, 40]
  ]
};

var options = {
  seriesBarDistance: 10
};

var responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('.ct-chart', data, options, responsiveOptions);



$(function () {
          $('#datetimepicker12').datetimepicker({
              inline: true,
              sideBySide: true
          });
      });

// ----------------------------------------------------------------cal------------------------------------------------------------

