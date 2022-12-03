<script setup lang="ts">
    import { useState } from '#app';
    const user = useState('user')
</script>


<template>
    <div class="relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <button @click="registerWithEmail('raphael', 'raphael', 'raphael', '123admin')">
                Sign Up
            </button>
            <div>
                {{user}}
            </div>
        </div>
    </div>
</template>