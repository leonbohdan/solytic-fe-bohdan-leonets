<script setup lang="ts">
defineProps<{
  title?: string;
  likes?: number;
}>();

const emit = defineEmits<{
  (e: "change", id: number): void;
  (e: "update", value: string): void;
}>();
</script>

<template>
  <div class="">
    <h1>Details page</h1>
  </div>
</template>

<style></style>
