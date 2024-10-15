<script setup lang="ts">
import type { Ref } from "vue";
import type { User } from "@/types";

const user: Ref<User> = defineModel("user", { required: true });
</script>

<template>
  <div p-6 bg-white shadow-md rounded-md w-96>
    <h2 text-2xl font-semibold mb-4>ユーザー情報編集</h2>
    <form @submit.prevent class="space-y-4">
      <div>
        <label block mb-1>名前:</label>
        <input
          type="text"
          v-model="user.name"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label block mb-1>メール:</label>
        <input
          type="email"
          v-model="user.email"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label block mb-1>アバターURL:</label>
        <input
          type="url"
          v-model="user.avatar"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
    </form>
  </div>
</template>
