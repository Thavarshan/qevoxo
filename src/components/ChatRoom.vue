<template>
    <section class="py-6">
        <div class="container mx-auto px-6">
            <User v-slot:user="{ user }">
                <div v-if="user" class="grid grid-rows-1 grid-cols-12 gap-6">
                    <div class="col-span-12 lg:col-span-3">
                        <div class="text-gray-500">
                            <div>
                                <span class="text-sm font-medium text-gray-500">Channel:</span>

                                <span class="ml-2 px-2 py-1 inline-flex items-center rounded-lg bg-gray-800 text-sm font-semibold text-gray-500 uppercase">
                                    <span class="h-2 w-2 rounded-full overflow-hidden bg-green-500"></span>

                                    <span class="ml-1">{{ chatId }}</span>
                                </span>
                            </div>

                            <div class="border-b border-gray-800 my-3"></div>

                            <div>
                                <div class="text-sm text-gray-600 whitespace-pre-wrap">
                                    <div>
                                        Invite other members by sharing the link
                                    </div>

                                    <div class="mt-2">
                                        <span class="font-semibold text-blue-500">
                                            {{ chatLink }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 lg:mt-0 col-span-12 lg:col-span-9">
                        <div>
                            <div class="rounded-lg overflow-hidden">
                                <simplebar class="px-4 py-5 sm:px-6 bg-gray-800 text-gray-500 h-custom overflow-auto">
                                    <div>
                                        <div v-for="message in messages" :key="message.id" class="mb-4 flex items-center" :class="user.uid === message.sender ? 'justify-end' : 'justify-start'">
                                            <ChatMessage :message="message" :owner="user.uid === message.sender" />
                                        </div>
                                    </div>
                                </simplebar>
                            </div>

                            <div class="mt-6">
                                <div class="flex items-start">
                                    <textarea v-model="newMessage" class="mr-6 flex-1 form-textarea block w-full resize-y text-gray-300 bg-gray-900 focus:bg-gray-800 focus:bg-opacity-50 border-gray-800 focus:border-gray-700" name="message" id="message" rows="2" placeholder="Type a message..."></textarea>

                                    <button :disable="!newMessage || loading" @click="addMessage(user.uid)" class="btn btn-primary rounded-full inline-flex items-center justify-center h-10 w-10">
                                        <span v-if="loading">
                                            <i class="fas fa-spinner fa-pulse"></i>
                                        </span>

                                        <span v-else>
                                            <i class="fas fa-paper-plane"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Login v-else />
            </User>
        </div>
    </section>
</template>

<script>
    import { db } from '../firebase';
    import User from './User';
    import Login from './Login';
    import ChatMessage from './ChatMessage';
    import simplebar from 'simplebar-vue';
    import 'simplebar/dist/simplebar.min.css';

    export default {
        components: {
            User,
            Login,
            ChatMessage,
            simplebar
        },

        data() {
            return {
                newMessage: null,
                loading: false,
                messages: []
            }
        },

        firestore() {
            return {
                messages: this.messagesCollection
                    .orderBy('createdAt')
                    .limitToLast(10)
            };
        },

        computed: {
            chatId() {
                return this.$route.params.id;
            },

            chatLink() {
                return location.href;
            },

            messagesCollection() {
                return db.doc(`chats/${this.chatId}`).collection('messages');
            },
        },

        methods: {
            async addMessage(userId) {
                this.loading = true;

                const { id: messageId } = this.messagesCollection.doc();

                await this.messagesCollection.doc(messageId).set({
                    text: this.newMessage,
                    sender: userId,
                    createdAt: Date.now()
                });

                this.loading = false;
                this.newMessage = null;
            }
        }
    }
</script>

<style scoped>
    .h-custom {
        height: 33rem;
    }
</style>
