<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
	<title>Guys Gift Guide | gifts for guys | a hand-curated list of men's gift ideas</title>
  <meta name="description" content="Gifts from around the internet that guys are sure to love. We look for the useful, unique, cool things that aren't on everybody's list, but absolutely should be. Updated daily.">
  <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/2fbd9b2352aaac2b9935425b3/62ca0aecf7e3702b587ad6c49.js");</script>
</svelte:head>
  
<div class="relative bg-white pt-16">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hand-curated gifts guys will (actually) love</p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Gifts from around the internet that guys are sure to love. We look for the useful, unique, cool things that aren't on everybody's list, but absolutely should be. Updated daily.</p>
    </div>
  </div>
  

<div class="bg-white">
  <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Products</h2>
    <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
    {#each data.products as product}
            <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                <div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-72">
                    <img src={product.imageUrl} alt={product.imageAltText} class="h-full w-full object-cover object-center sm:h-full sm:w-full">
                    </div>
                    <div class="flex flex-1 flex-col space-y-2 p-4">
                    <h3 class="text-sm font-medium text-gray-900">
                        <a href={product.link} target="_blank" rel="noreferrer">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        {product.title}
                        </a>
                    </h3>
                    <p class="text-sm text-gray-500">{product.description}</p>
                    <div class="flex flex-1 flex-col justify-end">
                        <a href={product.link} target="_blank" rel="noreferrer" class="inline-flex items-center color-brand-blue py-2 text-sm font-medium hover:bg-gray-200 focus:outline focus:ring-2">Go to product &rarr;</a>
                    </div>
                </div>
            </div>
            {/each}
        </div>
  </div>
</div>