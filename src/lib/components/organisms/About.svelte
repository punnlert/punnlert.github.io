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
			A designer who loves to create meaningful interaction. I always keep looking for a way to mix
			fun physical experience into an otherwise mundane digital task we perform everyday.
		</p>
		<p>
			Currently majoring in Industrial Design and Computer Science at
			<a href="https://www.kaist.ac.kr/en/html/kaist/01.html">KAIST</a>
		</p>
		<p>
			I keep my days going with small talks with cafeteria ladies, songs on cracked speakers, and
			the romance of handwritten letters.
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
		grid-template-columns: 500px 400px;
		align-items: center;
		justify-content: space-between;
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
				object-fit: cover;
			}
		}
	}
</style>
