<template>
  <div class="main" v-on:click="click">
    <label>结束导航</label>
  </div>
</template>

<script>
export default {
  name: 'navigatestop',
  methods: {
    click:function() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

  .main {

    width: 60%;
    margin: auto;
    text-align: center;
    left: 0;right: 0;
    border-radius: 30px;
    position: absolute;
    height: 40px;
    bottom: 50px;
    color: white;
    background-color: #ff4343;
    font-size: 1.4rem;
    box-shadow: 0 0.5rem 1rem rgba(255, 67, 67, 0.7);
  }

  label {
    line-height: 40px;
  }

</style>
