<template>
  <div
    v-if="!task.isDone || isShow"
    :class="[
'item-task d-flex align-items-start border-bottom pt-3 pb-4',
isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12'
]"
  >
    <input
      type="checkbox"
      name="status"
      id="task"
      class="me-2 mt-2"
      :checked="task.isDone"
      v-model="task.isDone"
    >
    <div
      :class="[
'd-flex flex-column',
task.isDone ? 'doneClass' : ''
]"
    >
      <div class="title-task mb-1">
        {{ task.title }}
        <span class="badge bg-su"></span>
      </div>
      <div class="description-task small text-muted">
        {{ task.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
    default: {
      title: "Untitled",
      description: "Undescribe",
      isDone: false,
      category: "",
    },
    isGrid: {
      type: Boolean,
      required: true,
      default: false,
    },
    isShow: false,

  }
}
</script>

<style>
.doneClass {
  text-decoration: line-through;
  font-style: italic;
}
</style>
