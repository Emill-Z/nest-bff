import { HttpModule, Module } from '@nestjs/common';
import { CampaignsController } from './controllers/campaigns.controller';
import { CampaignsService } from './services/campaigns.service';

@Module({
    imports: [
        HttpModule,
    ],
    controllers: [CampaignsController],
    providers: [
        CampaignsService,
    ]
})
export class CampaignsModule {}
