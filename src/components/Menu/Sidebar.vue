<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel">
                 <li><i class="fa fa-home"/><router-link to="/">home</router-link></li>
                 <li><i class="fas fa-sticky-note"/><router-link to="/Portfolio">portfolio</router-link></li>
                 <li><i class="fas fa-star"/><router-link to="/Skills">skills</router-link></li>
                 <li><i class="far fa-address-card"/><router-link to="/About">about</router-link></li>
                <slot></slot>

            </div>
        </transition>
    </div>
</template>
<script>
    import { store, mutations } from '@/store.js'
    export default {
        methods: {
            closeSidebarPanel: mutations.toggleNav
        },
        computed: {
            isPanelOpen() {
                return store.isNavOpen
            }
        }
    }
</script>
<style>
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }
    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }
    .sidebar-backdrop {
        /* background-color: rgba(19, 15, 64, .4); */
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    .sidebar-panel {
        overflow-y: auto;
        background-color:#222222;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        /* padding: 3rem 20px 2rem 20px; */
        width: 300px;
    }
    .sidebar-panel li,a{
      list-style: none;
      font-family: 'Roboto',sans-serif;
      font-weight: 300;
      font-size:17px;
      padding:30px;
    }
</style>
