<?php
	header('content-type:text/html;charset=utf-8');
	header("Access-Control-Allow-Origin: *");
	$conn=mysql_connect('localhost','root','12345678');
	mysql_select_db('amazon');
	mysql_query('SET NAMES UTF8');
	
	$query='select * from indexdata';
	
	$result=mysql_query($query);
	
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result, MYSQL_ASSOC);
	}
	
	echo json_encode($arr);
?>