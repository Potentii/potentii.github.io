<template>
	<div class="v-page-bg">

		<div class="-noise"></div>

		<v-anim-triangle class="-triangle -triangle-1"></v-anim-triangle>
		<v-anim-triangle class="-triangle -triangle-2"></v-anim-triangle>

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
	user-select: none;
	pointer-events: none;

	position: fixed;

	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: 100%;

	top: 0;
	left: 0;
}
.v-page-bg > .-noise{
	opacity: 0.4;
	user-select: none;
	pointer-events: none;

	position: absolute;

	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: 100%;

	top: 0;
	left: 0;

	background-image: url('/images/noise.png');
	background-repeat: repeat;
}
.v-page-bg > .-triangle{
	opacity: 1;
	position: absolute;
	width: 10vh;
	height: 10vh;


	animation-fill-mode: both;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}
.v-page-bg > .-triangle.-triangle-1{
	top: 0;
	left: 0;

	animation-duration: 3s;
	transform: translate(-75%, -100%) scale(7, 7) rotateZ(85deg);
	animation-name: --anim--v-page-bg--triangle--1;
}
.v-page-bg > .-triangle.-triangle-2{
	bottom: 1vh;
	right: 0;

	animation-delay: 0.4s;
	animation-duration: 4s;
	transform: translate(100%, 50%) scale(6, 6) rotateZ(-100deg);
	animation-name: --anim--v-page-bg--triangle--2;
}
@keyframes --anim--v-page-bg--triangle--1 {
	to {
		transform: translate(-84%, -104%) scale(7, 7) rotateZ(88deg);
	}
}
@keyframes --anim--v-page-bg--triangle--2 {
	to {
		transform: translate(94%, 54%) scale(6, 6) rotateZ(-105deg);
	}
}

</style>
