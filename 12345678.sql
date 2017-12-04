-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 10 月 18 日 08:16
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `amazon`
--
CREATE DATABASE `amazon` DEFAULT CHARACTER SET gbk COLLATE gbk_chinese_ci;
USE `amazon`;

-- --------------------------------------------------------

--
-- 表的结构 `cart`
--

CREATE TABLE IF NOT EXISTS `cart` (
  `sid` varchar(255) NOT NULL,
  `btitle` varchar(255) DEFAULT NULL,
  `stitle` varchar(255) DEFAULT NULL,
  `stock` varchar(255) DEFAULT NULL,
  `saler` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

--
-- 转存表中的数据 `cart`
--

INSERT INTO `cart` (`sid`, `btitle`, `stitle`, `stock`, `saler`, `price`, `url`) VALUES
('0', 'Apple iPhone 6 (32G) 4G智能手机(金色 公开版)', 'Apple', '2', '岗隆旗舰店（默认电子发票、正品保证、全国联保、顺丰速运）', '￥ 2458.00', 'https://images-cn.ssl-images-amazon.com/images/I/41E8NiKuFJL._SS100_.jpg'),
('1', 'CASIO 卡西欧 光动能中性手表 AQ-S810WC-4AVDF', 'Casio 卡西欧', '4', '湖南移动', '￥ 471.50', 'https://images-cn.ssl-images-amazon.com/images/I/414v9ev8dUL._SS100_.jpg'),
('2', '佳能Canon 长焦相机Powershot SX730 HS高清数码相机', 'Canon 佳能', '66', '数码专家连锁机构', '￥ 2757.00', 'https://images-cn.ssl-images-amazon.com/images/I/51682q863nL._SS100_.jpg'),
('3', 'Kodak 柯达 FZ152 便携数码相机 黑色', 'Kodak 柯达', '有货', '信实数码专营店', '￥ 769.00', 'https://images-cn.ssl-images-amazon.com/images/I/41Ha2yNyk-L._SS100_.jpg'),
('4', 'Apple iPhone 8 (A1863) 64GB 银色 移动联通电信4G手机', 'Apple', '3', '华海3C旗舰店', '￥ 5499.00', 'https://images-cn.ssl-images-amazon.com/images/I/41gK7zHPVfL._SS100_.jpg'),
('5', '荣耀9 高配版 STF-AL10 6GB+64GB 全网通4G手机(魅海蓝)', 'honor 荣耀', '15', '迪信通旗舰店', '￥ 2518.00', 'https://images-cn.ssl-images-amazon.com/images/I/41ncYPvbRvL._SS100_.jpg'),
('6', '荣耀畅玩6A 全网通标配版手机(金色)', 'honor 荣耀', '有货', '华为自营店', '￥ 799.00', 'https://images-cn.ssl-images-amazon.com/images/I/51ZegeN-7cL._SS100_.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `indexdata`
--

CREATE TABLE IF NOT EXISTS `indexdata` (
  `sid` int(11) NOT NULL,
  `section` varchar(50) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `detail` varchar(100) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

--
-- 转存表中的数据 `indexdata`
--

INSERT INTO `indexdata` (`sid`, `section`, `title`, `detail`, `price`, `url`) VALUES
(1, 'nav', '全新Kindle Oasis', '震撼上市', '', 'https://images-cn.ssl-images-amazon.com/images/G/28/kindle/design/2017/device/1012cognac/ys-171012-5Atf1500x300-cognac-dev._CB514618400_.jpg'),
(2, 'nav', '数万畅销图书', '享不止100元优惠', '', 'https://images-cn.ssl-images-amazon.com/images/G/28/img17/ftz/shj/exposure/whc_170921_1500300_ATF._CB515448816_.jpg'),
(3, 'nav', '全球战绩榜', '169元起', '', 'https://images-cn.ssl-images-amazon.com/images/G/28/yuchsong/newtcg/hp_20170711_ags_1500300_Clarks._CB504871379_.jpg'),
(4, 'nav', '满150元', '下单售价7折', '', 'https://images-cn.ssl-images-amazon.com/images/G/28/img17/book/wh/09/wh_0930_1500300_101phase2_bk1._CB515717245_.jpg'),
(5, 'nav', '10月13日镇店之宝', '买2付1', '', 'https://images-cn.ssl-images-amazon.com/images/G/28/zhuxiyu/11.11/hp_20170928_1500300_shoes_quanpinlei._CB515804892_.jpg'),
(6, 'nav', '国际大牌鞋靴', '下单售价7折', '', 'https://images-cn.ssl-images-amazon.com/images/G/28/yipinxu/oct-prestige-resize/tongbeis_1500300_1010prestige._CB515889447_.jpg'),
(7, 'nav', 'ABB电工', '满99元减15元', '', 'https://images-cn.ssl-images-amazon.com/images/G/28/ruixia-2017-10/ljj_20171011_1500X300-1072124._CB514635765_.jpg'),
(8, 'nav', 'Moleskine', '最高满999元减200元', '', 'https://images-cn.ssl-images-amazon.com/images/G/28/sports/zhaoliuxin/201707/ljj_20170927_1500300_sports-1072108._CB514829234_.jpg'),
(9, 'advice', 'Canon佳能 EOS 6D Mark II单反数码相机 全画幅高端单反相机 6D升级款二代 (单机身)', '', '￥12,486.00', 'https://images-cn.ssl-images-amazon.com/images/I/51Ntfk1hAcL._AC_SS150_.jpg'),
(10, 'advice', 'Sony 索尼 ILCE-5100L/W 微单? 数码相机 单镜套装(E PZ 16-50mm F3.5-5.6 OSS) (白色)', '', '￥3,089.00', 'https://images-cn.ssl-images-amazon.com/images/I/51Uo%2BPJfdmL._AC_SS150_.jpg'),
(11, 'advice', '尼康（Nikon）D7500单反相机套机 尼康D7500 尼康18-140 f/3.5-5.6G ED VR', '', '￥8,880.00', 'https://images-cn.ssl-images-amazon.com/images/I/41NxlRUzHLL._AC_SS150_.jpg'),
(12, 'advice', 'EOS 80D 专业数码单反相机套机 (搭配18-135 IS USM镜头)佳能80D单反相机', '', '￥8,400.00', 'https://images-cn.ssl-images-amazon.com/images/I/51HD9t6qTHL._AC_SS150_.jpg'),
(13, 'advice', 'OLYMPUS 奥林巴斯 E-M10 Mark II 单电电动镜头套装(14-42mm EZ F3.5-5.6 电动变焦镜头) (银色)', '', '￥4,199.00', 'https://images-cn.ssl-images-amazon.com/images/I/51nfllpLBgL._AC_SS150_.jpg'),
(14, 'advice', 'LEICA 徕卡 V-LUX (Typ 114)长焦数码相机 (黑色)(供应商直送)', '', '￥8,800.00', 'https://images-cn.ssl-images-amazon.com/images/I/51Zq6H1xaTL._AC_SS150_.jpg'),
(15, 'shoping', '不列颠图解科学丛书(套装共18册)限量秒杀', '', '￥372.00', 'http://img18.fn-mart.com/pic/6aab133e843819a5adce/hnqzTT12_ntdklVdX2/7YeaoavyXGc92G/CsmRslm1-gqAfyKwAAKHEdCGc_4258_400x400.jpg'),
(16, 'shoping', '【今年更好喝不满意无理由退】精品小青柑500克盒装', '', '￥99.00', 'http://img18.fn-mart.com/pic/8cc0133c93e233c663fb/hz8zzz7nFTfdBlUgjz/7YmySGDGzR_anR/CsmRslnY0E-AdS_-AAXqbbXajUc233_400x400.jpg'),
(17, 'shoping', '【护腰护胃 39元加绒塑身背心】免穿文胸 四色可选 买2减10元', '', '￥38.00', 'http://img18.fn-mart.com/pic/858e133e85291c4da72f/h2Hn22szD2CgKMZMXn/5xeamRFaMRmRFa/CsmRsVnJ0KKAMNQkAAWLeORrwEM095_400x400.jpg'),
(18, 'shoping', '【大牌清仓】美国 LyCARLLO POLO 男士皮带', '', '￥100.00', 'http://img18.fn-mart.com/pic/7bf7133e84c72034ecf9/kz8zTT1n_zCdkdVMOT/1YeamaDaBGXxfa/CsmRslnB-laAZPAPAAJC_gOUACQ141_400x400.jpg'),
(19, 'shoping', '【好气色喝出来共4瓶】原汁黑糖共2斤多古法熬制', '', '￥42.00', 'http://img17.fn-mart.com/pic/6967133e87e71adeaa5e/Bz6Tnn1zvzfdhMugO2/79eyoG_ajGfyhi/CsmRslmwtmqAOHN_AAEgKyf3tQ8730_400x400.jpg'),
(20, 'shoping', '【正品包邮 立减30元】美国NUBY努比 宝宝磨牙玩具', '', '￥520.00', 'http://img16.fn-mart.com/pic/9387133e84ca275dd1c9/kT6zzz7zv2fghgVdOT/79eGmGDaCGha0x/CsmRsVmqZ_2ACSUbAALAKxCht1M313_400x400.jpg'),
(21, 'shoping', '【大牌亏本清仓】美国 LyCARLLO POLO 男士休闲裤', '', '￥123.00', 'http://img17.fn-mart.com/pic/7032133e84d51d8b78bb/Bnq2zz72_2fMKdudO2/7imGeaFGvamRdG/CsmRsVnDOYuARkl6AAV1dCJZFU4444_400x400.jpg'),
(22, 'shoping', '【男女通用 气垫增高鞋垫】增高6cm-8cm', '', '￥888.00', 'http://img18.fn-mart.com/pic/0d7b133e87442d2daea7/kzH222sTFTLMKMUM32/sxmRoavRXRua09/CsmRslmv0wqAEC1XAAYBeCacAhc529_400x400.jpg'),
(23, 'shoping', '【下单立减100】icebreaker merino wool T恤男士户外休闲速...', '', '￥56.00', 'http://img18.fn-mart.com/pic/9d28133e466e18a927dd/kzH222sTFTLMKMUM32/19maoa_GWRfaFG/CsmRsVmbknmAYaKMAAQw5srTYAo862_400x400.jpg'),
(24, 'shoping', '【大牌清仓！超级秒杀179元包邮！】Makino/犸凯奴冲锋衣男女...', '', '￥78.00', 'http://img18.fn-mart.com/pic/1910133a2f6131be461c/k2q2nn72FzflKgUMtT/1iSRoaCRPYJ9JY/CsmRr1hHBXyACqr8AAOcgVWINp4380_400x400.jpg'),
(25, 'willstart', 'Canon佳能 EOS 6D Mark II单反数码相机 全画幅高', '', '￥100.00', 'http://img17.fn-mart.com/pic/e67b133e45a8196d958f/hn82zzs2FzfMhMuljT/59oGoakGfYfitG/CsmRsll_6nGAZEigAAFg0RSO5xE674_400x400.jpg'),
(26, 'willstart', 'Sony 索尼 ILCE-5100L/W 微单? 数码相机 单镜套装', '', '￥42.00', 'http://img18.fn-mart.com/pic/8093133e846029f5345d/K2HT221TD2tdkdUlOT/1YmGoy_RJyuxf9/CsmRsVm6SYOAdmXiAATjOq1uPqY776_400x400.jpg'),
(27, 'willstart', '尼康（Nikon）D7500单反相机套机 尼康D7500 尼康18', '', '￥520.00', 'http://img18.fn-mart.com/pic/16ee133e8469258734c1/hTqnzz7TvnfdkMUdjn/79oaSRvGcRZxpa/CsmRslm6MauAaRSsAAUXN1roCtY178_400x400.jpg'),
(28, 'willstart', 'EOS 80D 专业数码单反相机套机 (搭配18-135 IS USM镜头)', '', '￥123.00', 'http://img16.fn-mart.com/pic/b4b6133e87452cf5e637/h28z22sT_nLdhlugOT/simaoaDG3aUaPi/CsmRsVmv0PaAMHzeAALCNp--8Mw060_400x400.jpg'),
(29, 'willstart', 'OLYMPUS 奥林巴斯 E-M10 Mark II 单电电动镜头套装', '', '￥888.00', 'http://img17.fn-mart.com/pic/85ca133e07e732488842/hzqzTT7nv2LlBdZljn/7YSySGBaZiWy3i/CsmRsVlzTBqAcKHtAAGGJDmx8NA972_400x400.jpg'),
(30, 'willstart', 'LEICA 徕卡 V-LUX (Typ 114)长焦数码相机 (黑色)', '', '￥372.00', 'http://img17.fn-mart.com/pic/f3a8133c904d25cce721/kTq2nn7nDzLdKMZgXT/59mGeR_ap93GBY/CsmRslnfHjOAPr_ZAAFhl0qS2aM550_400x400.jpg'),
(31, 'willstart', '【今年更好喝不满意无理由退】精品小青柑500克盒装', '', '￥99.00', 'http://img16.fn-mart.com/pic/9d72133c93e742300cd3/h28TTT7nF2tlKdVgj2/59eaeavGTGJaCx/CsmRslnXqPeAcKupAAaZosHJMRo748_400x400.jpg'),
(32, 'willstart', '【护腰护胃 39元加绒塑身背心】免穿文胸 四色可选 买2减10元', '', '￥38.00', 'http://img16.fn-mart.com/pic/3c37133e846529d34e6d/hzq2221nv2tdhlugX2/7imRoGvREyV9Vi/CsmRslm6SCyAdxjQAAUPwh3bMec549_400x400.jpg'),
(33, 'willstart', '【大牌清仓】美国 LyCARLLO POLO 男士皮带', '', '￥100.00', 'http://img17.fn-mart.com/pic/0d5c133e84451bd2190a/Kz62zz12DTtlkdulO2/7YoamG_ycGZGti/CsmRsVm3VwmAYRZtAAFMdg5xuVo943_400x400.jpg'),
(34, 'willstart', '【好气色喝出来共4瓶】原汁黑糖共2斤多古法熬制', '', '￥42.00', 'http://img16.fn-mart.com/pic/9906133a2ba320d5092a/BT62nn72_zClhdZMt2/59eyoatRpxlavR/CsmRr1g_uKiAFcsjAAJjtKLNIOw681_400x400.png'),
(35, 'end', '【正品包邮 立减30元】美国NUBY努比 宝宝磨牙玩具', '', '￥123.00', 'http://img17.fn-mart.com/pic/799b133c904c199f42c9/knqnTT5nFzCghdZdjT/1YoaSRDGWxtRJa/CsmRsVne2EyAMH5nAAYYZ8xVxb8821_400x400.jpg'),
(36, 'end', '【大牌亏本清仓】美国 LyCARLLO POLO 男士休闲裤', '', '￥888.00', 'http://img16.fn-mart.com/pic/e334133e854429c27323/hnHnzz12F2fgklVMjz/1ioyoRvyga2aly/CsmRsVnMvJeAOAmtAAZbCI7MjDY031_400x400.jpg'),
(37, 'end', '【男女通用 气垫增高鞋垫】增高6cm-8cm', '', '￥372.00', 'http://img18.fn-mart.com/pic/3951133e87432c96a8dd/Kz8Tnn1zvTLdhMVd3z/59eaSGvaXRZGTR/CsmRslmvzVqAFvkhAATUw7ncQok920_400x400.jpg'),
(38, 'end', '【下单立减100】icebreaker merino wool T恤男士户外休闲速...', '', '￥99.00', 'http://img16.fn-mart.com/pic/345f133d0dc029e77d69/Kn6zTT5n_zLMBdVMXn/7imRoGjREYVaWi/CsmRsVi34veAdMUhAATejpqkoBc454_400x400.jpg'),
(39, 'end', '【大牌清仓！超级秒杀179元包邮！】Makino/犸凯奴冲锋衣男女...', '', '￥38.00', 'http://img16.fn-mart.com/pic/794d133ccededc325b81/B2Hzzz5TvnfdBdZdXn/1ioRmyjaWit9dG/CsmRsVihCZ2AWXCjAAHdgQ3c8kg146_400x400.jpg'),
(40, 'end', 'OLYMPUS 奥林巴斯 E-M10 Mark II 单电电动镜头套装(14-42mm EZ F3.5-5.6 电动变焦镜头) (银色)', '', '￥38.00', 'http://img18.fn-mart.com/group1/M00/AB/D5/CsnBPlYY6IOAfDONAAF6_83nr6U601_400x400.jpg'),
(41, 'end', 'LEICA 徕卡 V-LUX (Typ 114)长焦数码相机 (黑色)(供应商直送)', '', '￥100.00', 'http://img17.fn-mart.com/pic/c7c2133c9035239b0842/Kn6zTT5n_zLMBdVMXn/59oGmGFGWYWGuG/CsmRsVndwSCAHMFPAAgYRk69Tw4396_400x400.jpg'),
(42, 'end', '不列颠图解科学丛书(套装共18册)限量秒杀', '', '￥42.00', 'http://img17.fn-mart.com/pic/99d1133e84261e1cda2c/B28nnn5TDnClhgZd3z/sieaoyFytatRpx/CsmRsVmo4yWAI9ItAAUZSIUcNP0464_400x400.jpg'),
(43, 'end', '【今年更好喝不满意无理由退】精品小青柑500克盒装', '', '￥520.00', 'http://img16.fn-mart.com/pic/7e6d133e07e3320e9b60/BT62TT52F2LdKlVlOn/1xmGSGByu9PGjx/CsmRsllzShmAW_f4AAGOz7mVdk0694_400x400.jpg'),
(44, 'end', '【护腰护胃 39元加绒塑身背心】免穿文胸 四色可选 买2减10元', '', '￥123.00', 'http://img16.fn-mart.com/pic/029b133a2ba620d28e49/BT62TT52F2LdKlVlOn/s9maoajyfGE9_R/CsmRsVg_uMiAPva2AANr0m30xk8266_400x400.png'),
(45, 'oversea', 'NOTPROVIDE', '查看更多>', '热销商品', 'https://images-cn.ssl-images-amazon.com/images/I/41Y-Y6fn-8L.jpg'),
(46, 'oversea', '海外购', '查看销量榜>', '销量冠军', 'https://images-cn.ssl-images-amazon.com/images/I/31zYb-CbZ3L.jpg'),
(47, 'oversea', '鞋靴', '查看更多>', '心动低价', 'https://images-cn.ssl-images-amazon.com/images/I/41XQfiKhpwL.jpg'),
(48, 'oversea', '全球尖货', '查看更多>', '发现好物', 'https://images-cn.ssl-images-amazon.com/images/I/51hboA4Z24L.jpg'),
(49, 'fashion', '时尚鞋靴', '查看促销>', '1件售价5折', 'https://images-cn.ssl-images-amazon.com/images/I/41oyZBMIPIL._AC_.jpg'),
(50, 'fashion', '珠宝首饰', '查看促销>', '1件售价3折', 'https://images-cn.ssl-images-amazon.com/images/I/41L7KUPOOPL._AC_.jpg'),
(51, 'fashion', '手表钟表', '查看促销>', '售价立减300', 'https://images-cn.ssl-images-amazon.com/images/I/415hiPT5grL._AC_.jpg'),
(52, 'fashion', '潮流服饰', '查看促销>', '1件售价6折', 'https://images-cn.ssl-images-amazon.com/images/I/41grVhANAwL._AC_.jpg'),
(55, 'phone', '手机通讯', '购机可领取49元华为自拍杆>', '优惠换购', 'https://images-cn.ssl-images-amazon.com/images/I/41itREcOj1L._AC_.jpg'),
(56, 'phone', '电器数码', '查看销量榜>', '销量冠军', 'https://images-cn.ssl-images-amazon.com/images/I/41E8NiKuFJL._AC_.jpg'),
(57, 'phone', '笔记本电脑', '查看促销>', '1件售价减100', 'https://images-cn.ssl-images-amazon.com/images/I/51AVI7TJeJL._AC_.jpg'),
(58, 'phone', '数码外设', '查看新品榜>', '新品上市', 'https://images-cn.ssl-images-amazon.com/images/I/41N8t-EyTgL._AC_.jpg'),
(61, 'book', '数万图书', '查看更多>', '满150元售价7折', 'https://images-cn.ssl-images-amazon.com/images/I/516W9PDv80L._AC_.jpg'),
(62, 'book', '图书音像', '查看销量榜>', '销量冠军', 'https://images-cn.ssl-images-amazon.com/images/I/51MZ3D5CdKL._AC_.jpg'),
(63, 'book', '儿童图书', '查看更多>', '童书1件售价7折', 'https://images-cn.ssl-images-amazon.com/images/I/51jYFX0HKuL._AC_.jpg'),
(64, 'book', '童话图书', '查看更多>', '童书2件售价6折', 'https://images-cn.ssl-images-amazon.com/images/I/516W9PDv80L._AC_.jpg'),
(66, 'life', '装饰装修', '查看促销>', '1件售价8折', 'https://images-cn.ssl-images-amazon.com/images/I/31LP08YbABL._AC_.jpg'),
(67, 'life', '厨房用具', '购震动牙刷得价值58元刷头>', '优惠换购', 'https://images-cn.ssl-images-amazon.com/images/I/31uaUKxDzhL._AC_.jpg'),
(69, 'life', '汽车用品', '查看促销>', '199减20', 'https://images-cn.ssl-images-amazon.com/images/I/51tkBDtWXpL._AC_.jpg'),
(70, 'life', '居家生活', '查看销量榜>', '销量冠军', 'https://images-cn.ssl-images-amazon.com/images/I/41y8AWPz%2BdL._AC_.jpg'),
(72, 'food', '食品', '查看促销>', '199减100', 'https://images-cn.ssl-images-amazon.com/images/I/51GVDTde3PL._AC_.jpg'),
(73, 'food', '酒水', '查看促销>', '299减150', 'https://images-cn.ssl-images-amazon.com/images/I/310IygMnh-L._AC_.jpg'),
(74, 'food', '红酒', '查看促销>', '2件售价8折', 'https://images-cn.ssl-images-amazon.com/images/I/310IygMnh-L._AC_.jpg'),
(75, 'food', '美食美酒', '查看销量榜>', '销量冠军', 'https://images-cn.ssl-images-amazon.com/images/I/61jdIPp6BzL._AC_.jpg'),
(76, 'baby', '喂养用品', '查看促销>', '3件售价6折', 'https://images-cn.ssl-images-amazon.com/images/I/31i1RyxaffL._AC_.jpg'),
(77, 'baby', '玩具游戏', '查看促销>', '售价立减50', 'https://images-cn.ssl-images-amazon.com/images/I/51%2Bhwco0h6L._AC_.jpg'),
(78, 'baby', '母婴用品', '查看促销>', '99减20', 'https://images-cn.ssl-images-amazon.com/images/I/41qMqfa4HuL._AC_.jpg'),
(80, 'baby', '母婴玩具', '查看销量榜>', '销量冠军', 'https://images-cn.ssl-images-amazon.com/images/I/51Z92keDfiL._AC_.jpg'),
(81, 'aside1', '', '', '', '//images-cn.ssl-images-amazon.com/images/G/28/shazam/gaolujie-300250-1009-1DXKA4._V515898752_.jpg'),
(82, 'aside2', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/G/28/img17/AGS/sidekick/qyn_20170317_264170_tommyhilfiger._CB532270074_.png'),
(83, 'aside3', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/41gKscObDUL._AC_SS150_.jpg'),
(84, 'aside3', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/516W9PDv80L._AC_SS150_.jpg'),
(85, 'aside3', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/51e36sGtyuL._AC_SS150_.jpg'),
(86, 'aside3', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/51BUhz-YN-L._AC_SS150_.jpg'),
(87, 'aside3', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/412oiXK7bLL._AC_SS150_.jpg'),
(88, 'aside3', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/41grVhANAwL._AC_SS150_.jpg'),
(89, 'aside4', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/41Y9rMm9muL._AC_SX75_.jpg'),
(90, 'aside4', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/51-b%2B9ovD2L._AC_SX75_.jpg'),
(91, 'aside4', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/51D7hGgjpaL._AC_SX75_.jpg'),
(92, 'aside4', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/51XnCojnvaL._AC_SX75_.jpg'),
(93, 'aside4', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/51-b%2B9ovD2L._AC_SX75_.jpg'),
(94, 'aside5', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/31M9LlFZYkL._AC_SX75_.jpg'),
(95, 'aside5', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/41yQ1i9iLBL._AC_SX75_.jpg'),
(96, 'aside5', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/318xgNGttGL._AC_SX75_.jpg'),
(97, 'aside5', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/51w0EvRaksL._AC_SX75_.jpg'),
(98, 'aside5', '', '', '', 'https://images-cn.ssl-images-amazon.com/images/I/51jZl4gKE0L._AC_SX75_.jpg'),
(99, 'aside6', '', '', '', '//images-cn.ssl-images-amazon.com/images/G/28/shazam/NUFACE-300250-1009-1E0ua1._V514182699_.jpg'),
(100, 'aside7', '', '', '', '//images-cn.ssl-images-amazon.com/images/G/28/shazam/schiff-170922-300x250-1-1E0ueF._V514181387_.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `email` varchar(36) NOT NULL,
  `password` varchar(40) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`sid`, `username`, `tel`, `email`, `password`, `date`) VALUES
(1, 'allen', '18855541992', '764965579@qq.com', '25d55ad283aa400af464c76d713c07ad', '2017-10-17 10:15:39'),
(3, '刘德华', '17621051900', 'liudehua@qq.com', '25d55ad283aa400af464c76d713c07ad', '2017-10-17 13:19:30'),
(4, '大王叫我来巡山', '18855561222', '123@qq.com', '1057e654ff00001fb5ed8d1ad4c3f46b', '2017-10-17 15:33:38');
