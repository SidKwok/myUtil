<template>
	<div class="home-con">
		<ul>
			<li>github</li>
			<li v-link="{name : 'blog'}">blog</li>
			<li>segment</li>
			<li v-link="{name : 'about'}">about</li>
		</ul>
		<img class="index" src="../assets/images/index.png">
		<nv-top></nv-top>
	</div>
</template>
<script>
	require('../assets/css/home.css');

	export default {
		components:{
			"nvTop": require('../components/menu.vue')
		}
	}
</script>
<style>
	.home-con{
		width: 400px;
		height: 400px;
		color: green;
	}
</style>
