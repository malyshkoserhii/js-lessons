"use strict";

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    if (amount > 0) {
      this.transactions.amount = amount;
    }

    if (this.amount = this.deposit(amount)) {
    //   this.type = Transaction.DEPOSIT;
      //   this.transactions.push({
      //     amount: this.deposit(amount),
      //     type: Transaction.DEPOSIT,
      //   });
        return `Ваш рахунок поповнено на: ${amount} грн.; Тип транзакції: ${type}`;
    }

    return `Транзакція не відбулася`;
  },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if (amount > 0) {
      this.createTransaction();
      //   return this.createTransaction(this.amount);
      //   return `Ваш рахунок поповнено на ${amount} грн.`;
    }
  },
};

// console.log(account.createTransaction(100, "deposit"));
console.log(account.transactions);
console.log(account.deposit(50));
