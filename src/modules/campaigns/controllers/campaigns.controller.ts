import { Controller, Get } from '@nestjs/common';
import { entities } from 'src/common/mock/campaigns';
import { CampaignI } from 'src/common/models/campaigns';

@Controller('campaigns')
export class CampaignsController {
    @Get()
    getAll(): CampaignI[] {
        return entities;
    }
}