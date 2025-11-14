import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customers/customers.entity';
import { Product } from './products/products.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, // padrão
      username: 'root',
      password: '',
      database: 'curso',
      entities:[Product,Customer],
      synchronize: true  // importante! false em produção
    
    }),
    ProductsModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
