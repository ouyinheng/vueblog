<template>
  <div class="css">
    <div class="card" @click="changepages">
      css
    </div>
  </div>
</template>

<script>
export default {
  name: 'css',
  data(){
    return {

    }
  },
  methods: {
    changepages() {
      this.$router.push('/test')
    }
  }
}
</script>

<style lang="scss" scoped>
  .css {
    width: 100%;
    .card {
      width: 90%;
      height: 400px;
      max-width: 900px;
      margin: 50px auto 0;
      background: white;
      box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
      font-size: 0.8rem;
      padding: 10px;
      border-radius: 2px;
    }
  }
</style>
