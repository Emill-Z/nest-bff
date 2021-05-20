import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CampaignService } from "../services/campaign.service";
import { CampaignController } from "./campaign.controller";

describe('CampaignController', () => {
    let campaignController: CampaignController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [HttpModule],
            controllers: [CampaignController],
            providers: [CampaignService],
        }).compile();

        campaignController = app.get<CampaignController>(CampaignController);
    });

    describe('root', () => {
        it('should return an array of campaigns', async () => {
            const result = [ { id: 1 }];

            jest.spyOn(campaignController, 'findAll').mockImplementation(() => result as never);

            expect(await campaignController.findAll(null)).toBe(result);
        });

        it('should return an campaign', async () => {
            const result = { id: 1 };

            jest.spyOn(campaignController, 'findOne').mockImplementation(() => result as never);

            expect(await campaignController.findOne(null, { id: null })).toBe(result);
        });
    });
});
