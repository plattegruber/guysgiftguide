<script>
    import "../app.css";
    import logo from '$lib/assets/logo.png';
</script>
<header>
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex w-full items-center justify-between border-b border-indigo-100 py-6 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Guys Gift guide</span>
            <img class="h-8 w-auto" src={logo} alt="guys gift guide logo">
          </a>
          <div class="ml-10 hidden space-x-8 lg:block">
            <a href="#" class="text-base font-medium hover:text-indigo-50">Gift Ideas</a>
  
            <a href="#" class="text-base font-medium hover:text-indigo-50">Blog</a>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
        <a href="#" class="text-base font-medium hover:text-indigo-50">Gift Ideas</a>
  
        <a href="#" class="text-base font-medium hover:text-indigo-50">Blog</a>
      </div>
    </nav>
  </header>
  
<slot />