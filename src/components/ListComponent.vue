<template>
  <transition name="window">
    <div v-if="todoIsShow" class="card-container">
      <CardComponent>
        <div class="header-todo">
          <h2>Todo</h2>
          <div class="close" @click="openCard">X</div>
        </div>
        <div class="todo-content">
          <h2>{{ todo.title }}</h2>
          <p>Status : {{ todo.status }}</p>
        </div>
      </CardComponent>
    </div>
  </transition>
  <div class="list-container">
    <div class="menu-list">
      <h1>
        All Todos
      </h1>
    </div>
    <div class="list-content">
      <ul v-if="todos">
        <li v-for="todo in currentPageTodos" :key="todo.id">
          <div class="todo">
            <input class="checkbox" type="checkbox" v-model="todo.completed">
            <a
                @click="openCard(todo)"
            >
              {{ todo.title }}
            </a>
            <img class="delete" v-bind:src="url.deleteUrl" @click="deleteTodo(todo.id)"  width="20" height="20" alt="delete icon">
          </div>
          <div>
            <div class="line"></div>
          </div>
        </li>
      </ul>
      <p v-else-if="loading">Loading data...</p>
      <p v-else>No data found.</p>
    </div>
    <PaginationComponent
        v-if="todos"
        :currentPage="currentPage"
        :perPage="perPage"
        :totalItems="totalItems"
        :loading="loading"
        @change="changePage"
      />
  </div>
</template>

  
<script>
import {FetchTodos, DeleteTodo, GetTodos} from '../services/TodoService.js';
import PaginationComponent from './PaginationComponent.vue';
import deleteUrl from '../assets/delete-icon.png';
import CardComponent from './CardComponent.vue';
    
export default {
  name: "listTodos",
  data() {
    return {
      todos: [],
      todo: {
        userId: 0,
        id: 0,
        title: "",
        status: '',
      },
      currentPage: 1,
      perPage: 10,
      totalItems: 0,
      todoIsShow: false,
      url:{
        deleteUrl: deleteUrl,
      },
      loading: false
    }
  },
  methods: {
    async fetchTodos() {
      try {
        await FetchTodos();
        this.getTodos();
      } catch (error) {
        console.log(error);
      }
    },
    getTodos() {
      this.loading = true;
      const todos = GetTodos();
      if (todos) {
        this.todos = todos;
        this.totalItems = this.todos.length;
      }
      this.loading = false;
    },
    deleteTodo(id) {
       DeleteTodo(id);
       this.getTodos();
    },
    changePage(page){
      this.currentPage = page;
    },
    openCard(todo) {
      this.todo = todo;
      
      if (todo.completed) {
        this.todo.status = "Done";
      } else {
        this.todo.status = "Pending";
      }

      if (this.todoIsShow) {
        this.todoIsShow = !this.todoIsShow;
      } else {
        this.todoIsShow = !this.todoIsShow;
      }
    },
  },
  computed: {
    currentPageTodos(){
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.todos.slice(start, end);
    }
  },
  async created() {
    await this.fetchTodos();
  },
  components: {
    PaginationComponent,
    CardComponent
  }
}
</script>
  
<style>
.list-container{
  padding: 2.25rem;
  border-radius: 5px;
  width: 100%;
  height: 80%;
}

.list-container h1{
  color: var(--primary-text);
  margin-bottom: 20px;
}

.menu-list{
  display: flex;
  justify-content: space-between;
}

.list-content{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  gap: 1.5rem;
}

.content ul {
  list-style-type: none;
  padding: 0;
}

.content li {
  margin-bottom: 10px;
  color: var(--primary-text);
}

.line{
  width: 100%;
  height: 1px;
  background-color: #3d3d3d;
  margin-top: 2rem;
  margin-bottom: 1.1rem;
}

.checkbox{
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.todo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.delete{
  cursor: pointer;
}

a {
  cursor: pointer;
}

.card-container {
  position: fixed;
  z-index: 10;
  width: 50vh;
  height: 50vh;
  margin: auto;
}

.close{
  border-radius: 5px;
  cursor: pointer;

}

.header-todo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.todo-content{
  display: flex;
  flex-direction: column;
  align-items: start;
}

.todo-content p {
  margin-bottom: 0.5rem;
  margin-left: 1rem;
}

.window-enter-active {
  animation: bounce-in 0.2s;
}
.window-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

</style>