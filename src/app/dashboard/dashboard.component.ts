import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cardName: string = '';
  cardImage: string = '';
  cardStrength: number = 0;
  cardIntelligence: number = 0;
  cardBeauty: number = 0;
  cardList: any[] = [];

  showNameWarning: boolean = false;
  showAttributesWarning: boolean = false;
  showMissingNameWarning: boolean = false;
  showMissingImageWarning: boolean = false;

  ngOnInit(): void {
    this.loadCardList();
  }

  createCard(): void {
    this.showNameWarning = false;
    this.showAttributesWarning = false;
    this.showMissingNameWarning = false;
    this.showMissingImageWarning = false;

    if (this.cardName.length > 10) {
      this.showNameWarning = true;
      return;
    }

    if (!this.cardName) {
      this.showMissingNameWarning = true;
      return;
    }

    if (!this.cardImage) {
      this.showMissingImageWarning = true;
      return;
    }

    const totalAttributes = this.cardStrength + this.cardIntelligence + this.cardBeauty;
    if (totalAttributes > 21) {
      this.showAttributesWarning = true;
      return;
    }

    const newCard = {
      name: this.cardName,
      image: this.cardImage,
      strength: this.cardStrength,
      intelligence: this.cardIntelligence,
      beauty: this.cardBeauty
    };
    this.cardList.push(newCard);

    this.cardName = '';
    this.cardImage = '';
    this.cardStrength = 0;
    this.cardIntelligence = 0;
    this.cardBeauty = 0;

    this.saveCardList();
  }

  saveCardList(): void {
    localStorage.setItem('cardList', JSON.stringify(this.cardList));
  }

  loadCardList(): void {
    const storedCardList = localStorage.getItem('cardList');
    if (storedCardList) {
      this.cardList = JSON.parse(storedCardList);
    }
  }
}