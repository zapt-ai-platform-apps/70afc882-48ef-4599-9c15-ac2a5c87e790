import { createSignal } from 'solid-js';

function App() {
  return (
    <div
      class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 h-full"
      dir="rtl"
    >
      <div class="max-w-2xl mx-auto h-full">
        <div class="flex justify-center mb-8">
          <h1 class="text-4xl font-bold text-purple-600">
            New App
          </h1>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4 text-purple-600">
            مرحبًا بك في التطبيق
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;