<script>
    export let data;
</script>

<svelte:head>
	<title>Guys Gift Guide - the blog</title>
    <meta name="description" content="Articles and resources meant to help you choose the right gift, every time!">
</svelte:head>

<div class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
    <div class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent publications</h2>
            <p class="mt-3 text-xl text-gray-500 sm:mt-4">Articles and resources meant to help you choose the right gift, every time!</p>
        </div>
        <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {#each data.posts as post}
                <div>
                    <div>
                        <div class="inline-block">
                            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">Article</span>
                        </div>
                    </div>
                    <a href="/blog/{post.path}" class="mt-4 block" sveltekit:prefetch>
                        <p class="text-xl font-semibold text-gray-900">{post.title}</p>
                        <p class="mt-3 text-base text-gray-500">{post.snippet}</p>
                    </a>
                    <div class="mt-6 flex items-center">
                        <div class="flex-shrink-0">
                            <span class="sr-only">Jason P.</span>
                            <img class="h-10 w-10 rounded-full" src="https://ucarecdn.com/737b64d1-a06b-4474-ba37-f14d8bfdd407/-/scale_crop/100x100/smart/" alt="Jason P. profile">
                        </div>
                        <div class="ml-3">
                            <p class="text-sm font-medium text-gray-900">
                                Jason P.
                            </p>
                            <div class="flex space-x-1 text-sm text-gray-500">
                                <time datetime="2020-03-16">{post.date}</time>
                                <span aria-hidden="true">&middot;</span>
                                <span>2 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
  