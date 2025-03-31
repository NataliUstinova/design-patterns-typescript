"use strict";
class TelegramProvider {
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('Disconnect TG');
    }
    sendMessage(message) {
        console.log(message);
    }
}
class WhatsappProvider {
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('Disconnect WA');
    }
    sendMessage(message) {
        console.log(message);
    }
}
class NotificationSender {
    constructor(provider) {
        this.provider = provider;
    }
    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}
class DelaNotificationSender extends NotificationSender {
    constructor(provider) {
        super(provider);
    }
    sendDelayed() {
    }
}
const sender = new NotificationSender(new TelegramProvider());
sender.send();
const sender3 = new NotificationSender(new WhatsappProvider());
sender3.send();
