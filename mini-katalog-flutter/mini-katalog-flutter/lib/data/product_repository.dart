import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import '../models/product.dart';

/// Ürün verilerini assets/data/products.json dosyasından okuyup
/// Product listesine dönüştüren basit bir repository katmanı.
///
/// Not: Gerçek bir API yerine yerel JSON asset kullanılmıştır; bu yaklaşım
/// JSON okuma / model sınıfına dönüştürme (fromJson) mantığını, ekstra bir
/// paket (http vb.) gerektirmeden göstermek amacıyla tercih edilmiştir.
class ProductRepository {
  static Future<List<Product>> fetchProducts() async {
    final String jsonString =
        await rootBundle.loadString('assets/data/products.json');
    final List<dynamic> jsonList = jsonDecode(jsonString) as List<dynamic>;
    return jsonList
        .map((item) => Product.fromJson(item as Map<String, dynamic>))
        .toList();
  }
}
