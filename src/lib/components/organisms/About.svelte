<script>
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import Image from '../atoms/Image.svelte';
</script>

<section id="about">
	<div class="image">
		<Image src="/images/profile.jpeg" alt="Punn with a cat" />
	</div>
	<div class="info">
		<h2>
			<!-- This is a catchy headline that
			<SparklingHighlight color="secondary">sparkles!</SparklingHighlight> -->
			Hi! I'm Punn Lertjaturaphat.
		</h2>
		<p>
			<!-- A designer who loves to create meaningful interaction. I always keep looking for a way to mix -->
			<!-- fun physical experience into an otherwise mundane digital task we perform everyday. -->
			I am a KAIST undergraduate majoring in Industrial Design and Computer Science. Previously working
			with Professor Andrea Bianchi in <a href="https://make.kaist.ac.kr/"> Make Lab </a>
		</p>
		<p>
			My motivation in research and in design lies in creating intellectually-munchable interaction.
			I strive to make tools that help people think and see. Tools that let people be in control.
			Interaction that enhances creative process not by making it faster or easier but by helping
			the people understand it better.
			<!-- As a passionate maker, I believe that the connection with your craft lies as much in the -->
			<!-- process as in the final result. While faster and easier tools are important, I think focusing on it too much makes the making boring -->
		</p>
		<p>
			Weekends and end of the days I am going to either be making weird sounds on my synths or
			bouldering. I also enjoy talking to shop keepers and lunch ladies, holding up the lines on
			busy days.
		</p>
		<div class="socials">
			<Socials />
		</div>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#about {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		padding-top: 50px;
		padding-bottom: 50px;

		@media (max-width: 1000px) {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		@include for-tablet-landscape-down {
			justify-content: space-around;
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 10px;
			h2 {
				@include for-phone-only {
					text-align: center;
				}
			}

			p {
				@include for-phone-only {
					text-align: justify;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}

		.socials {
			display: flex;
			align-items: center;
			gap: 15px;
			margin-top: 10px;

			@include for-phone-only {
				justify-content: center;
				margin-bottom: 10px;
				span {
					display: none;
				}
			}
		}

		.image {
			margin: 0 auto;
			max-height: 400px;
			// box-shadow: var(--image-shadow);
			border-radius: 12px;
			border-style: solid;
			border-width: 3px;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
				max-height: 400px;
				object-fit: contain;
			}
		}
	}
</style>
