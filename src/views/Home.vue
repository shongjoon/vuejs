<template>
    <div>
        <h1>this is Home page</h1>
        <p>{{ name }} </p>
        <Joony title="props home" myName="props joony"/>
        <h1>this first form </h1>
        <form action="">
            <InputField :propsName="propsName" @emitName="updateName" firstCheck /> 
            <!-- 자식 컴포넌트에서 직접 보내면 위에서 updateName 대신 $event.target.value 로 받음  -->
            <Button>submit</Button>
            {{ propsName }}
        </form>
        <h1>this secont form </h1>
        <form action="">
            <InputField v-model="propsSecontName" secondCheck/> 
            <!-- 자식 컴포넌트에서 직접 보내면 위에서 updateName 대신 $event.target.value 로 받음  -->
            <Button>submit</Button>
            {{ propsSecontName }}
        </form>
    </div>
</template>

<script>
import Joony from '@/components/Joony'
import InputField from '@/components/inputField'
export default {
    components: {
        Joony,
        InputField
    },
    data() {
        return {
            name: 'joony',
            propsName: '',
            propsSecontName: ''
        }
    },
    methods: {
        updateName(name) {
            this.propsName = name
        }
    }
}
</script>

<style scoped>
    h1 {
        color:orange;
    }
</style>