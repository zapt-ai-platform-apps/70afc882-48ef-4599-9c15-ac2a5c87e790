import { useNavigate } from '@solidjs/router';

function OrderApp() {
  const navigate = useNavigate();

  return (
    <div class="mx-auto h-full">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-purple-600">
          اطلب تطبيقك الخاص
        </h1>
        <button
          class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          onClick={() => navigate('/')}
        >
          الرجوع
        </button>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md h-full">
        <p class="text-gray-700 leading-relaxed mb-6">
          نقدم خدمة فريدة لتطوير تطبيقات متوافقة مع قارئات الشاشة للمكفوفين وضعاف البصر.
          اختر من بين باقاتنا الثلاث التي تناسب احتياجاتك.
        </p>
        <h2 class="text-2xl font-semibold text-purple-600 mb-4">
          باقاتنا:
        </h2>
        <div class="space-y-8 mb-6">
          {/* الباقة المجانية */}
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-purple-600 mb-2">الباقة المجانية</h3>
            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li><span class="font-semibold">الإعلانات وحقوق المطورين:</span> يتضمن التطبيق إعلانات وروابط لحقوق المطورين.</li>
              <li><span class="font-semibold">خصائص أساسية:</span> وصول إلى الميزات الأساسية للتطبيق.</li>
              <li><span class="font-semibold">لوحة تحكم محدودة:</span> تحكم بسيط لإدارة المحتوى.</li>
              <li><span class="font-semibold">مناسبة للتجربة:</span> مثالية للمستخدمين الراغبين في استكشاف الخدمة قبل الترقية.</li>
            </ul>
            <div class="flex justify-center">
              <a
                href="mailto:info@blindaccessibility.com?subject=طلب الباقة المجانية"
                class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                اطلب الآن
              </a>
            </div>
          </div>
          {/* الباقة المدفوعة الأساسية */}
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-purple-600 mb-2">الباقة المدفوعة الأساسية</h3>
            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li><span class="font-semibold">بدون إعلانات:</span> استمتع بتجربة نظيفة بدون إزعاج الإعلانات.</li>
              <li><span class="font-semibold">ميزات إضافية:</span> وصول إلى خصائص متقدمة تعزز من تجربة المستخدم.</li>
              <li><span class="font-semibold">لوحة تحكم متطورة:</span> إدارة محتوى متقدمة وسهلة الاستخدام.</li>
              <li><span class="font-semibold">دعم فني مستمر:</span> فريق متخصص من الدعم لضمان أفضل أداء.</li>
              <li><span class="font-semibold">تحديثات منتظمة:</span> استفد من التحسينات المستمرة والتحديثات الأمنية.</li>
            </ul>
            <div class="flex justify-center">
              <a
                href="mailto:info@blindaccessibility.com?subject=طلب الباقة المدفوعة الأساسية"
                class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                اطلب الآن
              </a>
            </div>
          </div>
          {/* الباقة المدفوعة المميزة */}
          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-purple-600 mb-2">الباقة المدفوعة المميزة</h3>
            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li><span class="font-semibold">القدرة على إضافة الإعلانات والربح منها:</span> تمكينك من عرض الإعلانات داخل التطبيق لتحقيق عائد إضافي.</li>
              <li><span class="font-semibold">تطبيق متكامل مخصص:</span> تصميم وتطوير تطبيق حسب احتياجاتك الخاصة.</li>
              <li><span class="font-semibold">جميع الميزات المتقدمة:</span> وصول غير محدود إلى كافة الخصائص المتاحة.</li>
              <li><span class="font-semibold">لوحة تحكم احترافية:</span> أدوات إدارة متقدمة وشاملة.</li>
              <li><span class="font-semibold">دعم فني وأولوية في التحديثات:</span> أولوية في الدعم وتخصيص التحديثات لتناسب احتياجاتك.</li>
              <li><span class="font-semibold">استشارات متخصصة:</span> جلسات استشارية لتطوير استراتيجياتك الرقمية.</li>
            </ul>
            <div class="flex justify-center">
              <a
                href="mailto:info@blindaccessibility.com?subject=طلب الباقة المدفوعة المميزة"
                class="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                اطلب الآن
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            onClick={() => navigate('/')}
          >
            الرجوع إلى الصفحة الرئيسية
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderApp;