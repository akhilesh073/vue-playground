<template>
  <header>
    {{ title }}
    <Button v-show='homePage'
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'close' :  'Add task'"
      :color="showAddTask ? 'red': 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "HeaderComp",
  components: {
    Button,
  },
  props: {
    title: String,
    showAddTask: Boolean,
  },
  computed: {
      homePage(){
          return this.$route.path==='/';
      }
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
