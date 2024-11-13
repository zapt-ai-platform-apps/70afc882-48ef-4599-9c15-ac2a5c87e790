function OrderApp() {
  return (
    <div class="mx-auto min-h-screen">
      <div class="flex justify-center mb-8">
        <h1 class="text-3xl font-bold text-purple-600">
          اطلب تطبيقك الخاص
        </h1>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md h-full">
        <p class="text-gray-700 leading-relaxed mb-6">
          نقدم خدمة فريدة لتطوير تطبيقات متوافقة مع قارئات الشاشة للمكفوفين وضعاف البصر.
          اختر من بين باقاتنا الثلاث التي تناسب احتياجاتك.
        </p>
        <h2 class="text-2xl font-semibold text-purple-600 mb-4">
          باقاتنا:
        </h2>
        <div class="space-y-4 mb-6">
          {/* الباقة المجانية */}
          <div class="bg-gray-100 p-4 rounded-lg">
            <h3 class="text-xl font-bold text-purple-600">الباقة المجانية</h3>
            <p class="text-gray-700 mb-4">
              تحتوي على إعلانات وحقوق المطورين، بخصائص محدودة ولوحة تحكم. مثالية للمستخدمين الذين يرغبون في تجربة الخدمة قبل الانتقال إلى الباقات المدفوعة.
            </p>
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
          <div class="bg-gray-100 p-4 rounded-lg">
            <h3 class="text-xl font-bold text-purple-600">الباقة المدفوعة الأساسية</h3>
            <p class="text-gray-700 mb-4">
              تطبيق مخصص بدون إعلانات، مع ميزات إضافية وتحكم كامل. دعم فني مستمر لضمان أفضل أداء.
            </p>
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
          <div class="bg-gray-100 p-4 rounded-lg">
            <h3 class="text-xl font-bold text-purple-600">الباقة المدفوعة المميزة</h3>
            <p class="text-gray-700 mb-4">
              تطبيق متكامل بدون إعلانات، مع جميع الميزات المتقدمة ولوحة تحكم احترافية. دعم فني وأولوية في التحديثات لتلبية جميع احتياجاتك.
            </p>
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
      </div>
    </div>
  );
}

export default OrderApp;