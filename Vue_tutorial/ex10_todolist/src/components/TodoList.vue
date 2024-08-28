<template>
    <div class="todo-list">
        <h3>Todo List</h3>
    <TodoItem v-for="(todo, index) of todos" :key="index" :todo="todo" @remove="removeTodo(index)" />
    <div class="input-group">            
        <input type="text" v-model="newTodo" placeholder="새로운 할 일 추가">
        <button @click="addTodo">추가</button>            
</div>
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue'
    import { ref } from 'vue'

    export default {
        components: {
            TodoItem
        },
        setup(){
            const newTodo = ref('')
            const todos = ref([])
            const addTodo = () => {
                todos.value.push(newTodo.value)
                newTodo.value = ''
            }
            const removeTodo = (index) => {
                todos.value.splice(index, 1)
            }
            return {
                newTodo,
                todos,
                addTodo,
                removeTodo
            }
        }
    }
</script>

<style scoped>
    .todo-list {
    max-width: 400px;
    margin: 0 auto;
    }
    .input-group {
    display: flex;
    margin-top: 10px;
    }
    .input-group input {
    flex: 1;
    padding: 5px;
    }
    .input-group button {
    margin-left: 5px;
    }
</style>