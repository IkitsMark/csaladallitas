<template>
    <nav :class="[`navbar-${theme}`, `bg-${theme}`, `navbar`, `navbar-expand-lg`]">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Csalládállítás Veszprém</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class='nav-item' v-for="page in pages" :key="page.link.url">
                    <router-link :to="page.link.url" class='nav-link' active-class="active"
                        :title="`Ez a gomb a ${page.link.text}-ra/re navigál.`">
                        {{ page.link.text }}
                    </router-link>
                </li>
            </ul>
            <form class="d-flex">
                <button class="btn btn-primary" @click.prevent="$emit('toggle-theme')">Mód Váltás
                </button>
            </form>
        </div>
    </nav>
</template>

<script>

export default {
    props: {
        theme: String
    },
    data() {
        return {
            pages: [
                { link: { text: 'Főoldal', url: '/' } },
                { link: { text: 'Kapcsolat', url: '/contact' } },
                { link: { text: 'Rólam', url: '/about' } }
            ]
        }
    }
};
</script>