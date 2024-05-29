import { Component } from '@angular/core';
import { CreditcardsService } from '../../services/creditcards.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {

  creditCardId: Number;

  constructor(private router: ActivatedRoute,
    private route: Router,
    private creditcardsService: CreditcardsService) {
      this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || '');

      // Delete Functionality
      this.creditcardsService.deleteCreditCard(this.creditCardId).subscribe(data => {
        alert("Deleted the credit card");
        this.route.navigate(['/creditcards']);
      })
  }
}
