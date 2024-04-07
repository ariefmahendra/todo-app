<template>
    <div class="app">
        <SidebarComponent />
        <FilteredComponent :title="'Upcoming Tasks'">
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
import {getTodosUncompleted} from "@/services/TodoService";

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
    getTodosUncompleted() {
       this.todos = getTodosUncompleted();
    }
  },
  created() {
    this.getTodosUncompleted();
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
  margin: 1rem;
}
</style>