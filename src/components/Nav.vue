<template>
    <nav class="nav">
        <router-link class="item" to="/total">
            <Icon name="total"/>
        </router-link>

        <router-link class="item" to="/once" v-if="isRouteRecord">
            <div @click="goOnce" class="addwrapper">
                <Icon class="add" name="add"/>
                <div class="after" v-show="isRouteRecord"></div>
            </div>
        </router-link>

        <router-link class="item" to="/record" v-else>
            <Icon name="logo"/>
        </router-link>


        <router-link class="item" to="/statement">
            <Icon name="statement"/>
        </router-link>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, } from 'vue-property-decorator';

    @Component
    export default class Nav extends Vue {
        get isRouteRecord() {
            return this.$route.path === '/record';
        }

        goOnce() {
            this.$router.push({
                name: 'Once',
                params: {}
            });
        }

        created() {
            return this.isRouteRecord;
        }

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/reset.scss";
    @import "~@/assets/style/helper.scss";

    .nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 8px 0;
        line-height: 34px;
        font-size: 34px;
        background: $navbg;

        > .item {
            &:nth-child(2) {
                position: relative;

                > .addwrapper {

                    > .after {
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        height: 1em;
                        width: 1em;
                        border: 3px solid $color-blueselected;
                        border-radius: 50%;

                    }
                }


            }


        }
    }
</style>