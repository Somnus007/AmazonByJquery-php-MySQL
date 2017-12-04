require(['config'], function() { //config：加载配置文件
	require(['jquery', 'jqcookie'], function() { //加载配置里面的内容,引入jquery和cookie插件
		//addCookie('name','zhangsan250',{expires:7});
		(function() {
			$('.remeber input').attr('checked','checked')
			var $default = 'allen'
			var $his = getCookie($default);
			if($his){
				$('#username').val($default)
				$('#password').val($his)
			}

			$('.sub').click(function() {
				$.ajax({
					type: 'post',
					url: 'php/login.php',
					data: {
						name: $('#username').val(),
						pass: $('#password').val()
					},
					success: function(data) {
						if(!data) {
							$('.pswBox span').html('用户名或者密码错误');
							$('.pswBox span').css('color', 'red');
							$('#password').val('');
						} else {
							if($('.remeber input').is(':checked')) {
								$default = $('#username').val()
								addCookie($('#username').val(), $('#password').val(), 7)
							}else{
								if(getCookie($('#username').val())){
									delCookie($('#username').val(),$('#password').val())
								}
							}
							$('.pswBox span').html('');
							$(window).attr('location','index.html');
						}
					},
					error: function(e) {
						alert(e)
					}
				});

			})

			$('.pswBox a,.remeber a,.agreed a,.help a').hover(function() {
				$(this).css({
					'color': 'orange',
					'textDecoration': 'underline'
				})
			}, function() {
				$(this).css({
					'color': 'blue',
					'textDecoration': 'none'
				})
			})

		})()

	})
});

/*require(['https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=dddd&json=1&p=3&sid=1468_21111&req=2&csor=4&pwd=ddd&cb=define'],function(d){
	console.log(d);
});*/