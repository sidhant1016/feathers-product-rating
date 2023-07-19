import Joi from 'joi';
export declare const ratingSchema: Joi.ObjectSchema<any>;
export declare const getratingSchema: Joi.ObjectSchema<any>;
export declare const ratingValidation: import("@feathersjs/feathers").Hook;
export declare const joiOptions: {
    errors: {
        wrap: {
            label: string;
        };
    };
    convert: boolean;
    abortEarly: boolean;
};
export declare const joiReadOptions: {
    getContext(context: {
        params: {
            query: any;
        };
    }): any;
    setContext(context: {
        params: {
            query: any;
        };
    }, newValues: any): void;
    convert: boolean;
    abortEarly: boolean;
};
