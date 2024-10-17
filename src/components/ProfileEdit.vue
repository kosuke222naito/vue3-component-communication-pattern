<script setup lang="ts">
import { ref, watch } from "vue";
import type { Ref } from "vue";
import type { User } from "@/types";

const { user } = defineProps<{ user: User }>();
const emit = defineEmits<{
  "update-user": [updatedUser: User];
}>();

const localUser: Ref<User> = ref({ ...user });

watch(
  () => user,
  newUser => {
    localUser.value = { ...newUser };
  },
);

const saveProfile = () => {
  emit("update-user", { ...localUser.value });
};
</script>

<template>
  <div p-8 bg-white shadow-md rounded-md w-full max-w-lg mx-auto>
    <h2 grid justify-center text-3xl font-semibold mb-4>編集</h2>
    <form @submit.prevent="saveProfile" space-y-4>
      <div>
        <label for="name">名前</label>
        <input
          id="name"
          type="text"
          v-model="localUser.name"
          w-full
          px-3
          py-2
          border
          rounded
          required
        />
      </div>

      <div>
        <label for="email">メール</label>
        <input
          id="email"
          type="email"
          v-model="localUser.email"
          w-full
          px-3
          py-2
          border
          rounded
          required
        />
      </div>

      <div>
        <label for="avatar">アバターURL</label>
        <input
          id="avatar"
          type="url"
          v-model="localUser.avatar"
          w-full
          px-3
          py-2
          border
          rounded
          required
        />
      </div>

      <div>
        <label for="bio">自己紹介</label>
        <textarea
          id="bio"
          v-model="localUser.bio"
          w-full
          px-3
          py-2
          border
          rounded
          rows="3"
          maxlength="80"
          required
        ></textarea>
      </div>

      <div grid justify-center>
        <button
          type="submit"
          px-8
          py-2
          bg-blue-600
          text-white
          rounded
          hover:bg-blue-700
          transition
        >
          保存
        </button>
      </div>
    </form>
  </div>
</template>
