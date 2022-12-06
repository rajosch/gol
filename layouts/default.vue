<script setup lang="ts">
    import Navbar from "~/components/layout/navbar.vue"
</script>

<template>
    <div class="h-screen bg-gradient-to-br from-dark-gray-lightest to-dark-gray-lighter">
        <Navbar />
        <slot />
    </div>
</template>