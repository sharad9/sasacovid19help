
var lines =[];

function states(line) {
  var statesList = [];
  for (var i = 0;i<line.length-1;i++) {
    statesList.push(line[i][0]);
  }

  return statesList;
}

function count(line){
  list = [];
  for (var i = 0;i<line.length-1;i++) {
    list.push(parseInt(line[i][lines[0].length-1]));
  }
  return list;;
}




function vaccine_doses(line) {
 var labels = states(lines);
 var graphValue = count(lines);

 var list = [{y:0,label:""}];
 for (var i = 1;i<line.length-1;i++) {
  list[i] = { y: graphValue[i], label: labels[i] ,indexLabel:labels[i]};
}
return list;
}




function show() {

  var chart = new CanvasJS.Chart("chartContainer2", {

    animationEnabled: true,

    title:{
      text:"Indian State Wise Covid19 Vaccination"
      
    },
    axisX:{
      interval: 1,
      labelFontSize: 0,
    },
    axisY2:{
      interlacedColor: "rgba(1,77,101,.2)",
      gridColor: "rgba(1,77,101,.1)",
      title: "",
      labelAngle: -90,
      labelFontSize: 8,

    },
    data: [{
      indexLabelOrientation: "vertical",
      indexLabelFontSize: 8,
      type: "column",
      name: "companies",
      axisYType: "secondary",
      color: "#014D65",
      dataPoints:vaccine_doses(lines)
    }]
  });
  chart.render();

}

function processData(allText) {

  var record_num = 5;  
  var allTextLines = allText.split(/\r\n|\n/);



  for(var i = 0;i<allTextLines.length-1;i++){
    lines.push(allTextLines[i].split(','));

  }

  show();

}

fetch("https://data.covid19india.org/csv/latest/vaccine_doses_statewise.csv").then(res=>res.text()).then(data=>{
  processData(data);
  
  });