<template>
	<div class="v-copyrights-notice">
		<div class="-text">{{ year }} © Guilherme Reginaldo Ruella</div>
	</div>
</template>



<script>
export default {

	name: 'v-copyrights-notice',

	data(){
		return {
			year: null,
		};
	},

	beforeMount() {
		this.year = new Date().getFullYear();
	},

}
</script>



<style>
.v-copyrights-notice{
	flex: 0 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: auto;
	padding: 8px;
}
.v-copyrights-notice > .-text{
	opacity: 0.4;
	font-size: 16px;
	text-shadow: 1px 1px 0 rgba(0,0,0,1);
}
</style>
