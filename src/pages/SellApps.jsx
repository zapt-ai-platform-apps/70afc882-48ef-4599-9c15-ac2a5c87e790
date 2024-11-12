import { useNavigate } from '@solidjs/router';
import { For } from 'solid-js';

function SellApps() {
  const navigate = useNavigate();

  const packages = [
    {
      name: 'الباقة المجانية',
      price: 'مجانية',
      features: [
        'ميزات أساسية',
        'وصول محدود للتطبيقات',
      ],
    },
    {
      name: 'الباقة المتوسطة',
      price: '50 ريال/شهريًا',
      features: [
        'وصول إلى مجموعة أوسع من التطبيقات',
        'ميزات إضافية',
      ],
    },
    {
      name: 'الباقة المميزة',
      price: '100 ريال/شهريًا',
      features: [
        'وصول كامل إلى جميع التطبيقات',
        'دعم مخصص',
        'ميزات حصرية',
      ],
    },
  ];

  return (
    <div class="mx-auto min-h-screen h-full">
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
        <p class="text-gray-700 leading-relaxed mb-6">
          نحن نقدم مجموعة متنوعة من التطبيقات المصممة خصيصًا لتلبية احتياجات المكفوفين وضعاف البصر. يرجى اختيار الباقة التي تناسبك لمعرفة المزيد.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <For each={packages}>
            {(pkg) => (
              <div class="border border-gray-300 rounded-lg p-4">
                <h2 class="text-xl font-bold mb-2 text-purple-600">{pkg.name}</h2>
                <p class="text-green-600 font-semibold mb-4">{pkg.price}</p>
                <ul class="text-gray-700 mb-4">
                  <For each={pkg.features}>
                    {(feature) => (
                      <li class="mb-2">- {feature}</li>
                    )}
                  </For>
                </ul>
                <button
                  class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                >
                  اختيار الباقة
                </button>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}

export default SellApps;