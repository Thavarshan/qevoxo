<template>
    <section class="py-16">
        <div class="container mx-auto px-6">
            <User v-slot:user="{ user }">
                <UserProfile v-if="user" :user="user" />

                <Login v-else />
            </User>
        </div>
    </section>
</template>

<script>
    import User from './User';
    import UserProfile from './UserProfile';
    import Login from './Login';

    export default {
        components: {
            User,
            UserProfile,
            Login,
        }
    }
</script>

