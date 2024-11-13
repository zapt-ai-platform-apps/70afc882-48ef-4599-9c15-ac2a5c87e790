import { useNavigate } from '@solidjs/router';

function Home() {
  const navigate = useNavigate();

  return (
    <div class="mx-auto min-h-screen h-full">
      <div class="flex justify-center mb-8">
        <h1 class="text-4xl font-bold text-purple-600">
          أهلاً بك في خدمات Blind Accessibility
        </h1>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <p class="text-gray-700 leading-relaxed mb-6">
          اكتشف تجربة فريدة مصممة خصيصًا لتمكينك من الوصول إلى العالم الرقمي بثقة وسهولة. نعمل جاهدين لتقديم أفضل الخدمات التي تلبي احتياجاتك وتعزز استقلاليتك.
        </p>
      </div>
    </div>
  );
}

export default Home;