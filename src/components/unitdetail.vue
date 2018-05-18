<template>
  <div>
    <div class="bg" v-on:click="clickbg"></div>
    <div class="main">
      <div class="unitname">
        <label class="name">{{ unit.name }}</label>
        <div class="icon"></div>
        <label class="floor">{{ unit.floorName }}</label>
      </div>
      <div class="navigate" v-on:click="setEnd">
        <img src="../assets/设为终点-icon.png"  width="20px" height="20px">
        <label>到这去</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'unitdetail',
  props:['unit'],
  methods: {
    setStart:function() {
      this.$emit('setstart')
    },
    setEnd:function() {
      this.$emit('setend')
    },
    clickbg:function() {
      this.$emit('clickbg')
    }
  }
}
</script>

<style scoped>

  .bg {

    position: fixed;
    top: 0 !important;
    bottom: 0 !important;
    left: 0;
    right: 0;
    opacity: 1;
  }

  .main {

    width: 100%;
    position: absolute;
    height: 100px;
    bottom: 0px;
    z-index: 999;
    background-color: #ffffff;
  }

  .main > div {

    height: 50px;
  }

  .unitname {

    position: relative;
    border-bottom:1px solid #dad9e3;
    box-shadow: 0px -1px 2px rgba(44, 44, 44, 0.25);
  }

  .name {

    display: inline-block;
    position: absolute;
    line-height: 50px;
    left: 25px;
    font-size: 1.8rem;
  }

  .icon {

    display: inline-block;
    position: absolute;
    top: 0;
    bottom:0;
    margin: auto;
    right:50px;
    width: 20px;
    height: 20px;
    background: url("../assets/楼层号icon.png") no-repeat center /1.6rem 1.5rem;
  }

  .floor {

    display: inline-block;
    position: absolute;
    line-height: 50px;
    right: 30px;
    color: #c2c6da;
    font-size: 1.2rem;
  }

  .navigate {

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    display: -webkit-flex;
  }

  .navigate div {

    width: 50%;
    height: 100%;
    color: #434969;
    background-color: #fbfbfc;
    text-align: center;
  }

  .navigate label {

    line-height: 50px;
    padding-left: 14px;
    vertical-align: middle;
    font-size: 1.2rem;
  }

  .navigate img {

    line-height: 50px;
    display: inline-block;
    vertical-align: middle;
  }

  .left {

    border-right: 1px solid #d3d9e3;
  }

</style>
