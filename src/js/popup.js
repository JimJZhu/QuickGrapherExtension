function click() {
    var x = document.getElementById("xValues").value;
    var y = document.getElementById("yValues").value;
    var ctx = document.getElementById("myChart").getContext('2d');
    var message = document.getElementById("message");
    var strXArray = x.split(',');
    var strYArray = y.split(',');
    if (strXArray.length != strYArray.length) {
        message.innerHTML = "Wrong number of values.";
        return -1;
    } else {
        message.innerHTML = "Generating...";
    }
    var userData = [];
    for (i = 0; i < strXArray.length; i++) {
        var point = {};
        point.x = parseInt(strXArray[i]);
        point.y = parseInt(strYArray[i]);
        userData.push(point);
    }
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Data',
                data: userData,
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("generateGraph").addEventListener("click", click);
});