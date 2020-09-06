<template>
  <div class="line">
    <cvue-chart :width="width" :height="height" :option="option" :chartId="chartId" :title="title"></cvue-chart>
  </div>
</template>
<script>
import cvueChart from '@/components/chart/cvue-chart'
export default {
  name: 'KLineChart',
  components: {
    cvueChart
  },
  data () {
    return {
      msg: 'hello'
    }
  },
  props: {
    width: {
      type: String,
      default: '500px'
    },
    height: {
      type: String,
      default: '500px'
    },
    title: {
      type: String,
      default: '柱形图'
    },
    chartId: {
      type: String,
      required: true,
      default: 'lineChart'
    },
    option: {
      type: Object,
      default: () => {
        return {
          xAxis: {
              data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
          },
          yAxis: {},
          series: [{
              type: 'k',
              data: [
                  [20, 30, 10, 35],
                  [40, 35, 30, 55],
                  [33, 38, 33, 40],
                  [40, 40, 32, 42]
              ]
          }]
        }
      }
    }
  },
  mounted () {
    // console.log(this.option)
  }
}
</script>
<style scoped lang="scss">
.line{
}
</style>
