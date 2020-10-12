<template>
    <div class="">
        <div class="echarts"></div>
        <div class="content">
            <div class="earning">
                <span class="earning-yuan"></span>
                <span>收入</span>
                {{'总价' + this.data.tagRecordList[2] + '元'}}
                <div :key="index" v-for="(earning , index ) in this.data.tagRecordList[0] ">
                    <h3> {{earning.selectedDate}}</h3>
                    <Icon :name="earning.selectedIco"></Icon>
                    <p>
                        {{earning.output + '元'}}
                    </p>
                </div>

            </div>
            <div class="pay">
                <span class="pay-yuan"></span>
                <span>支出</span>
                {{'总价' + this.data.tagRecordList[3]+ '元'}}
                <div :key="index" v-for="( pay, index ) in this.data.tagRecordList[1] ">
                    <h3>{{pay.selectedDate}}</h3>
                    <Icon :name="pay.selectedIco"></Icon>
                    <p>
                        {{pay.output + '元'}}
                    </p>
                </div>


            </div>
            <!--            <h3 v-for="(Tag,index) in data.tagRecordList" :key="index">
                            {{Tag}}
                        </h3>-->

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class TagRecordList extends Vue {
        @Prop() data!: {};
        mounted(){
            console.log(this.data);
        }

    }
</script>

<style lang="scss" scoped>

</style>