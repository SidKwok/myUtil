<template>
	<div class="home-con">
		<ul>
			<li>github</li>
			<li v-link="{name : 'blog'}">blog</li>
			<li>segment</li>
			<li v-link="{name : 'about'}">about</li>
		</ul>
		<img class="index" src="../assets/images/index.png">
	</div>
</template>
<script>

</script>
<style>
	.home-con{
		width: 400px;
		height: 400px;
	}
</style>
