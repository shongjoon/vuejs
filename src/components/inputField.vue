<template>
    <div>
        <div v-if="firstCheck">
            <label for="">name</label>
            <input type="text" :value="propsName" @input="updateName" />
        <!-- updateName 함수를 사용하는 대신 $emit('emitName', $event) 직접 보낼수 있음  -->
        </div>
        <div v-if="secondCheck">
            <label for="">name</label>
            <input type="text" :value="value" @input="$emit('input', $event.target.value) " />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        propsName: {
            type: String,
            // required: true
        },
        value: {
            type:String
        },
        firstCheck: {
            type:Boolean,
        },
        secondCheck: {
            type:Boolean,
        }
    },
    methods: {
        updateName(e) {
            console.log(e.target.value)
            this.$emit('emitName', e.target.value)
        }
    }
}
</script>