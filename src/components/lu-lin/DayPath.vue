<template>
    <v-tabs slot="extension" fixed-tabs color="cyan">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="(item,i) in tabItem" :key="`t${i}`" :href="`#tab-${i}`">
            {{item}}
        </v-tab>
        <v-tab-item v-for="(item,index) in tabItem" :key="`ti${index}`" :id="`tab-${index}`">
            <line-charts></line-charts>
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
            let data = []
            for (let i = 0; i <= 360; i++) {
                let t = i / 180 * Math.PI
                let r = Math.sin(2 * t) * Math.cos(2 * t)
                data.push([r, i])
            }
            return {
                polar: {
                    title: {
                        text: '极坐标双数值轴'
                    },
                    legend: {
                        data: ['line']
                    },
                    polar: {
                        center: ['50%', '54%']
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    angleAxis: {
                        type: 'value',
                        startAngle: 0
                    },
                    radiusAxis: {
                        min: 0
                    },
                    series: [{
                        coordinateSystem: 'polar',
                        name: 'line',
                        type: 'line',
                        showSymbol: false,
                        data: data
                    }],
                    animationDuration: 2000
                },
                tabItem: ['功率', '电压', '温度']
            }
        }
    }
</script>

<style scoped>

</style>
