<template>
    <navbarComp :theme="theme" @toggle-theme="toggleTheme" />
    <router-view :theme="theme" />
    <p>simple text</p>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';

export default {
    components: {
        NavbarComp
    },
    data() {
        return {
            theme: 'light'
        };
    },
    created() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) this.theme = savedTheme;
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', this.theme);
        }
    }
};
</script>