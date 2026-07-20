/// Ürün veri modeli.
/// JSON <-> Dart nesnesi dönüşümü için fromJson/toJson metodları içerir.
class Product {
  final int id;
  final String name;
  final String category;
  final double price;
  final String description;
  final String icon;

  const Product({
    required this.id,
    required this.name,
    required this.category,
    required this.price,
    required this.description,
    required this.icon,
  });

  /// JSON (Map) verisinden bir Product nesnesi oluşturur.
  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'] as int,
      name: json['name'] as String,
      category: json['category'] as String,
      price: (json['price'] as num).toDouble(),
      description: json['description'] as String,
      icon: json['icon'] as String,
    );
  }

  /// Product nesnesini JSON (Map) formatına çevirir.
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'category': category,
      'price': price,
      'description': description,
      'icon': icon,
    };
  }
}
