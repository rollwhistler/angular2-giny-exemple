export interface ReadingServiceInterface{
    time: Date;
    temperature: number;
    rain_probability: number;
}

export interface ServiceInfoInterface {
    name: string;
    readings: ReadingServiceInterface[];
}

export interface JsonModelInterface {
    services: ServiceInfoInterface[];
}
  
export class JsonModel implements JsonModelInterface {
    "services": ServiceInfoInterface[];

    constructor(data?: ServiceInfoInterface[]) {
        Object.assign(this, {services: data});
    }
}  