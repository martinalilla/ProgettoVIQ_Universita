window.onload = function () {
    Plotly.d3.csv("laureatiOrdinati.csv", function (error, data) {
        if (error) {
            console.error(error);
            document.getElementById("grafico").innerHTML = "Cannot load data!";
            return;
        }

        console.log(data);
        let nomeUni=[];
        let laureateFemmine=[];
        let laureatiMaschi=[];
        for (let i = 0; i < data.length; i=i+2) {
            let row = data[i];
            nomeUni.push(row.NOME_ATENEO);
            if(row.Sesso==="M") {
                laureatiMaschi.push(row.LAUREATI_TOTALE);
                row=data[i+1];
                laureateFemmine.push(row.LAUREATI_TOTALE);
            }else if(row.Sesso==="F") {
                laureateFemmine.push(row.LAUREATI_TOTALE);
                row=data[i+1];
                laureatiMaschi.push(row.LAUREATI_TOTALE);
            }
        }
        laureatiMaschi = laureatiMaschi.reverse();
        laureateFemmine = laureateFemmine.reverse();
        nomeUni = nomeUni.reverse();
        let trace1 = {
            type: 'scatter',
            x: laureatiMaschi,
            y: nomeUni,
            mode: 'markers',
            name: 'Laureati',
            marker: {
                color: 'rgba(40,52,196,0.95)',
                line: {
                    color: 'rgba(156, 165, 196, 1.0)',
                    width: 1,
                },
                symbol: 'circle',
                size: 10
            }
        };
        console.log(nomeUni.length);
        let trace2 = {
            x: laureateFemmine,
            y: nomeUni,
            mode: 'markers',
            name: 'Laureate',
            marker: {
                color: 'rgba(204,64,126,0.95)',
                line: {
                    color: 'rgba(217, 217, 217, 1.0)',
                    width: 1,
                },
                symbol: 'circle',
                size: 10
            }
        };

        let dati = [trace1, trace2];
        console.log(nomeUni);

        let layout = {
            title: 'Maschi contro femmine: confronto per singolo ateneo',
            xaxis: {
                showgrid: false,
                showline: true,
                linecolor: 'rgb(102, 102, 102)',
                titlefont: {
                    font: {
                        color: 'rgb(204, 204, 204)'
                    }
                },
                tickfont: {
                    font: {
                        color: 'rgb(102, 102, 102)'
                    }
                },
                autotick: true,
                dtick: 1000,

                ticks: 'outside',
                tickcolor: 'rgb(102, 102, 102)'
            },
            yaxis:{
                autotick: true,
            },

            margin: {
                l: 320,
                r: 40,
                b: 50,
                t: 50
            },
            legend: {
                font: {
                    size: 10,
                },
                yanchor: 'middle',
                xanchor: 'right'
            },
            width: 0,
            height: 2000,
            paper_bgcolor: 'rgb(254, 247, 234)',
            plot_bgcolor: 'rgb(254, 247, 234)',
            hovermode: 'closest'
        };

        Plotly.newPlot('grafico', dati, layout);


    });
};
