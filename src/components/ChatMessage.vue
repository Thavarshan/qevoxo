<template>
    <div class="overflow-hidden shadow" :class="owner ? 'rounded-t-lg rounded-l-lg' : 'rounded-b-lg rounded-r-lg'">
        <div class="max-w-lg px-4 py-3" :class="owner ? 'bg-blue-400 text-white' : 'bg-gray-900 text-white'">
            <div>
                {{ message.text }}
            </div>

            <div class="text-xs opacity-50 text-white mt-1">
                {{ diffForHumans(message.createdAt) }}
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        props: ['message', 'owner'],

        methods: {
            diffForHumans(timestamp) {
                return moment(timestamp).fromNow();
            }
        }
    }
</script>
