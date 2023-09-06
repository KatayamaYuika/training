<template>
  <div>
    <!-- <button @click="increment">+</button> -->
    <button @click="incrementAction">+</button> 
    <button @click="addCount">+10</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    // increment(){
    //   this.$store.commit('increment');
    // },
    // addCount(){
    //   this.$store.commit('addCount', {
    //     value: 10,

    //   });
    // }
    
    // increment(){
    //   this.$store.dispatch('incrementAction');
    // },
    // addCount(){
    //   this.$store.dispatch('addCountAction', {value: 10});
    // },

    ...mapActions(['incrementAction', 'addCountAction']),

    addCount(){ //上のスプレッド構文の中のaddCountActionに引数を渡す
      console.log('aaa');
      this.addCountAction({
        value: 10
      });
    }
  }
}
</script>

