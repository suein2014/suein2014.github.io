<!DOCTYPE html>
<html>
<head>
	<title>Displaying Maps for Desktop and Mobile using Handlebars</title>
	<script src="https://cdn.jsdelivr.net/npm/handlebars@4.7.7/dist/handlebars.min.js"></script>
</head>
<body>
	<div id="map"></div>

	<!-- 定义子模板 -->
	<script id="desktop-map-template" type="text/x-handlebars-template">
		<h2>Desktop Map</h2>
		<div>{{{map}}}</div>
	</script>

	<script id="mobile-map-template" type="text/x-handlebars-template">
		<h2>Mobile Map</h2>
		<div>{{{map}}}</div>
	</script>

	<!-- 定义主模板 -->
	<script id="map-template" type="text/x-handlebars-template">
		{{#if isDesktop}}
			{{> desktop-map-template}}
		{{else}}
			{{> mobile-map-template}}
		{{/if}}
	</script>

	<script src="main.js"></script>
</body>
</html>
