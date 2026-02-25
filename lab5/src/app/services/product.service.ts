import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Игровые консоли' }
  ];

  private products: Product[] = [
    { id: 1, categoryId: 1, name: 'iPhone 15 Pro', description: 'Титановый корпус, чип A17 Pro.', price: 545000, rating: 4.9, likes: 0, image: 'https://images.kz.prom.st/231269382_w640_h640_iphone-15-pro.jpg', images: ['https://images.kz.prom.st/231269382_w640_h640_iphone-15-pro.jpg'], link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-chernyi-113138182/' },
    { id: 2, categoryId: 1, name: 'Samsung Galaxy S24 Ultra', description: 'Galaxy AI, камера 200 Мп.', price: 510000, rating: 4.8, likes: 0, image: 'https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2401/gallery/kz-ru-galaxy-s24-s928-sm-s928bztqskz-539328246', images: ['https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2401/gallery/kz-ru-galaxy-s24-s928-sm-s928bztqskz-539328246'], link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116043556/' },
    { id: 3, categoryId: 1, name: 'Google Pixel 8 Pro', description: 'Лучшая камера от Google.', price: 420000, rating: 4.7, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/h67/84042299539486.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h91/h67/84042299539486.jpg'], link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-128-gb-chernyi-113570624/' },
    { id: 4, categoryId: 1, name: 'Xiaomi 14 Ultra', description: 'Оптика Leica, супер быстрая зарядка.', price: 480000, rating: 4.6, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/hb1/85532296413214.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h4f/hb1/85532296413214.jpg'], link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-chernyi-117855018/' },
    { id: 5, categoryId: 1, name: 'OnePlus 12', description: 'Мощный процессор и отличный экран.', price: 380000, rating: 4.8, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/he5/84992644251678.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h8c/he5/84992644251678.jpg'], link: 'https://kaspi.kz/shop/p/oneplus-12-16-gb-512-gb-chernyi-116065586/' },

    { id: 6, categoryId: 2, name: 'MacBook Air 13 M2', description: 'Тонкий, легкий, бесшумный.', price: 495000, rating: 4.9, likes: 0, image: 'https://it-max.kz/image/catalog/Apple/macbook/m2-air-space.jpg', images: ['https://it-max.kz/image/catalog/Apple/macbook/m2-air-space.jpg'], link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-apple-m2-10-core-gpu-temno-sinii-105533532/' },
    { id: 7, categoryId: 2, name: 'MacBook Pro 14 M3', description: 'Для профессионалов.', price: 850000, rating: 5.0, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h62/84379769307166.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h62/84379769307166.jpg'], link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-8-gb-ssd-512-gb-apple-m3-chernyi-114389146/' },
    { id: 8, categoryId: 2, name: 'ASUS ROG Zephyrus G14', description: 'Игровой монстр в компактном корпусе.', price: 720000, rating: 4.7, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h23/81347690627102.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/hbe/h23/81347690627102.jpg'], link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga402xv-n2022-90nr0df1-m00320-seryi-110996884/' },
    { id: 9, categoryId: 2, name: 'Dell XPS 13', description: 'Лучший Windows ультрабук.', price: 650000, rating: 4.6, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h90/h8f/64463445852190.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h90/h8f/64463445852190.jpg'], link: 'https://kaspi.kz/shop/p/dell-xps-13-9315-13-3-8-gb-ssd-256-gb-win-11-pro-9315-4606-sinii-107052569/' },
    { id: 10, categoryId: 2, name: 'Lenovo Legion 5', description: 'Надежный игровой ноутбук.', price: 580000, rating: 4.8, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/ha6/h4d/84705030209566.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/ha6/h4d/84705030209566.jpg'], link: 'https://kaspi.kz/shop/p/lenovo-legion-5-15iah7h-82rb00fkrs-seryi-115291414/' },

    { id: 11, categoryId: 3, name: 'AirPods Pro 2', description: 'Шумоподавление и USB-C.', price: 115000, rating: 4.9, likes: 0, image: 'https://it-max.kz/image/catalog/Apple/airpods/airpods-pro-2-type-c.jpg', images: ['https://it-max.kz/image/catalog/Apple/airpods/airpods-pro-2-type-c.jpg'], link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-magsafe-case-usb-c-belyi-113391986/' },
    { id: 12, categoryId: 3, name: 'Sony WH-1000XM5', description: 'Лучшие полноразмерные наушники.', price: 160000, rating: 4.9, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h65/64381223239710.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h65/64381223239710.jpg'], link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105221466/' },
    { id: 13, categoryId: 3, name: 'Marshall Major IV', description: '80 часов работы.', price: 65000, rating: 4.8, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h2b/64103606026270.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h20/h2b/64103606026270.jpg'], link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-101138096/' },
    { id: 14, categoryId: 3, name: 'Bose QuietComfort Ultra', description: 'Комфорт и тишина.', price: 180000, rating: 4.7, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h92/84232398536734.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h68/h92/84232398536734.jpg'], link: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-chernyi-113824982/' },
    { id: 15, categoryId: 3, name: 'Galaxy Buds3 Pro', description: 'Инновационный дизайн от Samsung.', price: 95000, rating: 4.5, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h12/86657962639390.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h93/h12/86657962639390.jpg'], link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds3-pro-serebristyi-121544976/' },

    { id: 16, categoryId: 4, name: 'PS5 Slim', description: '1 ТБ памяти и 4K гейминг.', price: 245000, rating: 5.0, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h70/84518063374366.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h7d/h70/84518063374366.jpg'], link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-115044632/' },
    { id: 17, categoryId: 4, name: 'Xbox Series X', description: 'Самый мощный Xbox.', price: 255000, rating: 4.9, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/hb3/63897486884894.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h9b/hb3/63897486884894.jpg'], link: 'https://kaspi.kz/shop/p/xbox-series-x-chernyi-100720412/' },
    { id: 18, categoryId: 4, name: 'Nintendo Switch OLED', description: 'Лучшая портативная консоль.', price: 165000, rating: 4.9, likes: 0, image: 'https://it-max.kz/image/catalog/Nintendo/switch-oled-white.jpg', images: ['https://it-max.kz/image/catalog/Nintendo/switch-oled-white.jpg'], link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-chernyi-102551408/' },
    { id: 19, categoryId: 4, name: 'Steam Deck 512GB', description: 'ПК игры в кармане.', price: 290000, rating: 4.8, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/hbe/64420807082014.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h11/hbe/64420807082014.jpg'], link: 'https://kaspi.kz/shop/p/valve-steam-deck-512-gb-chernyi-106560944/' },
    { id: 20, categoryId: 4, name: 'PS Portal', description: 'Удаленная игра для вашей PS5.', price: 110000, rating: 4.4, likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/h85/84451044458526.jpg', images: ['https://resources.cdn-kaspi.kz/img/m/p/h87/h85/84451044458526.jpg'], link: 'https://kaspi.kz/shop/p/sony-playstation-portal-belyi-114441093/' }
  ];

  getCategories() { return this.categories; }
  getProducts() { return this.products; }
}
