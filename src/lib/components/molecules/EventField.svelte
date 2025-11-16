<script lang="ts">
	export let description: string;
	export let date: string;
</script>

<div class="content">
	<p class="title">
		<span class="description">{description}</span>
		<span class="date-wrapper">
			<span class="date">
				{#if date}
					{new Date(date).toLocaleString(undefined, {
						year: 'numeric',
						month: 'long'
					})}
				{/if}
			</span>
		</span>
	</p>
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
		border-bottom: 1px solid var(--color--text);
		padding: 10px 0px;

		&:first-child {
			border-top: 1px solid var(--color--text);
		}
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		font-size: 1rem;
		font-family: var(--font--default);
		font-weight: 400;

		.description {
			flex: 1;
		}

		.date-wrapper {
			display: flex;
			align-items: center;
			gap: 7px;
			flex-shrink: 0;
		}

		.date {
			font-size: 1rem;
			color: rgba(var(--color--text-rgb), 0.8);
		}

		svg {
			width: 16px;
			height: 16px;
			flex-shrink: 0;
			transition: transform 0.2s ease;
		}
	}

	:global(.event-field:hover .title svg) {
		transform: rotate(45deg);
	}
</style>
