<script lang="ts">
	import Marquee from '$lib/components/atoms/Marquee.svelte';
</script>

<div class="announcement">
	<Marquee pauseOnHover={true} gap={'20px'} speed={50}>
		{#each Array(7).fill(0) as _, i (i)}
			<div class="announcement-text">
				<h4>
					<a href="/publications/wireway-2026"> New Paper </a>to Appear at CHI2026!
				</h4>
			</div>
		{/each}
	</Marquee>
</div>

<style lang="scss">
	.announcement {
		padding-top: 10px;
		padding-bottom: 10px;
		background-color: var(--color--primary);
	}
</style>
