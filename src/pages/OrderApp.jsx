import { createSignal, Show } from 'solid-js';

function OrderApp() {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [packageType, setPackageType] = createSignal('الباقة المجانية');
  const [message, setMessage] = createSignal('');
  const [submitted, setSubmitted] = createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إرسال البيانات إلى الخادم أو معالجتها حسب الحاجة
    // سنعرض رسالة تأكيد فقط في هذا المثال
    setSubmitted(true);
  };

  return (
    <div class="mx-auto min-h-screen h-full">
      <div class="flex justify-center mb-8">
        <h1 class="text-3xl font-bold text-purple-600">
          اطلب تطبيقك الخاص
        </h1>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <p class="text-gray-700 leading-relaxed mb-6">
          نقدم خدمة فريدة لتطوير تطبيقات متوافقة مع قارئات الشاشة للمكفوفين وضعاف البصر.
        </p>
        <h2 class="text-2xl font-semibold text-purple-600 mb-4">
          باقاتنا:
        </h2>
        <div class="space-y-4 mb-6">
          <div class="bg-gray-100 p-4 rounded-lg">
            <h3 class="text-xl font-bold">الباقة المجانية</h3>
            <p class="text-gray-700">
              تطبيق أساسي بميزات محدودة. مثالي للمستخدمين الذين يرغبون في تجربة الخدمة قبل الانتقال إلى الباقات المدفوعة.
            </p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg">
            <h3 class="text-xl font-bold">الباقة المدفوعة الأساسية</h3>
            <p class="text-gray-700">
              تطبيق مخصص مع ميزات إضافية. دعم فني مستمر لضمان أفضل أداء.
            </p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg">
            <h3 class="text-xl font-bold">الباقة المدفوعة المميزة</h3>
            <p class="text-gray-700">
              تطبيق متكامل مع جميع الميزات المتقدمة. دعم فني وأولوية في التحديثات لتلبية جميع احتياجاتك.
            </p>
          </div>
        </div>
        <Show when={!submitted()}>
          <h2 class="text-2xl font-semibold text-purple-600 mb-4">
            املأ النموذج لبدء طلبك
          </h2>
          <form onSubmit={handleSubmit} class="space-y-4">
            <div>
              <label class="block text-gray-700 mb-1">الاسم الكامل</label>
              <input
                type="text"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
                value={name()}
                onInput={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label class="block text-gray-700 mb-1">البريد الإلكتروني</label>
              <input
                type="email"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
                value={email()}
                onInput={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label class="block text-gray-700 mb-1">اختر الباقة</label>
              <select
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
                value={packageType()}
                onChange={(e) => setPackageType(e.target.value)}
              >
                <option>الباقة المجانية</option>
                <option>الباقة المدفوعة الأساسية</option>
                <option>الباقة المدفوعة المميزة</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 mb-1">رسالة إضافية</label>
              <textarea
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
                rows="4"
                value={message()}
                onInput={(e) => setMessage(e.target.value)}
              />
            </div>
            <div class="mt-6 flex justify-center">
              <button
                type="submit"
                class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                ابدأ الآن
              </button>
            </div>
          </form>
        </Show>
        <Show when={submitted()}>
          <div class="text-center">
            <h2 class="text-2xl font-semibold text-purple-600 mb-4">
              شكراً لتواصلك معنا!
            </h2>
            <p class="text-gray-700">
              لقد استلمنا طلبك وسنقوم بالاتصال بك قريباً لمناقشة التفاصيل.
            </p>
          </div>
        </Show>
      </div>
    </div>
  );
}

export default OrderApp;