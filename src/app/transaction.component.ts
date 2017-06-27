import {Component, OnInit} from "@angular/core";
import {Transaction} from "./Transaction";
import {TransactionService} from "./Transaction.service";
import {Router} from "@angular/router";

@Component({
  selector: 'transactions',
  templateUrl: './static/transactions.component.html',
})

export class TransactionsComponent implements OnInit {

  transactions: Transaction[];

  constructor(
    private transactionService: TransactionService,
    private router: Router,
  ) {}

  // gets transactions from the Transaction service
  getTransactions(): void {
    this.transactionService.getTransactions().then(transactions => this.transactions = transactions);
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  addTransaction(): void {
    this.transactionService.createTransaction("New Transaction")
      .then(transaction => {
        this.transactions.push(transaction);
        this.router.navigate(['/transaction-detail/' + transaction.id]);
      });
  }

  addItemToTransaction(itemID): void {
    
  }

}
