<script lang="ts">
	let { data }: { data: any } = $props();
</script>

<div class="bg-blue-700">
	<div class="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
		<h2 class="text-3xl font-extrabold text-white sm:text-4xl">
			{data?.heading}
		</h2>
		<p class="mt-4 text-lg leading-6 text-blue-100">{data?.text}</p>
		<a
			href={data?.url}
			class="mt-8 inline-flex w-full items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 sm:w-auto"
		>
			{data?.buttonText}
		</a>
	</div>
</div>
