<template>
    <aside>
        <div class="profile">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile icon" width="25" height="25">
            <h4>{{ user.name }}</h4>
        </div>
        <div class="menu">
            <ul>
                <li v-on:click="showAddForm">
                    <img v-bind:src="url.addUrl" width="20" height="20" alt="add icon">
                    <a>Add Task</a>
                </li>
                <router-link to="/">
                    <li>
                        <img v-bind:src="url.inboxUrl" width="20" height="20" alt="search icon">
                        <a href="#">All Tasks</a>
                    </li>
                </router-link>
                <router-link to="/upcoming">
                    <li>
                        <img v-bind:src="url.todayUrl" width="20" height="20" alt="search icon">
                        <a href="#">Today</a>
                    </li>
                </router-link>
                <router-link to="/completed">
                    <li>
                        <img v-bind:src="url.completeUrl" width="20" height="20" alt="search icon">
                        <a href="#">Completed Tasks</a>
                    </li>
                </router-link>
            </ul>
        </div>
    </aside>
    <transition name="window">
        <div 
            v-if="showForm" 
            class="form-container"
        >
        <formComponent 
            v-on:closeForm="CloseForm"
        />
        </div>
    </transition>
</template>

<script>
import addUrl from '../assets/add-icon.png'
import inboxUrl from '../assets/inbox-icon.png'
import todayUrl from '../assets/today-icon.png'
import completeUrl from '../assets/complete-icon.png'
import formComponent from './FormComponent.vue'

export default {
    name: 'SidebarComponent',
    data() {
        return {
            showForm: false,
            user: {
                name: 'John Doe'
            },
            url:{
                addUrl: addUrl,
                inboxUrl: inboxUrl,
                todayUrl: todayUrl,
                completeUrl: completeUrl
            }
        }
    },
    methods: {
        showAddForm() {
            this.showForm = !this.showForm;
        },
        CloseForm(data) {
            this.showForm = !data;
        }
    },
    components: {
        formComponent
    }
}
</script>

<style>
aside {
    background-color: var(--secondary);
    color: var(--primary-text);
    padding: 20px;
    height: 100vh;
    width: 300px;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-items: center;
}

.profile {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
}

.profile:hover {
    background-color: var(--hover-color);
}

.profile img{
    border-radius: 100px;
}

.menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;

}

.menu ul {
    display: flex;
    flex-direction: column;
}

.menu h2 {
    padding: 0.5rem;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
}

.menu h2:hover {
    background-color: var(--hover-color);
}

.menu li{
    list-style: none;
    padding: 0.5rem;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.menu li:hover{
    background-color: var(--hover-color);
    cursor: pointer;
}

.menu a {
    text-decoration: none;
    color: var(--primary-text);
}

.form-container {
    background-color: var(--secondary);
    color: var(--primary-text);
    position: fixed;
    z-index: 10;
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
    padding: 1rem;
    border-radius: 5px;
}

.card-container {
    position: fixed;
    z-index: 10;
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
    padding: 1rem;
    border-radius: 5px;
    color: var(--primary-text);
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