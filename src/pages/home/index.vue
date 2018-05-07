<template>
  <div>
    <div class="top">
      <main-header></main-header>
    </div>
    <div class="content clear">
        <div class="left">
          <div class="layui-side layui-bg-black">
            <div class="layui-side-scroll">      
              <ul class="layui-nav layui-nav-tree site-demo-nav">
                
                <li class="layui-nav-item">
                  <a class="javascript:;" href="javascript:;">首页</a>
                </li>
                
                <li class="layui-nav-item">
                  <a class="javascript:;" href="javascript:;">系统管理<span class="layui-nav-more"></span></a>
                  <dl class="layui-nav-child">
                    <dd class="">
                      <a href="/demo/grid.html">组织管理</a>
                    </dd>
                    <dd class="">
                      <a href="/demo/grid.html">系统用户</a>
                    </dd>
                    
                  </dl>
                </li>
                
                <li class="layui-nav-item">
                  <a class="javascript:;" href="javascript:;">信息管理<span class="layui-nav-more"></span></a>
                  <dl class="layui-nav-child">
                    <dd class="">
                      <a href="/demo/button.html">按钮</a>
                    </dd>
                  </dl>
                </li>
                
                <li class="layui-nav-item">
                  <a class="javascript:;" href="javascript:;">微信管理<span class="layui-nav-more"></span></a>
                  <dl class="layui-nav-child">
                    <dd class="">
                      <a href="/demo/layer.html">
                        弹出层
                      </a>
                    </dd>
                  </dl>
                </li>
                

                <li class="layui-nav-item">
                  <a class="javascript:;" href="javascript:;">系统工具<span class="layui-nav-more"></span></a>
                  <dl class="layui-nav-child">
                    <dd class="">
                      <a href="/demo/layer.html">
                        弹出层
                      </a>
                    </dd>
                  </dl>
                </li>


                <li class="layui-nav-item">
                  <a class="javascript:;" href="javascript:;">数据库管理<span class="layui-nav-more"></span></a>
                  <dl class="layui-nav-child">
                    <dd class="">
                      <a href="/demo/layer.html">
                        弹出层
                      </a>
                    </dd>
                  </dl>
                </li>
                <li class="layui-nav-item" style="height: 30px; text-align: center"></li>
              </ul>
            </div>
          </div>
      </div>


      <div class="right">
        <div class="layui-table-box">
         <div class="layui-table-body layui-table-main">
            <table cellspacing="0" cellpadding="0" border="0" class="layui-table">
                <tr data-index="9" class="">
                 <td data-field="wealth"><div class="layui-table-cell laytable-cell-1-wealth">86801934</div></td>
                 <td data-field="wealth"><div class="layui-table-cell laytable-cell-1-wealth">86801934</div></td>
                 <td data-field="wealth"><div class="layui-table-cell laytable-cell-1-wealth">86801934</div></td><td data-field="9" align="center" data-off="true"><div class="layui-table-cell laytable-cell-1-9"> <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="detail">查看</a> <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a> <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a> </div></td></tr>
            </table>
          </div>

          <div class="layui-table-body layui-table-main">
            <table cellspacing="0" cellpadding="0" border="0" class="layui-table">
                <tr data-index="9" class="">
                 <td data-field="wealth"><div class="layui-table-cell laytable-cell-1-wealth">86801934</div></td>
                 <td data-field="wealth"><div class="layui-table-cell laytable-cell-1-wealth">86801934</div></td>
                 <td data-field="wealth"><div class="layui-table-cell laytable-cell-1-wealth">86801934</div></td><td data-field="9" align="center" data-off="true"><div class="layui-table-cell laytable-cell-1-9"> <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="detail">查看</a> <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a> <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a> </div></td></tr>
            </table>
          </div>
           
      </div>



      </div>
    </div>   
  </div>
</template>	
<script>
  import MainHeader from '../../components/head'
  export default {
    name: 'HomeIndex',
    components: {
      MainHeader
    },
    mounted () {
    layui.use('element', function(){
    var element = layui.element;
    
    //…
    });

  }

  }
</script>
<style scoped lang="stylus">
  .top {
    width: 100%;
  }
  .content {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 658px;
  }
  .left {
    position: absolute;
    width: 200px;
    height: 658px;
    left: 0;
    top: 0;
  }

  .right {
    width: 100%;
    padding-left: 200px;
  }

  .left .layui-side {
    position:absolute;
    left: 0;
}

.layui-table-body {
  overflow: hidden;
}

.layui-table{
    margin: 2px 0;
}

.layui-table td {
  text-align: center;
  padding: 0 15px;
  height: 30px;
  line-height: 30px;
}


</style>