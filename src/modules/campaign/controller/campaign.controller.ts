import { Controller, Get, Param } from '@nestjs/common';
import { CampaignService } from '../services/campaign.service';
import { Headers, Query } from '@nestjs/common';
import { getBearerToken } from 'src/common/utils/headers/headers-tools';
import { Campaign } from '../models/campaign.model';

@Controller('campaigns')
export class CampaignController {

    constructor(
        private readonly campaignService: CampaignService,
    ) { }

    @Get()
    public async findAll(@Headers('Authorization') auth: string): Promise<Campaign[]> {
        return this.campaignService.findAll(getBearerToken(auth));
    }

    @Get('/test')
    public async test(
        @Headers('Authorization') auth: string,
        @Query() query: { postId: string },
    ): Promise<unknown[]> { // @TODO: replace unknown into correct interface. Now it is just example
        return this.campaignService.queryWithParams(query, getBearerToken(auth));
    }

    @Get(':id')
    public findOne(
        @Headers('Authorization') auth: string,
        @Param() params: { id: number }
    ): Promise<Campaign> {
        console.log(params.id);
        return this.campaignService.findOne(getBearerToken(auth));
    }
}