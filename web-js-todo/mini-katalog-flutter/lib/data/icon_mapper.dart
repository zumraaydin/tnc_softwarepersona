import 'package:flutter/material.dart';

/// products.json içindeki "icon" alanındaki metni, gösterim için bir
/// Material Icon'a çevirir (gerçek ürün görseli yerine basit/temsili
/// simgeler kullanılmıştır).
IconData mapProductIcon(String key) {
  switch (key) {
    case 'headphones':
      return Icons.headphones_rounded;
    case 'watch':
      return Icons.watch_rounded;
    case 'speaker':
      return Icons.speaker_rounded;
    case 'backpack':
      return Icons.backpack_rounded;
    case 'book':
      return Icons.menu_book_rounded;
    case 'candle':
      return Icons.local_fire_department_rounded;
    case 'cup':
      return Icons.coffee_rounded;
    case 'shoe':
      return Icons.directions_run_rounded;
    default:
      return Icons.shopping_bag_rounded;
  }
}
