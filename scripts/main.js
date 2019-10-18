Highcharts.chart('graphone', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Reported Crime in FL College Cities, 2018'
    },
    subtitle: {
        text: 'Source: fbi.gov'
    },
    xAxis: {
        categories: ['Orlando', 'Miami', 'Gainesville', 'Tampa', 'Tallahassee'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of reported crimes',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Property crime',
        data: [13803, 16837, 5229, 6576, 8695]
    }, {
        name: 'Violent crime',
        data: [2282, 2978, 989, 1598, 1404]
    }]
});

Highcharts.chart('graphtwo', {

    title: {
        text: 'Reported Crime in FL College Cities, 2014-2018'
    },

    subtitle: {
        text: 'Source: fbi.gov'
    },

    yAxis: {
        title: {
            text: 'Number of crimes'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2014
        }
    },

    series: [{
        name: 'Orlando',
        data: [18805, 18673, 18278, 17603, 16085]
    }, {
        name: 'Miami',
        data: [25873, 23601, 23896, 21924, 19815]
    }, {
        name: 'Gainesville',
        data: [5792, 5547, 5529, 5730, 6218]
    }, {
        name: 'Tampa',
        data: [10920, 10664, 10486, 8487, 8174]
    }, {
        name: 'Tallahassee',
        data: [9514, 11677, 11346, 10931, 10099]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
