<template>
    <div>
        <div class="mt-6">
            <button class="btn btn-primary inline-flex items-center" @click="createChatRoom()">
                <span v-show="loading" class="mr-2">
                    <i class="fas fa-spinner fa-pulse"></i>
                </span>

                <span>Create new chat room</span>
            </button>
        </div>

        <div class="mt-10">
            <h3 class="text-white text-lg font-bold">Recent Chats</h3>
        </div>

        <div class="my-4 h-px border-b border-gray-800"></div>

        <div>
            <div v-if="chats.length > 0">
                <div v-for="chat in chats" :key="chat.id" class="mb-4 rounded-lg overflow-hidden">
                    <div class="block bg-gray-800 px-4 py-3">
                        <div>
                            <div class="flex items-start justify-between">
                                <span class="text-xs font-semibold text-gray-500">Channel ID</span>

                                <router-link class="text-sm text-blue-400 inline-flex items-center" :to="{ name: 'chat', params: { id: chat.id } }">
                                    <span>Join</span> <span class="ml-1">&rarr;</span>
                                </router-link>
                            </div>

                            <div>
                                <span class="text-white font-bold">{{ chat.id }}</span>
                            </div>
                        </div>

                        <div class="mt-2">
                            <div class="flex items-end justify-between">
                                <span class="text-xs text-gray-600">{{ diffForHumans(chat.createdAt) }}</span>

                                <button v-if="uid === chat.owner" @click="deleteChat(chat.id)" class="text-xs text-red-500 hover:text-red-600">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="text-sm text-gray-600">No chats found</div>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebase';
    import moment from 'moment';

    export default {
        props: ['uid'],

        data() {
            return {
                loading: false,
                chats: []
            }
        },

        firestore() {
            return {
                chats: db.collection('chats').where('members', 'array-contains', this.uid)
            }
        },

        methods: {
            async createChatRoom() {
                this.loading = true;

                const newChat = await db.collection('chats').add({
                    createdAt: Date.now(),
                    owner: this.uid,
                    members: [this.uid]
                });

                if (newChat) {
                    this.loading = false;
                }
            },

            async deleteChat(chatId) {
                await db.collection('chats').doc(chatId).delete();
            },

            diffForHumans(timestamp) {
                return moment(timestamp).fromNow();
            }
        }
    }
</script>
