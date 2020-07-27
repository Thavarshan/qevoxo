<template>
    <div id="app" class="antialiased h-screen min-h-screen leading-normal bg-gray-900 text-gray-600 overflow-hidden">
        <header>
            <Nav />
        </header>

        <main role="main">
            <!-- Content Area -->
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import Nav from './components/Nav';

    export default {
        name: 'App',

        components: {
            Nav,
        },
    }
</script>

