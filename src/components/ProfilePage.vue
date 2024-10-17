<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import type { User } from "@/types";
import UserProfileEdit from "@/components/ProfileEdit.vue";

const user = ref<User>({
  name: "山田太郎",
  email: "yamada.taro@example.com",
  avatar: "https://i.pravatar.cc/150?img=3",
  bio: "趣味は読書と映画鑑賞です。",
  birthdate: new Date(1996, 1, 22),
});

const successMessage: Ref<string | null> = ref(null);

const updateUser = (updatedUser: User) => {
  const keysToCompare = ["name", "email", "avatar", "bio"] as const;

  const hasUpdatedProperty = keysToCompare.some(
    key => user.value[key] !== updatedUser[key],
  );

  if (!hasUpdatedProperty) {
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
  <section min-h-screen pt-12 bg-gray-3>
    <h1 text-3xl font-semibold text-center>プロフィール</h1>

    <div grid="~ cols-2 gap-16" p-8 mx-auto max-w-screen-lg>
      <article bg-white shadow-md rounded-md p-8>
        <header text-center>
          <h2 text-3xl font-semibold>ユーザ情報</h2>
        </header>

        <figure grid justify-center mt-4>
          <img
            :src="user.avatar"
            alt="Avatar"
            w-36
            h-36
            rounded-3xl
            border-6
            border-gray-300
            shadow-xl
          />
        </figure>

        <dl mt-8 space-y-4>
          <div>
            <dt font-bold>名前:</dt>
            <dd>{{ user.name }}</dd>
          </div>
          <div>
            <dt font-bold>メール:</dt>
            <dd break-all>{{ user.email }}</dd>
          </div>
          <div>
            <dt font-bold>誕生日:</dt>
            <dd>{{ user.birthdate.toLocaleDateString() }}</dd>
          </div>
          <div>
            <dt font-bold>自己紹介:</dt>
            <dd>{{ user.bio }}</dd>
          </div>
        </dl>
      </article>

      <aside>
        <UserProfileEdit :user @update-user="updateUser" />
      </aside>
    </div>

    <p v-if="successMessage" mt-4 text-green-600 text-center>
      {{ successMessage }}
    </p>
  </section>
</template>
