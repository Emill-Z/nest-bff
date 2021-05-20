import { Controller, Get, Param } from '@nestjs/common';
import { CampaignService } from '../services/campaign.service';
import { Headers, Query } from '@nestjs/common';
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

    @Get('/test')
    public async test(
        @Headers() { authorization }: Header,
        @Query() query: { postId: string },
    ): Promise<unknown[]> { // @TODO: replace unknown into correct interface. Now it is just example
        return this.campaignService.queryWithParams(query, authorization);
    }

    @Get(':id')
    public findOne(
        @Headers() { authorization }: Header,
        @Param() params: { id: number }
    ): Promise<Campaign> {
        console.log(params.id);
        return this.campaignService.findOne(authorization);
    }
}