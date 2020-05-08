import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

export const httpPostOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json',
        })
};

// export const apiBaseUrl = '/api';
export const apiBaseUrl = environment.backend.baseURL;

