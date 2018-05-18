<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4>
                <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                    <v-text-field slot="activator" v-model="date" label="请选择日期" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker v-model="date" @input="$refs.menu2.save(date)"></v-date-picker>
                </v-menu>
            </v-flex>
            <v-flex xs12 sm6 md4>
                <chart :options="chartOption"></chart>
            </v-flex>
            <v-spacer></v-spacer>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            let base = +new Date(1968, 9, 3)
            let oneDay = 24 * 3600 * 1000
            let date = []
            let data = [Math.random() * 300]
            for (let i = 1; i < 20000; i++) {
                let now = new Date(base += oneDay)
                date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
                data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
            }
            let dboption = {
                tooltip: {
                    trigger: 'axis',
                    position: function(pt) {
                        return [pt[0], '10%']
                    }
                },
                title: {
                    left: 'center',
                    text: '大数据量面积图'
                },
                toolbox: {
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: date
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 10
                }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
                series: [{
                    name: '模拟数据',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: 'rgb(255, 70, 131)'
                        }
                    },
                    // areaStyle: {
                    //     normal: {
                    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //             offset: 0,
                    //             color: 'rgb(255, 158, 68)'
                    //         }, {
                    //             offset: 1,
                    //             color: 'rgb(255, 70, 131)'
                    //         }])
                    //     }
                    // },
                    data: data
                }]
            }
            return {
                date: null,
                menu: false,
                modal: false,
                menu2: false,
                chartOption: dboption
            }
        }
    }
</script>
