<script setup lang="ts">
import { ref, watch } from "vue";
import type { Ref } from "vue";
import type { User } from "@/types";

const props = defineProps<{ user: User }>();

const emit = defineEmits<{
  "update-user": [updatedUser: User];
}>();

const localUser: Ref<User> = ref({ ...props.user });

watch(props.user, newUser => {
  localUser.value = { ...newUser };
});

const saveProfile = () => {
  emit("update-user", { ...localUser.value });
};
</script>

<template>
  <div class="p-6 bg-white shadow-md rounded-md w-96">
    <h2 class="text-2xl font-semibold mb-4">ユーザー情報編集</h2>
    <form @submit.prevent="saveProfile" class="space-y-4">
      <div>
        <label class="block mb-1">名前:</label>
        <input
          type="text"
          v-model="localUser.name"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label class="block mb-1">メール:</label>
        <input
          type="email"
          v-model="localUser.email"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label class="block mb-1">アバターURL:</label>
        <input
          type="url"
          v-model="localUser.avatar"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          保存
        </button>
      </div>
    </form>
  </div>
</template>
