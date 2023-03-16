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

					<div class="-item">

						<div class="-title">

							<div class="-icon"></div>

							<span class="-text">Lorem ipsum</span>

						</div>

						<div class="-preview">
							<img class="-image" src=""/>
							<span class="-description">Lorem ipsum dolor sit amet</span>
						</div>

					</div>

					<div class="-item">

						<div class="-title">

							<div class="-icon"></div>

							<span class="-text">Lorem ipsum</span>

						</div>

						<div class="-preview">
							<img class="-image" src=""/>
							<span class="-description">Lorem ipsum dolor sit amet</span>
						</div>

					</div>

					<div class="-item">

						<div class="-title">

							<div class="-icon"></div>

							<span class="-text">Lorem ipsum</span>

						</div>

						<div class="-preview">
							<img class="-image" src=""/>
							<span class="-description">Lorem ipsum dolor sit amet</span>
						</div>

					</div>

					<div class="-item">

						<div class="-title">

							<div class="-icon"></div>

							<span class="-text">Lorem ipsum</span>

						</div>

						<div class="-preview">
							<img class="-image" src=""/>
							<span class="-description">Lorem ipsum dolor sit amet</span>
						</div>

					</div>

				</div>

			</div>

		</section>


	</div>
</template>



<script>
import VButton from "../@components/v-button.vue";
import VTextField2 from "../@components/v-text-field-2.vue";

export default {

   name: 'v-home-page',

	components: {VTextField2, VButton},

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
	font-weight: 700;
}

.v-home-page > .-hero > .-my-name{
	/*overflow: hidden;*/
}
.v-home-page > .-hero > .-my-name > .-text{
	font-size: 96px;
	font-weight: 700;
	transform: translateY(1em);
	/*margin-top: 1em;*/
	/*padding-top: 1em;*/
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

@keyframes --anim-text-appear-bottom {
	from {

	}
	to {

	}
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
	width: 250px;
	height: 300px;

	padding: 18px;

	box-shadow: inset 0 0 0 3px var(--theme-fg--1);
	border-radius: 18px;
}
.v-home-page > .-my-work > .-results > .-items > .-item > .-title{
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 18px;
	z-index: 1;
}
.v-home-page > .-my-work > .-results > .-items > .-item > .-title > .-icon{
	flex: 0 0 auto;
	width: 32px;
	height: 32px;
	background-color: var(--theme-fg--1);
	border-radius: 50%;
}
.v-home-page > .-my-work > .-results > .-items > .-item > .-title > .-text{
	flex: 1 0 auto;

}
.v-home-page > .-my-work > .-results > .-items > .-item > .-preview{
	position: absolute;

	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
.v-home-page > .-my-work > .-results > .-items > .-item > .-preview > .-image{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	border-radius: 18px;
	overflow: hidden;
	object-fit: cover;
}
.v-home-page > .-my-work > .-results > .-items > .-item > .-preview > .-description{
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;
	padding: 18px;

	font-size: 14px;
}

</style>
