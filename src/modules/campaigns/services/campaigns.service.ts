import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CampaignI } from 'src/common/models/campaigns';
import { AxiosResponse } from 'axios';

@Injectable()
export class CampaignsService {

    // Just for example
    private readonly URL: string = 'https://jsonplaceholder.typicode.com';

    constructor(
        private http: HttpService,
    ) { }

    public getAll(): Observable<AxiosResponse<CampaignI[]>> {
        return this.http.get(`${this.URL}/posts`);
    }
}
