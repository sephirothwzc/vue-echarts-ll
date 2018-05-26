<template>
    <div>
        <h1>{{this.chartParams.chartName}}报表</h1>
        <div class="divBtnDate">
            <button v-bind:class="{ on: typeIsMonth }" v-on:click="chartTypeChange(chartTypeMonthVal)">月</button>
            <button v-bind:class="{ on: !typeIsMonth }" v-on:click="chartTypeChange(chartTypeYearVal)">年</button>
        </div>
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4>
                    <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="200px">
                        <v-text-field slot="activator" v-model="date" label="请选择日期" prepend-icon="event" readonly></v-text-field>
                        <v-date-picker v-model="date" @input="$refs.menu2.save(date)" v-on:change="changeDate"></v-date-picker>
                    </v-menu>
                </v-flex>
                <v-flex xs12 sm6 md4>
                    <div class="cc">
                        <chart :options="chartOption" :auto-resize="true" :watchShallow="true" ref="cc"></chart>
                    </div>
                    <div class="cc2">
                        <chart :options="chartOption2" :auto-resize="true" :watchShallow="true" ref="cc2"></chart>
                    </div>
                </v-flex>
                <v-spacer></v-spacer>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import DateHelper from '@/util/date-helper'
    import jslinq from 'jslinq'
    export default {
        name: 'lineChart',
        data() {
            return {
                date: DateHelper.formatDate(new Date(), 'yyyy-MM-dd'),
                menu: false,
                modal: false,
                menu2: false,
                chartOption: {},
                chartOption2: {},
                autoR: true,
                equipment: this.$route.params.equipment,
                chartParams: {
                    chartName: '逆变器', // 报表名称
                    chartType: '1', // 报表时间统计类型
                    axisDesc: [
                        {x: '时间', y: '报警次数'},
                        {x: '时间', y: '故障率%'}
                    ], // 坐标轴描述
                    dataUrl: 'http://111.160.78.210:10101/pv/report/power'
                    // dataUrl: 'chartOption/getOptionByDate' // 数据接口地址
                },
                chartTypeMonthVal: '1', // 时间类型-月-val
                chartTypeYearVal: '2', // 时间类型-年-val
                typeIsMonth: true // 当前时间类型是否是月
            }
        },
        created() {
            this.pageInit()
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                const self = this
                window.onresize = self.$refs.cc.resize
            },
            /**
             * 初始化加载
             */
            pageInit() {
                this.getOptionByDate()
                // window.onresize = this.chart.resize
            },
            /**
             * 日期变更
             */
            changeDate() {
                this.getOptionByDate()
            },
            /**
             * 根据日期设备号 获取报表数据
             */
            getOptionByDate() {
                let dt = new Date(this.date)
                let startTime,
                    endTime
                if (this.chartParams.chartType === '1') {
                    startTime = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-01'
                    endTime = dt.getFullYear() + '-' + (dt.getMonth() + 2) + '-01'
                } else {
                    startTime = dt.getFullYear() + '-01-01'
                    endTime = (dt.getFullYear() + 1) + '-01-01'
                }
                this.$ajax.post(this.chartParams.dataUrl, {
                        stationId: this.equipment, // 站点ID
                        startTimeMS: startTime, // 开始时间
                        endTimeMS: endTime, // 结束时间
                        type: this.chartParams.chartType // 类型，1-月报;2-年报
                    })
                    .then(data => {
                        this.setChartOption(data)
                    })
            },
            /**
             * 根据获取到的报表数据，设置报表展示
             */
            setChartOption(baseData) {
                let xData = jslinq(baseData.result).select(p => DateHelper.formatTimeStamp(p.key, 'd')).toList()
                let yData = jslinq(baseData.result).select(p => p.avg).toList()
                let option = {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data: [this.chartParams.chartName]
                    },
                    xAxis: [{
                        type: 'category',
                        data: xData,
                        name: this.chartParams.axisDesc[0].x
                    }],
                    yAxis: [{
                        type: 'value',
                        name: this.chartParams.axisDesc[0].y
                    }],
                    series: [{
                        /* bar=条形图，line=折线图 */
                        'type': 'bar',
                        'data': yData,
                        itemStyle: {
                            normal: {
                                labelLine: {
                                    show: true
                                },
                                color: '#7CCD7C'
                            }
                        }
                    }]
                }
                this.chartOption = option

                let xData2 = jslinq(baseData.result).select(p => DateHelper.formatTimeStamp(p.key, 'd')).toList()
                let yData2 = jslinq(baseData.result).select(p => p.avg).toList()
                let option2 = {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data: [this.chartParams.chartName]
                    },
                    xAxis: [{
                        type: 'category',
                        data: xData2,
                        name: this.chartParams.axisDesc[1].x
                    }],
                    yAxis: [{
                        type: 'value',
                        name: this.chartParams.axisDesc[1].y
                    }],
                    series: [{
                        /* bar=条形图，line=折线图 */
                        'type': 'bar',
                        'data': yData2,
                        itemStyle: {
                            normal: {
                                labelLine: {
                                    show: true
                                },
                                color: '#7CCD7C'
                            }
                        }
                    }]
                }
                this.chartOption2 = option2
            },
            /**
             * 变更时间类型
             */
            chartTypeChange(typeVal) {
                this.chartParams.chartType = typeVal
                this.typeIsMonth = (typeVal === this.chartTypeMonthVal)
                this.getOptionByDate()
            }

        }
    }
</script>

<style scoped>
    h1{
        background: #11bdfd;
        text-align: center;
        font-family: '微软雅黑';
        font-size: 20px;
        color: #fff;
        padding: 5px 0;
    }
    .divBtnDate {
        padding-top: 10px;
        text-align: center;
    }
    button {
        border: solid 1px #11bdfd;
        border-radius: 15px;
        display: inline-block;
        min-width: 100px;
    }
    
    button.on {
        background: #11bdfd;
        color: #fff;
    }
    
</style>
