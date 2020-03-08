<template>
  <div class="container">
    <h1>My Todo List</h1>
    <div id="todo-table">
      <form action @submit.prevent="submit">
        <input type="text" placeholder="Add new item..." v-model="item" required />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        <!-- <li
          v-for="list in items"
          :key="list._id"
          @click.prevent="deleteItem(list._id)"
        >{{ list.item }}</li>-->
        <li
          v-for="list in items"
          :key="list._id"
          @click.prevent="deleteItem(list._id)"
        >{{ list.item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// // @ is an alias to /src
import { RepositoryFactory } from "@/repository/RepositoryFactory";

export default {
  data() {
    return {
      item: "",
      items: [],
      user: this.$route.params.user,
      id: ""
    };
  },
  methods: {
    submit() {
      RepositoryFactory.createTodo({
        item: this.item,
        user: this.id
      })
        .then(() => {
          this.$fire.$emit("refresh");
          this.item = "";
        })
        .catch(err => {
          console.log(err);
        });
    },
    index() {
      RepositoryFactory.getTodo({ user: this.user }).then(res => {
        this.items = res.data.data;
        this.id = res.data.id;
      });
    },
    deleteItem(item) {
      // let newItem = item.replace(/ /g, "-");
      let data = {
        item: item
      };
      RepositoryFactory.deleteTodo(data).then(() => {
        this.$fire.$emit("refresh");
      });
    }
  },
  created() {
    this.index();
    this.$fire.$on("refresh", () => {
      this.index();
    });
  }
};
</script>
