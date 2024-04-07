<template>
    <div class="app">
        <SidebarComponent />
        <div class="content">
            <ListComponent />
        </div>
    </div>
</template>


<script>
import ListComponent from '../components/ListComponent.vue';
import SidebarComponent from '../components/SidebarComponent.vue';

export default {
    name: 'HomeView',
    components: {
        ListComponent,
        SidebarComponent
    }
}
</script>

<style>
.app{
  display: flex;
}

.content{
  color: var(--primary-text);
  width: 50%;
  height: 80vh;
  margin: auto;
}
</style>