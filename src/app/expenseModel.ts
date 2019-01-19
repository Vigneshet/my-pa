export class Expense{
    name:string;
    category:string[];
    data:Spending;
}

export class Spending{
    total:string;
    spent:UnitSpend[];
}

export class UnitSpend{
    amount:string;
    category:string;
    details:string;
}