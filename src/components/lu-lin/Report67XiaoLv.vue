<template>
    <div>
        <h1>{{this.chartParams.chartName}}报表</h1>
        <div class="divBtnDate">
            <button v-bind:class="{ on: typeIsMonth }" v-on:click="chartTypeChange(chartTypeMonthVal)">月</button>
            <button v-bind:class="{ on: !typeIsMonth }" v-on:click="chartTypeChange(chartTypeYearVal)">年</button>
        </div>
        <line-charts :equipment="equipment" :chartParams="chartParams" ref="lineCharts"></line-charts>
    </div>
    <!-- <chart :options="polar"></chart> -->
</template>

<script>
    import LineCharts from '@/components/lu-lin/LineCharts.vue'
    export default {
        components: {
            LineCharts
        },
        data() {
            return {
                equipment: this.$route.params.equipment,
                chartParams: {
                    chartName: '效率统计', // 报表名称
                    chartType: '1', // 报表时间统计类型
                    xAxisDesc: '时间', // 报表横坐标描述
                    yAxisDesc: '收益(万元)', // 报表纵坐标描述
                    dataUrl: 'http://111.160.78.210:10101/pv/report/installed'
                    // dataUrl: 'chartOption/getOptionByDate' // 数据接口地址
                },
                chartTypeMonthVal: '1', // 时间类型-月-val
                chartTypeYearVal: '2', // 时间类型-年-val
                typeIsMonth: true // 当前时间类型是否是月
            }
        },
        methods: {
            /**
             * 变更时间类型
             */
            chartTypeChange(typeVal) {
                this.chartParams.chartType = typeVal
                this.typeIsMonth = (typeVal === this.chartTypeMonthVal)
                this.$refs.lineCharts.getOptionByDate()
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
