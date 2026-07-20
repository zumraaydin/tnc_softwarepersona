# Mini Katalog Uygulaması

## Kısa Açıklama
Flutter haftalık eğitimi bitirme projesi olarak geliştirilmiş bir mini
e-ticaret katalog uygulamasıdır. Kullanıcı ana sayfada ürünleri kart tabanlı
bir `GridView` üzerinden görüntüler, arama kutusuyla filtreleyebilir, bir
ürüne dokunarak detay sayfasına geçebilir (Navigator + Route Arguments) ve
sepete ekleyip basit bir "sipariş simülasyonu" tamamlayabilir.

## Kullanılan Flutter Sürümü
Bu proje **Flutter 3.24 ve üzeri** (Dart 3.3+) ile uyumludur. Kendi
sisteminizdeki tam sürümü teslimden önce `flutter --version` komutuyla
kontrol edip bu bölüme not düşün. (Yazım tarihi itibarıyla güncel kararlı
sürüm Flutter 3.44.0'dır.)

## Kullanılan Paketler
Yönerge gereği **ekstra paket kullanılmamıştır** — yalnızca Flutter SDK
içindeki `material.dart` ve `dart:convert` (JSON okuma için) kullanılmıştır.

## Proje Yapısı
```
lib/
  main.dart                     → Uygulama girişi, MaterialApp, named routes
  models/
    product.dart                 → Product modeli (fromJson / toJson)
    cart_item.dart                → Sepet satırı modeli
  data/
    product_repository.dart       → assets/data/products.json dosyasını okur
    cart_model.dart                → ChangeNotifier tabanlı basit sepet state'i
    icon_mapper.dart                → JSON "icon" alanını Material Icon'a çevirir
  screens/
    home_screen.dart               → Ana sayfa: GridView + arama + sepet rozeti
    product_detail_screen.dart      → Ürün detayı: adet seçici + sepete ekle
    cart_screen.dart                 → Sepet: liste, toplam tutar, sipariş simülasyonu
assets/
  data/products.json              → Yerel örnek ürün verisi (JSON)
```

## Öğrenme Hedeflerinin Karşılığı
- **Widget yapısı / Stateless-Stateful:** `HomeScreen`, `ProductDetailScreen` (Stateful), `CartScreen` (Stateless)
- **Sayfa geçişleri (Navigator):** `Navigator.pushNamed` / `Navigator.pop`
- **Route Arguments:** Seçilen `Product`, `/detail` rotasına parametre olarak taşınır
- **JSON okuma + model sınıfı:** `product_repository.dart` + `Product.fromJson`
- **ListView / GridView:** Ana sayfada `GridView.builder`, sepette `ListView.separated`
- **Basit arama/filtreleme:** Ana sayfadaki arama kutusu
- **Basit state güncelleme (simülasyon):** `CartModel` (ChangeNotifier + AnimatedBuilder)
- **Asset yönetimi:** `pubspec.yaml` içinde tanımlı `assets/data/products.json`

## Kurulum ve Çalıştırma

Bu klasör yalnızca proje kodunu (`lib/`, `assets/`, `pubspec.yaml`) içerir;
platforma özgü `android/` ve `ios/` klasörleri Flutter tarafından otomatik
üretilir. İlk kurulumda:

```bash
# 1. Yeni bir Flutter projesi iskeleti oluşturun
flutter create mini_katalog_uygulamasi
cd mini_katalog_uygulamasi

# 2. Bu klasördeki lib/, assets/ ve pubspec.yaml dosyalarını,
#    oluşturulan projenin üzerine kopyalayın (varsayılan lib/ ve
#    pubspec.yaml dosyalarının üzerine yazılacaktır)

# 3. Paketleri indirin ve çalıştırın
flutter pub get
flutter run
```

Bir Android Emulator, iOS Simulator veya fiziksel cihaz bağlı olmalıdır.
Çalıştırdıktan sonra ana sayfa, ürün detay sayfası ve sepet ekranından en az
birer ekran görüntüsü alarak teslim formuna/portföyünüze ekleyin.

## GitHub'a Yükleme (Teslim İçin Zorunlu)

```bash
git init
git add .
git commit -m "Mini Katalog Uygulaması - ilk sürüm"
git branch -M main
git remote add origin <public-repo-URL-buraya>
git push -u origin main
```

> Repository **public** olmalı, çalışır durumda olmalı ve bu README.md
> dosyasını içermelidir (yönerge gereği).

## Ekran Görüntüleri
`flutter run` ile uygulamayı çalıştırdıktan sonra aldığınız ekran
görüntülerini bu README'nin altına veya ayrı bir `screenshots/` klasörüne
ekleyebilirsiniz.
