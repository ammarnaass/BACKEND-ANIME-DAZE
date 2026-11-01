# ⚡ خادم الـ API المستقل لمنصة ANIME DAZE (Hono.js على Vercel)
# Standalone Hono.js Backend for ANIME DAZE / Slam Dunk

خادم خلفي فائق السرعة وخفيف الوزن مبني باستخدام **Hono.js** و **Prisma ORM** ومصمم ليعمل كـ Serverless Functions على **Vercel** بأقل زمن إقلاع ممكن (Ultra-fast Cold Starts).

---

## 🌟 الميزات المعمارية
1. **أداء فائق:** زمن إقلاع شبه فوري مقارنة بأطر العمل التقليدية.
2. **عقود موحدة:** نفس عقود الاستجابة لـ Next.js و React Native.
3. **CORS ذكي:** يدعم نطاقات الويب المحلية وسيرفرات Vercel وتطبيق الهاتف المحمول.
4. **تكامل كامل مع Prisma و PostgreSQL:** إدارة الجلسات والمستخدمين والحلقات وتقدم المشاهدة اللحظي.

---

## 🚀 التشغيل المحلي (Local Development)

### 1. تثبيت الاعتماديات:
```bash
cd backend
npm install
```

### 2. إعداد المتغيرات البيئية:
أنشئ ملف `.env` بناءً على `.env.example`:
```env
DATABASE_URL="your_postgresql_url"
JWT_SECRET="your_secret_key"
PORT=4000
```

### 3. توليد عميل Prisma:
```bash
npx prisma generate
```

### 4. تشغيل الخادم:
```bash
npm run dev
```
سيعمل الخادم على: `http://localhost:4000`  
فحص الحالة: `http://localhost:4000/health`

---

## 🌐 النشر على Vercel كمشروع مستقل (Vercel Deployment)

### الطريقة الأولى: عبر Vercel CLI
```bash
cd backend
npx vercel
```

### الطريقة الثانية: عبر لوحة تحكم Vercel (GitHub Integration)
1. في لوحة تحكم Vercel، اضغط **Add New Project**.
2. اختر مستودع `slam-dunk-w`.
3. في حقل **Root Directory**، اختر مجلد `backend`.
4. أضف المتغيرات البيئية:
   - `DATABASE_URL`
   - `JWT_SECRET`
5. اضغط **Deploy**.

ستحصل على رابط مستقل مثل:  
`https://slam-dunk-api.vercel.app`

---

## 🔗 ربط الواجهات بالـ Backend الجديد

### في تطبيق الويب (Next.js):
أضف في `.env.production`:
```env
NEXT_PUBLIC_API_URL="https://slam-dunk-api.vercel.app"
```

### في تطبيق الموبايل (React Native):
عدل رابط الأساس في [`mobile_app/src/services/api/client.ts`](file:///home/ammar/slam-dunk-w/mobile_app/src/services/api/client.ts):
```ts
const BASE_URL = __DEV__ 
  ? 'http://10.0.2.2:4000' 
  : 'https://slam-dunk-api.vercel.app';
```

---

## 📑 نقاط النهاية المتاحة (API Catalog)
- **المصادقة:** `/api/v1/auth/login`, `/register`, `/refresh`, `/me`, `/logout`
- **الأعمال:** `/api/v1/animes`, `/featured`, `/:id`, `/characters/all`
- **الحلقات:** `/api/v1/episodes/:id`, `/:id/comments`, `/:id/rate`
- **الملف والمزامنة:** `/api/v1/me/progress`, `/favorites`, `/history`
- **بوابة الموبايل:** `/api/mobile/v1/home`, `/config`, `/plans`
- **الإدارة:** `/api/admin/stats`, `/users`, `/settings`
