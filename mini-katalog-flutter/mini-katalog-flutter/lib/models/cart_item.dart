import 'product.dart';

/// Sepetteki tek bir satırı (ürün + adet) temsil eder.
class CartItem {
  final Product product;
  int quantity;

  CartItem({required this.product, this.quantity = 1});

  double get subtotal => product.price * quantity;
}
