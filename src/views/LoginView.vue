<script setup lang="ts">
import { ref } from "vue";
import { useLoginStore } from "@/stores/useLogin";

const useLogin = useLoginStore();

defineProps<{
  title?: string;
  likes?: number;
}>();

const loginUserData = ref({
  user: {
    emailAddress: "user@name.com",
    password: "passwd"
  }
});

// useLogin.loginUser(loginUserData.value);
</script>

<template>
  <h1>Login page</h1>

  <div>userData - {{ useLogin.user }}</div>

  <div>loading - {{ useLogin.loginUserLoading }}</div>
</template>
