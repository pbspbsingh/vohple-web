<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>${title}</title>
<jsp:include page="home/head.jsp" />
</head>
<body>
	<div class="demo-2" id="home">
		<!-- Slider for Home page -->
		<jsp:include page="home/slider.jsp" />
	</div>
	<div id="top-scroll-bar">
	    <a href="#about" class="animate"  style="visibility: visible;-webkit-animation-iteration-count: infinite; -moz-animation-iteration-count: infinite; animation-iteration-count: infinite;">
	    	<i style="visibility: visible;-webkit-animation-iteration-count: infinite; -moz-animation-iteration-count: infinite; animation-iteration-count: infinite;"></i>
	    </a>
	</div>
	<nav id="mainMenu" class="clearfix">
		<header>
			<div id="logo">
				<a href="#home"><img src="static/images/logo.png" alt="Vhople" /></a>
			</div>
			<ul class="menu">
				<li class="current"><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#gallery">Gallery</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</header>
	</nav>

	<!-- Time to put some content -->
	<jsp:include page="home/content.jsp" />
	
	<!-- Lets include JS now -->
	<jsp:include page="home/tail.jsp" />
</body>
</html>