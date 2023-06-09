import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { CatsModule } from './cats/cats.module';
import { CountService } from './count/count.service';
import { CountModule } from './count/count.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:qwer1234@cluster0.zcxdyj2.mongodb.net/Cat?retryWrites=true&w=majority'), CatsModule, CountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
