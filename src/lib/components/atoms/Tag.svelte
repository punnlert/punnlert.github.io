<script lang="ts">
	export let color: 'primary' | 'secondary' | 'tertiary' | 'plain' = 'plain';
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
		border-style: solid;
		border-width: 1px;

		@media for-phone-only {
			border-width: 0.5px;
		}

		&.primary {
			color: var(--color--text);
			border-color: var(--color--text);
			background-color: var(--color--primary);
		}
		&.secondary {
			color: var(--color--text);
			border-color: var(--color--text);
			background-color: var(--color--secondary);
		}
		&.tertiary {
			color: var(--color--text);
			border-color: var(--color--text);
			background-color: var(--color--tertiary);
		}
		&.plain {
			color: var(--color--text);
			border-color: var(--color--text);
			background-color: var(--color-background);
		}
	}
</style>
