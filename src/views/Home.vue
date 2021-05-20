<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js"/>
    <h1></h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios'

@Options({
  components: {
    HelloWorld,
  },
  mounted() {
    console.log('mounted')
  },
  created() {
    axios({
      url: '/api/test'
    }).then(res => {
      res.data.data.forEach((item: Object) => {
        console.log(item)
      })
    })
    console.log('created')
  },
})
export default class Home extends Vue {}
</script>
