<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { LOGIN } from "@/graphql/login";
import { ref } from "vue";

defineProps<{
  title?: string;
  likes?: number;
}>();

const loginOptions = ref({
  user: {
    emailAddress: "user@name.com",
    password: "passwd"
  }
});

const { result, loading, error } = useQuery<{}>(LOGIN, loginOptions.value.user);
</script>

<template>
  <h1>Login page</h1>

  <div>result - {{ result }}</div>
  <div>loading - {{ loading }}</div>
  <div>error - {{ error }}</div>
</template>
