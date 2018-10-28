<template>
    <div class="header">
        这里是导航栏组件 {{ nameProps }}
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { State, Action, Getter } from "vuex-class";

    @Component({
        props: {
            name: String,
        }
    })
    class MyHeader extends Vue{

        // computed
        get nameProps(): void {
            return this.name
        }
    }

    export default MyHeader;
</script>


<style lang="less" scoped>
    .header{
        width: 100%;
        // background: #555;
        border: 1px solid #555;
        height: 60px;
        text-align: center;
        line-height: 60px;
        color: #fff;
    }
</style>

