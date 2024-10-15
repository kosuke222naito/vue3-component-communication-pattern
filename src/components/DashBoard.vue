<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import type { User } from "@/types";
import UserProfileEdit from "@/components/UserProfileEdit.vue";

const user: Ref<User> = ref({
  name: "山田太郎",
  email: "yamada.taro@example.com",
  avatar: "https://i.pravatar.cc/150?img=3",
});

const successMessage: Ref<string | null> = ref(null);

const updateUser = (updatedUser: User) => {
  if (
    user.value.name === updatedUser.name &&
    user.value.email === updatedUser.email &&
    user.value.avatar === updatedUser.avatar
  ) {
    return;
  }

  user.value = { ...updatedUser };
  successMessage.value = "プロフィールが更新されました。";

  setTimeout(() => {
    successMessage.value = null;
  }, 2000);
};
</script>

<template>
  <div flex="~ col" items-center p-6 bg-gray-50 min-h-screen>
    <h1 text-3xl font-semibold mb-6>管理ダッシュボード</h1>

    <div flex="~ col" gap-4 mb-6 p-4 bg-white shadow-md rounded-md w-96>
      <h2 text-xl font-semibold>現在のユーザー情報</h2>

      <div flex justify-center mt-4>
        <img
          :src="user.avatar"
          alt="Avatar"
          class="w-24 h-24 rounded-full border-2 border-gray-300 shadow-md"
        />
      </div>
      <p>名前: {{ user.name }}</p>
      <p>メール: {{ user.email }}</p>
    </div>

    <UserProfileEdit :user @update-user="updateUser" />

    <p v-if="successMessage" mt-4 text-green-600>
      {{ successMessage }}
    </p>
  </div>
</template>
