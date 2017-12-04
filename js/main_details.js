require(['config'], function() { //config：加载配置文件
	require(['jquery', 'jqcookie'], function() { //加载配置里面的内容,引入jquery和cookie插件
		//addCookie('name','zhangsan250',{expires:7});
		$(".margin").css("width", $(document).width())

		$('.freeShare').hover(function() {
			$('.hideFreeShare').css('display', 'block')
		}, function() {
			setTimeout(function() {
				$('.hideFreeShare').css('display', 'none')
			}, 500)
		})

		$('#header .select').hover(function() {
			$(this).css('background', '#ccc')
			$('#header .select').click(function() {
				$('#header .option').toggle()
			})
		}, function() {
			$(this).css('background', '#E7E7E7')
			$('#header .option').css('display', 'none')
		})

		$('#header .option li').hover(function() {
			$('#header .option li').css('background', '#fff')
			$(this).css('background', 'dodgerblue')
			$('#header .option li').click(function() {
				$('#header .select p').html($(this).html())
				$('.header-t-c input').css('textIndent', ($('#header .select').outerWidth() + 5) + 'px')
				$('#header .hideTips').css('width', ($('.header-t-c input').outerWidth() - $('#header .select').outerWidth()) + 'px')
			})
		})

		$('.header-t-c input').bind('input propertychange', function() {
			if($('.header-t-c input').val()) {
				require(['https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + $('.header-t-c input').val() + '&p=3&req=2&csor=0&cb=define'], function(tips) {
					var $output = "";
					var $num = 10;
					if(tips.s.length < 10) {
						$num = tips.s.length
					}
					for(var i = 0; i < $num; i++) {
						$output += ('<dd><a href="https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=' + tips.s[i] + '&oq=aaaa&rsv_pq=b5aa922e00004c9e&rsv_t=953ft8pPKNefllfRVYm6wz0D4w0BrBK37wMPcrUBX29m5IQFD1n34gZjS3o&rqlang=cn&rsv_enter=1&rsv_sug1=20&rsv_sug7=100&rsv_sug2=1&prefixsug=a&rsp=0&inputT=256678&rsv_sug4=256939">' + tips.s[i] + '</a></dd>')
					}
					$('#header .hideTips').html($output)
					$('#header .hideTips').children().hover(function() {
						$('#header .hideTips').children().css('background', '#fff')
						$(this).css('background', '#999')
						$('.header-t-c input').val($(this).find('a').html())
						$('.header-t-c button').attr('newtarget', $(this).find('a').attr('href'))
					})
					$('.header-t-c input').blur(function() {
						setTimeout(function() {
							$('#header .hideTips').html('')
						}, 500)

					})

				});
			} else {
				$('#header .hideTips').html('')
			}

		});
		$('.header-t-c button').click(function() {
			window.open($(this).attr('newtarget'), '_blank')
		})

		$('.typelist').css('display', 'none')

		$('.header-b-l').hover(function() {
			$(this).css('border', '1px solid #ddd')
			$('.typelist').css('display', 'block')
		}, function() {
			$(this).css('border', '1px solid #fff')
			$('.typelist').css('display', 'none')
		})

		$('.typelist').hover(function() {
			$('#header .hidelist').stop(true, true).animate({
				width: 546
			})
		}, function() {
			setTimeout(function() {
				$('#header .hidelist').stop(true, true).animate({
					width: 0
				})
			}, 300)
		})

		$('.typelist li a').hover(function() {
			$(this).css({
				'color': 'orange',
				'textDecoration': 'underline'
			})
		}, function() {
			$(this).css({
				'color': '#000',
				'textDecoration': 'none'
			})
		})

		$('.typelist li').hover(function() {
			$(this).find('a').css('fontWeight', 700)
			$(this).find('span').css({
				'fontWeight': 700,
				'color': '#000'
			})
		}, function() {
			$(this).find('a').css('fontWeight', 100)
			$(this).find('span').css({
				'fontWeight': 100,
				'color': '#ebebeb'
			})
		})
		$('.hidelist a').hover(function() {
			$(this).css('textDecoration', 'underline')
		}, function() {
			$(this).css('textDecoration', 'none')
		})

		$('.header-b-c li a').hover(function() {
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

		$('.cart').hover(function() {
			$(this).css('border', '1px solid #ddd')
		}, function() {
			$(this).css('border', '1px solid transparent')
		})

		$('.wishes').hover(function() {
			$(this).css('border', '1px solid #ddd')
			$(this).find('.hideWish').css('display', 'block')
			$('.hideWish li').find('a').hover(function() {
				$(this).css({
					'color': 'orange',
					'textDecoration': 'underline'
				})
			}, function() {
				$(this).css({
					'color': '#000',
					'textDecoration': 'none'
				})
			})
		}, function() {
			$(this).css('border', '1px solid transparent')
			$(this).find('.hideWish').css('display', 'none')
		})

		$('.tryPrime').hover(function() {
			$('.hidePrime').css('display', 'block')
			$(this).css('border', '1px solid #ddd')
		}, function() {
			$('.hidePrime').css('display', 'none')
			$(this).css('border', '1px solid transparent')

		})

		$('#header .login').hover(function() {
			$(this).css('border', '1px solid #ddd')
			$('.hideLogin').css('display', 'block')
			$('.hideLogin').find('a').hover(function() {
				$(this).css({
					'color': 'orange',
					'textDecoration': 'underline'
				})
			}, function() {
				$(this).css({
					'color': '#000',
					'textDecoration': 'none'
				})
			})
		}, function() {
			$(this).css('border', '1px solid transparent')
			$('.hideLogin').css('display', 'none')
		})

		;
		(function() {

			if(getCookie('cart')) {
				var $totalN = 0;
				var $ck = JSON.parse(getCookie('cart'))
				console.log($ck)
				for(var sid in $ck) {
					$totalN += $ck[sid]
					$('.cart-n').html($totalN)

				}
			}

			$('#detailNav li').hover(function() {
				$(this).find('a').css({
					'color': 'orange',
					'borderBottomColor': 'orange'
				})
			}, function() {
				$(this).find('a').css({
					'color': '#000',
					'borderBottomColor': '#fafafa'
				})
			})
			$('.detailPath a').hover(function() {
				$(this).css({
					'color': 'orange',
				})
			}, function() {
				$(this).css({
					'color': '#767676',
				})
			})

			//放大镜：

			$('.smallP').on('mouseover', function() {
				$('.smallF').css('display', 'block')
				$('.bigF').css('display', 'block')
				$('.bigF img').width($('.smallP').width() / $('.smallF').width() * $('.bigF').width())
				$('.smallP').on('mousemove', function(e) {
					var $left = e.pageX - $(this).offset().left - $('.smallF').width() / 2;
					var $top = e.pageY - $(this).offset().top - $('.smallF').height() / 2
					var $rapport = $('.bigF').width() / $('.smallF').width()
					if($left <= 0) {
						$left = 0;
					} else if($left >= ($('.smallP').width() - $('.smallF').width())) {
						$left = $('.smallP').width() - $('.smallF').width();
					}
					if($top <= 0) {
						$top = 0;
					} else if($top >= ($('.smallP').height() - $('.smallF').height())) {
						$top = $('.smallP').height() - $('.smallF').height();
					}
					$('.smallF').css({
						left: $left,
						top: $top
					})
					$('.bigF img').css({
						left: -$left * $rapport,
						top: -$top * $rapport
					})
				})
			})

			$('.smallP').on('mouseout', function() {
				$('.smallF').css('display', 'none')
				$('.bigF').css('display', 'none')
			})

			$('.imgList li').hover(function() {
				$(this).css('boxShadow', '0 0 5px red')
				$('.smallP img').attr('src', $(this).find('img').attr('src'))
				$('.bigP').attr('src', $(this).find('img').attr('src'))
			}, function() {
				$(this).css('boxShadow', '0 0 0px red')
			})

			$('#login b').find('a').hover(function() {
				$(this).css('color', 'orange')
			}, function() {
				$(this).css('color', 'blue')
			})

			$('#footer a').hover(function() {
				$(this).css({
					'color': 'orange',
					'textDecoration': 'underline'
				})
			}, function() {
				$(this).css({
					'color': '#004b91',
					'textDecoration': 'none'
				})
			})

			$('.goodInfo a').hover(function() {
				$(this).css({
					'color': 'orange',
					'textDecoration': 'underline'
				})
			}, function() {
				$(this).css({
					'color': '#0066c0',
					'textDecoration': 'none'
				})
			})
			$('.colorBox img').eq(0).css('borderColor', 'orange')
			$('.typeBox span').eq(0).css('borderColor', 'orange')
			$('.colorBox img').hover(function() {
				$('.colorBox img').css({
					'borderColor': '#ddd',
				})
				$(this).css({
					'borderColor': 'orange',
				})
			})
			$('.typeBox span').hover(function() {
				$('.typeBox span').css({
					'borderColor': '#ddd',
				})
				$(this).css({
					'borderColor': 'orange',
				})
			})

			$('.addCart-t a').hover(function() {
				$(this).css({
					'color': 'orange',
					'textDecoration': 'underline'
				})
			}, function() {
				$(this).css({
					'color': '#0066c0',
					'textDecoration': 'none'
				})
			})
			$('.other').hover(function() {

				$(this).find('i').css({
					'color': 'orange',
				})
			}, function() {
				$(this).find('i').css({
					'color': '#000',
				})
			})
			var $addNum = 1;
			$('.goodNum input').click(function() {
				$('.goodNum ul').css('display', 'block')
			})
			$('.goodNum ul li').hover(function() {
				$(this).css('background', '#ddd')
			}, function() {
				$(this).css('background', '#fff')
			})
			$('.goodNum ul li').click(function() {
				$addNum = parseInt($(this).html())
				$('.goodNum input').val($(this).html())
				$('.goodNum ul').css('display', 'none')

			})
			$('.goodNum input').blur(function() {
				$addNum = parseInt($(this).html())
				setTimeout(function() {
					$('.goodNum ul').css('display', 'none')
				}, 300)

			})

			//详情页添加到购物车功能---start
			$('#jiaru').on('click', function() {
				var $sid = $(this).attr('sid')
				var $preToNum = parseFloat($('.cart-n').html())
				var $num = parseFloat($('.goodNum input').val())
				$('.cart-n').html($preToNum+$num)
				if(getSidNum('cart', $sid) == -1 || getSidNum('cart', $sid) == 0) {

					changeSidNum('cart', $sid, $num)
					
			
				}  else {
					var $preNum = parseFloat(getSidNum('cart',$sid))
					$num += $preNum
					changeSidNum('cart', $sid, $num)
					
				}

			})

			//详情页添加到购物车功能---end

		})();

	})
});

/*require(['https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=dddd&json=1&p=3&sid=1468_21111&req=2&csor=4&pwd=ddd&cb=define'],function(d){
	console.log(d);
});*/