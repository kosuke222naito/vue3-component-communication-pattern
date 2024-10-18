<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import type { Task } from "@/interfaces";
import { Priority } from "@/interfaces";

const title: Ref<string> = ref("");
const emit = defineEmits<{
  "add-task": [newTask: Task];
}>();

const submitTask = () => {
  if (!title.value.trim()) {
    return;
  }
  const newTask: Task = {
    id: Date.now(),
    title: title.value,
    completed: false,
    priority: Priority.Medium,
  };

  emit("add-task", newTask);
  title.value = "";
};
</script>

<template>
  <div grid="~ cols-2" gap-8 h-3rem>
    <input
      v-model="title"
      placeholder="新しいタスクを入力"
      border="~ solid rounded green"
      px-1rem
    />
    <button rounded-xl bg-green-3 transition hover:bg-green @click="submitTask">
      追加
    </button>
  </div>
</template>
