<template>
    <div>
        <div>
            <div>
                <h3 class="text-white text-3xl font-bold">Welcome</h3>

                <h6 class="text-gray-500">Logged in as {{ user.email }}</h6>
            </div>
        </div>
    </div>
</template>

<script>
    import { auth } from "../firebase";

    export default {
        props: ['user'],

        data() {
            return {
                auth
            }
        }
    }
</script>
