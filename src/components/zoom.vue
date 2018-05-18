<template>
  <div class="scale_btn">
    <div v-on:click="zoomout" class="zoomout">
      <img src="../assets/放大.png">
    </div>
    <div v-on:click="zoomin" class="zoomin">
      <img src="../assets/缩小.png">
    </div>
  </div>
</template>

<script>
  export default {
    name : 'zoom',
    props:['map'],
    data: function() {
      return {
        _time:null
      }
    },
    methods: {
      zoomout:function() {

        var time = (new Date()).getTime()

        if (!this._time || time - this._time > 1000) {

          this.map.zoom(0.75)

          this._time = time
        }
      },
      zoomin:function() {

        var time = (new Date()).getTime()

        if (!this._time || time - this._time > 1000) {

          this.map.zoom(1.35)

          this._time = time
        }
      },
    }
  }
</script>

<style scoped>

  .scale_btn{
    position: fixed;
    right:1.5rem;
    bottom:5rem;
    z-index: 11;
  }

  .zoomout {
    width: 3.5rem;
    height: 3.25rem;
  }

  .zoomin {

    width: 3.5rem;
    height: 3.3rem;
  }

  .scale_btn div img {
    width: 100%;
    height: 100%;
  }

</style>
