<template>
	<div class="v-page-bg">

		<v-anim-triangle class="-triangle"></v-anim-triangle>
		<v-anim-triangle class="-triangle"></v-anim-triangle>

	</div>
</template>



<script>
import VAnimTriangle from "./v-anim-triangle.vue";


export default {

	name: 'v-page-bg',


	components: {VAnimTriangle},


	data(){
		return {

		};
	},

}
</script>



<style>
.v-page-bg{
	pointer-events: none;

	position: absolute;

	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: 100%;

	top: 0;
	left: 0;
	/*overflow: hidden;*/
}
.v-page-bg > .-triangle{
	opacity: 1;
	position: absolute;
	width: 10vh;
	height: 10vh;
}
.v-page-bg > .-triangle:nth-of-type(1){
	top: 0;
	left: 0;
	transform: translate(-75%, -100%) scale(8, 8) rotateZ(95deg);
}
.v-page-bg > .-triangle:nth-of-type(2){
	bottom: 10vh;
	right: 0;
	transform: translate(100%, 50%) scale(6, 6) rotateZ(-130deg);
}
@keyframes --anim--v-page-bg--triangle {

}
</style>
