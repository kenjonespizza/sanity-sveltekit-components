<script>
  export let data
</script>

<div class="bg-blue-700">
  <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
      {data?.heading}
    </h2>
    <p class="mt-4 text-lg leading-6 text-blue-100">{data?.text}</p>
    <a href={data?.url} class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 sm:w-auto">
      {data?.buttonText}
    </a>
  </div>
</div>
