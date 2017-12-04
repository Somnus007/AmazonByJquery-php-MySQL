<?php
	$conn=@mysql_connect('localhost','root','12345678');
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}
	
	mysql_select_db('amazon');
	mysql_query('SET NAMES UTF8');
	
	
?>