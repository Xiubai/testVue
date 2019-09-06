import Vue from 'vue'
import app from './App.vue'

// 引入 mui 
import '../lib/mui/css/mui.min.css'

// 引入 mint-UI
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 按需导入
import {
    Header
} from 'mint-ui'
Vue.component(Header.name, Header)

var vm = new Vue({
    el: "#app",
    render: function (c) {
        return c(app)
    }
    // components: {
    //     app
    // }
})