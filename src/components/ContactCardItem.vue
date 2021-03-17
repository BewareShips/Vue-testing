<template>
  <div class="card">
    <img
      class="avatar"
      :src="contact.picture.medium"
      :alt="`Photo of ${fullName}`"
    />
    <div class="card-body">
      <h1 class="card-title">{{ fullName }}</h1>
      <i class="fas fa-ellipsis-v"></i>
      <div class="card-text">
        <p><i class="fas fa-mobile-alt"></i> {{ contact.phone }}</p>
      </div>
      <div class="card-text">
        <p><i class="card-text"></i> {{ location }}</p>
      </div>
      <div class="card-text">
        <p><i class="far fa-envelope "></i> {{ contact.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { contact: Object },
  computed: {
    fullName() {
      return `
      ${this.contact?.name?.first} ${this.contact?.name.last}
      `;
    },
    location() {
      return `${this.contact?.location?.city}, ${this.contact?.location?.country}`;
    },
  },
};
</script>

<style lang="scss" scooped>
.card {
  border-radius: 10px;
  text-align: center;
  margin-bottom: 3rem;
  box-shadow: 0px 0px 19px -1px rgba(34, 60, 80, 0.37);
  position: relative;
}

.avatar {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 6px solid white;
  border-radius: 100%;
  max-width: 100%;
  align-self: center;
  object-fit: cover;
  top: -55px;
}

.info {
  padding: 3.5rem 2rem 2rem 2rem;
  display: flex;
  flex-wrap: wrap;
}

.fa-ellipsis-v{
  position: absolute;
  color:orange;
  top:2rem;
  right:1rem;
}
</style>
