<template>
  <div id="app">
    <p class="todo-text">todos</p>
    <todo-box></todo-box>
  </div>
</template>

<script type="text/babel">
import todoBox from './components/HelloWorld.vue'

export default {
  components: {
    todoBox
  },
  data () {
    return {
    }
  }
  // created: {
  // }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  height: 100vh;
  .todo-text {
    font-size: 88px;
    color: rgba(175, 47, 47, 0.15);
  }
}
</style>
