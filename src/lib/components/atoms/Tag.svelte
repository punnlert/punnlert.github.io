<script lang="ts">
	export let color: 'primary' | 'secondary' = 'primary';
</script>

<div class="tag {color}">
	<slot />
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.tag {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		padding: 5px 15px;
		border-radius: 10px;
		font-weight: 500;
		font-size: 0.85rem;
		width: fit-content;
		white-space: nowrap;
		border-style: dashed;
		border-width: 2px;

		@media for-phone-only {
			border-width: 1px;
		}

		&.primary {
			background-color: var(--color--page-background);
			color: var(--color--primary);
			border-color: var(--color--primary);
		}
		&.secondary {
			background-color: var(--color--secondary-tint);
			color: var(--color--secondary);
			border-color: var(--color--secondary);
		}
	}
</style>
