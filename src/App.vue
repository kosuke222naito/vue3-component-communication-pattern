<script setup lang="ts">
import { ref } from "vue";

const hello = ref("Hello World!");
</script>

<template>
  <div grid h-full place-items-center>
    <span text="green-600 9xl">{{ hello }}</span>
  </div>
</template>
