<template>
    <button @click="onClick()" :style="{background:color}" class="btn">{{text}}</button>
</template>
<script>
export default {
    name: "ButtonComp",
    props: {
        color: String,
        text: String,
    },
    methods: {
        onClick() {
            this.$emit("btn-click");
        }
    }
}
</script>