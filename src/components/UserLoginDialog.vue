<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useLoginStore } from "@/stores/useLogin";
import BaseDialog from "@/components/base/BaseDialog.vue";

const useLogin = useLoginStore();

const showUserDetails = ref<boolean>(false);

onMounted(() => {
  if (useLogin.userId) {
    showUserDetails.value = true;
  }
});

const title = computed(() => {
  return useLogin.userId ? "You are logged in" : "You are not logged in";
});

const bodyText = computed(() => {
  return useLogin.userId ? `Your account id is ${useLogin.userId}` : "";
});
</script>

<template>
  <BaseDialog v-model="showUserDetails" :title="title" :body-text="bodyText" />
</template>
