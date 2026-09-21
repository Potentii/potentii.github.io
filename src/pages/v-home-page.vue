<template>
	<div class="v-home-page --thin-scroll --large">

		<v-page-bg class="-page-bg"></v-page-bg>

		<!-- * Hero section * -->
		<section class="-hero">

			<!-- * Profile links * -->
			<div class="-links">
				<a class="-link -github" href="https://github.com/Potentii" title="Github profile">
					<img class="-icon" src="../assets/images/icons/github-logo.svg"/>
				</a>
				<a class="-link -linkedin" href="https://www.linkedin.com/in/potentii" title="Linkedin profile">
					<img class="-icon" src="../assets/images/icons/linkedin-logo.svg"/>
				</a>
			</div>

			<div class="-title">

				<!-- * Greetings * -->
				<div class="-greetings">
					<v-anim-text delay="0.1" duration="0.2">Hi, </v-anim-text><v-anim-text delay="0.8" duration="0.2">my </v-anim-text><v-anim-text delay="0.9" duration="0.2">name </v-anim-text><v-anim-text delay="1.0" duration="0.2">is</v-anim-text>
				</div>

				<v-anim-text class="-my-name" delay="1.4" duration="0.8">Guilherme</v-anim-text>

				<div class="-subtext">
					<v-anim-text class="-row" delay="2.4" duration="0.6" direction="fromRight">Technical Leader</v-anim-text>
					<v-anim-text class="-row" delay="2.6" duration="0.6" direction="fromRight">Software Developer</v-anim-text>
					<v-anim-text class="-row" delay="2.8" duration="0.6" direction="fromRight">GameDev Enthusiast</v-anim-text>
				</div>

			</div>

			<!-- * Main photo * -->
			<div class="-photo">
				<img class="-image" src="../assets/images/my_photo_hero_001.png"/>
			</div>

		</section>


		<div class="--flex-space"></div>

		<v-copyrights-notice class="-copyrights"></v-copyrights-notice>

	</div>
</template>



<script>
import VButton from "../@components/v-button.vue";
import VTextField2 from "../@components/v-text-field-2.vue";
import VAnimText from "../@components/v-anim-text.vue";
import VSeparator from "../@components/v-separator.vue";
import VTag from "../@components/v-tag.vue";
import VCopyrightsNotice from "../@components/v-copyrights-notice.vue";
import VAnimTriangle from "../@components/v-anim-triangle.vue";
import VPageBg from "../@components/v-page-bg.vue";

export default {

   name: 'v-home-page',


	components: {VPageBg, VAnimTriangle, VCopyrightsNotice, VTag, VSeparator, VAnimText, VTextField2, VButton},


	methods: {

	}

}
</script>



<style>
.v-home-page{
	flex: 1 1 auto;
	--var-h-min-padding: 5vh;

	display: flex;
	flex-direction: column;
	align-items: stretch;


	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;
}



/*
 * ==========================================
 * Hero
 * ==========================================
 */
.v-home-page > .-hero{
	flex: 0 0 auto;
	display: grid;

	grid-template-rows: 1fr auto auto;
	grid-template-columns: minmax(25em, min-content) auto;
	grid-template-areas:
		'... photo'
		'links photo'
		'title photo';

	align-items: center;
	justify-content: center;

	gap: 2em;

	padding: 10vh 5vw 0 5vw;
}
.v-home-page > .-hero > .-links{
	grid-area: links;
}
.v-home-page > .-hero > .-photo{
	grid-area: photo;
}
.v-home-page > .-hero > .-title{
	grid-area: title;
}


@media (max-width: 800px){
	.v-home-page > .-hero{
		grid-template-rows: auto auto auto;
		grid-template-columns: auto;
		grid-template-areas:
		'photo'
		'links'
		'title';
	}
}



.v-home-page > .-hero > .-links{
	display: grid;
	grid-template-columns: min-content min-content;
	gap: 1em;
}
.v-home-page > .-hero > .-links > .-link{
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	transition: transform 0.1s ease;
}
.v-home-page > .-hero > .-links > .-link:hover{
	transform: rotateZ(8deg);
}
.v-home-page > .-hero > .-links > .-link:active{
	transform: rotateZ(-8deg);
}
.v-home-page > .-hero > .-links > .-link > .-icon{
	opacity: 0.6;
	width: 32px;
	height: 32px;
	filter: brightness(6%);
	will-change: filter;
	transition: filter 0.15s ease;
}
.v-home-page > .-hero > .-links > .-link:hover > .-icon{
	filter: brightness(0%);
}
.v-home-page > .-hero > .-links > .-link::before{
	pointer-events: none;
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: var(--theme-fg--1);
	border-radius: 50%;
	will-change: transform, background-color;
	transition: transform, background-color, 0.15s ease;
}
.v-home-page > .-hero > .-links > .-link:hover::before{
	transform: scale(1.1);
	background-color: var(--theme-fg--2);
}
.v-home-page > .-hero > .-links > .-link:active::before{
	transform: scale(0.95);
}



.v-home-page > .-hero > .-title{
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;
	align-items: stretch;

	gap: 0.4vh;
}
.v-home-page > .-hero > .-title > .-greetings{
	font-size: 2vh;
	font-weight: 700;
}
.v-home-page > .-hero > .-title > .-my-name{
	font-size: min(7vw, 7em);
	font-weight: 700;
	text-shadow: 2px 2px 0 rgba(0,0,0,0.9);
}
.v-home-page > .-hero > .-title > .-subtext{
	opacity: 0.7;
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	gap: 0.5vh;
	font-size: 1.8vh;
	font-weight: 400;
}
.v-home-page > .-hero > .-title > .-subtext > .-text{
}

.v-home-page > .-hero > .-photo{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.v-home-page > .-hero > .-photo > .-image{
	user-select: none;
	pointer-events: none;
	min-width: 250px;
	width: 30vw;
	max-width: 450px;
	object-fit: contain;
}

@media (max-width: 800px){
	.v-home-page > .-hero > .-title > .-greetings{
		font-size: 4.5vw;
	}
	.v-home-page > .-hero > .-title > .-my-name{
		font-size: 12vw;
	}
	.v-home-page > .-hero > .-title > .-subtext{
		font-size: 4vw;
	}
}
</style>
