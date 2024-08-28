<template>
    <div class="todo-item">
        <span>잠자기</span>
        <button>삭제</button>
        <br>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .todo-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    }
    .todo-item .completed {
    text-decoration: line-through;
    color: grey;
    }
    .todo-item button {
    background-color: red;
    color: white;
    border: none;
    padding: 2px 5px;
    cursor: pointer;
    }
</style>