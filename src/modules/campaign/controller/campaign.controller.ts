import { Controller, Get, Param } from '@nestjs/common';
import { CampaignService } from '../services/campaign.service';
import { Headers } from '@nestjs/common';
import { Campaign } from '../models/campaign.model';
import { Header } from 'src/common/models/headers';

@Controller('campaigns')
export class CampaignController {

    constructor(
        private readonly campaignService: CampaignService,
    ) { }

    @Get()
    public async findAll(@Headers() { authorization }: Header): Promise<Campaign[]> {
        return this.campaignService.findAll(authorization);
    }

    @Get(':id')
    public findOne(
        @Headers() { authorization }: Header,
        @Param() params: { id: number }
    ): Promise<Campaign> {
        return this.campaignService.findOne(params.id, authorization);
    }
}