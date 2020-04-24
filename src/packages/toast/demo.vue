<template>
    <section>
            <div @click="handleClick">哈哈哈</div>
    </section>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {

        }
    },

    mounted() {
    },

    methods: {
        handleClick() {
            this.$toast.text('提示信息');
        }
    }
}
</script>

<style scoped lang="scss">
</style>
