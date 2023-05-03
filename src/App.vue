<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>solytic fe</div>

    <div class="">
      <nav>
        <RouterLink to="/login">Log in</RouterLink>

        <RouterLink to="/details">User details</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
