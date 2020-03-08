<template>
  <div class="container">
    <h1>Users</h1>
    <div id="todo-table">
      <form action @submit.prevent="submit">
        <input type="text" placeholder="Add new item..." v-model="item" required />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        <router-link
          v-for="user in users"
          :key="user._id"
          tag="li"
          :to="{name: 'User', params: {username: user.name}}"
        >{{user.name}}</router-link>
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
      user: "",
      users: []
    };
  },
  methods: {
    submit() {
      RepositoryFactory.createTodo({
        item: this.item
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
      RepositoryFactory.getTodo().then(res => {
        this.items = res.data;
      });
    },
    deleteItem(item) {
      // let newItem = item.replace(/ /g, "-");
      RepositoryFactory.deleteTodo({ item: item }).then(() => {
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
