import { Component } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { CreditcardsService } from '../../services/creditcards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

  creditCardDetails!: CreditCard;
  creditCardId!: Number;

  constructor(private creditCardsServise: CreditcardsService,
    private router: ActivatedRoute) {

      this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || '');

    this.creditCardsServise.getCreditCardById(this.creditCardId).subscribe((data: CreditCard) => {
      this.creditCardDetails = data;
    })
  }
}
