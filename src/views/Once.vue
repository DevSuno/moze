<template>
    <Layout class-prefix="layout">
        <Topbar></Topbar>
        <Tabs></Tabs>
        <Ico :earningArr="earningArr"
             :payArr="payArr"></Ico>
        <Message @updateShowKeyboard="showKeyboard"/>
        <Keyboard :keyboardArr="keyboardArr" @updateOffKeyboard="offKeyboard" v-show="isShowKeyboard"/>

    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Provide, } from 'vue-property-decorator';
    import Topbar from '@/components/Once/Topbar.vue';
    import Tabs from '@/components/Once/Tabs.vue';
    import Ico from '@/components/Once/Ico.vue';
    import Message from '@/components/Once/Message.vue';
    import Keyboard from '@/components/Once/Keyboard.vue';

    @Component({
        components: { Keyboard, Message, Ico, Tabs, Topbar, }
    })

    export default class Once extends Vue {
        @Provide() eventBus = new Vue();

        isShowKeyboard = false;
        payArr: {} = [
            { name: 'eat', text: '饮食' },
            { name: 'traffic', text: '交通' },
            { name: 'recreation', text: '娱乐' },
            { name: 'hospital', text: '医院' },
            { name: 'family', text: '家庭' },
            { name: 'shop', text: '购物' },
            { name: 'other', text: '其他' }
        ];
        earningArr: {} = [
            { name: 'wage', text: '工资' },
            { name: 'bonus', text: '奖金' },
            { name: 'repayment', text: '还款' },
            { name: 'interest', text: '利息' },
            { name: 'otherCopy', text: '其他' }
        ];
        keyboardArr: {} = [
            { name: 'backspace' },
            { name: 'empty' },
            { name: 'true' },
        ];
        buttonArr: {} = [
            { text: 1 },
            { text: 2 },
            { text: 3 },
            { text: 4 },
            { text: 5 },
            { text: 6 },
            { text: 7 },
            { text: 8 },
            { text: 9 },
            { text: '.' },
            { text: 0 },
            { text: '00' },

        ];

        offKeyboard(off: boolean) {
            this.isShowKeyboard = off;
        }

        showKeyboard(showKeyboard: boolean) {
            this.isShowKeyboard = showKeyboard;
        }

    }
</script>

<style lang="scss" scoped>

</style>