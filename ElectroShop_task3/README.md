# ElectroShop — Angular Day 3

حل بسيط لتاسك Angular Day 3 باستخدام **Standalone Components** و **Signals** و **@Input** و **@Output**.

## طريقة التشغيل

1. افتح مجلد `ElectroShop_Day3` باستخدام VS Code.
2. افتح Terminal داخل المجلد.
3. شغّل:

```bash
npm install
npm start
```

4. افتح `http://localhost:4200` في المتصفح إذا لم يفتح تلقائياً.

> لازم يكون Node.js مثبتاً على الجهاز. لا تحتاج إنشاء Angular project جديد؛ جميع الملفات جاهزة هنا.

## المطلوب الموجود

- `AppComponent`: **Parent** فيه Signals لاسم المنتج ووصفه وسعره وتوفره.
- `ProductDetailsComponent`: يستقبل بيانات المنتج بـ `@Input`، ويستخدم `signal(1)` و `update()` لزيادة الكمية وتقليلها (لا تقل عن 1).
- زر **Add to Cart** يرسل اسم المنتج والكمية من الابن للأب باستخدام `@Output` و `EventEmitter`.
- `ShoppingCartComponent`: يستقبل اسم المنتج والسعر والكمية بـ `@Input`، ويعرض الإجمالي.
- زر **Wireless Headphones** يغيّر Signals في الأب ويعرض المنتج الثاني في **نفس** ProductDetailsComponent. زر **Laptop** يعيد المنتج الأول.

## ملفات مهمة

- `src/app/app.component.ts` و `app.component.html`
- `src/app/product-details/`
- `src/app/shopping-cart/`

## تجربة سريعة

1. المنتج الأول: Laptop بسعر 850 دولار.
2. اضغط (+) مرة واحدة: تصبح الكمية 2.
3. اضغط Add to Cart: الإجمالي 1700 دولار.
4. اضغط (−) كثيراً: الكمية لا تقل عن 1.
5. اختر Wireless Headphones: يظهر السعر 120 دولار والوصف Bluetooth Headphones.

**ملاحظة:** سلة التسوق تعرض آخر منتج تمت إضافته، حسب المطلوب في التاسك (منتج محدد وكمية وإجمالي).
