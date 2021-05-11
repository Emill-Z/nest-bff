import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CampaignModule } from './modules/campaign/campaign-module';

@Module({
    imports: [
        CampaignModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
