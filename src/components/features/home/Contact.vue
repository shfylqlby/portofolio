<template>
  <section class="bg-gray-900 text-gray-300 px-6 md:px-20 py-10">
    <h2 class="text-2xl md:text-3xl font-bold mb-6">#contacts</h2>
    <div class="flex flex-col md:flex-row gap-6">
      <div class="md:w-1/2 bg-gray-800 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">Message me here</h3>
        <p class="text-gray-400">@eliasdev</p>
        <p class="text-gray-400">hi.elias@dev.me</p>
      </div>
      <form class="md:w-1/2 flex flex-col gap-3 bg-gray-800 p-4 rounded-lg">
        <input type="text" placeholder="Name" class="p-2 rounded bg-gray-700 text-gray-200"/>
        <input type="email" placeholder="Email" class="p-2 rounded bg-gray-700 text-gray-200"/>
        <textarea placeholder="Message" class="p-2 rounded bg-gray-700 text-gray-200"></textarea>
        <button type="submit" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">Send</button>
      </form>
    </div>
  </section>
</template>
