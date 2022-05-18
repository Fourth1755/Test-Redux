import Highcharts from 'highcharts'
const configObj ={
    chart: {
        type: 'bar',
        height:800
    },
    title: {
        text: 'Historic World Population by Region'
    },
    xAxis: {
        categories: ['Partner1', 'Partner2', 'Partner3', 'Partner4', 'Partner5'],
        title: {
            text: null
        },

    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    colors: ['#000000', '#655FCD', '#B3AFEB'],
    tooltip: {
        valueSuffix: ' millions'
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
        y: -10,
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
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
    }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
    }, {
        name: 'Year 2000',
        data: [814, 841, 714, 727, 31]
    }]
}
export default configObj