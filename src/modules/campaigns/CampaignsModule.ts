import { Module } from '@nestjs/common';
import { CampaignsController } from './controllers/campaigns.controller';

@Module({
    controllers: [CampaignsController],
})
export class CampaignsModule {}
