<template>
  <div class="container">
    <h1>Users</h1>
    <div id="todo-table">
      <form action @submit.prevent="submit">
        <input type="text" placeholder="Add new user..." v-model="user" required />
        <button type="submit">Add User</button>
      </form>
      <ul>
        <li v-for="user in users" :key="user._id">
          <div class="row">
            <div class="col-8">
              <router-link tag="li" :to="{name: 'Todo', params: {user: user.name}}">{{user.name}}</router-link>
            </div>
            <div class="col-4 mt-3">
              <a
                class="btn btn-sm btn-danger"
                type="submit"
                @click.prevent="deleteUser(user._id)"
              >Delete user</a>
            </div>
          </div>
        </li>
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
      RepositoryFactory.createUser({
        user: this.user
      })
        .then(() => {
          this.$fire.$emit("refresh");
          this.user = "";
        })
        .catch(err => {
          console.log(err);
        });
    },
    index() {
      RepositoryFactory.getUser().then(res => {
        this.users = res.data;
      });
    },
    deleteUser(user) {
      // let newItem = user.replace(/ /g, "-");
      RepositoryFactory.deleteUser({ id: user }).then(() => {
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
