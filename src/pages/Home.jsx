import { useNavigate } from '@solidjs/router';

function Home() {
  const navigate = useNavigate();

  return (
    <div class="mx-auto h-full">
      <div class="flex justify-center mb-8">
        <h1 class="text-4xl font-bold text-purple-600">
          أهلاً بك في خدمات Blind Accessibility
        </h1>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <p class="text-gray-700 leading-relaxed mb-6">
          اكتشف تجربة فريدة مصممة خصيصًا لتمكينك من الوصول إلى العالم الرقمي بثقة وسهولة. نعمل جاهدين لتقديم أفضل الخدمات التي تلبي احتياجاتك وتعزز استقلاليتك.
        </p>
        <div class="flex justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            onClick={() => navigate('/order-app')}
          >
            اطلب تطبيقك الخاص
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;