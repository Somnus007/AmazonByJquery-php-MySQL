require(['config'], function() { //config：加载配置文件
	require(['jquery', 'jqcookie'], function() { //加载配置里面的内容,引入jquery和cookie插件
		//addCookie('name','zhangsan250',{expires:7});
		$(".margin").css("width", $(document).width())
		
		if(getCookie('cart')) {
				var $totalN = 0;
				var $ck = JSON.parse(getCookie('cart'))
				for(var sid in $ck) {
					$totalN += $ck[sid]
					$('.cart-n').html($totalN)

				}
			}


		$('#topAd').hover(function() {
			$('#topAd .hideAdBox').stop(true, true).animate({
				height: 460
			})
		}, function() {
			setTimeout(function() {
				$('#topAd .hideAdBox').stop(true, true).animate({
					height: 0
				})
			}, 500)

		})
		$('.asideAd').hover(function() {
			$(this).css('color', 'orange')
			$(this).find('i').css('backgroundPosition', '0 -13px')
			event.stopPropagation();
		}, function() {
			$(this).css('color', 'blue')
			$(this).find('i').css('backgroundPosition', '0 0')
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
		
		
		;(function(){
			var arr = ['red','orange','yellow','green','blue','cyan','purple']
			setInterval(function(){
				var num = Math.floor(Math.random()*7)
				$('.des b').css('color',arr[num])
				$('.des span').css('color',arr[num])
			},500)
		})()

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

		$('.header-b-l').hover(function() {
			$(this).css('border', '1px solid #ddd')
		}, function() {
			$(this).css('border', '1px solid #fff')
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

		$.ajax({
			url: 'php/index.php',
			dataType: 'json'
		}).done(function(d) {

			//  接收并整理各部分的数据---start

			var $navLog = [];
			var $adviceLog = [];
			var $good1Log = [];
			var $good2Log = [];
			var $good3Log = [];
			var $oversea = [];
			var $fashion = [];
			var $phone = [];
			var $book = [];
			var $life = [];
			var $food = [];
			var $baby = [];
			var $mr3 = [];
			var $mr4 = [];
			var $mr5 = [];

			for(var $i = 0; $i < d.length; $i++) {
				if(d[$i].section == 'nav') {
					$navLog.push(d[$i])
				} else if(d[$i].section == 'advice') {
					$adviceLog.push(d[$i])
				} else if(d[$i].section == 'shoping') {
					$good1Log.push(d[$i])
				} else if(d[$i].section == 'willstart') {
					$good2Log.push(d[$i])
				} else if(d[$i].section == 'end') {
					$good3Log.push(d[$i])
				} else if(d[$i].section == 'oversea') {
					$oversea.push(d[$i])
				} else if(d[$i].section == 'fashion') {
					$fashion.push(d[$i])
				} else if(d[$i].section == 'phone') {
					$phone.push(d[$i])
				} else if(d[$i].section == 'book') {
					$book.push(d[$i])
				} else if(d[$i].section == 'life') {
					$life.push(d[$i])
				} else if(d[$i].section == 'food') {
					$food.push(d[$i])
				} else if(d[$i].section == 'baby') {
					$baby.push(d[$i])
				} else if(d[$i].section == 'aside3') {
					$mr3.push(d[$i])
				} else if(d[$i].section == 'aside4') {
					$mr4.push(d[$i])
				} else if(d[$i].section == 'aside5') {
					$mr5.push(d[$i])
				}
			}
			/*console.log($oversea)
			console.log($book)
			console.log($food)*/

			//  接收并整理各部分的数据---end

			var $navimghtml = '';
			var $navulhtml = ''
			for(var $i = 0; $i < $navLog.length; $i++) {
				$navimghtml += ('<img src="' + $navLog[$i].url + '" />')
				$navulhtml += ('<li><b>' + $navLog[$i].title + '</b><i>' + $navLog[$i].detail + '</i></li>')
			}
			$('#nav .imgBox').html($navimghtml)
			$('#nav .imgBox img:first').css('opacity', 1)
			$('#nav ul').html($navulhtml)
			$('#nav ul li:first').addClass('active')
			$('.navBox').hover(function() {
				$('#nav ul').stop(true, true).animate({
					bottom: 0
				})
			}, function() {
				$('#nav ul').stop(true, true).animate({
					bottom: -45
				})
			})
			var $navNum = 0;
			$('#nav ul li').hover(function() {

				if($navNum != $(this).index()) {
					$('#nav ul li').removeClass('active')
					$(this).addClass('active')
					$('#nav .imgBox').children().stop(true, true).animate({
						opacity: 0
					})
					$('#nav .imgBox').children().eq($(this).index()).stop(true, true).animate({
						opacity: 1
					})
					$navNum = $(this).index()
				}

			})
			$('#nav .navleft').hover(function() {
				$(this).css('background', 'rgba(255,255,255,0.4)')
				$('#nav .navleft').click(function() {
					if($navNum == 0) {
						$navNum = 7
					} else {
						$navNum -= 1
					}
					$('#nav ul li').removeClass('active')
					$('#nav ul li').eq($navNum).addClass('active')
					$('#nav .imgBox').children().stop(true, true).animate({
						opacity: 0
					})
					$('#nav .imgBox').children().eq($navNum).stop(true, true).animate({
						opacity: 1
					})
				})
			}, function() {
				$(this).css('background', 'none')
			})

			$('#nav .navright').hover(function() {
				$(this).css('background', 'rgba(255,255,255,0.4)')

			}, function() {
				$(this).css('background', 'none')
			})

			$('#nav .navright').click(function() {
				if($navNum == 7) {
					$navNum = 0
				} else {
					$navNum += 1
				}
				$('#nav ul li').removeClass('active')
				$('#nav ul li').eq($navNum).addClass('active')
				$('#nav .imgBox').children().stop(true, true).animate({
					opacity: 0
				})
				$('#nav .imgBox').children().eq($navNum).stop(true, true).animate({
					opacity: 1
				})
			})

			setInterval(function() {
				$('#nav .navright').click()
			}, 3000)

			$('.top1-t b').hover(function() {
				$(this).css('color', 'orange')
			}, function() {
				$(this).css('color', '#000')
			})
			$('.top1 .price').hover(function() {
				$(this).css('color', 'orange')
			}, function() {
				$(this).css('color', '#b12704')
			})
			$('.top1 .more').hover(function() {
				$(this).css('color', 'orange')
			}, function() {
				$(this).css('color', '#ccc')
			})

			var $advicehtml = '';
			for(var $i = 0; $i < $adviceLog.length; $i++) {
				$advicehtml += ('<li><a href="#"><img src="' + $adviceLog[$i].url + '" /></a><span class="price">' + $adviceLog[$i].price + '</span><div class="hideAdvice"><span class="title">' + $adviceLog[$i].title + '</span><span class="comment"><i></i><span>(222)</span></span><a href="#"><img src="' + $adviceLog[$i].url + '" /></a><span class="price">' + $adviceLog[$i].price + '</span></div></li>')
			}
			$('.advice ul').html($advicehtml)

			$('.advice li').hover(function() {
				$('.hideAdvice').eq($(this).index()).css('display', 'block')
			}, function() {
				$('.hideAdvice').eq($(this).index()).css('display', 'none')
			})

			var $good1html = '';
			for(var $i = 0; $i < $good1Log.length; $i++) {
				$good1html += ('<li><a class="img" href="#"><img src="' + $good1Log[$i].url + '" /></a><b>镇店之宝</b><span class="price">' + $good1Log[$i].price + '</span><i class="lefttime">剩余时间 10:05:30</i><a href="#" class="title">' + $good1Log[$i].title + '</a><a href="#" class="comment"><i></i><span>66</span></a><a href="#" class="seemore">查看优惠</a></li>')
			}
			$('.limitTime .good1 ul').html($good1html)
			$('.limitTime .good1').addClass('activeGood')

			var $good2html = '';
			for(var $i = 0; $i < $good2Log.length; $i++) {
				$good2html += ('<li><a class="img" href="#"><img src="' + $good2Log[$i].url + '" /></a><a href="#" class="title">' + $good2Log[$i].title + '</a><i class="lefttime">距离开始剩余时间 03:01:20</i><a href="#" class="seemore">关注</a></li>')
			}
			$('.limitTime .good2 ul').html($good2html)

			var $good3html = '';
			for(var $i = 0; $i < $good3Log.length; $i++) {
				$good3html += ('<li><a class="img" href="#"><img src="' + $good3Log[$i].url + '" /></a><b>镇店之宝</b><span class="price">' + $good3Log[$i].price + '</span><a href="#" class="title">' + $good3Log[$i].title + '</a><a href="#" class="comment"><i></i><span>436</span></a><span class="seemore">优惠已结束</span></li>')
			}
			$('.limitTime .good3 ul').html($good3html)

			$('.limitTime .good1 .seemore').hover(function() {
				$(this).css('background', '#f3ce72')
			}, function() {
				$(this).css('background', '#f6ce98')
			})
			$('.limitTime .good2 .seemore').hover(function() {
				$(this).css('background', '#E7E7E7')
			}, function() {
				$(this).css('background', '#ecedf0')
			})

			$('.limitTime .title').hover(function() {
				$(this).css('color', 'orange')
			}, function() {
				$(this).css('color', '#0066cb')
			})

			$('.limitTime .btnBox').find('a').hover(function() {
				if($(this).index() != $btnNum) {
					$(this).css('borderBottom', '2px solid #e77600')

				}

			}, function() {
				if($(this).index() != $btnNum) {
					$(this).css('borderBottom', '2px solid #fff')
				}
			})

			var $pageNum = 0;

			$('.timeRbtn').click(function() {
				if($pageNum == 1) {
					$pageNum = 0
				}
				$pageNum += 1
				$('.activeGood').find('ul').css('left', -$pageNum * 1008 + 'px')
				$('.activeGood').find('.page').html($pageNum + 1)
				if($pageNum != 1) {
					$('.timeRbtn').css('display', 'block')
				} else {
					$('.timeRbtn').css('display', 'none')
				}
				if($pageNum != 0) {
					$('.timeLbtn').css('display', 'block')
				} else {
					$('.timeLbtn').css('display', 'none')
				}
			})

			$('.timeLbtn').click(function() {
				if($pageNum == 0) {
					$pageNum = 1
				}
				$pageNum -= 1
				$('.activeGood').find('ul').css('left', -$pageNum * 1008 + 'px')
				$('.activeGood').find('.page').html($pageNum + 1)
				if($pageNum != 1) {
					$('.timeRbtn').css('display', 'block')
				} else {
					$('.timeRbtn').css('display', 'none')
				}
				if($pageNum != 0) {
					$('.timeLbtn').css('display', 'block')
				} else {
					$('.timeLbtn').css('display', 'none')
				}
			})

			//tab 切换

			var $btnNum = 0;
			$('.limitTime .btnBox').find('a').click(function() {
				if($(this).index() != $btnNum) {
					$('.limitTime .btnBox').find('a').removeClass('btnActive')
					$('.limitTime .btnBox').find('a').css('borderBottom', '2px solid #fff')
					$('.limitTime .goodBox').find('.good').removeClass('activeGood')
					$(this).addClass('btnActive')
					$(this).css('borderBottom', '2px solid #e77600')
					$('.limitTime .goodBox').find('.good').eq($(this).index()).addClass('activeGood')
					$btnNum = $(this).index()
					$('.limitTime .goodBox .page').html('1')
					$('.timeLbtn').css('display', 'none')
					$('.timeRbtn').css('display', 'block')
					$pageNum = 0;
				}

			})

			$('.limitTime .select2').hover(function() {
				$(this).find('.option2').css('display', 'block')
			}, function() {
				$(this).find('.option2').css('display', 'none')
			})
			$('.limitTime .guize').hover(function() {
				$(this).css('color', 'orange')
			}, function() {
				$(this).css('color', 'blue')
			})

			;
			(function() {
				var $overseahtml = '';
				var $fashionhtml = '';
				var $phonehtml = '';
				var $bookhtml = '';
				var $lifehtml = '';
				var $foodhtml = '';
				var $babyhtml = '';

				for(var $i = 0; $i < $oversea.length; $i++) {
					$overseahtml += ('<li class="clear"><div class="f-text bg"><span class="title">' + $oversea[$i].title + '</span><span class="price">' + $oversea[$i].price + '</span><a href="#" class="detail">' + $oversea[$i].detail + '</a><p class="sanjiao"></p></div><div class="f-img"><a href="#"><img src="' + $oversea[$i].url + '" /></a></div></li>')
					$fashionhtml += ('<li class="clear"><div class="f-text bg"><span class="title">' + $fashion[$i].title + '</span><span class="price">' + $fashion[$i].price + '</span><a href="#" class="detail">' + $fashion[$i].detail + '</a><p class="sanjiao"></p></div><div class="f-img"><a href="#"><img src="' + $fashion[$i].url + '" /></a></div></li>')
					$phonehtml += ('<li class="clear"><div class="f-text bg"><span class="title">' + $phone[$i].title + '</span><span class="price">' + $phone[$i].price + '</span><a href="#" class="detail">' + $phone[$i].detail + '</a><p class="sanjiao"></p></div><div class="f-img"><a href="#"><img src="' + $phone[$i].url + '" /></a></div></li>')
					$bookhtml += ('<li class="clear"><div class="f-text bg"><span class="title">' + $book[$i].title + '</span><span class="price">' + $book[$i].price + '</span><a href="#" class="detail">' + $book[$i].detail + '</a><p class="sanjiao"></p></div><div class="f-img"><a href="#"><img src="' + $book[$i].url + '" /></a></div></li>')
					$lifehtml += ('<li class="clear"><div class="f-text bg"><span class="title">' + $life[$i].title + '</span><span class="price">' + $life[$i].price + '</span><a href="#" class="detail">' + $life[$i].detail + '</a><p class="sanjiao"></p></div><div class="f-img"><a href="#"><img src="' + $life[$i].url + '" /></a></div></li>')
					$foodhtml += ('<li class="clear"><div class="f-text bg"><span class="title">' + $food[$i].title + '</span><span class="price">' + $food[$i].price + '</span><a href="#" class="detail">' + $food[$i].detail + '</a><p class="sanjiao"></p></div><div class="f-img"><a href="#"><img src="' + $food[$i].url + '" /></a></div></li>')
					$babyhtml += ('<li class="clear"><div class="f-text bg"><span class="title">' + $baby[$i].title + '</span><span class="price">' + $baby[$i].price + '</span><a href="#" class="detail">' + $baby[$i].detail + '</a><p class="sanjiao"></p></div><div class="f-img"><a href="#"><img src="' + $baby[$i].url + '" /></a></div></li>')
				}
				
				var $arrr = [$overseahtml,$fashionhtml,$phonehtml,$bookhtml,$lifehtml,$foodhtml,$babyhtml]
				/*$('.oversea .body-l').html($overseahtml)
				$('.fashion .body-l').html($fashionhtml)
				$('.phone .body-l').html($phonehtml)
				$('.book .body-l').html($bookhtml)
				$('.life .body-l').html($lifehtml)
				$('.food .body-l').html($foodhtml)
				$('.baby .body-l').html($babyhtml)*/

				var $bg = ['#d9e9e9', '#e9efef', '#edecf2', '#cce3eb', '#deeced', '#cee7e3', '#e1e3de', '#f5e7da', '#6cb7ca', '#d3e2e9', '#e6dcab']
				var $index = 0;
				$('.build .bg').each(function() {
					$index = Math.floor(Math.random() * 11)
					$(this).css('background', $bg[$index])
					$(this).find('.sanjiao').css('borderLeftColor', $bg[$index])
				})
				$('.build .f-text').hover(function() {
					$(this).find('.detail').css('color', 'orange')
				}, function() {
					$(this).find('.detail').css('color', '#767676')
				})

				$('.build .body-r a').hover(function() {
					$(this).css('color', 'orange')
				}, function() {
					$(this).css('color', '#767676')
				})
				$('.f-head a').hover(function() {
					$(this).css('color', 'orange')
				}, function() {
					$(this).css('color', '#333')
				})

				$('.main-r3 img').each(function(i) {
					$(this).attr('src', $mr3[i].url)
				})

				$('.main-r3 li').each(function() {
					$index = Math.floor(Math.random() * 11)
					$(this).css('background', $bg[$index])

				})

				$('.main-r3 li').hover(function() {
					$(this).find('.more').css('color', 'orange')
				}, function() {
					$(this).find('.more').css('color', '#827b6f')
				})

				$('.main-r4 img').each(function(i) {
					$(this).attr('src', $mr4[i].url)
				})

				$('.main-r5 img').each(function(i) {
					$(this).attr('src', $mr5[i].url)
				})
				$('.main-r4 .more').hover(function() {
					$(this).css('color', 'orange')
				}, function() {
					$(this).css('color', 'blue')
				})
				$('.main-r5 .more').hover(function() {
					$(this).css('color', 'orange')
				}, function() {
					$(this).css('color', 'blue')
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

				//楼梯
				$(window).scroll(function() {
					var $scrollTop = $(window).scrollTop()
					if($scrollTop >= 1300) {
						$('#tizi').fadeIn(500);
					}else{
						$('#tizi').fadeOut(500);
					}
					console.log($(".build .floor").eq(1).offset().top)
					console.log($scrollTop)
					$(".build .floor").each(function() {
						
						var $top = $(".build .floor").eq($(this).index('.floor')).offset().top + 200
						if($top > $scrollTop) {
							$(this).find('.body-l').html($arrr[$(this).index('.floor')])//懒加载
							$('#tizi li').removeClass('active');
							$('#tizi li').eq($(this).index('.floor')).addClass('active');
							return false;
						}
					})
				})
				$("#tizi li").not(".back").on("click", function() {
					var $index = $(this).index()
					var $top = $(".build .floor").eq($index).offset().top
					$("html,body").animate({
						scrollTop: $top
					}, 200)
				})
				$("#tizi .back").on("click", function() {
					$("html,body").animate({
						scrollTop: 0
					})
				})

			})()

		}).fail(function(e) {
			console.log(e.status)
		})

	})
});

/*require(['https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=dddd&json=1&p=3&sid=1468_21111&req=2&csor=4&pwd=ddd&cb=define'],function(d){
	console.log(d);
});*/