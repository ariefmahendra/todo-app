<template>
    <div class="form">
      <div class="form-header">
          <div></div>
          <h2>Add New Task</h2>
          <div @click="$emit('close-form', isShow)" class="close">X</div>
      </div>
      <form @submit="addTask">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="newTask.title" required>
        <input type="checkbox" id="completed" v-model="newTask.completed">
        <button type="submit">Tambah Task</button>
      </form>
    </div>
</template>

<script>
import {CreateTodo} from "@/services/TodoService";
export default {
    data(){
        return {
            newTask : {
                userId: 1,
                id: 0,
                title: '',
                completed: false
            },
            isShow: true
        };
    },
    methods: {
        addTask(event){
            event.preventDefault();

            if (this.newTask.title.trim() === '') {
                alert('Judul tidak boleh kosong');
                return;
            }

            CreateTodo(this.newTask);
            this.newTask.title ='';
            this.newTask.completed = false;


        }
    }
}

</script>

<style>
.form {
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 2.2rem;
}

.form h2 {
    color: var(--primary-text);
    margin-bottom: 20px;
    text-align: center;
}

.form form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
}

.form label {
    color: var(--primary-text);
    font-weight: bold;
}

.form input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
}

.form button {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: var(--secondary);
    color: var(--primary-text);
    font-weight: bold;
    cursor: pointer;
}

.form button:hover {
    background-color: var(--hover-color);
}

.form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-header h2 {
    margin: auto;
}

.close {
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-text);
    transition: all 0.2s ease-in-out;
    padding: 0.5rem;
    border-radius: 5px;
}

.close:hover{
    background-color: var(--hover-color);
}

</style>
