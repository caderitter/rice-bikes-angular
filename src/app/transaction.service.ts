// service to get decks - currently plugged to mock service

import {Injectable} from '@angular/core';

import {Transaction} from './transaction';
import {Headers, Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionService {
  private Transactions: Transaction[];

  // TODO - plug into pyramid
  private TransactionsUrl = 'api/Transactions';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getTransactions(): Promise<Transaction[]> {
    return this.http.get(this.TransactionsUrl)
      .toPromise()
      .then(response => response.json().data as Transaction[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getTransaction(id: number): Promise<Transaction> {
    const url = `${this.TransactionsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Transaction)
      .catch(this.handleError);
  }

  updateTransaction(Transaction: Transaction): Promise<Transaction> {
    const url = `${this.TransactionsUrl}/${Transaction.id}`;
    return this.http
      .put(url, JSON.stringify(Transaction), {headers: this.headers})
      .toPromise()
      .then(() => Transaction)
      .catch(this.handleError);
  }

  createTransaction(name: string): Promise<Transaction> {
    return this.http
      .post(this.TransactionsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Transaction)
      .catch(this.handleError);
  }

  deleteTransaction(id: number): Promise<void> {
    const url = `${this.TransactionsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
