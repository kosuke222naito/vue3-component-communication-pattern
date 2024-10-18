<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import type { Task } from "@/interfaces";

import TaskInput from "@/components/TaskInput.vue";
import TaskList from "@/components/TaskList.vue";

const tasks: Ref<Task[]> = ref([]);

const addTask = (newTask: Task) => {
  tasks.value.push(newTask);
};

const removeTask = (id: number) => {
  tasks.value.splice(id, 1);
};
</script>

<template>
  <h2 text-2xl><span underline="~ green">TODOs</span></h2>
  <TaskInput @add-task="addTask" />
  <TaskList @remove-task="removeTask" :tasks grid />
</template>
