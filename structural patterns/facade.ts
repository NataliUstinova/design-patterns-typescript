//отправить уведомление send() NotificationFacade -> notification, logs, template

class Notify {
  send(template: string, to: string) {
    console.log(`Sending ${template} to ${to}`)
  }
}

class Log {
  log(message: string) {
    console.log(message)
  }
}

class Template {
  private templates = [
    {
      name: 'other',
      template: '<h1>Template!</h1>'
    }
  ]
  
  getByName(name: string) {
    return this.templates.find(t => t.name === name)
  }
}

class NotificationFacade {
  private notify: Notify;
  private logger: Log;
  private template: Template;
  
  constructor() {
    this.notify = new Notify();
    this.logger = new Log();
    this.template = new Template();
  }
  send(to: string, templateName: string) {
    const data = this.template.getByName(templateName);
    if (!data) {
      this.logger.log('No template found');
      return;
    }
    this.notify.send(data.template, to)
    this.logger.log('Template sent')
  }
}

const s = new NotificationFacade()
s.send('dsds', 'other')