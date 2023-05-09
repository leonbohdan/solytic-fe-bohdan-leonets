<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useLoginStore } from "@/stores/useLogin";

const useLogin = useLoginStore();
</script>

<template>
  <header class="bg-violet-500 text-white shadow-md">
    <nav
      class="md:container md:mx-auto px-4 md:px-0 py-2 flex items-center justify-between font-mono"
    >
      <div class="min-w-0 flex-1">
        <RouterLink
          to="/"
          class="text-2xl leading-7 sm:truncate sm:text-3xl sm:tracking-tight"
          data-cy="home"
        >
          solytic fe
        </RouterLink>
      </div>

      <div>
        <RouterLink v-if="useLogin.userId" to="/details">User details</RouterLink>

        <RouterLink v-else to="/login" data-cy="login">Log in</RouterLink>
      </div>
    </nav>
  </header>
</template>
