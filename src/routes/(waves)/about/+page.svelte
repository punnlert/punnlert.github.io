<script lang="ts">
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import Logo from '$lib/components/atoms/Logo.svelte';
</script>

<div class="container">
	<ContentSection title="About Me">
		<div class="content">
			<p>
                When I was young I didn't think I'd have a head for design. I never was the kid who draws best in class or the one who people would
                ask to make the group poster. I had always think that design is all about those things, you know? Making aesthetic choices, 
                being able to draw so effortlessly, knowing how to choose fonts. But being involved in design projects showed me that design isn't
                about what you can make but more about what you care.
                
                
                Nevertheless, there is a part of me who always have been a designer. 
            </p>
		</div>
	</ContentSection>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.content {
		--main-column-width: 80ch;
		position: relative;
		padding-top: 40px;
		padding-bottom: 80px;
		padding-right: 15px;
		padding-left: 15px;
		width: min(var(--main-column-width), 100%);

		@include for-iphone-se {
			padding-left: 0;
			padding-right: 0;
		}

		@include for-tablet-portrait-up {
			padding-right: 20px;
			padding-left: 20px;
		}

		@include for-tablet-landscape-up {
			padding-right: 30px;
			padding-left: 30px;
		}
	}
</style>
