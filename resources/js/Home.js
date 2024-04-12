export default {
    name: 'Home',
    mounted() {
        console.log('Home component mountedd.');
    },
    methods: {
        showMe() {
            alert('You clicked me!');
        }
    },
}