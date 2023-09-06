<template>
  <div>
    {{ setupBooks }}
    {{ dataBooks }}
    <ul>
        <li v-for="book in setupBooks" :key="book">
            {{ book.title }}
        </li>
    </ul>
    <button @click="emitTest">emitTest</button>
  </div>
</template>

<script>
export default {
    props: {
        setupBooks: Array,
        dataBooks: Array
    },
    setup(props, context){
        console.log(props.setupBooks);
        const emitTest = () => {
            context.emit('custom-event', 'child_value');

        }
        return {
            emitTest
        }
    }
}
</script>

<style>

</style>