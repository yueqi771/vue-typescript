<template>
    <div class="header">
        <div class="header-link">
            <router-link to="/index">Index</router-link> |
            <router-link to="/home">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>

        <p>这里是父组件穿过来的数据{{ name }}</p>
        
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';


    @Component
    class MyHeader extends Vue {
        @Prop() name: string;
    }

    export default MyHeader;

</script>

<style lang="less" scoped>
    .header{
        width: 100%;
        border: 1px solid #555;
        height: 60px;
        text-align: center;
        line-height: 60px;
        color: #fff;
       

        .header-link{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>

