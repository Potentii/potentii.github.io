<template>
	<div class="v-home-page --thin-scroll --large">


		<!-- * Hero section * -->
		<section class="-hero">

			<div class="-links">
				<a class="-link -artstation" href="https://www.artstation.com/potentii" title="Artstation profile">
					<img class="-icon" src="../assets/images/icons/artstation-logo.svg"/>
				</a>
				<a class="-link -behance" href="https://www.behance.net/Potentii" title="Behance profile">
					<img class="-icon" src="../assets/images/icons/behance-logo.svg"/>
				</a>
				<a class="-link -github" href="https://github.com/Potentii" title="Github profile">
					<img class="-icon" src="../assets/images/icons/github-logo.svg"/>
				</a>
				<a class="-link -instagram" href="https://www.instagram.com/guilhermereginaldoruella" title="Instagram profile">
					<img class="-icon" src="../assets/images/icons/instagram-logo.svg"/>
				</a>
				<a class="-link -linkedin" href="https://www.linkedin.com/in/potentii" title="Linkedin profile">
					<img class="-icon" src="../assets/images/icons/linkedin-logo.svg"/>
				</a>
				<a class="-link -twitter" href="https://twitter.com/potentii_inc" title="Twitter profile">
					<img class="-icon" src="../assets/images/icons/twitter-logo.svg"/>
				</a>
			</div>

			<div class="-greetings">
				<v-anim-text delay="0.1" duration="0.3">Hi, </v-anim-text><v-anim-text delay="1.0" duration="0.2">my </v-anim-text><v-anim-text delay="1.1" duration="0.2">name </v-anim-text><v-anim-text delay="1.3" duration="0.2">is</v-anim-text>
			</div>

			<v-anim-text class="-my-name" delay="1.6" duration="1">Guilherme</v-anim-text>

			<div class="-subtext">
				<v-anim-text class="-row" delay="2.4" duration="0.8" direction="fromRight">Software developer</v-anim-text>
				<v-anim-text class="-row" delay="2.8" duration="0.8" direction="fromRight">3D artist</v-anim-text>
				<v-anim-text class="-row" delay="3.2" duration="0.8" direction="fromRight">UI/UX designer</v-anim-text>
			</div>

			<div class="-photo">
				<img class="-image" src="../assets/images/my_photo_hero_001.png"/>
			</div>

		</section>


		<div class="-separator"></div>


		<!-- * My Work section * -->
		<section class="-my-work">

			<span class="-title">My Work</span>

			<div class="-filters">

				<v-text-field2
					class="-search"
					placeholder="Search projects..."
					icon="search"
					capsule
					outline
					icon-to-right>
				</v-text-field2>

				<div class="-tags">

					<div class="-tag">
						<div class="-icon"></div>
						<span class="-title">Software</span>
					</div>
					<div class="-tag">
						<div class="-icon"></div>
						<span class="-title">3D art</span>
					</div>
					<div class="-tag">
						<div class="-icon"></div>
						<span class="-title">Articles</span>
					</div>
					<div class="-tag">
						<div class="-icon"></div>
						<span class="-title">UI/UX</span>
					</div>

				</div>

			</div>



			<div class="-results">

				<span class="-empty">No projects found</span>

				<div class="-items">

					<router-link
						class="-item"
						:key="blogPost"
						v-for="blogPost in blogPosts"
						:to="{ name: 'blog-post-page', params: { blogPostId: blogPost.id } }"
						tag="div">
						<img class="-image" src=""/>
						<div class="-call">
							<router-link class="-title" :to="{ name: 'blog-post-page', params: { blogPostId: blogPost.id } }" tag="a">{{ blogPost.title }}</router-link>
							<span class="-description">Lorem ipsum dolor sit amet</span>
						</div>
					</router-link>

				</div>

			</div>

		</section>


	</div>
</template>



<script>
import VButton from "../@components/v-button.vue";
import VTextField2 from "../@components/v-text-field-2.vue";
import VAnimText from "../@components/v-anim-text.vue";
import {mapState} from "vuex";

export default {

   name: 'v-home-page',


	components: {VAnimText, VTextField2, VButton},


	computed: {
		...mapState('blogPosts', [ 'blogPosts' ]),
	},


}
</script>



<style>
.v-home-page{
	--var-h-min-padding: 5vh;

	display: flex;
	flex-direction: column;
	align-items: stretch;


	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;

	padding-bottom: 10em;
}



