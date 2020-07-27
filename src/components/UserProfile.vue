<template>
    <div class="grid grid-rows-1 grid-cols-12">
        <div class="col-span-12 sm:col-span-10 md:col-span-7 lg:col-span-5 xl:col-span-4">
            <div>
                <h3 class="text-white text-3xl font-bold">Let's get started</h3>

                <h6 class="text-gray-500">You are signed in as, <span class="text-blue-500">{{ user.email }}</span></h6>
            </div>

            <div class="mt-6">
                <div class="rounded-lg overflow-hidden shadow">
                    <div class="bg-gray-800 bg-opacity-25 px-4 py-3 flex items-start">
                        <div>
                            <i class="fas fa-info-circle text-gray-700"></i>
                        </div>

                        <div class="ml-4">
                            <span class="text-sm">Choose a already existing channel or create a new one to get started.</span>
                        </div>
                    </div>
                </div>
            </div>

            <ChatList :uid="user.uid" />
        </div>
    </div>
</template>

<script>
    import { auth } from "../firebase";
    import ChatList from './ChatList';

    export default {
        components: {
            ChatList
        },

        props: ['user'],

        data() {
            return {
                auth
            }
        },
    }
</script>
