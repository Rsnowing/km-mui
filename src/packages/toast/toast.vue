<template>
    <transition name="toastfade">
        <div 
            v-if="visible"
            :class="toastClass"
        >
            <div class="km-toast-inner">
                <span class="km-toast-text" v-html="msg"></span>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'KmToast',
    components: {},

    props: {},

    data() {
        return {
            visible: false,
            msg: ''
        }
    },

    computed: {
        toastClass() {
            return [
                'km-toast'
            ]
        }
    },

    mounted() {
    },

    methods: {
    }
}
</script>

<style scoped lang="scss">
</style>
