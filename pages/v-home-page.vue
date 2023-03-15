<template>
	<div class="v-home-page">


		<!-- * Hero section * -->
		<section class="-hero">

			<div class="-links">
				<a class="-link -artstation" href="https://www.artstation.com/potentii">
					<img class="-icon" src="../assets/images/icons/artstation-logo.svg"/>
				</a>
				<a class="-link -behance" href="https://www.behance.net/Potentii">
					<img class="-icon" src="../assets/images/icons/behance-logo.svg"/>
				</a>
				<a class="-link -github" href="https://github.com/Potentii">
					<img class="-icon" src="../assets/images/icons/github-logo.svg"/>
				</a>
				<a class="-link -instagram" href="https://www.instagram.com/guilhermereginaldoruella">
					<img class="-icon" src="../assets/images/icons/instagram-logo.svg"/>
				</a>
				<a class="-link -linkedin" href="https://www.linkedin.com/in/potentii">
					<img class="-icon" src="../assets/images/icons/linkedin-logo.svg"/>
				</a>
				<a class="-link -twitter" href="https://twitter.com/potentii_inc">
					<img class="-icon" src="../assets/images/icons/twitter-logo.svg"/>
				</a>
			</div>

			<div class="-greetings">
				<span class="-text">Hi, my name is</span>
			</div>

			<div class="-my-name">
				<span class="-text">Guilherme</span>
			</div>

			<div class="-subtext">
				<span class="-row">Software developer</span>
				<span class="-row">3D artist</span>
				<span class="-row">UI/UX designer</span>
			</div>

			<div class="-photo">
				<img class="-image" src="../assets/images/my_photo_hero_001.png"/>
			</div>

		</section>


		<div class="-separator"></div>


		<!-- * My Work section * -->
		<section class="-my-work">

		</section>


	</div>
</template>



<script>
import VButton from "../@components/v-button.vue";

export default {
   name: 'v-home-page',
	components: {VButton},
}
</script>



<style>
.v-home-page{
	--var-h-min-padding: 10vh;

	display: flex;
	flex-direction: column;
	align-items: stretch;


	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;
}





.v-home-page > .-hero{
	display: grid;
	grid-template-rows: auto 5em auto auto auto;
	grid-template-columns: minmax(var(--var-h-min-padding), 1fr) auto auto 8em auto minmax(var(--var-h-min-padding), 1fr);
	grid-template-areas:
		'... links ... ... photo ...'
		'... ... ... ... photo ...'
		'... greetings greetings ... photo ...'
		'... my-name my-name ... photo ...'
		'... subtext subtext ... photo ...';

	margin-top: 10vh;
	margin-bottom: 2em;
}
.v-home-page > .-hero > .-links{
	grid-area: links;
}
.v-home-page > .-hero > .-photo{
	grid-area: photo;
}
.v-home-page > .-hero > .-greetings{
	grid-area: greetings;
}
.v-home-page > .-hero > .-my-name{
	grid-area: my-name;
}
.v-home-page > .-hero > .-subtext{
	grid-area: subtext;
}


.v-home-page > .-hero > .-links{
	display: grid;
	grid-template-rows: auto auto auto;
	grid-template-columns: auto auto;
	gap: 12px;
}
.v-home-page > .-hero > .-links > .-link{
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--theme-fg--1);
	width: 48px;
	height: 48px;
	border-radius: 50%;
}
.v-home-page > .-hero > .-links > .-link > .-icon{
	opacity: 0.6;
	width: 32px;
	height: 32px;
	filter: brightness(6%);
}

.v-home-page > .-hero > .-greetings{
	margin-bottom: -1.5em;
}
.v-home-page > .-hero > .-greetings > .-text{
	font-size: 24px;
	font-weight: bold;
}

.v-home-page > .-hero > .-my-name > .-text{
	font-size: 96px;
	font-weight: bold;
}


.v-home-page > .-hero > .-subtext{
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-top: -1.5em;
}
.v-home-page > .-hero > .-subtext > .-text{
	font-size: 20px;
	font-weight: 500;
}


.v-home-page > .-hero > .-photo > .-image{
	/*width: 300px;*/
	/*width: max-content;*/
	min-width: 250px;
	width: 30vw;
	max-width: 450px;
	/*max-width: 600px;*/
	object-fit: contain;
}
</style>
