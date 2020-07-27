<template>
    <section class="py-8">
        <div class="container mx-auto px-6">
            <span class="text-sm text-gray-700">&copy; {{ year }} Qevoxo</span>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            year() {
                const date = new Date;

                return date.getFullYear();
            }
        }
    }
</script>
