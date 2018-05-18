import Vue from 'vue'
import zoom from './components/zoom.vue'

function ZoomView(map) {
  
  var _vm = null
  
  var _map = map
  
  function load() {
    
    _vm = new Vue({
      el:'#zoom',
      components: { zoom },
      data: function() {
        return {
          map:_map
        }
      }
    })
  }
  
  function show() {
    
    if (!_vm) {
  
      load()
      
      return
    }
  
    _vm.$el.style.visibility = 'visible'
  }
  
  function hide() {
  
    if (_vm) {
  
      _vm.$el.style.visibility = 'hidden'
    }
  }
  
  this.show = show
  
  this.hide = hide
}

export { ZoomView as default }
