<template>
    <div>
        <h1>this about page</h1>
        <Joony>
            <!-- v-slot 는 # 사용가능 -->
            <template v-slot:header="{ slotData }">
                <button>{{ slotData }}</button>
            </template>
            <template #body>
                <button>슬롯2</button>
            </template>
            <template #default>
                <button>슬롯3</button>
            </template>
        </Joony>
    </div>
</template>

<script>
import Joony from "@/components/Joony";
export default {
    components: {
        Joony,
    },
};
</script>