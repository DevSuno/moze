<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
body {
    background: $bg;
    color: $color;
    font-family: $font-hei;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>
