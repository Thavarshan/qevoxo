<template>
    <section class="py-6">
        <div class="container mx-auto px-6">
            <div class="grid grid-rows-1 grid-cols-12 gap-6">
                <div class="lg:col-span-3">
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
                            <div class="text-sm text-gray-600">
                                <div>
                                    Invite other members by sharing the link
                                </div>

                                <div class="mt-2">
                                    <span class="font-semibold text-blue-500">{{ chatLink }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-9">
                    <div class="rounded-lg overflow-hidden">
                        <div class="px-4 py-5 sm:px-6 bg-gray-800 text-gray-500 text-center h-custom overflow-auto">
                            <div>
                                <div class="mb-4 flex items-center justify-start">
                                    <div class="rounded-b-lg rounded-r-lg overflow-hidden">
                                        <div class="px-4 py-5 sm:px-6 bg-gray-700 text-gray-300">
                                            Maecenas faucibus mollis interdum.
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-4 flex items-center justify-end">
                                    <div class="rounded-t-lg rounded-l-lg overflow-hidden">
                                        <div class="px-4 py-5 sm:px-6 bg-blue-400 text-white">
                                            Maecenas faucibus mollis interdum.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6">
                        <div>
                            <textarea class="form-textarea block w-full resize-y text-gray-300 bg-gray-900 focus:bg-gray-800 focus:bg-opacity-50 border-gray-800 focus:border-gray-700" name="message" id="message" rows="2" placeholder="Type a message..."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            chatId() {
                return this.$route.params.id;
            },

            chatLink() {
                return location.href;
            }
        }
    }
</script>

<style scoped>
    .h-custom {
        height: 30rem;
    }
</style>
