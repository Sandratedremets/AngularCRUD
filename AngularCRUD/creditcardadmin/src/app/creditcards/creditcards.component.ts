import { Component, ViewChild, viewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

const TABLE_DATA: CreditCard[] = [
  {
    id: 1,
    name: 'Bank of America',
    description: "Bank of America offers customers with various options",
    bankName: "Bank of America",
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Following are the terms and conditions',
    createdDate: '2023-31-08',
    updatedDate: '2023-31-08'
  },
  {
    id: 2,
    name: 'Chase - Platinum Card',
    description: "Chase Bank offers customers with variety of options",
    bankName: "Chase Bank",
    maxCredit: 5000,
    interestRate: 15,
    active: true,
    recommendedScore: '200-400',
    annualFee: 4,
    termsAndConditions: 'Following are the terms and conditions',
    createdDate: '2025-21-05',
    updatedDate: '2025-21-05'
  },
  {
    id: 3,
    name: 'Bank of Greece',
    description: "Bank of Greece offers customers with variety of options",
    bankName: "Bank of Greece",
    maxCredit: 9000,
    interestRate: 30,
    active: false,
    recommendedScore: '65-123',
    annualFee: 16,
    termsAndConditions: 'Following are the terms and conditions',
    createdDate: '2011-11-03',
    updatedDate: '2011-11-03'
  }
];

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrl: './creditcards.component.scss'
})
export class CreditcardsComponent {
  displayColumns = ["select", "id", "name", "description", "bankName", "maxCredit", "interestRate", "active", "recommendedScore", ]

  dataSource = new MatTableDataSource(TABLE_DATA);

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectionHandler(row: CreditCard) {
    this.selection.toggle(row as never);
  }

}
