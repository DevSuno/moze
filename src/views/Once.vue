<template>
    <Layout class-prefix="layout">
        <Topbar @update="saveRecord"></Topbar>
        <Tabs @selectedTab="selectedTab"
        ></Tabs>
        <Ico :earningArr="earningArr"
             :payArr="payArr"
             @updateSelectedIco="selectedIco"
        ></Ico>
        <Message
                @updateNote="userNote"
                @updateOutput="userOutput"
                @updateShowKeyboard="showKeyboard"/>
        <Keyboard :buttonArr="buttonArr"
                  :keyboardIconArr="keyboardIconArr"
                  @update="saveRecord"
                  @updateOffKeyboard="offKeyboard"
                  v-show="isShowKeyboard"/>

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
    import clone from '@/lib/clone';

    @Component({
        components: { Keyboard, Message, Ico, Tabs, Topbar, }
    })

    export default class Once extends Vue {
        @Provide() eventBus = new Vue();

        isShowKeyboard = false;
        recordItem: recordItem = {
            selectedTag: '支出',
            selectedIco: 'eat',
            selectedText: '饮食',
            selectedDate: this.selectedDate,
            currentTime: this.$store.state.currentTime,
            output: '',
            note: ''
        };
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
        keyboardIconArr: {} = [
            { name: 'backspace' },
            { name: 'empty' },
            { name: 'true' },
        ];
        buttonArr: {} = [
            { text: '1' },
            { text: '2' },
            { text: '3' },
            { text: '4' },
            { text: '5' },
            { text: '6' },
            { text: '7' },
            { text: '8' },
            { text: '9' },
            { text: '.' },
            { text: '0' },
            { text: '00' },

        ];

        get selectedDate() {
            return this.$store.state.selectedDate;
        }

        selectedIco(icoName: string) {
            this.recordItem.selectedIco = icoName;
        }

        selectedTab(tagName: string) {
            this.recordItem.selectedTag = tagName;
        }

        userOutput(output: string) {
            this.recordItem.output = output;
        }

        userNote(value: string) {
            this.recordItem.note = value;
        }

        offKeyboard(off: boolean) {
            this.isShowKeyboard = off;
        }

        showKeyboard(showKeyboard: boolean) {
            this.isShowKeyboard = showKeyboard;
        }

        saveRecord() {
            if (this.recordItem.selectedTag !== '') {
                if (this.recordItem.selectedIco !== '') {
                    if (this.recordItem.output !== '') {
                        const newRecordItem = clone(this.recordItem);
                        this.$store.commit('updateRecordList', newRecordItem);
                        window.localStorage.setItem('recordList',
                            JSON.stringify(this.$store.state.recordList));
                        this.eventBus.$emit('reset');
                        alert('已保存');
                        console.log(this.$store.state.recordList);
                    } else {
                        window.alert('请输入金额');
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>