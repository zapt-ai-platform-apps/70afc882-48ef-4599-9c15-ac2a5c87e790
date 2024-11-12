import { createSignal } from 'solid-js';
import { Routes, Route, useNavigate } from '@solidjs/router';

function Home() {
  const navigate = useNavigate();

  return (
    <div class="mx-auto h-full">
      <div class="flex justify-center mb-8">
        <h1 class="text-4xl font-bold text-purple-600">
          خدمات Blind Accessibility
        </h1>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-purple-600">
          مرحبًا بك في خدمات Blind Accessibility
        </h2>
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

function SellApps() {
  const navigate = useNavigate();

  return (
    <div class="mx-auto h-full">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-purple-600">بيع التطبيقات</h1>
        <button
          onClick={() => navigate('/')}
          class="text-blue-500 hover:underline text-lg font-semibold cursor-pointer"
        >
          الرجوع إلى الصفحة الرئيسية
        </button>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <p class="text-gray-700 text-lg">
          هذه هي الصفحة المخصصة لبيع التطبيقات حسب متطلبات الزبناء.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      class="h-full bg-gradient-to-br from-purple-100 to-blue-100 p-4"
      dir="rtl"
    >
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/sell-apps" component={SellApps} />
      </Routes>
    </div>
  );
}

export default App;