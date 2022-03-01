<template>
    <div :key="task.id" v-for="task in tasks">
        <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
    </div>
</template>

<script>
import Task from './Task.vue';
export default {
    name: "TasksComp",
    components: {
        Task,
    },
    props: {
        tasks: Array
    },
    emits: ['delete-task','toggle-reminder']
}
</script>