<template>
    <div class="pagination">
        <div class="btn" v-if="currentPage > 1 && !loading" @click="changePage(currentPage - 1)">
          Previous
        </div>
        <div class="pagination" v-if="!loading">
            <div
            class="btn"
            v-for="n in displayPageNumber"
            :key="n"
            @click="changePage(n)"
            :class="{ active: currentPage === n }"
            :style="{ backgroundColor: currentPage === n ? 'var(--hover-color)' : '' }"
        >
          {{ n }}
        </div>
        </div>
        <div class="btn" v-if="currentPage < totalPages && !loading" @click="changePage(currentPage + 1)">
          Next
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavigationComponent',
    props:{
        currentPage: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        totalItems: {
            type: Number,
            required: true
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed:{
        totalPages(){
            return Math.ceil(this.totalItems / this.perPage);
        },
        displayPageNumber(){
            const numbers = [];
            const totalEclipses = 2;

            numbers.push(1);

            if(this.currentPage > totalEclipses + 1){
                numbers.push("...");
            }

            for (
                let i = Math.max(2, this.currentPage - totalEclipses);
                i <= Math.min(this.currentPage + totalEclipses, this.totalPages);
                i++
            ) {
                numbers.push(i);
            }

            if(this.currentPage < this.totalPages - totalEclipses - 1){
                numbers.push("...");
            }

            numbers.push(this.totalPages);

            return numbers;
        },
        isPreviousDisabled(){
            return this.currentPage <= 1;
        },
        isNextDisabled(){
            return this.currentPage >= this.totalPages;
        }
    },
    methods: {
        changePage(number){
            this.$emit('change', number)
        }
    },
}
</script>

<style>
.pagination{
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.btn{
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
}

.btn:hover{
    background-color: var(--hover-color);
}
</style>