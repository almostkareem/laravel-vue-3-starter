<template>
    <div>
        <button @click="onClick" class="btn btn-primary">Click me</button>
        <div>
            <img :src="logo" alt="Logo" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Button',
    data: function() {
        return {
            logo: new URL('../../assets/logo.svg', import.meta.url).href
        }
    },
    methods: {
        onClick() {
            alert('Button clicked');
        }
    }
}
</script>