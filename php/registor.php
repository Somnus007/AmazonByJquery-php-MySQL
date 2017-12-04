<?php
	header('content-type:text/html;charset=utf-8');
	require "public.php";
	
	if(isset($_POST['name'])|| isset($_POST['submit'])){
		$name=@$_POST['name'];
	}else{
		exit('非法登录');
	}
	
	$query="select * from user where username='$name'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}
	
	if(isset($_POST['submit'])&& $_POST['submit']=='继续'){
		$name=$_POST['username'];
		$tel=$_POST['tel'];
		$email=$_POST['email'];
		$pass=md5($_POST['password']);
		$query="insert user values(null,'$name','$tel','$email','$pass',NOW())";
		mysql_query($query);
		header('location:http://127.0.0.1/Amazon/login.html');
	}
	
	
?>