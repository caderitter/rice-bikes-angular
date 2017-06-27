import {Repair} from "./repair";
import {Item} from "./item";
export class Transaction {

  constructor(
    public id: number,
    public customer: string,
    public bike: string,
    public repairs: Repair[],
    public items: Item[],
  ) {}

  public isRepairTransaction(): boolean {
    return !!this.repairs;
  }

}
