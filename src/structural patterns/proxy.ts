interface IPaymentApi {
  getPaymentDetails(id: number): IPaymentDetail | undefined;
}

interface IPaymentDetail {
  id: number;
  sum: number;
}

class PaymentAPI implements IPaymentApi {
  private data = [{id: 1, sum: 1000}];
  getPaymentDetails(id: number): IPaymentDetail | undefined {
    return this.data.find(d => d.id === id)
  }
}

class PaymentAccessProxy implements IPaymentApi {
  constructor(private api: PaymentAPI, private userId: number) {
  }
  
  getPaymentDetails(id: number): IPaymentDetail | undefined {
    if (this.userId === 1) {
      return this.api.getPaymentDetails(id)
    }
    console.log('Trying to get payment data')
    return undefined;
  }
}

const proxy = new PaymentAccessProxy(new PaymentAPI(), 1)
console.log(proxy.getPaymentDetails(1))

const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2)
console.log(proxy2.getPaymentDetails(1))