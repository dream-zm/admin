<template>
  <div class="hello">
    <p class="logo"><i class="layui-icon">&#xe67c;</i> FH Admin</p>
    <ul class="layui-nav head_nav">
      <li class="layui-nav-item head_nav_item">
        <a href=""><i class="layui-icon">&#xe649;</i><span class="layui-badge">9</span></a>
      </li>
      <li class="layui-nav-item head_nav_item">
        <a href=""><i class="layui-icon">&#xe609;</i><span class="layui-badge">9</span></a>
      </li>
      <li class="layui-nav-item head_nav_item">
        <a href=""><i class="layui-icon">&#xe645;</i><span class="layui-badge-dot"></span></a>
      </li>

      <li class="layui-nav-item" lay-unselect>
        <a href="javascript:;"><img src="http://t.cn/RCzsdCq" class="layui-nav-img">系统管理员</a>
        <dl class="layui-nav-child xiala">
          <dd><a href="javascript:;"><i class="layui-icon">&#xe612;</i><button data-method="offset" data-type="auto" class="layui-btn layui-btn-normal">修改资料</button></a></dd>
          <dd><a href="javascript:;"><i class="layui-icon">&#xe614;</i><button data-method="offset" data-type="auto" class="layui-btn layui-btn-normal">代码设置</button></a></dd>
          <dd><a href="javascript:;"><i class="layui-icon">&#xe628;</i><button data-method="offset" data-type="auto" class="layui-btn layui-btn-normal">代码生成</button></a></dd>
          <dd><a href="javascript:;"><i class="layui-icon">&#xe640;</i><button data-method="offset" data-type="auto" class="layui-btn layui-btn-normal">退出</button></a></dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    /*this.localstorage()*/
  },
  mounted () {
    layui.use('element', function(){
    var element = layui.element;
    
    //…
    });

  },
  methods: {
    localstorage () {
      // window.localStorage.name = 'dream'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    height: 45px;
    line-height: 45px;
    width: 100%;
    background: #438eb9;
    color: #fff;
    font-size: 14px;
  }

  .logo {
    margin-left: 20px;
    font-weight: bold;
    float: left;
  }

  .head_nav {
    float: right;
  }

   .head_nav .layui-nav-item {
    line-height: 39px;
  }

  .head_nav_item i {
    font-size: 30px;
  }

  .xiala i {
   margin-right: 5px;

  }

  .layui-nav {
    background: none
  }

  .layui-btn-normal {
    background: none;
    color: inherit;
  }
</style>
