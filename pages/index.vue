<template>
  <div class="py-4">
    <div v-if="show" class="container">
      <h1>Loading ...</h1>
    </div>
    <div v-else class="container">
      <div class="title border-bottom d-flex align-items-center justify-content-between py-2">
        <h5>Task</h5>
        <div class="d-flex align-items-center ms-auto">
          <div>
            <b-dropdown id="dropdown-1" text="Category" class="m-md-2">
              <b-dropdown-item
                v-for="(item, i) in resultCategory"
                :key="i"
                @click="cat = item">
                {{item}}
              </b-dropdown-item>
            </b-dropdown>
          </div>
          <input type="text" class="form-control" placeholder="Search"
                 v-model="searchQuery">
          <button
            class="btn btn-outline-secondary py-1 px-3"
            @click="isShow = !isShow">
            Show
          </button>
          <span class="me-2 py-1 px-3">View As</span>
          <button
            class="btn btn-outline-secondary py-1 px-3"
            @click="isGrid = !isGrid"
          >
            {{ isGrid ? 'Grid' : 'List' }}
          </button>
        </div>
      </div>

      <div class="list-task row">
        <CardItem
          v-for="(task, i) in resultQuery"
          :key="i"
          :task="task"
          :isGrid="isGrid"
          :isShow="isShow"
        />
      </div>

      <div class="action py-2">
        <a href="#" class="add-button" v-if="!isCreating" @click="isCreating =!isCreating">Add Task</a>
        <div class="add-card" v-else>
          <form v-on:submit.prevent="submitForm">
            <div class="card mb-2">
              <div class="card-body d-flex flex-column p-0">
                <input v-model="form.title" class="form-control border-0 mb-2" placeholder="Title" type="text">
                <textarea v-model="form.description" class="form-control border-0 small" placeholder="Description" rows="3"></textarea>
              </div>
            </div>
            <div class="button-wrapper d-flex">
              <button class="btn btn-primary me-2" type="submit">Save</button>
              <button class="btn btn-outline-secondary" @click="isCreating =!isCreating">Cancel</button>
            </div>
          </form>

        </div>
      </div>
    </div>




  </div>
</template>
<script>
import CardItem from "~/components/Card/CardItem";
export default {
  components: {
    CardItem,

  },
  data() {
    return {
// Daftar task
      form : {
        title:'',
        description: '',
        isDone: false,
      },
      priorityOptions:[
        {option: "Tidak ada prioritas", value: ""},
        {option: "Rendah", value: "low"},
        {option: "Tinggi", value: "high"},
      ],
      tasks: [
        {
          title: 'Task 1',
          description: 'ini deskripsi',
          isDone: false,
          category: 'a'
        },
        {
          title: 'Task 2',
          description: 'ini deskripsi 2',
          isDone: false,
          category: 'b'
        },
        {
          title: 'Task 3',
          description: ' ini deskripsi 3',
          isDone: false,
          category: 'c'
        },
        {
          title: 'Task 4',
          description: 'ini deskripsi 4',
          isDone: false,
          category: 'b'
        },
        {
          title: 'Task 5',
          description: 'ini deskripsi 5',
          isDone: false,
          category: 'b'
        },
        {
          title: 'Task 6',
          description: 'ini deskripsi 6',
          isDone: false,
          category: 'b'
        },
      ],
      searchQuery: '',
      isCreating: false,
      isGrid: false,
      isShow: false,
      show: true,
      cat: '',
    }

  },
  // berforeCreate(){
  //
  // },
  // created() {
  //
  // },
  // beforeMount() {
  //
  // },
  mounted(){
    this.showToggle()
  },
  // beforeUpdate() {
  //
  // },
  // updated() {
  //
  // },
  computed: {
    resultQuery() {
      if (this.cat != "")
        return this.tasks.filter((item) => item.category == this.cat)
      if (this.searchQuery) {
        return this.tasks.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      // if (this.searchQuery) {
      //   return this.$store.state.tasks.tasks.filter((item) => {
      //     return this.searchQuery
      //       .toLowerCase()
      //       .split(" ")
      //       .every((v) => item.title.toLowerCase().includes(v));
      //   });
      } else {
        console.log(this.tasks);
        return this.tasks
      }
      // } else {
      //   console.log(this.$store.state.tasks.tasks);
      //   return this.$store.state.tasks.tasks
      // }
    },

    resultCategory() {
      let a = this.tasks
        .map((item) => item.category)
        .filter((value, index, self) => self.indexOf(value) === index);
      console.log(a);
      return a;
    },
  },
  methods: {
    showToggle(){
      setTimeout(() => {
          this.show = false
        }, 1000
      )
    },
    showData(){

    },
    submitForm() {
      console.log(this.form)
      // this.$store.commit("tasks/ADD_TASK", this.form)
      this.$store.dispatch("tasks/addTask", this.form)

      this.form = {
        title: '',
        description: '',
        isDone: false
      }
    }

  },
}
</script>


<style>
  .doneClass {
    text-decoration: line-through;
    font-style: italic;
  }
</style>
