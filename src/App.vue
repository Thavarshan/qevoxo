<template>
    <div id="app" class="antialiased h-screen min-h-screen leading-normal bg-gray-900 text-gray-600 overflow-x-hidden">
        <header>
            <Nav />
        </header>

        <main role="main">
            <!-- Content Area -->
            <router-view></router-view>
        </main>

        <footer>
            <Credits />
        </footer>
    </div>
</template>

<script>
    import Nav from './components/Nav';
    import Credits from './components/Credits';

    export default {
        name: 'App',

        components: {
            Nav,
            Credits
        },
    }
</script>

