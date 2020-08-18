<template>
    <svg @click="$emit('click', $event)" class="icon">
        <use :xlink:href="'#'+name"/>
    </svg>
</template>

<script lang="ts">
    try {
        const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
        importAll(require.context("../assets/icons",true,/\.svg$/))
    }catch (e) {
        console.log(e)
    }
    export default {
        props: ['name'],
        name: 'Icon'
    };
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
