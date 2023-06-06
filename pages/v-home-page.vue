<template>
	<div class="v-home-page --thin-scroll --large">

		<v-page-bg class="-page-bg"></v-page-bg>


		<v-button class="-test-steam" @click="testSteam()" text="test"></v-button>
		<!-- * Hero section * -->
		<section class="-hero">

			<!-- * Profile links * -->
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

			<!-- * Greetings * -->
			<div class="-greetings">
				<v-anim-text delay="0.1" duration="0.3">Hi, </v-anim-text><v-anim-text delay="1.0" duration="0.2">my </v-anim-text><v-anim-text delay="1.1" duration="0.2">name </v-anim-text><v-anim-text delay="1.3" duration="0.2">is</v-anim-text>
			</div>

			<v-anim-text class="-my-name" delay="1.6" duration="1">Guilherme</v-anim-text>

			<div class="-subtext">
				<v-anim-text class="-row" delay="2.4" duration="0.8" direction="fromRight">Software developer</v-anim-text>
				<v-anim-text class="-row" delay="2.8" duration="0.8" direction="fromRight">3D artist</v-anim-text>
				<v-anim-text class="-row" delay="3.2" duration="0.8" direction="fromRight">UI/UX designer</v-anim-text>
			</div>

			<!-- * Main photo * -->
			<div class="-photo">
				<img class="-image" src="../assets/images/my_photo_hero_001.png"/>
			</div>

		</section>


		<!-- * Separator * -->
		<v-separator class="-separator"></v-separator>


		<!-- * My Work section * -->
		<section class="-my-work">

			<span class="-title --ui-label">My Work</span>

			<div class="-filters">

				<!-- * Search bar * -->
				<v-text-field2
					class="-search"
					placeholder="Search projects..."
					icon="search"
					capsule
					outline
					icon-to-right>
				</v-text-field2>


				<!-- * Tags filter * -->
				<div class="-tags">
					<v-tag
						class="-tag"
						:name="tag"
						v-for="tag in allTags()">
					</v-tag>
				</div>

			</div>


			<!-- * Blog Posts results * -->
			<div class="-results">

				<span class="-empty" v-if="!filteredBlogPosts.length">No projects found</span>

				<div class="-items">
					<v-blog-post-list-item
						class="-item"
						:blog-post="blogPost"
						:key="blogPost.id"
						v-for="blogPost in filteredBlogPosts">
					</v-blog-post-list-item>
				</div>

			</div>



		</section>


		<v-copyrights-notice class="-copyrights"></v-copyrights-notice>

	</div>
</template>



<script>
import VButton from "../@components/v-button.vue";
import VTextField2 from "../@components/v-text-field-2.vue";
import VAnimText from "../@components/v-anim-text.vue";
import {mapGetters, mapState} from "vuex";
import VSeparator from "../@components/v-separator.vue";
import VTag from "../@components/v-tag.vue";
import VBlogPostListItem from "../@components/v-blog-post-list-item.vue";
import VCopyrightsNotice from "../@components/v-copyrights-notice.vue";
import VAnimTriangle from "../@components/v-anim-triangle.vue";
import VPageBg from "../@components/v-page-bg.vue";

export default {

   name: 'v-home-page',


	components: {
		VPageBg,
		VAnimTriangle, VCopyrightsNotice, VBlogPostListItem, VTag, VSeparator, VAnimText, VTextField2, VButton},


	data(){
		return {
			tags: [],
		};
	},


	computed: {
		...mapState('blogPosts', [ 'blogPosts' ]),
		...mapGetters('blogPosts', [ 'allTags' ]),

		/**
		 *
		 * @return {BlogPost[]}
		 */
		filteredBlogPosts(){
			return this.blogPosts.filter(blogPost => true);
		},
	},


	methods: {

		async testSteam(){
			try{

				const url = localStorage.getItem('url');
				console.log('url', url)


				const headers = JSON.parse(localStorage.getItem('headers'));
				const mode = localStorage.getItem('mode');

				// const headers = {
				// 	// 'User-Agent': 'PostmanRuntime/7.29.2',
				// 	// 'Accept': '*/*',
				// 	// 'Postman-Token': '1b8fb240-c684-4062-bf9e-5b6c31ed920f',
				// 	// 'Host': 'partner.steam-api.com',
				// 	// 'Accept-Encoding': 'gzip, deflate, br',
				// 	// 'Referer': 'https://potentii.com',
				// 	// 'Connection': 'keep-alive',
				//
				// 	'Access-Control-Allow-Origin' : '*',
				// 	'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
				// };


				// console.log(await axios(url, {
				// 	method: 'GET',
				// 	// mode: 'no-cors',
				// 	// headers: {
				// 	// 	'Access-Control-Allow-Origin': '*',
				// 	// 	'Content-Type': 'application/json',
				// 	// },
				// 	withCredentials: false,
				// 	credentials: 'same-origin',
				// }))


				// console.log(await axios.get(url, { mode: 'no-cors', headers }));

				// fetch(url, { method: 'get', mode: 'no-cors', cache: 'no-cache', headers })
				// 	.then((response) => {
				// 		const reader = response.body.getReader();
				// 		return new ReadableStream({
				// 			start(controller) {
				// 				return pump();
				// 				function pump() {
				// 					return reader.read().then(({ done, value }) => {
				// 						// When no more data needs to be consumed, close the stream
				// 						if (done) {
				// 							controller.close();
				// 							return;
				// 						}
				// 						// Enqueue the next data chunk into our target stream
				// 						controller.enqueue(value);
				// 						return pump();
				// 					});
				// 				}
				// 			},
				// 		});
				// 	})
				// 	// Create a new response out of the stream
				// 	.then((stream) => new Response(stream))
				// 	// Create an object URL for the response
				// 	.then((response) => response.text())
				// 	.then(text => console.log('text', text))
				// 	// .then((blob) => URL.createObjectURL(blob))
				// 	// // Update image
				// 	// .then((url) => console.log((image.src = url)))
				// 	.catch((err) => console.error(err));



				const response = await fetch(url, { method: 'get', mode: mode, cache: 'no-cache', headers });
				//
				console.log(response);
				//
				console.log(await response.text())


				// console.log(await (await fetch(url, { method: 'get', mode: 'no-cors', cache: 'no-cache', headers })).text());
			} catch (err){
				console.error(err);
			}

		},

	}

}
</script>



<style>
.v-home-page{
	--var-h-min-padding: 5vh;

	/*flex: 1 0 min-content;*/

	display: flex;
	flex-direction: column;
	align-items: stretch;


	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;

	/*padding-bottom: 10em;*/
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

	min-width: max(30%, 30em);
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
</style>
