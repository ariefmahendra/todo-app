<template>
  <div class="app">
    <SidebarComponent />
    <FilteredComponent :title="'Completed Tasks'">
      <div class="todo-filtered" v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.completed">
        <p>{{ todo.title }}</p>
      </div>
    </FilteredComponent>
  </div>
</template>

<script>
import SidebarComponent from '../components/SidebarComponent.vue';
import FilteredComponent from "@/components/FilteredComponent.vue";
import {getTodosCompleted} from "@/services/TodoService";

export default {
  name: 'UpcomingTaskView',
  props: ['title'],
  data() {
    return {
      todos: [],
    }
  },
  components:{
    SidebarComponent,
    FilteredComponent
  }, methods:{
    getTodosCompleted() {
      this.todos = getTodosCompleted();
    }
  },
  created() {
    this.getTodosCompleted();
  }
}
</script>

<style>
.app{
  display: flex;
}

h1 {
  color: var(--primary-text);
}

p{
  color: var(--primary-text);
}

.todo-filtered {
  display: flex;
  gap: 1rem;
}
</style>