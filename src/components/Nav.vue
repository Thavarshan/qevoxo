<template>
    <nav class="h-16 flex items-center bg-gray-900">
        <div class="container mx-auto px-6">
            <div class="flex items-center justify-between">
                <a href="/" class="block">
                    <span class="font-black uppercase tracking-wider text-white">Qevoxo</span>
                </a>

                <div class="ml-10 flex-1 flex items-center justify-between">
                    <ul class="flex items-center">
                        <!--  -->
                    </ul>

                    <ul class="flex items-center">
                        <User v-slot:user="{ user }">
                            <li v-if="user">
                                <a @click="auth.signOut()" class="btn btn-primary inline-flex items-center leading-8" href="/">
                                    <i class="fas fa-sign-out-alt"></i>

                                    <span class="ml-1">Sign out</span>
                                </a>
                            </li>
                        </User>
                    </ul>
                </div>
            </div>

            <div class="mt-3 h-px w-full border-b border-gray-800"></div>
        </div>
    </nav>
</template>

<script>
    import User from './User';
    import { auth } from '../firebase';

    export default {
        components: {
            User,
        },

        data() {
            return {
                auth
            }
        }
    }
</script>
