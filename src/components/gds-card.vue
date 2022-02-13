<template>
    <v-card @click="cardActivate(cardId)" elevation="3">
      <v-card-title>{{ !isActive ? "Активная задача" : "Завершенная задача"}}</v-card-title>
      <v-card-text>{{ task }}</v-card-text>
    </v-card>
</template>

<script>
export default {
  props: {
    cardId: {
      type: Number,
    },
    isActive: {
      type: Boolean,
      default: true
    },
    task: {
      type: String,
      default: null
    }
  },
  methods: {
    cardActivate(id){
      this.$emit('cardActivate', id)
    }
  }
};
</script>

<style>
.v-card{
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
}
</style>