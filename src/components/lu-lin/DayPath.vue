<template>
    <v-tabs slot="extension" fixed-tabs color="cyan">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="(item,i) in tabItem" :key="`t${i}`" :href="`#tab-${i}`">
            {{item}}
        </v-tab>
        <v-tab-item v-for="(item,index) in tabItem" :key="`ti${index}`" :id="`tab-${index}`">
            <line-charts :equipment="equipment" :chartType="item"></line-charts>
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
                tabItem: ['功率', '电压', '温度'],
                equipment: this.$route.params.equipment
            }
        }
    }
</script>

<style scoped>

</style>
