import ButtonVue from './components/Button.vue';
export default {
    name: 'Home',
    components: {
        'button-vue': ButtonVue
    },
    mounted() {
        console.log('Home component mountedd.');
    },
    methods: {
        showMe() {
            alert('You clicked me!');
        }
    },
}