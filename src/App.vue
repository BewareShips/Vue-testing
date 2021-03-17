<template>
  <ContactHeader @search="searchContact" />

 

  <section class="contacts ">
    <ContactCardItem
      class="contact-grid"
      v-for="(contact, idx) in filteredContacts"
      :key="contact.name.first + idx"
      :contact="contact"
    />
  </section>
</template>

<script>
import ContactHeader from "./components/ContactHeader";
import ContactCardItem from "./components/ContactCardItem";
import { getContacts } from "./utils/contacts-api";

export default {
  name: "App",
  components: { ContactHeader, ContactCardItem },
  data() {
    return {
      isLoading: false,
      contacts: [],
      //filteredCont
      search: "",
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact) => {
        const fullName = `${contact.name?.first}${contact.name?.last}`;
        return fullName.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  async mounted() {
    await this.fetchContacts();
  },
  methods: {
    searchContact(query) {
      this.search = query;
    },
    async fetchContacts() {
      try {
        this.isLoading = true;
        this.contacts = await getContacts();
      } catch (error) {
        condole.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss">


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #eeeeee;
}

.contacts {
  padding: 4rem 2rem;
  display: grid;
  width: 100%;
  max-width: 1400px;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  grid-gap: 1.5rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
