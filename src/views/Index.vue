<template>
    <div class="index">
        <MyHeader :name="MyName" />
        <p>这里是首页content</p>

        <p @click="pre_skill"> {{ MyName }} </p>
       
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { State, Action, Getter } from "vuex-class";
    import MyHeader from '@components/header.vue'

    // @Component 修饰符注明了此类为一个 Vue 组件
    @Component({
        components: {
            MyHeader
        }
    })
    class Index extends Vue {
        @State('userData') userData: StoreState.UserData;
        @Action updateUser: (payload: object) => void;

        name: string = "yueqi";
        skill: Array<any> = ['流翼']

        // computed
        get MyName(): string {
            console.log(this.userData)
            return  `你好， ${this.userData.name}`
        }

        // method
        pre_skill(): void {
            console.log(`${this.name}使用了技能${this.skill[0]}`);
        }

        mounted(): void {
            // 更新vuex中的数据
            this.updateUser({name: "十方", skilll: ["豆包"]});

            console.log(this.axios)

        }
    }

    export default Index
</script>

<style lang="less" scoped>
    .index{
        width: 100%;
        height: 1000px;
        background: #0cd;
    }
</style>



