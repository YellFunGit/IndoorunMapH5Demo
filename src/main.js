// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import floorlistdiv from './components/floorList.vue'
import unitdetail from './components/unitdetail.vue'
import ZoomView from './zoomview'
import navigatestop from './components/navigatestop.vue'

Vue.config.productionTip = false

const regionId = '14743377819680012'

let idrMapView = indoorunMap.map.idrMapView

let map = new idrMapView()

let initPos = {"x":1133.875958213657,"y":1482.6687836487033,"floorId":"14743377836090013"}

map.initMap('yf1248331604', 'map', regionId)

var _floorListView = null
var _unitdetailview = null
var zoomView = null
var _navigateStop = null

function showFloorListView(bshow) {
  
  if (_floorListView) {
    
    _floorListView.show = bshow
    
    return
  }
  
  _floorListView = new Vue({
    el:"#floorList",
    components: { floorlistdiv },
    data: function() {
      return {
        show:true,
        floorList:map.regionEx.floorList,
        currentFloorId:map.getFloorId(),
        locateFloorId: map.getUserPos() ? map.getUserPos().floorId : null
      }
    },
    methods:{
      onSelect:function(val) {
        this.currentFloorId = val
        map.changeFloor(val)
        map.autoChangeFloor = false
      }
    }
  })
}

function addTempMarker(pos) {
  
  var marker = new indoorunMap.map.idrMapMarker.IDRTempMarker(pos, './static/markericon/temppoint.png')
  
  map.addMarker(marker)
  
  return marker
}

function showStopNavigate(confirm) {
  
  if (_navigateStop) {
    
    _navigateStop.show = true
    
    _navigateStop.confirm = confirm
    
    return
  }
  
  _navigateStop = new Vue({
    el:'#navigatestop',
    components:{ navigatestop },
    data:()=>{
      return {
        show:true,
        confirm:confirm
      }
    },
    methods:{
      click:function() {
        
        this.show = false
        
        this.confirm && this.confirm()
      }
    }
  })
}

function showUnitDetail(unit) {
  
  if (_unitdetailview) {
    
    _unitdetailview.show = true
    
    _unitdetailview.unit = unit
    
    return
  }
  
  _unitdetailview = new Vue({
    el:'#unitdetail',
    components:{ unitdetail },
    data:()=>{
      return {
        unit:unit,
        show:true
      }
    },
    methods:{
      reset:function () {
        
        this.show = false
      },
      clickbg:function() {
        
        this.reset()
      },
      onSetEnd:function() {
        
        this.show = false
        
        map.doRoute(null, this.unit.getPos())
  
        showStopNavigate(()=>{
          
          map.stopRoute()
        })
      }
    }
  })
}

map.addEventListener(map.eventTypes.onInitMapSuccess, regionEx => {
  
  document.title = regionEx.name
  
  map.changeFloor(regionEx.floorList[0].id)
  
  showFloorListView()
  
  zoomView = new ZoomView(map)
  
  zoomView.show()
  
  setTimeout(() => {
    
    map.setCurrPos(initPos)
    
    map.centerPos(initPos)
    
  }, 1000)
})

map.addEventListener(map.eventTypes.onMapClick, pos => {
  
  console.log(JSON.stringify(pos))
  
  map.setCurrPos(pos)
})

map.addEventListener(map.eventTypes.onUnitClick, unit => {
  
  addTempMarker(unit.getPos())
  
  map.centerPos(unit.getPos(), true)
  
  showUnitDetail(unit)
})

map.addEventListener(map.eventTypes.onRouterSuccess, data => {
  
  console.log(data)
  
  map.birdLook()
})

map.addEventListener(map.eventTypes.onNaviStatusUpdate, status => {
  
  if (!status.validate) {
    
    return
  }
  
    console.log(status)
})

map.addEventListener(map.eventTypes.onRouterFinish, function() {


})
