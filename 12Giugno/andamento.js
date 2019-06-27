
window.onload= function() {

Plotly.d3.csv("maschifemmine.CSV", function(error, data){
    if(error){
        console.error(error);

    }

    let anni=[];
    let laureatiMaschi=[];
    let laureateFemmine=[];
    let totali=[];

    for (let i = 0; i < data.length; i=i+1) {
        let row = data[i];
        anni.push(row.ANNO);
        laureateFemmine.push(row.FEMMINE);
        laureatiMaschi.push(row.MASCHI);
        totali.push(parseInt(row.FEMMINE)+parseInt(row.MASCHI));

    }
    console.log(totali);

    var trace1 = {
        x: anni,
        y: laureatiMaschi,
        mode: 'lines+markers',
        type: 'scatter',
        name: 'Laureati',
        marker: {
            color: 'rgba(40,52,196,0.95)',
            line: {
                color: 'rgba(156, 165, 196, 1.0)',
                width: 1,
            },
            symbol: 'circle',
            size: 16
        }

    };

    var trace2 = {
        x: anni,
        y: laureateFemmine,
        mode: 'lines+markers',
        type: 'scatter',
        name: 'Laureate',
        marker: {
            color: 'rgba(204,64,126,0.95)',
            line: {
                color: 'rgba(217, 217, 217, 1.0)',
                width: 1,
            },
            symbol: 'circle',
            size: 16
        }
    };

    var trace3 = {
        x: anni,
        y: totali,
        mode: 'lines+markers',
        type: 'scatter',
        name: 'Totali',
        marker: {
            color: 'rgba(000, 193, 150,0.95)',
            line: {
                color: 'rgba(000, 193, 150,1.0)',
                width: 1,
            },
            symbol: 'circle',
            size: 16
        }
    };

    var data = [trace1, trace2, trace3];

    let layout = {
        title:'Evoluzione: i laureati negli ultimi 20 anni',
        xaxis: {
            range: [ 1998.5, 2018.5],
            autotick:false,
            tick:1

        },
        yaxis: {
            autotick:true,
            marginLeft: 50,
            tick:10000


        },
        height:800

    };

    Plotly.newPlot('grafico2', data, layout);
});
};