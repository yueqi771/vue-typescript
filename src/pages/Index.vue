<template>
    <div class="index">
        <p>这里是首页content</p>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { State, Action, Getter } from 'vuex-class';

    class Index extends Vue {
        @State userData: StoreState.UserData;
        @Action updateUser: (payload: object) => void;


        // computed
        get MyName(): string {
            return  `你好， ${this.userData.name}`
        }
        

 
    }
    export default Index;
</script>

<style lang="less" scoped>
    .index{
        width: 100%;
        height: 1000px;
        background: #0cd;
    }
</style>
