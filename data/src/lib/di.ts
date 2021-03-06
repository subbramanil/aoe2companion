
export enum SERVICE_NAME {
    HOST_SERVICE = 'HOST_SERVICE',
    HTTP_SERVICE = 'HTTP_SERVICE',
}

interface IServiceDict {
    [key: string]: any;
}

const services: IServiceDict = {

};

export function getService(name: SERVICE_NAME) {
    if (!(name in services)) throw Error('Service ' + name + ' not found.');
    return services[name];
}

export function registerService(name: SERVICE_NAME, service: any) {
    if (name in services) throw Error('Service ' + name + ' already registered.');
    services[name] = service;
}


