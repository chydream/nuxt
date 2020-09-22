<template>
  <div class='home'>
    <el-row :gutter='10'>
      <el-col :span='24'>
        <el-card class='box-card mt-15'>
          <div class='home-form'>
            <el-form ref='ruleForm' label-width='50px' @submit.native.prevent>
              <el-row :gutter='10'>
                <el-col :span='6'>
                  <el-form-item label='股票' prop='stageId'>
                    <el-select v-model.trim='stageId' placeholder='请选择' size='mini' clearable>
                      <el-option
                        v-for='(item, index) in stageArr'
                        :key='index'
                        :label='item.name'
                        :value='item.id'
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span='2'>
                  <el-button
                    type='primary'
                    icon='el-icon-search'
                    size='mini'
                    @click='handleSearch'
                    class='search-btn'
                  >搜索</el-button>
                </el-col>
                <el-col :span='16' style='text-align:right'>
                  <el-button size='mini' @click='goBack'>返回</el-button>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-card>
        <el-card class='box-card mt-15'>
          <!-- 头部 -->
          <div slot='header' class='clearfix fix-lh'>
            <span>{{$route.query.code_name}}管理</span>
            <div class='btn-list'>
              <!-- <el-button size='mini' @click='handleAdd'>新增</el-button>
              <el-button size='mini' @click='handleDeleteAll'>批量删除</el-button>-->
            </div>
          </div>
          <div class='home-body' style='min-height:500px'>
            <cvue-table
              :option='tableOption'
              :data='tableData'
              ref='tbl1'
              :isShowAdd='false'
              :page='page'
              :tablePage='tablePage'
              :pageSize='page.pageSize'
              :loading='tableLoading'
              @current-change='handleCurrentChange'
              @size-change='handleSizeChange'
              @select-change='handleSelectChange'
              :isShowPage='true'
            >
              <template slot="isST" slot-scope="scope">
                <span>{{scope.row.isST === 1 ? '是' : '否'}}</span>
              </template>
              <!-- 操作按钮 -->
              <!-- <el-table-column
                fixed='right'
                slot='actionMenu'
                label='操作'
                align='center'
                header-align='center'
                width='160'
              >
                <template slot-scope='scope'>
                  <el-button type='text' size='small' @click='handleView(scope.row)'>详情</el-button>
                  <el-button type='text' size='small' @click='handleEdit(scope.row)'>编辑</el-button>
                  <el-button type='text' size='small' @click='handleDelete(scope.row)'>删除</el-button>
                </template>
              </el-table-column> -->
            </cvue-table>
          </div>
        </el-card>
        <k-line chartId="kShareChart" class="mt-15" width="100%" :option="kChartOption" title="K线图"></k-line>
        <n-line chartId="lineShareChart" class="mt-15" width="100%" :option="lineChartOption" title="涨跌幅折线图"></n-line>
        <n-bar chartId="shareChart" class="mt-15" width="100%" :option="chartOption" title="成交量柱形图"></n-bar>
      </el-col>
    </el-row>
    <!-- 编辑弹窗 -->
    <index-edit
      @closeDialog='closeDialog("edit")'
      @confirmDialog='confirmDialog("edit")'
      @handleClose='closeDialog("edit")'
      v-if='dialogGradeEdit'
      :dialogVisible='dialogGradeEdit'
    ></index-edit>
  </div>
</template>

