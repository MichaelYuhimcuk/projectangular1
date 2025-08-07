import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor() {}

  getInfo() {
    return {
      date: '07.08.2025',
      name: 'Юхимчук Микола',
      topic: 'Сервіси в Angular (Практична робота №1)'
    };
  }
}
