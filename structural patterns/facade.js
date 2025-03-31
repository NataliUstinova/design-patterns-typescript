"use strict";
//отправить уведомление send() NotificationFacade -> notification, logs, template
class Notify {
    send(template, to) {
        console.log(`Sending ${template} to ${to}`);
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class Template {
    constructor() {
        this.templates = [
            {
                name: 'other',
                template: '<h1>Template!</h1>'
            }
        ];
    }
    getByName(name) {
        return this.templates.find(t => t.name === name);
    }
}
class NotificationFacade {
    constructor() {
        this.notify = new Notify();
        this.logger = new Log();
        this.template = new Template();
    }
    send(to, templateName) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log('No template found');
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log('Template sent');
    }
}
const s = new NotificationFacade();
s.send('dsds', 'other');
