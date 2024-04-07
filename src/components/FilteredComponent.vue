<template>
  <div class="filtered-container">
    <h2>{{ title }}</h2>
    <ul class="filtered-content">
        <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilteredComponent',
  props: ['title']
}
</script>

<style>
.filtered-container{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
}

h2{
  color: var(--primary-text);
  padding: 1rem;
}

.filtered-content{
  position: fixed;
  height: 50%;
  width: 50%;
  top: 25%;
  left: 35%;
  overflow: auto;
  scrollbar-width: none;
}
</style>