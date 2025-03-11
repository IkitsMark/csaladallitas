<template>
        <a 
        class="nav-link" 
        :class="activeClasses" 
        aria-current="page" 
        :href="page.link.url"
        :title="`Ez a gomb a ${page.link.text}-ra/re navigál.`">
        {{page.link.text }}
                            </a>
</template>

<script>
export default{
    props:['page', 'isActive'],
    computed:{
        activeClasses() {
            return {
                active: this.isActive,
                emphasize: this.isActive
            };
        }
    }
}
</script>

<style scoped>
.emphasize {
    text-decoration: underline !important
}</style>