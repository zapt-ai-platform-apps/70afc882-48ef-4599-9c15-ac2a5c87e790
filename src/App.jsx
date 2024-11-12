import { createSignal, Show } from 'solid-js';
import { createEvent } from './supabaseClient';

function App() {
  const [loading, setLoading] = createSignal(false);
  const [textInput, setTextInput] = createSignal('');
  const [audioUrl, setAudioUrl] = createSignal('');

  const handleTextToSpeech = async () => {
    if (!textInput()) return;
    setLoading(true);
    try {
      const result = await createEvent('text_to_speech', {
        text: textInput(),
      });
      setAudioUrl(result);
    } catch (error) {
      console.error('Error converting text to speech:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 h-full" dir="rtl">
      <div class="max-w-2xl mx-auto h-full">
        <div class="flex justify-center mb-8">
          <h1 class="text-4xl font-bold text-purple-600">خدمات Blind Accessibility</h1>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4 text-purple-600">تحويل النص إلى كلام</h2>
          <textarea
            placeholder="أدخل النص هنا"
            value={textInput()}
            onInput={(e) => setTextInput(e.target.value)}
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border text-black"
            rows="5"
          ></textarea>
          <button
            onClick={handleTextToSpeech}
            class={`mt-4 w-full px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${
              loading() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading()}
          >
            <Show when={loading()}>جاري التحويل...</Show>
            <Show when={!loading()}>تحويل إلى صوت</Show>
          </button>
        </div>

        <Show when={audioUrl()}>
          <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-2 text-purple-600">ملف الصوت</h3>
            <audio controls src={audioUrl()} class="w-full" />
          </div>
        </Show>
      </div>
    </div>
  );
}

export default App;