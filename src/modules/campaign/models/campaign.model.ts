export interface Campaign {
    campaignId: number;
    campaignCode: string;
    campaignName: string;
    description: string;
    programType: string;
    programSubtype: string;
    beginDateTime: string;
    endDateTime: string;
    campaignStatus: string;
    visibleBeforeDays: number;
    active: boolean;
    propertiesIds: number[];
    marketingRules: unknown[];
    campaignLimits: unknown[];
    campaignRestrictionPeriods: unknown[];
    extensions: unknown[];
}
