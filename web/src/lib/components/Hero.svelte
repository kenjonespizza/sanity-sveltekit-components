<script lang="ts">
	let { data }: { data: any } = $props();
</script>

<div class="relative bg-gray-50">
	<main class="lg:relative">
		<div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
			<div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
				<h1
					class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
				>
					{data?.heading}
				</h1>
			</div>
		</div>
		<div
			class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
		>
			<img
				class="absolute inset-0 h-full w-full object-cover"
				src="https://cdn.sanity.io/images/3do82whm/next/55236b64b6509be5d1723a5f44a53fc4edcefd37-554x473.svg?h=473&fit=max&auto=format"
				alt="Sanity"
			/>
		</div>
	</main>
</div>
