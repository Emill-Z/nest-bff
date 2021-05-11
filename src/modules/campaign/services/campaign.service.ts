import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Campaign } from 'src/common/models/campaign';
import { AxiosResponse } from 'axios';

@Injectable()
export class CampaignService {

    // Just for example
    private readonly URL: string = 'https://jsonplaceholder.typicode.com';

    constructor(
        private http: HttpService,
    ) { }

    public getAll(): Observable<AxiosResponse<Campaign[]>> {
        return this.http.get(`${this.URL}/posts`);
    }
}
