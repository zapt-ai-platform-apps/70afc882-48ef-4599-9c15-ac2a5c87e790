import { useNavigate } from '@solidjs/router';

function Home() {
  const navigate = useNavigate();

  return (
    <div class="mx-auto min-h-screen h-full">
      <div class="flex justify-center mb-8">
        <h1 class="text-4xl font-bold text-purple-600">
          مرحبًا بك في خدمات Blind Accessibility
        </h1>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <p class="text-gray-700 leading-relaxed mb-6">
          نحن نسعى لتوفير أفضل الخدمات والتطبيقات لمساعدة المكفوفين وضعاف البصر على الوصول إلى المعلومات والخدمات بسهولة ويسر.
        </p>
        <button
          onClick={() => navigate('/sell-apps')}
          class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          بيع التطبيقات
        </button>
      </div>
    </div>
  );
}

export default Home;