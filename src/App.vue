<script setup lang="ts">
import { RouterView } from "vue-router";
import BaseHeader from "@/components/base/BaseHeader.vue";
</script>

<template>
  <BaseHeader />

  <main class="md:container md:mx-auto px-4 md:px-0 pb-4 md:pb-0 relative">
    <RouterView />
  </main>
</template>
