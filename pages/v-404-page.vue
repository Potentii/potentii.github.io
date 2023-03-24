<template>
	<div class="v-404-page --thin-scroll --large">

		<div class="-main">

			<span class="-404">404</span>

			<span class="-text">Content not found</span>

		</div>

	</div>
</template>



<script>
export default {
   name: 'v-404-page',
}
</script>



<style>
.v-404-page{
	--var-h-min-padding: 5vh;

	display: flex;
	flex-direction: column;
	align-items: stretch;


	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;

	padding-bottom: 10em;
}


</style>
