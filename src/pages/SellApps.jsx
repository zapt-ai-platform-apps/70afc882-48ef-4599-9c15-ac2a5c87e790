import { useNavigate } from '@solidjs/router';

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
        {/* المحتوى تم إزالته بناءً على طلب المستخدم */}
      </div>
    </div>
  );
}

export default SellApps;