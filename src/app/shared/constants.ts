import { HttpHeaders } from '@angular/common/http';

export const httpPostOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
};

export const apiBaseUrl = '/api';
