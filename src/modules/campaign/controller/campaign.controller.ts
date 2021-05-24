import { Controller, Get, Param, Query } from '@nestjs/common';
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
    public async findAll(
        @Headers() { authorization }: Header,
        @Query() query: Record<string, unknown>,
    ): Promise<Campaign[]> {
        return this.campaignService.findAll(query, authorization);
    }

    @Get(':id')
    public findOne(
        @Headers() { authorization }: Header,
        @Param() params: { id: number }
    ): Promise<Campaign> {
        return this.campaignService.findOne(params.id, authorization);
    }
}