<script>
import cvueTable from '@/components/cvue-table'
import nBar from '@/components/chart/bar'
import nLine from '@/components/chart/line'
import kLine from '@/components/chart/kLine'
import indexEdit from './indexEdit'
import { getClientHeight } from '@/util/tool'
export default {
  name: 'home',
  components: {
    cvueTable,
    indexEdit,
    nBar,
    kLine,
    nLine
  },
  data () {
    return {
      tablePage: 1,
      tableLoading: false,
      page: {
        total: 1, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 10, // 每页显示多少条
        pageSizes: [10, 50, 100]
      },
      tableOption: {
        stripe: true,
        width: '100%',
        border: true,
        index: false,
        selected: false,
        cloumn: [
          { prop: 'date', label: '行情日期', align: 'center' },
          { prop: 'code', label: '股票代码', align: 'center' },
          { prop: 'open', label: '开盘价', align: 'center' },
          { prop: 'high', label: '最高价', align: 'center' },
          { prop: 'low', label: '最低价', align: 'center' },
          { prop: 'close', label: '收盘价', align: 'center' },
          { prop: 'volume', label: '成交量', align: 'center' },
          { prop: 'turn', label: '换手率', align: 'center' },
          { prop: 'pctChg', label: '涨跌幅', align: 'center' },
          { prop: 'peTTM', label: '滚动市盈率', align: 'center' },
          { prop: 'isST', label: '是否ST', align: 'center', slotStatus: true },
          { prop: 'created_at', label: '创建时间', align: 'center' }
        ]
      },
      tableData: [
        { name: 'ddd', code: 'sss', order: 1, status: 1 }
      ],
      dialogGradeEdit: false,
      actionType: 'add',
      data: [
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      stageId: '',
      selectStageId: '',
      stageArr: [],
      rowData: [],
      name: '',
      selectName: '',
      selectIds: [],
      chartOption: {
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
      },
      kChartOption: {
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
      },
      lineChartOption: {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
      }
    }
  },
  computed: {
    height () {
      var height = getClientHeight() - 170
      return height + 'px'
    }
  },
  mounted () {
    if (process.client) {
      this.handleList() // 获取列表详情
      this.getChartData()
    }
  },
  head () {
    return {
      title: '股票代码详情',
      meta: [
        { hid: 'description', name: 'description', content: '这个是股票代码详情' },
        { hid: 'keywords', name: 'keywords', content: '股票代码详情' }
      ]
    }
  },
  methods: {
    // 树点击
    handleNodeClick (data) {
      console.log(data)
    },
    // 新增
    handleAdd () {
      this.actionType = 'add'
      this.dialogGradeEdit = true
    },
    // 编辑
    handleEdit (row) {
      this.actionType = 'edit'
      this.dialogGradeEdit = true
      this.rowData = row
    },
    // 表格选择
    handleSelectChange (val) {
      // console.log(val)
      var arr = []
      for (var i = 0; i < val.length; i++) {
        arr.push(val[i].id)
      }
      this.selectIds = arr
      // console.log(this.selectIds)
    },
    // 删除
    handleDelete (row) {
      this.$confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var params = {
          id: row.id
        }
        this.$store.dispatch('publicData/GradesDelete', params).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.tablePage = 1
          this.handleList(this.selectName, this.selectStageId)
        }).catch((err) => {
          this.$message({ type: 'error', message: err.resp_msg })
        })
      }).catch(() => {
      })
    },
    handleDeleteAll () {
      this.$confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (this.selectIds.length == 0) {
          this.$message({ type: 'error', message: '至少选择一条' })
          return
        }
        var params = this.selectIds
        this.$store.dispatch('publicData/GradesDeletePost', params).then(res => {
          // console.log(res)
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.tablePage = 1
          this.handleList(this.selectName, this.selectStageId)
        }).catch((err) => {
          this.$message({ type: 'error', message: err.resp_msg })
        })
      }).catch(() => {
      })
    },
    // 改变pagesize
    handleSizeChange (val) {
      this.page.pageSize = val
      this.handleList(this.selectName, this.selectStageId)
    },
    // 改变页码
    handleCurrentChange (val) {
      this.tablePage = val
      this.handleList(this.selectName, this.selectStageId)
    },
    // 单元格单击
    handleCellClick (row, index, prop) {
      this.rowId = row.id
      this.rowTitle = row.name
    },
    // 列表接口
    handleList () {
      this.tableLoading = true
      var params = {
        code: this.$route.query.code,
        limit: this.page.pageSize,
        page: this.tablePage
      }
      this.$store.dispatch('shares/SharesDetailGet', params).then((res) => {
        // console.log(res)
        this.tableData = res.data
        this.tableLoading = false
        this.page.total = res.count
        this.page.currentPage = this.tablePage
      })
        .catch((err) => {
          console.log(err)
          this.tableLoading = false
        })
    },
    getChartData () {
      this.tableLoading = true
      var params = {
        code: this.$route.query.code,
        limit: 1000,
        page: 1
      }
      this.$store.dispatch('shares/SharesDetailGet', params).then((res) => {
        // console.log(res)
        var chartData = res.data
        var xData = []
        var yData = []
        var kData = []
        var lData = []
        chartData.forEach((item, index) => {
          xData.unshift(item.date)
          yData.unshift(item.volume)
          var kDataItem = []
          kDataItem.unshift(item.open, item.high, item.low, item.close)
          kData.unshift(kDataItem)
          lData.unshift(item.pctChg)
        })
        this.chartOption.xAxis.data = xData
        this.chartOption.series[0].data = yData
        this.kChartOption.xAxis.data = xData
        // console.log(kData)
        this.kChartOption.series[0].data = kData
        this.lineChartOption.xAxis.data = xData
        this.lineChartOption.series[0].data = lData
        this.tableLoading = false
      })
        .catch((err) => {
          console.log(err)
          this.tableLoading = false
        })
    },
    handleView (row) {
    },
    // 关闭弹窗
    closeDialog (params) {
      if (params == 'edit') {
        this.dialogGradeEdit = false
      }
    },
    // 确认
    confirmDialog (params) {
      if (params == 'edit') {
        this.dialogGradeEdit = false
        this.tablePage = 1
        this.handleList(this.selectName, this.selectStageId)
      }
    },
    handleSearch () {
      this.selectName = this.name
      this.selectStageId = this.stageId
      this.tablePage = 1
      this.handleList(this.selectName, this.selectStageId)
    },
    // 获取学段列表
    getStageList (schoolId) {
      this.tableLoading = true
      var params = {
        page: this.tablePage,
        limit: this.page.pageSize,
        schoolId: schoolId
      }
      this.$store.dispatch('publicData/SchoolStagesGet', params).then(res => {
        // console.log(res)
        this.stageArr = res.data
        this.tableLoading = false
      })
    },
    goBack () {
      this.$router.push({ path: '/indexList', query: { industry: this.$route.query.industry } })
    }
  }
}
</script>

<style lang='scss'>
.home {
  padding: 0px !important;
  height: auto !important;
  .btn-list {
    float: right;
    margin-right: 10px;
    font-size: 12px;
    color: #409eff;
    cursor: pointer;
  }
  .el-card__header {
    border-bottom: none;
  }
  .el-card__header,
  .el-card__body {
    padding: 15px;
  }
  .fix-lh {
    line-height: 32px;
  }
  .el-input.is-disabled .el-input__inner {
    color: #606266;
  }
  .tree-wrap {
    min-height: 500px;
    background: #fff;
  }
  .left {
    min-height: 500px;
    background: #fff;
  }
  .left-tree {
    width: 100%;
    min-height: 600px;
    overflow: auto;
  }
  .left-top {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #333;
    background: #e2e2e2;
    font-size: 15px;
  }
}
</style>
