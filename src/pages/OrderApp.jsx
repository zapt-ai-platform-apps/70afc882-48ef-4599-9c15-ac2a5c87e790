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
        <div class="mt-6 text-center">
          <p class="text-lg text-gray-700 mb-4">
            للتفاصيل وكيفية الطلب، يرجى التواصل معنا عبر البريد الإلكتروني أو الهاتف.
          </p>
          <p class="text-gray-700">
            البريد الإلكتروني: <a href="mailto:info@blindaccessibility.com" class="text-blue-500 hover:underline">info@blindaccessibility.com</a>
          </p>
          <p class="text-gray-700">
            الهاتف: <a href="tel:+1234567890" class="text-blue-500 hover:underline">+1234567890</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderApp;