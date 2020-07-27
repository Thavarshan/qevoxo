<template>
    <div class="grid grid-rows-1 grid-cols-12">
        <div class="col-span-12 sm:col-span-10 md:col-span-7 lg:col-span-5 xl:col-span-4">
            <div>
                <h3 class="text-white text-3xl font-bold">{{ newUser ? 'Create an account' : 'Sign in' }}</h3>

                <h6 class="text-gray-500">Let's get you up and running with a private channel.</h6>
            </div>

            <div class="mt-6">
                <div>
                    <label class="block">
                        <span class="text-gray-500 text-sm font-semibold">Email</span>

                        <input type="email" name="email" id="email" class="form-input mt-1 block w-full text-gray-300 bg-gray-800 focus:bg-gray-700 border-gray-800 focus:border-gray-700" placeholder="john.doe@example.com" v-model="email" required>
                    </label>
                </div>

                <div class="mt-4">
                    <label class="block">
                        <span class="text-gray-500 text-sm font-semibold">Password</span>

                        <input type="password" name="password" id="password" class="form-input mt-1 block w-full text-gray-300 bg-gray-800 focus:bg-gray-700 border-gray-800 focus:border-gray-700" autocomplete="new-password" placeholder="doyourememberme" v-model="password" required>
                    </label>
                </div>

                <div v-if="error" class="mt-4" role="alert">
                    <span class="text-xs text-red-500 font-semibold">{{ error }}</span>
                </div>

                <div class="mt-8">
                    <div class="flex items-center">
                        <button @click="signInOrCreateUser()" class="btn btn-primary inline-flex items-center">
                            <span v-show="loading" class="mr-2">
                                <i class="fas fa-spinner fa-pulse"></i>
                            </span>

                            <span>
                                {{ newUser ? 'Create account' : 'Sign in' }} <span class="ml-1">&rarr;</span>
                            </span>
                        </button>

                        <a href="#" @click="newUser = !newUser" class="ml-4 text-sm" role="button">{{ newUser ? 'Already have an account?' : 'Don\'t have account yet?' }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { auth } from '../firebase';

    export default {
        data() {
            return {
                newUser: false,
                email: null,
                password: null,
                auth: auth,
                error: null,
                loading: false
            }
        },

        methods: {
            async signInOrCreateUser() {
                this.loading = true;
                this.error = null;

                try {
                    if (this.newUser) {
                        await auth.createUserWithEmailAndPassword(this.email, this.password);
                    } else {
                        await auth.signInWithEmailAndPassword(this.email, this.password);
                    }
                } catch (error) {
                    this.error = error.message;
                }

                this.loading = false;

                location.reload();
            },
        }
    }
</script>

