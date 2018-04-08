<template>
  <div class="wrap">
  	<div class="login">
  		<p>后台管理系统</p>
	    <form class="layui-form" onsubmit="return false;" method="post">
	      <div class="layui-form-item">
	        <label class="layui-form-label">帐号</label>
	        <div class="layui-input-block">
	          <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input" v-model="username">
	        </div>
	      </div>
	      <div class="layui-form-item">
	        <label class="layui-form-label">密码</label>
	        <div class="layui-input-inline">
	          <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input" v-model="password">
	        </div>
	      </div>
	      <div class="layui-form-item">
	        <div class="layui-input-block">
	          <button class="layui-btn" @click="login">登录</button>
	          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
	        </div>
	      </div>
	    </form>
  	</div> 
  </div>
</template>
<script>
export default {
  name: 'LoginIndex',
  data () {
  	return {
  		username: '',
  		password: ''
  	}
  },
  methods: {
  	login () {
  		if (this.username=='admin'&&this.password=='1') {
  			this.$router.push('/home')
  		} else {
  			alert('帐号和密码错误')
  		}
  	}
  },
  mounted () {
    layui.use('form', function(){
    var form = layui.form;
    //监听提交
    /*form.on('submit(formDemo)', function(data){
      layer.msg(JSON.stringify(data.field));
      return false;
    });*/
  });
  }
}
</script>

<style scoped lang="stylus">
	.wrap
		height: 100%
		width: 100%
		background: #2d3a4b
		color: #fff
		text-align: center
		.login
			height: 400px
			width: 400px
			position: fixed
			left: 50%
			top: 50%
			margin-left: -200px
			margin-top: -200px
			p
				height: 50px
				line-height: 50px
				font-size: 30px
				margin-bottom: 60px
			.layui-input
				width: 220px
			.layui-form-item
				margin-bottom: 34px
			.layui-input-block
				margin-left:0
</style>
