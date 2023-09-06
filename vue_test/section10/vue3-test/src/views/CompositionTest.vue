<template>
  <div>
    Composition
    <P>{{ name }}</P>
    <p>{{ age }}</p>
    <p>ref:{{ nameRef }}</p>
    <p>reactive:{{ book.title }}</p>
    <p>reactive:{{ book.author[0] }}</p>
    <p>reactiveToRefs:{{ titleRef }}</p>
    <p>reactiveToRefs:{{ authorRef[1] }}</p>
    <button @click="buttonClick">click</button>
    <p>computed: {{ totalPrice }}</p>
    <div>watch:<input v-model="search"></div>
    <div>watchEffect:<input v-model="searchEffect"></div>
  </div>
</template>

<script>
import {ref, reactive, toRefs, computed, watch, watchEffect, onMounted} from 'vue'
export default {
    setup(){
        let name = 'name1';
        const age = 30;
        const nameRef = ref('nameRef1')
        const book = reactive({
            title: 'title1',
            author: ['author1', 'author2']
        });
        const booktoRefs = reactive({
            titleRef: 'titleRef2',
            authorRef: ['authorRef1', 'authorRef2']
        });
        const item = reactive({
            price: 100,
            number: 1 
        });
        const totalPrice = computed(() => {
            return item.price * item.number;
        });
        const search = ref('');
        watch(search, (newValue, prevValue) => {
            console.log(`watch: ${search.value}`);
            console.log(`new: ${newValue}`);
            console.log(`prev: ${prevValue}`);
        }) ;
        const searchEffect = ref('');
        watchEffect(() => {
            console.log(`watchEffect: ${searchEffect.value}`);
        });

        onMounted(() => {
            console.log('onMounted');
        })
        const buttonClick = (e) => {
            console.log(book.title);
            console.log(e);
        }
        console.log('setup');
        console.log(nameRef);
        console.log(nameRef.value);
        return {
            name: name, //単にnameでもよい
            age: age,
            nameRef,
            book,
            ...toRefs(booktoRefs),
            buttonClick,
            item,
            totalPrice,
            search,
            searchEffect
        }
    },
    data(){
        return {
            number: 1,
            sports: 'soccer'
        }
    },
    created(){
        console.log('created');
    },
    mounted(){
        console.log('mounted');
    }
}
</script>

<style>

</style>