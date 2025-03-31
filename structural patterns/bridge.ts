//мост: пример микросервис для доставки уведомлений в разные мессенджеры и разных типов
//упрощение комбинаций
interface IProvider {
  sendMessage(message: string): void;
  connect(config: string): void;
  disconnect(): void;
}

class TelegramProvider implements IProvider {
  connect(config: string): void {
    console.log(config)
  }

  disconnect(): void {
    console.log('Disconnect TG')
  }

  sendMessage(message: string): void {
    console.log(message)
  }
}

class WhatsappProvider implements IProvider {
  connect(config: string): void {
    console.log(config)
  }

  disconnect(): void {
    console.log('Disconnect WA')
  }

  sendMessage(message: string): void {
    console.log(message)
  }
}

class NotificationSender {
  constructor(private provider: IProvider) {
  }
  
  send() {
    this.provider.connect('connect')
    this.provider.sendMessage('message')
    this.provider.disconnect()
  }
}

class DelaNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider);
  }
  sendDelayed() {
  }
}

const sender = new NotificationSender(new TelegramProvider())
sender.send()

const sender3 = new NotificationSender(new WhatsappProvider())
sender3.send()