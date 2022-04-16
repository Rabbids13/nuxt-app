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
        <CardItem :task="tasks[0]" :isGrid="isGrid" />
        <CardItem :task="tasks[1]" :isGrid="isGrid" />
        <CardItem :task="tasks[2]" :isGrid="isGrid" />
      </div>

      <div class="action py-2">
        <a href="#" class="add-button" v-if="!isCreating" @click="isCreating =!isCreating">Add Task</a>
        <div class="add-card" v-else>
          <div class="card mb-2">
            <div class="card-body d-flex flex-column p-0">
              <form>
                <input class="form-control border-0 mb-2" placeholder="Title" type="text">
                <textarea class="form-control border-0 small" placeholder="Description" rows="3"></textarea>
              </form>
            </div>
          </div>
          <div class="button-wrapper d-flex">
            <button class="btn btn-primary me-2">Save</button>
            <button class="btn btn-outline-secondary" @click="isCreating =!isCreating">Cancel</button>
          </div>
        </div>
      </div>
    </div>




  </div>
</template>
<script>
import CardItem from "~/components/Card/CardItem";
import LoadingPage from "@/components/LoadingPage";
export default {
  components: {
    CardItem,
    LoadingPage
  },
  data() {
    return {
// Daftar task
      form : {
        name: '',
        message:'',
        priority:'',
        agreement:'',
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
      isCreating: false,
      isGrid: false,
      isShow: true,
      show: true,
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
  // computed: {
  //   resultQuery() {
  //     if (this.cat != "")
  //       return this.tasks.filter((i) => i.category == this.cat)
  //     if (this.searchQuery) {
  //       return this.tasks.filter((item) => {
  //         return this.searchQuery
  //           .toLowerCase()
  //           .split(" ")
  //           .every((v) => item.title.toLowerCase().includes(v));
  //       });
  //     } else {
  //       console.log(this.tasks);
  //       return this.tasks
  //     }
  //   },
  //
  //   resultCategory() {
  //     let a = this.tasks
  //       .map((item) => item.category)
  //       .filter((value, index, self) => self.indexOf(value) === index);
  //     console.log(a);
  //     return a;
  //   },
  // },
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
      console.log(this.form);
    }
    // mounted(){
    //   this.isLoading
    //   setTimeout
    // }
  },
}
</script>


<style>
  .doneClass {
    text-decoration: line-through;
    font-style: italic;
  }
</style>
