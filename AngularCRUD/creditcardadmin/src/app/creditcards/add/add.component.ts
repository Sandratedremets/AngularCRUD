import { Component } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { CreditcardsService } from '../../services/creditcards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  constructor(private creditcardsService:CreditcardsService,
    private router: Router) {

  }

  newCreditCard: CreditCard = {
    id: undefined,
    name: "",
    description: "",
    bankName: "",
    maxCredit: 5000,
    interestRate: 12,
    active: true,
    recommendedScore: "100-500",
    annualFee: 12,
    termsAndConditions: "Terms and conditions for the credit card",
    createdDate: Date(),
    updatedDate: Date()
  }

  saveCreditCard(){
    console.log("Form Submitted");
    this.creditcardsService.createCreditCard(this.newCreditCard).subscribe(data => {
      alert("Credit Card Added");
      this.router.navigate(['creditcards']);
    })
  }
}
