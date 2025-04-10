//для вывода товаров от нескольких поставщиков и вывести общую стоимость товара
//для древовидных структур

abstract class DeliveryItem {
  items: DeliveryItem[] = [];
  
  addItem(item: DeliveryItem) {
    this.items.push(item);
  }
  getItemsPrices(): number {
    return this.items.reduce((acc: number, i: DeliveryItem) => acc += i.getPrice(), 0)
  }
  abstract getPrice(): number;
  
}

class DeliveryShop extends DeliveryItem {
  constructor(private deliveryFee: number) {
    super();
  }
  
  getPrice(): number {
    return this.getItemsPrices() + this.deliveryFee;
  }
}

class Package extends DeliveryItem {
  getPrice(): number {
    return this.getItemsPrices()
  }
}

class Product extends DeliveryItem {
  constructor(public price: number) {
    super();
  }
  getPrice(): number {
    return this.price;
  }
}

const shop = new DeliveryShop(100)
shop.addItem(new Product(1000));
const pack1 = new Package();
pack1.addItem(new Product(200));
pack1.addItem(new Product(300));
shop.addItem(pack1);
const pack2 = new Package();
pack2.addItem(new Product(30));
shop.addItem(pack2);

console.log(shop.getPrice())