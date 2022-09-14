export default interface SelfManagement {
    lastStep: number;
    stepSelected: number;
    previous?: number;
    personalInformation?: PersonalInformation;
    identification?: Identification;
    document?: Document;
    revenues?: Revenues;
    signature?: Signature;
}

export interface PersonalInformation {
    name: string;
}

export interface Identification {
    cardIdentification: number;
}

export interface Document {
    documentName: string;
}

export interface Revenues {
    name: string;
}

export interface Signature {
    name: string;
}