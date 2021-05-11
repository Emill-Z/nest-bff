import { HttpModule, Module } from '@nestjs/common';
import { CampaignController } from './controller/campaign.controller';
import { CampaignService } from './services/campaign.service';

@Module({
    imports: [
        HttpModule,
    ],
    controllers: [CampaignController],
    providers: [
        CampaignService,
    ]
})
export class CampaignModule {}
