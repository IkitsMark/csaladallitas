<template>
    <a 
    class="nav-link" 
    :class="activeClasses" 
    aria-current="page" 
    :href="page.link.url"
    :title="`Ez a gomb a ${page.link.text}-ra/re navigál.`"
    @click.prevent="$emit('click')">
    {{ page.link.text }}
    </a>
</template>

<script>
export default {
    computed: {
        activeClasses() {
            return {
                active: this.isActive,
                emphasize: this.isActive
            };
        }
    },
    props: {
        page: {
            type: Object,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
.emphasize {
    text-decoration: underline !important
}
</style>