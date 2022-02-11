<template>
  <v-container>
    <v-row>
      <v-text-field
        v-model="taskText"
        @keydown.enter="addTask(taskText)"
        label="Добавить задачу"
      />
    </v-row>

    <v-row>
      <v-btn-toggle>
        <v-btn @click="changeFilter('all')" elevation="3">Все</v-btn>
        <v-btn @click="changeFilter('active')" elevation="3">Активные</v-btn>
        <v-btn @click="changeFilter('success')" elevation="3"
          >Выполненные</v-btn
        >
      </v-btn-toggle>
    </v-row>

    <v-row v-if="successTasks && successTasks.length">
      <v-btn @click="deleteSuccessTasks" class="clear-btn" elevation="3">Очистить выполненные</v-btn>
    </v-row>

    <v-row v-if="tasks && tasks.length">
      <gds-card
        v-for="task in tasks"
        :key="task.id"
        :cardId="task.id"
        :task="task.task"
        :isActive="task.success"
        @cardActivate="changeTaskState"
      />
    </v-row>
    <v-row v-else>
      <h2 class="empty">Пусто</h2>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import GdsCard from "../components/gds-card.vue";
export default {
  name: "Home",
  components: { GdsCard },
  data: () => ({
    taskText: null,
  }),
  computed: {
    ...mapGetters({
      filterState: "GET_FILTER_STATE",
      allTasks: "GET_ALL_TASKS",
      successTasks: "GET_SUCCESS_TASKS",
      activeTasks: "GET_ACTIVE_TASKS",
    }),
    tasks() {
      if (this.filterState == "all") {
        return this.allTasks;
      } else if (this.filterState == "success") {
        return this.successTasks;
      } else {
        return this.activeTasks;
      }
    },
  },
  methods: {
    ...mapMutations({
      addTasks: "ADD_TASK",
      changeFilter: "CHANGE_FILTER",
      changeTaskState: "CHANGE_TASK_STATE",
      deleteSuccessTasks: "DELETE_SUCCESS_TASKS",
      takskInit: "TASKS_INIT",
    }),
    addTask(text) {
      if (this.taskText) {
        this.addTasks(text);
        this.taskText = null;
      }
    },
  },
  mounted() {
    this.takskInit();
  },
};
</script>

<style scoped>
.empty,
.clear-btn {
  margin-right: 10px;
  margin-top: 10px;
}
</style>