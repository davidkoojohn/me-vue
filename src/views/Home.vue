<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js"/>
    <el-button>test</el-button>
    <el-button>test</el-button>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="id"
          label="#"
          width="180">
      </el-table-column>
      <el-table-column
          prop="cname"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="created_at"
          label="创建时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
  data() {
    return {
      tableData: []
    }
  },
  async created() {
    try {
      const {data} = await this.$http({
        url: '/test'
      })
      this.tableData = data.data
    } catch (e) {
      console.log(e)
    }
  },
})
export default class Home extends Vue {}
</script>
