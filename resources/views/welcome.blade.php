<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <h1>Hello World</h1>
        <button-vue />
    </div>
    @vite(['resources/js/app.js'])
    <script type="module">
        window.$vue = window.createApp(window.vueMachines['home']);
        window.$vue.mount('#app');
    </script>
</body>
</html>