/*
 * ==========================================
 * Hero
 * ==========================================
 */
.v-home-page > .-hero{
	flex: 1 0 auto;
	display: grid;
	grid-template-rows: auto 5em auto auto auto;
	grid-template-columns: minmax(var(--var-h-min-padding), 1fr) auto auto minmax(8em, 2fr) auto minmax(var(--var-h-min-padding), 1fr);
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
	will-change: transform;
	transition: transform 0.1s ease;
}
.v-home-page > .-hero > .-links > .-link:hover::before{
	transform: scale(1.1);
}
.v-home-page > .-hero > .-links > .-link:active::before{
	transform: scale(0.95);
}


.v-home-page > .-hero > .-greetings{
	font-size: 24px;
	font-weight: 700;
}
.v-home-page > .-hero > .-my-name{
	font-size: 96px;
	font-weight: 700;
}
.v-home-page > .-hero > .-subtext{
	opacity: 0.7;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 4px;
	font-size: 18px;
	font-weight: 500;
}
.v-home-page > .-hero > .-subtext > .-text{
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



/*
 * ==========================================
 * Separator
 * ==========================================
 */
.v-home-page > .-separator{
	flex: 1 0 auto;

	min-width: 30em;
	width: calc(70vw - calc(var(--var-h-min-padding) * 2));
	max-width: calc(100vw - 10em);
	height: 8px;
	background-color: var(--theme-fg--1);
	border-radius: 100px;
	align-self: center;

	margin: 6em 0;
}



/*
 * ==========================================
 * My Work
 * ==========================================
 */
.v-home-page > .-my-work{
	flex: 1 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2em;

	margin-top: -2em;
}

.v-home-page > .-my-work > .-title{
	flex: 1 0 auto;
	font-size: 32px;
	font-weight: 700;
}


.v-home-page > .-my-work > .-filters{
	flex: 1 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2em;
}

.v-home-page > .-my-work > .-filters > .-search{
	flex: 1 0 auto;
	--v-text-field-2--border-color: var(--theme-fg--1);
	--v-text-field-2--fg: var(--theme-fg--1);
	--v-text-field-2--width: calc(100% - 10em);
}

.v-home-page > .-my-work > .-filters > .-tags{
	flex: 1 0 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2em;
}
.v-home-page > .-my-work > .-filters > .-tags > .-tag{
	flex: 1 0 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;

	/*width: 150px;*/
	height: 40px;
	box-shadow: inset 0 0 0 3px var(--theme-fg--1);
	border-radius: 100px;
	padding: 0 32px 0 10px;
}
.v-home-page > .-my-work > .-filters > .-tags > .-tag > .-icon{
	flex: 1 0 auto;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: var(--theme-fg--1);
}
.v-home-page > .-my-work > .-filters > .-tags > .-tag > .-title{
	flex: 1 0 auto;

}


.v-home-page > .-my-work > .-results{
	flex: 1 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2em;

	margin-top: 2em;
}
.v-home-page > .-my-work > .-results > .-empty{
	flex: 1 0 auto;
	opacity: 0.5;
	font-style: italic;
	padding: 1em 2em;
	background-color: #333;
	border-radius: 4em;
}


.v-home-page > .-my-work > .-results > .-items{
	flex: 1 0 auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 2em;
}


.v-home-page > .-my-work > .-results > .-items > .-item{
	width: 280px;
	height: 340px;

	border-radius: 18px;
	overflow: hidden;
}
.v-home-page > .-my-work > .-results > .-items > .-item::after{
	pointer-events: none;
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	border-radius: 18px;
	box-shadow: inset 0 0 0 3px var(--theme-fg--1);
}

.v-home-page > .-my-work > .-results > .-items > .-item > .-image{
	flex: 1 0 max-content;
	object-fit: cover;
}
.v-home-page > .-my-work > .-results > .-items > .-item > .-call{
	position: absolute;

	display: flex;
	flex-direction: column;

	gap: 0.5em;

	width: 100%;

	max-height: 7em;
	bottom: 0;
	left: 0;
	padding: 18px;

	background-color: rgba(0,0,0,0.2);
}
.v-home-page > .-my-work > .-results > .-items > .-item > .-call > .-title{
	color: var(--theme-fg--1);
	font-weight: 500;
}
.v-home-page > .-my-work > .-results > .-items > .-item > .-call > .-description{
	opacity: 0.8;
	color: var(--theme-fg--1);
	font-size: 12px;
}

</style>
