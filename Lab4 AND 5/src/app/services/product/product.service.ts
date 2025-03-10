import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/Product';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductById(id: number) {
    return this.getAll().find(product => product.id == id);
  }

  getAllTags():Tag[] {
    return [
      { name: 'All', count: 21},
      { name: 'Phones and Gadgets', count: 5},
      { name: 'Accessories', count: 2},
      { name: 'Computers', count: 5},
      { name: 'Clothes', count: 5},
      { name: 'Home appliances', count: 6},
    ]
  }

  getAllProductsByTag(tag: string): Product[] {
    if (tag == "All") {
      return this.getAll();
    }
    else {
      return this.getAll().filter(product => product.tags?.includes(tag))
    }
  }

  getAll():Product[] {
    return [ 
      {
        id: 1,
        name: "IPhone 16 Pro",
        price: 1500,
        favorite: true,
        imageUrl: "/assets/images/product2.jpg",
        tags: ['Phones and Gadgets'],
        link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000",
        description: `The flagship iPhone 16 Pro Max combines the best features of a modern gadget. 
        This is the most productive device in the Apple iPhone line with a large-scale display, 
        amazing performance and incredible external ergonomics.`
      },
      {
        id: 2,
        name: "IPhone 13",
        price: 1000,
        favorite: false,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
        tags: ['Phones and Gadgets'],
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
        description: `The Apple iPhone 13 has received a 6.1-inch Super Retina XDR display, 
        which features incredibly high pixel density — photos, videos, and text look strikingly clear.`
      },
      {
        id: 3,
        name: "Samsung S24",
        price: 1500,
        favorite: false,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium",
        tags: ['Phones and Gadgets'],
        link: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000",
        description: `The Samsung Galaxy S24 Ultra is a flagship smartphone that combines cutting—edge technology and sophisticated design. 
        It is equipped with a powerful processor that provides excellent performance and fast execution of tasks.`
      },
      {
        id: 4,
        name: "Iphone 13 Case",
        price: 100,
        favorite: false,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h4e/h38/64367995125790.jpg?format=gallery-medium",
        tags: ['Phones and Gadgets', 'Accessories'],
        link: "https://kaspi.kz/shop/p/dlja-apple-iphone-13-chernyi-103319196/?c=750000000",
        description: `A reliable and stylish case for your smartphone, providing protection from scratches, bumps and dirt.`
      },
      {
        id: 5,
        name: "Iphone 13 Case",
        price: 100,
        favorite: true,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h42/h02/85139519209502.jpg?format=gallery-large",
        tags: ['Phones and Gadgets', 'Accessories'],
        link: "https://kaspi.kz/shop/p/santa-barbara-polo-racquet-club-dlja-apple-iphone-13-sinii-116550010/?c=750000000",
        description: `A reliable and stylish case for your smartphone, providing protection from scratches, bumps and dirt.`
      },
      {
        id: 6,
        name: "Gaming Screen",
        price: 500,
        favorite: false,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h37/hb2/85226229727262.png?format=gallery-medium",
        tags: ['Computers'],
        link: "https://kaspi.kz/shop/p/xtreon-xt2453de-chernyi-113769029/?c=750000000",
        description: `The Xtreon XT2453DE is a high-quality monitor designed to meet the needs of both professional users and gamers.`
      },
      {
        id: 7,
        name: "PC",
        price: 1500,
        favorite: false,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h6d/had/84497680269342.jpg?format=gallery-medium",
        tags: ['Computers'],
        link: "https://kaspi.kz/shop/p/lineup-newcomponents2-chernyi-114538061/?c=750000000"
      },
      {
        id: 8,
        name: "Mouse pad",
        price: 100,
        favorite: true,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/p90/p5f/19832839.jpg?format=gallery-medium",
        tags: ['Computers'],
        link: "https://kaspi.kz/shop/p/ilan-rgb800-106111650/?c=750000000",
        description: `A backlit mouse pad is a stylish and functional accessory for your desktop 
        that adds bright accents and improves the comfort of working with the mouse.`
      },
      {
        id: 9,
        name: "Gaming Mouse",
        price: 100,
        favorite: false,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium",
        tags: ['Computers'],
        link: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
        description: `Logitech G102 Light Sync wired mouse allows you to play with maximum efficiency. 
        The mouse uses a game-level sensor with 8000 dpi sensitivity, adjustable over a wide range by a separate button.`
      },
      {
        id: 10,
        name: "MacBook Air",
        price: 1500,
        favorite: true,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium",
        tags: ['Computers'],
        link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000",
        description: `The 2022 MacBook Air can be described as one of the largest line updates ever. It has completely changed its appearance, 
        received a newer and more powerful M2 processor, an improved webcam, quadraphonic surround speakers, a MagSafe 3 connector and a newer keyboard.`
      },
      {
        id: 11,
        name: "Hoodie with zipper",
        price: 100,
        favorite: true,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/p49/pb2/22786850.jpg?format=gallery-medium",
        tags: ['Clothes'],
        link: "https://kaspi.kz/shop/p/tolstovka-urban-outfit-chernyi-108392100/?c=750000000",
        description: `We present you a stylish and comfortable women's / men's oversized Unisex sweatshirt with a hood closure, 
        which will become a favorite thing for Parker and the girls.`
      },
      {
        id: 12,
        name: "Pants",
        price: 100,
        favorite: false,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/pfb/p40/17584080.jpg?format=gallery-medium",
        tags: ['Clothes'],
        link: "https://kaspi.kz/shop/p/uteplennye-brjuki-urban-outfit-chernyi-131531809/?c=750000000"
      },
      {
        id: 13,
        name: "Jacket",
        price: 100,
        favorite: false,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/p57/pa7/12420735.jpg?format=gallery-medium",
        tags: ['Clothes'],
        link: "https://kaspi.kz/shop/p/demisezonnaja-kurtka-sinii-131202734/?c=750000000"
      },
      {
        id: 14,
        name: "Hoodie",
        price: 100,
        favorite: false,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/hf1/hfa/85052980625438.jpg?format=gallery-medium",
        tags: ['Clothes'],
        link: "https://kaspi.kz/shop/p/hudi-urban-outfit-chernyi-116323262/?c=750000000"
      },
      {
        id: 15,
        name: "Jacket",
        price: 100,
        favorite: true,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h14/h88/87085812351006.jpg?format=gallery-medium",
        tags: ['Clothes'],
        link: "https://kaspi.kz/shop/p/zimnjaja-kurtka-noname-seryi-123419172/?c=750000000"
      },
      {
        id: 16,
        name: "Vacuum Cleaner",
        price: 300,
        favorite: true,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h93/hcf/63791470936094.jpg?format=gallery-medium",
        tags: ['Home appliances'],
        link: "https://kaspi.kz/shop/p/deerma-dx115c-chernyi-3701430/?c=750000000",
        description: `The Derma DX115C vertical vacuum cleaner is able to radically change your idea of dry cleaning 
        and help your household to love this process.`
      },
      {
        id: 17,
        name: "Electric Kettle",
        price: 150,
        favorite: false,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium",
        tags: ['Home appliances'],
        link: "https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000",
        description: `Modern and stylish, this electric kettle combines elegant design and advanced features for your convenience.`
      },
      {
        id: 18,
        name: "Washing Machine",
        price: 500,
        favorite: false,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium",
        tags: ['Home appliances'],
        link: "https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000",
        description: `The depth of the LG F2J3NS0W washing machine is only 44 cm, so it will fit even in a small bathroom. 
        The drum holds 6 kg of dry laundry, which is quite enough for a family of three or four people.`
      },
      {
        id: 19,
        name: "Microwave",
        price: 300,
        favorite: false,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h43/h8e/87138526363678.jpg?format=gallery-medium",
        tags: ['Home appliances'],
        link: "https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000"
      },
      {
        id: 20,
        name: "Blender",
        price: 150,
        favorite: true,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=gallery-medium",
        tags: ['Home appliances'],
        link: "https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000",
        description:  `Blender 2 in 1. Blender + chopper (coffee grinder), 3 speeds + pulse, glass flask, silver color.`
      },
      {
        id: 21,
        name: "Mixer",
        price: 150,
        favorite: true,
        imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/he4/h81/70137370968094.jpg?format=gallery-medium",
        tags: ['Home appliances'],
        link: "https://kaspi.kz/shop/p/sokany-sk-yl-21-seryi-109386761/?c=750000000"
      }
    ]
  }
}
