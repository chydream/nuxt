<template>
  <div class="line">
    <cvue-chart :width="width" :height="height" :option="option" :chartId="chartId" :title="title"></cvue-chart>
  </div>
</template>
<script>
import cvueChart from '@/components/chart/cvue-chart'
export default {
  name: 'LineChart',
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
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
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
