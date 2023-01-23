<script>
	import { enhance } from '$app/forms';

  /** @type {import('./$types').ActionData} */
  export let form;
  
  /**@type String */
  let giftIdeas = '';

  /**@type Boolean*/
  let loading = false;

  /**
	 * @param {string} text
	 */
  function htmlify(text) {
    return text.split("\n").join("<br />")
  }
</script>

<div class="container mx-auto flex flex-col items-center">
    <div class="flex items-start space-x-4 mx-auto w-full max-w-xl mb-8 sm:mt-20">
        <div class="min-w-0 flex-1">
            <div class="bg-slate-100 overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 p-4">
                <div class="bg-slate-100 block w-full resize-none border-0 py-3 focus:ring-0 prose sm:prose-lg">Hello! Tell me about the guy you're trying to buy a gift for. The more specific the better! Maybe include his age, his hobbies, things like that.</div>
            </div>
        </div>
        <div class="flex-shrink-0">
            <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2610&q=80" alt="">
        </div>
    </div>
    <div class="flex items-start space-x-4 mx-auto w-full max-w-xl mb-8">
        <div class="flex-shrink-0">
            <img class="inline-block h-10 w-10 rounded-full" src="https://ucarecdn.com/dafe1d70-f19a-42a0-bdc6-2c0df2e25441/-/preview/50x50/" alt="">
        </div>
        <div class="min-w-0 flex-1">
            <form method="POST" class="relative" use:enhance={({ form, data, action, cancel }) => {
                loading = true;
                return async ({ result }) => {
                    giftIdeas = result.data;
                    loading = false;
                };
              }}>
                <div class="overflow-hidden rounded-lg border border-sky-600 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-indigo-500 p-4">
                    <label for="prompt" class="sr-only">Tell us about the guy you're trying to buy a gift for. The more specific the better!</label>
                    <textarea rows="3" name="prompt" id="prompt" required class="block w-full resize-none border-0 py-3 focus:ring-0 prose sm:prose-lg" placeholder="Type your description here..."></textarea>
    
                    <!-- Spacer element to match the height of the toolbar -->
                    <div class="py-2" aria-hidden="true">
                        <!-- Matches height of button in toolbar (1px border + 36px content height) -->
                        <div class="py-px">
                            <div class="h-9"></div>
                        </div>
                    </div>
    
                    <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2"></div>
                    <button type="submit" class="float-right inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Generate Ideas</button>
                </div>
            </form>
        </div>
    </div>
    <div class="flex items-start space-x-4 mx-auto w-full max-w-xl mb-20">
        <div class="min-w-0 flex-1">
            <div class="bg-slate-100 overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 p-4">
                <div class="bg-slate-100 block w-full resize-none border-0 py-3 focus:ring-0 prose sm:prose-lg" >{@html loading ? 'Thinking...' : htmlify(giftIdeas)}</div>
            </div>
        </div>
        <div class="flex-shrink-0">
            <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2610&q=80" alt="">
        </div>
    </div>
</div>