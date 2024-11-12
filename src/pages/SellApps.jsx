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
        <p class="text-gray-700 leading-relaxed">
          نحن نقدم مجموعة متنوعة من التطبيقات المصممة خصيصًا لتلبية احتياجات المكفوفين وضعاف البصر.
          يرجى التواصل معنا لمعرفة المزيد حول كيفية الحصول على التطبيقات التي تناسبك.
        </p>
      </div>
    </div>
  );
}

export default SellApps;