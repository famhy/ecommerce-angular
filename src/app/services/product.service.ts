import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  shoppingCard: any[] = [
    {
      id: 1,
      name: 'PC Portable Lenovo IdeaPad Gaming 3',
      image:
        'https://www.tunisianet.com.tn/374925-home/pc-portable-lenovo-ideapad-gaming-3-ryzen-5-5500h-rtx-2050-4g-16-go-512-go-ssd-noir.jpg',
      description: `Écran 15.6" Full HD (1 920 x 1 080), IPS antireflet - Processeur AMD Ryzen 5 5500H, (jusqu'à 4.2 GHz, 10 Mo de mémoire cache) - Mémoire 16 Go DDR4 - Disque SSD M.2 NVMe 512 Go - Carte graphique NVIDIA GeForce RTX 2050, 4 Go de mémoire GDDR6 dédiée - 2x Haut-parleurs Enceintes stéréo 2W - Caméra HD 720p - Clavier Rétroéclairage blanc - Wi-Fi 6 - Bluetooth 5.1 - 1x Ethernet (RJ-45) - 1x HDMI 2.0 - 1x prise combo casque/microphone (3.5 mm) - 1x USB-C 3.2 - 2x USB 3.2  - Couleur Noir - Garantie 1 an`,
      price: 1969.0,
      quantity: 1,
    },
  ];

  constructor() {}

  getShoppingCard(): Observable<any[]> {
    return of(this.shoppingCard);
  }

  addToShoppingCard(item: any): Observable<any> {
    let index = this.shoppingCard.findIndex((el) => {
      console.log();

      return item.id === el.id;
    });

    if (index == -1) {
      item.quantity = 1;
      this.shoppingCard.push(item);
    }
    {
      this.shoppingCard[index].quantity++;
    }
    return of(item);
  }

  removeFromShoppingCard(item: any): Observable<any[]> {
    this.shoppingCard = this.shoppingCard.filter((el) => {
      return el.id !== item.id;
    });

    return of(this.shoppingCard);
  }
}
