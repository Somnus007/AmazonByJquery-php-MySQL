require(['config'], function() { //config：加载配置文件
	require(['jquery', 'jqcookie'], function() { //加载配置里面的内容,引入jquery和cookie插件
		//addCookie('name','zhangsan250',{expires:7});
		$(".margin").css("width", $(document).width())
		
		/*document.onselectstart = function(){
			return false;
		}*/
		
		$(document).on('selectstart',function(){
			return false;
		})

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

			$.ajax({
				url: 'php/cart.php',
				dataType: 'json'
			}).done(function(d) {
				var $moreGoogHtml = '';
				for(var $i = 0; $i < d.length - 1; $i++) {
					$moreGoogHtml += ('<li><img class="pic" sid="' + d[$i].sid + '" src="' + d[$i].url + '" /><p class="title">' + d[$i].btitle + '</p><p class="price">' + d[$i].price + '</p><span class="addToCart">加入购物车</span></li>')
				}
				$('#moreGood ul').html($moreGoogHtml)

				// 刷新页面还在

				if(getCookie('cart')) {
					$('#nullBox').css('display', 'none')
					$('#cartGood').css('display', 'block')
					$('.hideGoodList').css('display', 'none')
					var $totalM = 0;
					var $totalN = 0;
					for(var sid in JSON.parse(getCookie('cart'))) {
						var $nn = parseFloat(JSON.parse(getCookie('cart'))[sid])
						var $pp = parseFloat(d[sid].price.split(/\s+/)[1])
						$totalN += $nn;
						$totalM += ($nn * $pp)
						var $dindex = sid
						var $newGood = $('.hideGoodList').clone(true)
						$newGood.css('display', 'block')
						$newGood.removeClass('hideGoodList')
						$newGood.find('img').attr('src', d[$dindex].url)
						$newGood.find('img').attr('sid', d[$dindex].sid)
						$newGood.find('.bTitle').html(d[$dindex].btitle)
						$newGood.find('.sTitle').html(d[$dindex].stitle)
						if(d[$dindex].stock == '有货') {
							$newGood.find('.stock').html('现在有货')
							$newGood.find('.stock').css('color', 'green')
						} else {
							$newGood.find('.stock').html('库存中仅剩 ' + d[$dindex].stock + '件。')
						}
						$newGood.find('.saler span').html(d[$dindex].saler)
						$newGood.find('.googPrice').html(d[$dindex].price)
						var $goodClass = 'z' + $dindex
						$newGood.addClass($goodClass)
						$('.cartGoodList').append($newGood)
						$('.z' + $dindex).find('input').val($nn)
					}

					$('.totalNum').html($totalN)
					$('.cart-n').html($totalN)
					$('.totalMoney').html('￥  ' + $totalM)
				}

				//推荐商品加入购物车

				$('#moreGood ul').on('click', '.addToCart', function() {
					var $sid = $(this).parent().find('img').attr('sid')
					if(getSidNum('cart', $sid) == -1) {
						$('#nullBox').css('display', 'none')
						$('#cartGood').css('display', 'block')
						$('.hideGoodList').css('display', 'none')
						$('.totalNum').html(1)
						$('.cart-n').html(1)
						$('.totalMoney').html(d[$sid].price)
						changeSidNum('cart', $sid, 1)
						var $newGood = $('.hideGoodList').clone(true)
						$newGood.removeClass('hideGoodList')
						$newGood.css('display', 'block')
						$newGood.find('img').attr('src', d[$sid].url)
						$newGood.find('img').attr('sid', d[$sid].sid)
						$newGood.find('.bTitle').html(d[$sid].btitle)
						$newGood.find('.sTitle').html(d[$sid].stitle)
						if(d[$sid].stock == '有货') {
							$newGood.find('.stock').html('现在有货')
							$newGood.find('.stock').css('color', 'green')
						} else {
							$newGood.find('.stock').html('库存中仅剩 ' + d[$sid].stock + '件。')
						}
						$newGood.find('.saler span').html(d[$sid].saler)
						$newGood.find('.googPrice').html(d[$sid].price)
						var $goodClass = 'z' + $sid
						$newGood.addClass($goodClass)
						$('.cartGoodList').append($newGood)
						//console.log(JSON.parse(getCookie('cart')))
					} else if(getSidNum('cart', $sid) == 0) {
						var $tp = parseFloat($('.totalMoney').html().split(/\s+/)[1])
						var $tn = parseFloat($('.totalNum').html())
						var $singleP = parseFloat(d[$sid].price.split(/\s+/)[1])
						$tn += 1
						$tp += $singleP
						$('.totalNum').html($tn)
						$('.cart-n').html($tn)
						$('.totalMoney').html('￥  ' +$tp)
						changeSidNum('cart', $sid, 1)
						var $newGood = $('.hideGoodList').clone(true)
						$newGood.css('display', 'block')
						$newGood.removeClass('hideGoodList')
						$newGood.find('img').attr('src', d[$sid].url)
						$newGood.find('img').attr('sid', d[$sid].sid)
						$newGood.find('.bTitle').html(d[$sid].btitle)
						$newGood.find('.sTitle').html(d[$sid].stitle)
						if(d[$sid].stock == '有货') {
							$newGood.find('.stock').html('现在有货')
							$newGood.find('.stock').css('color', 'green')
						} else {
							$newGood.find('.stock').html('库存中仅剩 ' + d[$sid].stock + '件。')
						}
						$newGood.find('.saler span').html(d[$sid].saler)
						$newGood.find('.googPrice').html(d[$sid].price)
						var $goodClass = 'z' + $sid
						$newGood.addClass($goodClass)
						$('.cartGoodList').append($newGood)
						console.log(JSON.parse(getCookie('cart')))
					} else {
						var $tp = parseFloat($('.totalMoney').html().split(/\s+/)[1])
						var $tn = parseFloat($('.totalNum').html())
						var $singleP = parseFloat(d[$sid].price.split(/\s+/)[1])
						$tn += 1
						$tp += $singleP
						$('.totalNum').html($tn)
						$('.cart-n').html($tn)
						$('.totalMoney').html('￥  ' +$tp)
						var $prenum = parseFloat($('.z' + $sid).find('input').val())
						$prenum += 1
						$('.z' + $sid).find('input').val($prenum)
						changeSidNum('cart', $sid, $prenum)
						//console.log(JSON.parse(getCookie('cart')))
					}

				})
				
				//减数量按钮
				
				$('.cartGoodList').on('click', '.reduce', function() {
					

					var $tp = parseFloat($('.totalMoney').html().split(/\s+/)[1])
					var $tn = $('.totalNum').html()
					var $singleP = parseFloat($(this).parents('li').find('.googPrice').html().split(/\s+/)[1])
					
					var $goodN = $(this).parent().find('input').val()
					if($goodN!=1){
						$goodN -= 1
						$tp -= $singleP
						$tn -= 1
					}else{
						$goodN = 1
					}
					$(this).parent().find('input').val($goodN)
					$('.totalNum').html($tn)
					$('.cart-n').html($tn)
					$('.totalMoney').html('￥  ' + $tp)
					var $sid = $(this).parents('li').find('img').attr('sid')
					changeSidNum('cart',$sid,$goodN)
				})
				
				//加数量按钮
				
				$('.cartGoodList').on('click', '.add', function() {
					

					var $tp = parseFloat($('.totalMoney').html().split(/\s+/)[1])
					var $tn = parseFloat($('.totalNum').html())
					var $singleP = parseFloat($(this).parents('li').find('.googPrice').html().split(/\s+/)[1])
					
					var $goodN = parseFloat($(this).parent().find('input').val())
						$goodN += 1
						$tp += $singleP
						$tn += 1

					$(this).parent().find('input').val($goodN)
					$('.totalNum').html($tn)
					$('.cart-n').html($tn)
					$('.totalMoney').html('￥  ' + $tp)
					var $sid = $(this).parents('li').find('img').attr('sid')
					changeSidNum('cart',$sid,$goodN)
					
				})
				
				//手动输入数量，失去焦点触发事件
				
				$('.cartGoodList').on('blur', '.cartGoodNum input', function() {
					
					var $sid = $(this).parents('li').find('img').attr('sid')
					var $tp = parseFloat($('.totalMoney').html().split(/\s+/)[1])
					var $tn = parseFloat($('.totalNum').html())
					var $singleP = parseFloat($(this).parents('li').find('.googPrice').html().split(/\s+/)[1])
					var $goodN = parseFloat(getSidNum('cart',$sid))
					var $goal = parseFloat($(this).val())
					var $gap = $goal - $goodN
					
					$('.totalNum').html($tn+$gap)
					$('.cart-n').html($tn+$gap)
					$('.totalMoney').html('￥  ' + ($tp+$singleP*$gap))
					
					changeSidNum('cart',$sid,$goal)
					
				})
				
				//删除整条商品
				
				$('.cartGoodList').on('click', '.del', function() {
					if($('.cartGoodList li').not('.hideGoodList').length==1){
						$('#nullBox').css('display', 'block')
						$('#cartGood').css('display', 'none')
						delCookie('cart',getCookie('cart'))
					}
					var $sid = $(this).parents('li').find('img').attr('sid')
					var $tp = parseFloat($('.totalMoney').html().split(/\s+/)[1])
					var $tn = parseFloat($('.totalNum').html())
					var $singleP = parseFloat($(this).parents('li').find('.googPrice').html().split(/\s+/)[1])
					var $goodN = parseFloat($(this).parents('li').find('input').val())
					$('.totalNum').html($tn-$goodN)
					$('.cart-n').html($tn-$goodN)
					$('.totalMoney').html('￥  ' + ($tp-$singleP*$goodN))
					
					$(this).parents('li').remove()
					changeSidNum('cart',$sid,0)
				})
				

			}).fail(function(e) {
				console.log(e.status)
			})

		})()

	})
});

/*require(['https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=dddd&json=1&p=3&sid=1468_21111&req=2&csor=4&pwd=ddd&cb=define'],function(d){
	console.log(d);
});*/