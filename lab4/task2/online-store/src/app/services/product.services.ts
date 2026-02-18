import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Пароочиститель atreon DFHS-01 белый, черный',
      description: 'Пароочиститель Atreon 3 в 1 — мощная уборка без химии! Универсальный помощник для дома: Пароочиститель. Отпариватель. Стеклоочиститель Подходит для полов, мебели, кухни, плитки, духовки, одежды, авто и сантехники. ',
      price: 29900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd7/p7b/97012559.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p30/p6e/97012555.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p0c/59895566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p26/pf7/70456234.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p34/p0d/59895568.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p51/p0d/59895569.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/paroochistitel-atreon-dfhs-01-belyi-chernyi-142540734/?c=750000000'
    },
    {
      id: 2,
      name: 'Аэрогриль minMAX MNF-5017 12 л черный',
      description: 'Электрический аэрогриль LIVO — современный и мощный кухонный помощник для быстрого и полезного приготовления блюд. Благодаря двум независимым камерам вы можете готовить два разных блюда одновременно, экономя время и делая процесс готовки максимально удобным.',
      price: 79890,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbd/p23/89950663.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1b/p20/89950675.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p22/p1d/89950681.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/p1c/89950687.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf3/p18/89950698.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/minmax-mnf-5017-chernyi-153169274/?c=750000000'
    },
    {
      id: 3,
      name: 'Пылесос LUMO Aqua X серый',
      description: 'Профессиональный ноутбук с чипом Apple M3, 16 ГБ unified памяти и SSD на 512 ГБ. Жидкокристаллический дисплей Retina с технологией Liquid Retina XDR.',
      price: 220000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p45/pcd/79325201.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/pcd/79325202.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/pcd/79325203.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd5/pcc/79325205.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb8/pcc/79325206.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lumo-aqua-x-seryi-148897809/?c=750000000'
    },
    {
      id: 4,
      name: 'Увлажнитель воздуха MiBaby Mi001 белый',
      description: '4K UHD Smart телевизор с диагональю 55 дюймов, поддержкой Dolby Vision и HDR10+. Частота обновления 60 Гц с технологией MEMC для плавного изображения.',
      price: 4990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p2d/8582066.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2a/p23/8582069.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p54/p2b/8582071.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p54/p2b/8582071.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p91/p35/8582074.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-mibaby-mi001-belyi-130030210/?c=750000000'
    },
    {
      id: 5,
      name: 'Отпариватель MONTERO PRO S200 розовый',
      description: 'Ищете надежного помощника для быстрой и эффективной глажки одежды? Представляем вам отпариватель MONTERO PRO S200 — идеальный выбор для тех, кто ценит качество и удобство!',
      price: 45890,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pca/pec/18583732.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf7/paf/18583733.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p61/pb3/18583734.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcb/pb6/18583735.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9e/pbd/18583737.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/otparivatel-montero-pro-s200-rozovyi-132998486/?c=750000000'
    },
    {
      id: 6,
      name: 'Пароочиститель Denx SE8620 желтый',
      description: 'Беспроводной пылесос с лазерной подсветкой, дисплеем и датчиком частиц. Мощность всасывания 230 аВт, время работы до 60 минут.',
      price: 37800,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0b/pd9/57310129.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/pd6/57310130.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p83/pd6/57310131.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p67/pd6/57310132.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/paroochistitel-denx-se8620-zheltyi-130443158/?c=750000000'
    },
    {
      id: 7,
      name: 'Отпариватель AEROLITH STEAM-01 серый, черный, розовый',
      description: 'Представляем вашему вниманию ручной отпариватель - современное решение для ухода за одеждой и текстилем в домашних условиях, в профессиональной деятельности или путешествиях. Этот мощный парогенератор сочетает в себе функции утюга и парового отпаривателя, предоставляя возможность просто и эффективно гладить и отпаривать вещи.',
      price: 13900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/p53/97764459.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6e/p76/71880757.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2f/p79/71880761.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p79/71880765.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/otparivatel-aerolith-steam-01-seryi-chernyi-rozovyi-147800146/?c=750000000'
    },
    {
      id: 8,
      name: 'Пылесос Menox R01 фиолетовый, серый',
      description: 'Menox R01 — это лёгкий и удобный пылесос для быстрой уборки «здесь и сейчас». Он станет незаменимым помощником, когда нужно быстро собрать крошки , шерсть животных или пыль в одной-двух комнатах.',
      price: 33900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p17/pd0/96953174.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe2/p7b/66840701.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc6/p7b/66840702.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p39/p7b/66840707.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/menox-r01-fioletovyi-seryi-135631137/?c=750000000'
    },
    {
      id: 9,
      name: 'Отпариватель AEROLITH Steam Garment Premium белый, бронзовый',
      description: 'Твердотельный накопитель NVMe M.2 с интерфейсом PCIe 4.0. Скорость чтения до 7000 МБ/с, записи до 5000 МБ/с. Идеально для игр и профессиональных задач.',
      price: 45990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p84/84404891.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdc/pe9/81085669.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p64/pec/81085671.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1f/p81/84404892.jpeg?format=gallery-medium'
      ],
      link: 'http://kaspi.kz/shop/p/otparivatel-aerolith-steam-garment-premium-belyi-bronzovyi-150458532/?c=750000000'
    },
    {
      id: 10,
      name: 'Кухонные весы Generic SF-400',
      description: 'Современные электронные кухонные весы имеют элегантную платформу из пластика. Весы выполнены в белом корпусе. Предел взвешивания 10 кг.',
      price: 699,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
