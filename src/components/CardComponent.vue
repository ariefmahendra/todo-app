<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
}
</script>

<style lang="css">
    .card { 
        background-color: var(--secondary);
        color: var(--primary-text);
        padding: 20px;
        border-radius: 5px;
        transition: all 0.2s ease-in-out;
    }    
</style>