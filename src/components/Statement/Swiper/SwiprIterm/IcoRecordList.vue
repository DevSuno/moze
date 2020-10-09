<template>
    <div class="">
        <div class="echarts"></div>
        <div class="content" >
            <h3 >类别、ICO</h3>
            <span class="earning-yuan"></span>
            <span>收入</span>
            <span class="pay-yuan"></span>
            <span>支出</span>
<!--            <Icon name="'ico.selectedIco'"
                  v-for="(ico ,index) in this.data.icoRecordList " :key="index"></Icon>
            {{ico.selectedIco}}-->
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class IcoRecordList extends Vue {
        @Prop() data!: {};
/*mounted(){
    console.log(this.data.icoRecordList.selectedIco);
}*/
    }
</script>

<style lang="scss" scoped>

</style>