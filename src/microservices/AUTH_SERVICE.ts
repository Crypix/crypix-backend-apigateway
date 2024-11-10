import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

const AUTH_SERVICE_PROVIDER = {
  provide: 'AUTH_SERVICE',
  useFactory: (configService: ConfigService) => {
    const user = configService.get('RABBITMQ_USER');
    const password = configService.get('RABBITMQ_PASSWORD');
    const host = configService.get('RABBITMQ_HOST');
    const queueName = configService.get('RABBITMQ_AUTHSERVICE_QUEUE');

    console.log(user, password, host, queueName);
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${user}:${password}@${host}`],
        queue: queueName,
        queueOptions: {
          durable: false,
        },
      },
    });
  },
  inject: [ConfigService],
};

export { AUTH_SERVICE_PROVIDER };
