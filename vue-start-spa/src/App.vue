<template>
        <navbarComp 
    :pages="pages" 
    :active-page="activePage" 
    :nav-link-click="(index)=>activePage = index"
        ></navbarComp>

    <page-viewer 
    :page="pages[activePage]"
    ></page-viewer>
    <p>simple text</p>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import PageViewer from './components/PageViewer.vue';



export default {
    components: {
        NavbarComp,
        PageViewer
    },
    data() {
                return {
                    activePage: 0,
                    pages: [
                        {
                            link: { text: 'Főoldal', url: 'home.html' },
                            pageTitle: 'Fő Oldal',
                            content: 'Ez itt a főoldal.'
                        },
                        {
                            link: { text: 'Kapcsolat', url: 'contact.html' },
                            pageTitle: 'Kapcsolat',
                            content: 'A kapcsolatokat tartalmazó oldal.'
                        },
                        {
                            link: { text: 'Rólam', url: 'about.html' },
                            pageTitle: 'Rólam',
                            content: 'Ez az oldal rólam szól.'
                        },
                    ]
                };
            },
}
</script>