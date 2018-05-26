<template>
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
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script>
  import DateHelper from '@/util/date-helper'
  import jslinq from 'jslinq'
  export default {
    name: 'lineChart',
    props: {
      /**
       * 设备号
       */
      equipment: {
        type: String,
        required: true
      },
      /**
       * 报表参数
       */
      chartParams: {
        type: Object,
        required: true
      }
      // /**
      //  * 报表数据地址
      //  */
      // dataUrl: {
      //   type: String,
      //   required: false
      // },
      // /**
      //  * 报表名称
      //  */
      // chartName: {
      //   type: String,
      //   required: false
      // },
      // /**
      //  * 报表类型
      //  */
      // chartType: {
      //   type: String,
      //   required: true
      // },
      // /**
      //  * 报表横坐标描述
      //  */
      // xAxisDesc: {
      //   type: String,
      //   required: true
      // },
      // /**
      //  * 报表纵坐标描述
      //  */
      // yAxisDesc: {
      //   type: String,
      //   required: true
      // }
    },
    data() {
      return {
        date: DateHelper.formatDate(new Date(), 'yyyy-MM-dd'),
        menu: false,
        modal: false,
        menu2: false,
        chartOption: {},
        autoR: true
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
          }, {
            headers: {
              'schoolCode': this.$route.params.schoolCode,
              'token': this.$route.params.token
            }
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
            name: this.chartParams.xAxisDesc
          }],
          yAxis: [{
            type: 'value',
            name: this.chartParams.yAxisDesc
          }],
          series: [{
            /* bar=条形图，line=折线图 */
            'type': this.chartParams.seriesType ? this.chartParams.seriesType : 'bar',
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
