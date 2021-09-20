<template>
    <div>
        <h1>{{ title }} </h1>
        <button @click="showSlot">show slot</button>
        <slot v-if="showSlotData" name="header" :slotData="slotData"></slot>
        <slot v-if="showSlotData" name="body"></slot>
        <slot v-if="showSlotData"></slot>
        <h1>{{ name }} </h1>
        <h1>{{ myName }} </h1>
        <button @click="updateName">change name</button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'default title'
        },
        myName: {
            type: String,
            default: 'default name'
        }
    },
    data() {
        return {
            slotData: '슬롯데이타',
            name : 'joony',
            showSlotData: false

        }
    },
    methods: {
        updateName() {
            this.name = 'joony updated'
        },
        showSlot() {
            this.showSlotData = true
        }
    }
}
</script>

<style scoped>

</style>