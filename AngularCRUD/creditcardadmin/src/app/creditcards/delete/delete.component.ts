import { Component } from '@angular/core';
import { CreditcardsService } from '../../services/creditcards.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {

  creditCardId: Number;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private router: ActivatedRoute,
    private route: Router,
    private matSnackBar: MatSnackBar,
    private creditcardsService: CreditcardsService) {
    this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || ''
    );
    // Delete Functionality
    this.creditcardsService.deleteCreditCard(this.creditCardId)
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {
        this.showSuccessMessage("Credit Card Deleted Successfully")
      this.route.navigate(['/creditcards']);
    })
  }

  showSuccessMessage(message:string) {
    this.matSnackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
