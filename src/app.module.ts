import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CampaignsModule } from './modules/campaigns/CampaignsModule';

@Module({
    imports: [
        CampaignsModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
