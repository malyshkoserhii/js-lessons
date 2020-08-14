"use strict";

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    if (amount > 0) {
      this.transactions.amount = amount;
      this.balance = this.transactions.amount;
    }
    if (type === "deposit") {
      this.transactions.type = "deposit";
      this.transactions.push({
        amount: this.balance,
        type: Transaction.DEPOSIT,
      });
    }
    if (type === "withdraw") {
      this.transactions.type = "withdraw";
      this.transactions.push({
        amount: this.balance,
        type: Transaction.WITHDRAW,
      });
    }
    return `Balance: ${this.balance}; Type of transaction: ${type}`;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    let total = 0;
    if (this.transactions.length > 0) {
      for (const item of this.transactions) {
        // console.log(item);
        total += item.amount;
      }
    }
    this.balance = total;
    return `На вашому балансі: ${this.balance} грн.`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;

    for (let i = 0; i < this.transactions.length; i += 1) {
      // console.log(this.transactions[i].amount);
      if (this.transactions[i].type === 'deposit') {
        total += this.transactions[i].amount;
        return total;
      }
    }
  },
};

// console.table(account.createTransaction(50, 'withdraw'));
// console.table(account.createTransaction(50, 'withdraw'));
// console.table(account.createTransaction(50, 'withdraw'));

console.table(account.createTransaction(100, "deposit"));
console.table(account.createTransaction(250, 'deposit'));
// console.table(account.createTransaction(550, 'deposit'));
// console.table(account.createTransaction(150, 'deposit'));

console.log(account.getBalance());

// console.log(account.getTransactionTotal("deposit"));
