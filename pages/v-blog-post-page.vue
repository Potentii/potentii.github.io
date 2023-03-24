<template>
	<div class="v-blog-post-page --thin-scroll --large">

		Blog Post

	</div>
</template>



<script>

export default {

   name: 'v-blog-post-page',

}
</script>



<style>
.v-blog-post-page{
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
