<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/children">children</router-link> |
    <router-link to="/teleport-test">teleport</router-link> |
    <router-link to="/composition-test">Composition</router-link> |
    <router-link to="/props-emit-test">PropsEmit</router-link>
    <router-view :setupBooks="setupBooks" :dataBooks="dataBooks" @custom-event="parentMethod"/>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default{
  setup(){
    const setupBooks = reactive([
    {
          title: 'setupTitle1',
          author: 'setupAuthor1'
        },
        {
          title: 'setupTitle2',
          author: 'setupAuthor2'
        }
    ])
    return {
      setupBooks
    
    }
  },
  data(){
    return {
      dataBooks:[
        {
          title: 'dataTitle1',
          author: 'dataAuthor1'
        },
        {
          title: 'dataTitle2',
          author: 'dataAuthor2'
        }
      ]
    }
  },
  methods: {
    parentMethod(e){
      console.log(e);
    }
  },
  provide(){
    return {
      userName: 'parents set value'
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
