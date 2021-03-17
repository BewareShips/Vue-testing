<template>
  <header class="header">
    <h1>My Contacts</h1>
    <nav class="navbar fixed-top ">
      <ul>
        <input
          class="search "
          v-model="searchQuery"
          @input="onSearchChange"
          type="text"
          name="search"
          id="search"
          placeholder="Search contacts"
        />
        <div class="signs">
          <li><a href="#" class="btn btn-outline-primary">SignIn</a></li>
          <li><a href="#" class="btn btn-outline-primary">SignUp</a></li>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    onSearchChange() {
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 300px;
  color: white;
  background: linear-gradient(to right, #6a82fb, #fc5c7d);
  display: grid;
  justify-items: center;
  grid-template-rows: 4fr 1fr;
  grid-template-columns: 1fr;
  

  h1 {
    align-self: center;
    margin-top: 5rem;
  }
}

nav {
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to right, #6a82fb, #fc5c7d);
}

nav ul {
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0.5rem 2rem 0.5rem 5rem;
  justify-content: space-between;
}

nav ul li {
  list-style: none;
}

.btn {
  display: block;
  color: #12bcca;

  padding: 10 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 10px;
  border: none;
}

.btn:hover {
  color: orange;
}

.signs {
  display: flex;
  align-self: center;
}

.search {
  min-width: 200px;
  align-self: center;
  width: 60%;
  height: 2.5rem;
  padding: 0 0.5rem;
  border-radius: 10px;
  border: none;
  outline: none;
}
</style>
