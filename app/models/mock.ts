export interface MockLite {
    uid: string;
    title: string;
}

export class Mock implements MockLite {
    uid: string;
    title: string;
    mockUrl: string;
    responseStatusCode: number;
    responseMediaType: string;
    responseCustomHeaders: string;
    headers: { [key:string]:string; };
    responseBody: string;
    responseEncoding: string;
    requestMethod: string;
    requestMediaType: string;
    requestUrlSuffixRegExp: string;
    requestBodyRegExp: string;
    enabled: boolean;
    projectUid: string;
    version: number;
}
