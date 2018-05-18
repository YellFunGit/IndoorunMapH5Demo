<template>
  <div>
    <div class="currentName" v-on:click="onShow()">{{ name() }}<span v-show="checkShow(selectfloorid)" class="lc_dot">●</span></div>
    <div v-bind:class="dropDownStyle">
      <div v-for="floor in floorList" v-bind:key="floor.id" v-bind:class="getFloorStyle(floor.id)" v-on:click="onSelect(floor.id)">{{ floor.name }}<span v-show="checkShow(floor.id)" class="lc_dot">●</span></div>
    </div>
  </div>
</template>

<script>

  function onShow() {

    this.show = !this.show

    if (this.show) {

      this.dropDownStyle = 'fadein'
    }
    else {

      this.dropDownStyle = 'fadeout'
    }
  }

  function onSelect(floorId) {

    this.$emit('onselect', floorId)

    console.log('选择:' + floorId)

    this.show = false

    if (this.show) {

      this.dropDownStyle = 'fadein'
    }
    else {

      this.dropDownStyle = 'fadeout'
    }
  }

  function getFloorStyle(floorId) {

    if (floorId === this.selectfloorid) {

      return 'dropdown selected'
    }
    else {

      return 'dropdown'
    }
  }

  function getCurrentName() {

    for (var i = 0; i < this.floorList.length; ++i) {

      if (this.floorList[i].id === this.selectfloorid) {

        return this.floorList[i].name
      }
    }

    return null
  }

  export default {
    name :'floorlistdiv',
    props: ['floorlist', 'selectfloorid', 'locatefloorid'],
    data:function() {
      return {
        floorList:this.floorlist,
        selectFloorId:this.selectfloorid,
        show:false,
        dropDownStyle:'fadeout'
      }
    },
    computed:{

    },
    methods:{
      onShow:onShow,
      onSelect:onSelect,
      getFloorStyle:getFloorStyle,
      name:getCurrentName,
      checkShow:function (floorId) {

        return this.locatefloorid == floorId
      }
    }
  }

</script>

<style scoped>

  .fadein {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s linear;
  }

  .fadeout {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s linear;
  }

  .currentName {
    background: url("../assets/楼层切换1.png") no-repeat;
    background-size: 3.5rem;
    color: #030303;
    text-align: center;
    width: 3.5rem;
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
    font-size: 1.2rem;
  }

  .lc_dot{
    color: red;
    font-size: 8px;
    position: absolute;
    right: 2px;
  }

  .dropdown {

    background: url("../assets/楼层切换3.png") no-repeat;
    background-size: 3.5rem;
    color: white;
    text-align: center;
    width: 3.5rem;
    height: 3.5rem;
    line-height: 3.5rem;
    margin: 5px 0;
    text-align: center;
    font-size: 1.2rem;
  }

  .selected{
    background: url("../assets/楼层切换2.png") no-repeat;
    background-size: 3.5rem;
    color: #fff;
    line-height: 3.5rem;
    text-align: center;
    color: white;
  }

</style>
