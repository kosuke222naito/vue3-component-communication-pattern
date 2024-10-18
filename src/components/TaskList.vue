<script setup lang="ts">
import { computed } from "vue";

import type { Task } from "@/interfaces";
import { Priority } from "@/interfaces";

const { tasks } = defineProps<{ tasks: Task[] }>();
const emit = defineEmits<{
  "remove-task": [id: number];
}>();

const priorityColors: Map<Priority, string> = new Map([
  [Priority.Low, "text-green-500"],
  [Priority.Medium, "text-yellow-500"],
  [Priority.High, "text-red-500"],
]);

const getPriorityClass = computed(() => {
  return tasks.map(task => priorityColors.get(task.priority as Priority) || "");
});
</script>

<template>
  <ul grid gap-4>
    <li v-for="(task, id) in tasks" :key="id" place-items-center>
      <input type="checkbox" v-model="task.completed" />
      <span
        text-green-8
        m-10
        :class="[{ 'line-through': task.completed }, getPriorityClass[id]]"
      >
        {{ task.title }}
      </span>
      <button
        rounded-xl
        bg-green-3
        w-4rem
        h-2rem
        transition
        hover:bg-green
        @click="emit('remove-task', id)"
      >
        削除
      </button>
    </li>
  </ul>
</template>
