<script>
	import TelegramIcon from '$lib/icons/socials/telegram.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import LinkedInIcon from '$lib/icons/socials/linkedin.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import RssIcon from '$lib/icons/rss.svelte';
	import MastodonIcon from '$lib/icons/socials/mastodon.svelte';
</script>

<div class="socials">
	<!-- <a
		href="#"
		target="_blank"
		rel="noopener noreferrer"
		title="Say Hi on Telegram"
	>
		<TelegramIcon />
	</a>
	<a
		href="#"
		target="_blank"
		rel="me noreferrer"
		title="Say Hi on Mastodon"
	>
		<MastodonIcon />
	</a> -->
	<a
		href="https://github.com/punnlert"
		target="_blank"
		rel="noopener noreferrer"
		title="See my GitHub profile"
		class="link-with-arrow"
	>
		GitHub
		<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				vector-effect="non-scaling-stroke"
				d="M30.1992 0H27.6988V0.0012209H-0.303711V2.50162H25.8422L0.714516 27.6295L2.48256 29.3975L27.6988 4.1812V30H30.1992V0Z"
				fill="currentColor"
			/>
		</svg>
	</a>
	<a
		href="https://www.linkedin.com/in/punn-lertjaturaphat/"
		target="_blank"
		rel="noopener noreferrer"
		title="Connect on LinkedIn"
		class="link-with-arrow"
	>
		LinkedIn
		<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				vector-effect="non-scaling-stroke"
				d="M30.1992 0H27.6988V0.0012209H-0.303711V2.50162H25.8422L0.714516 27.6295L2.48256 29.3975L27.6988 4.1812V30H30.1992V0Z"
				fill="currentColor"
			/>
		</svg>
	</a>
	<a
		href="mailto: punnlertjaturaphat@gmail.com"
		target="_blank"
		rel="noopener noreferrer"
		title="Send an email"
		class="link-with-arrow"
	>
		Email
		<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				vector-effect="non-scaling-stroke"
				d="M30.1992 0H27.6988V0.0012209H-0.303711V2.50162H25.8422L0.714516 27.6295L2.48256 29.3975L27.6988 4.1812V30H30.1992V0Z"
				fill="currentColor"
			/>
		</svg>
	</a>
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 30px;

		a {
			transition: all 0.2s ease-in-out;
			width: auto;
			color: var(--color--text);
			fill: var(--color--text);
			text-decoration: none;

			&.link-with-arrow {
				display: inline-flex;
				align-items: center;
				gap: 7px;

				svg {
					width: 12px;
					height: 12px;
					transition: transform 0.2s ease;
				}

				&:hover svg {
					transform: rotate(45deg);
				}
			}

			&:hover {
				// color: var(--color--primary);
				// fill: var(--color--primary);
				scale: 1.1;
				// filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>
