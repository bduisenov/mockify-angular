export interface HttpParams {
    httpMethods: string[];
    httpStatuses: { [key:number]:string; };
    httpMediaTypes: string[];
    encodings: string[];
}