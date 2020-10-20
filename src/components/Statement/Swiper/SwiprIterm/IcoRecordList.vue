<template>
    <div class="ico">
        <echarts :options="Options" class="total">
        </echarts>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    import Echarts from '@/components/Statement/echarts.vue';

    @Component({
        components: { Echarts }
    })
    export default class IcoRecordList extends Vue {
        @Prop() data!: {};
        get Options(){
            return {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                color:['#9fd26a', '#ea5e69', '#a4789f'],
                series: [
                    {
                        name: '类别',
                        type: 'pie',
                        radius: '70%',
                        center: ['45%', '45%'],
                        data: [
                            {value: this.data.icoRecordList[1], name: '支出'},
                            {value: this.data.icoRecordList[2], name: '余额'},
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }

        }
        mounted(){
            console.log(this.data);
        }
    }
</script>

<style lang="scss" scoped>
.ico {
    .total {
        width: 100vw;
        height: 250px;
    }
}
</style>