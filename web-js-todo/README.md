# Görev Akışı — Mini Todo Uygulaması

React (Vite) + Tailwind CSS ile geliştirilmiş, LocalStorage tabanlı bir görev
yönetim uygulaması. Web Geliştirme / JavaScript proje yönergesi kapsamında
hazırlanmıştır.

## Kullanılan Teknolojiler
- **ReactJS** (Vite ile kurulum)
- **Tailwind CSS**
- **LocalStorage** (veri kalıcılığı)

## Proje Yapısı
```
src/
  components/   → TodoForm, TodoItem, TodoList (tekrar kullanılabilir UI parçaları)
  pages/        → Home (sayfa/ekran bileşeni)
  interfaces/   → Todo.interface.js (JSDoc typedef + factory), storage.js (LocalStorage katmanı)
```

## Özellikler (Proje Yönergesi Karşılığı)
- ✅ Ekle işlemi → `TodoForm.jsx`
- ✅ Listeleme işlemi → `TodoList.jsx`
- ✅ Güncelleme işlemi → `TodoItem.jsx` (satıra çift tıklayarak veya "Düzenle" ile)
- ✅ Silme işlemi → `TodoItem.jsx`
- ✅ LocalStorage ile kalıcılık → `interfaces/storage.js`

## Kurulum ve Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini açın.

## Production Build

```bash
npm run build
npm run preview
```

## GitHub'a Yükleme

```bash
git init
git add .
git commit -m "Görev Akışı: Mini Todo App - ilk sürüm"
git branch -M main
git remote add origin <public-repo-URL-buraya>
git push -u origin main
```

> Repository'nin **public** olduğundan emin olun, teslim formunda bu linki
> paylaşacaksınız.

## Netlify'a Yayınlama
1. [https://app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
2. GitHub reponuzu seçin.
3. Build ayarları:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy sonrası verilen `https://xxxx.netlify.app` linkini teslim formunda paylaşın.

## Ekran Görüntüsü
Uygulamayı `npm run dev` ile çalıştırdıktan sonra en az 1 ekran görüntüsü alıp
teslim formuna/portföy dosyanıza ekleyin.
