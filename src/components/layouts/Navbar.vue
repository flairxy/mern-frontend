<template>
  <div>
    <div>
      <ul>
        <router-link tag="li" :to="{ name: 'Home' }">Home</router-link>
        <router-link tag="li" :to="{ name: 'About' }">About</router-link>
        <router-link
          tag="li"
          :to="{ name: 'Contact', query:{name: data.name, job: data.job} }"
        >Contact</router-link>
      </ul>
    </div>
    <div class="container">
      <slot />
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "@/repository/RepositoryFactory";
export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    index() {
      RepositoryFactory.getContact().then(res => {
        this.data = res.data;
      });
    }
  },
  created() {
    this.index();
  }
};
</script>
