<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4>
                <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="200px">
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
    import DateHelper from '@/util/date-helper'
    import jslinq from 'jslinq'
    export default {
        props: {
            /**
             * 设备号
             */
            equipment: {
                type: String,
                required: true
            },
            /**
             * 报表类型
             */
            chartType: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                date: DateHelper.formatDate(new Date(), 'yyyy-MM-dd'),
                menu: false,
                modal: false,
                menu2: false,
                chartOption: {}
            }
        },
        created() {
            this.pageInit()
        },
        methods: {
            /**
             * 初始化加载
             */
            pageInit() {
                this.getOptionByDate()
            },
            /**
             * 根据日期设备号 获取报表数据
             */
            getOptionByDate() {
                this.$ajax.post('chartOption/getOptionByDate', {
                        date: this.date,
                        equipment: this.equipment,
                        chartType: this.chartType
                    })
                    .then(data => {
                        this.setChartOption(data)
                    })
            },
            setChartOption(baseData) {
                let xData = jslinq(baseData.result).select(p => DateHelper.formatTimeStamp(p.key, 'M')).toList()
                let yData = jslinq(baseData.result).select(p => p.avg).toList()
                let option = {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data: ['装机与效率统计']
                    },
                    xAxis: [{
                        type: 'category',
                        data: xData,
                        name: '时间'
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '效率(%)'
                    }],
                    series: [{
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
            }
        }
    }
</script>
