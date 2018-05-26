<template>
    <v-tabs slot="extension" fixed-tabs color="cyan">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="(item,i) in tabItem" :key="`t${i}`" :href="`#tab-${i}`">
            {{item.chartName}}
        </v-tab>
        <v-tab-item v-for="(item,index) in tabItem" :key="`ti${index}`" :id="`tab-${index}`">
            <line-charts :equipment="equipment" :chartParams="item" ></line-charts>
        </v-tab-item>
    </v-tabs>
    <!-- <chart :options="polar">
                                                                    </chart> -->
</template>

<script>
    import LineCharts from '@/components/lu-lin/LineCharts.vue'
    export default {
        components: {
            LineCharts
        },
        data() {
            return {
                tabItem: [{
                        chartName: '功率', // 报表名称
                        chartType: '1', // 报表时间统计类型
                        xAxisDesc: '时间', // 报表横坐标描述
                        yAxisDesc: '功率', // 报表纵坐标描述
                        seriesType: 'line', // 图标显示类型
                        dataUrl: 'pv/report/device' // 数据接口地址
                    },
                    {
                        chartName: '电压', // 报表名称
                        chartType: '1', // 报表时间统计类型
                        xAxisDesc: '时间', // 报表横坐标描述
                        yAxisDesc: '电压', // 报表纵坐标描述
                        seriesType: 'line', // 图标显示类型
                        dataUrl: 'pv/report/device' // 数据接口地址
                    },
                    {
                        chartName: '温度', // 报表名称
                        chartType: '1', // 报表时间统计类型
                        xAxisDesc: '时间', // 报表横坐标描述
                        yAxisDesc: '温度', // 报表纵坐标描述
                        seriesType: 'line', // 图标显示类型
                        dataUrl: 'pv/report/device' // 数据接口地址
                    }
                ],
                equipment: this.$route.params.equipment
            }
        }
    }
</script>

<style scoped>
    
</style>
