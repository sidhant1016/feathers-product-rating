import type { FromSchema } from '@feathersjs/schema';
import type { HookContext } from '../../declarations';
export declare const ratingSchema: {
    readonly $id: "Rating";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly ["id", "userId", "productId"];
    readonly properties: {
        readonly id: {
            readonly type: "number";
        };
        readonly userId: {
            readonly type: "number";
        };
        readonly productId: {
            readonly type: "number";
        };
    };
};
export type Rating = FromSchema<typeof ratingSchema>;
export declare const ratingValidator: import("@feathersjs/feathers").Hook;
export declare const ratingResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    userId: number;
    productId: number;
}, HookContext>;
export declare const ratingExternalResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    userId: number;
    productId: number;
}, HookContext>;
export declare const ratingDataSchema: {
    readonly $id: "RatingData";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly [];
    readonly properties: {
        readonly id: {
            readonly type: "number";
        };
        readonly userId: {
            readonly type: "number";
        };
        readonly productId: {
            readonly type: "number";
        };
    };
};
export type RatingData = FromSchema<typeof ratingDataSchema>;
export declare const ratingDataValidator: import("@feathersjs/feathers").Hook;
export declare const ratingDataResolver: import("@feathersjs/schema").Resolver<{
    id?: number | undefined;
    userId?: number | undefined;
    productId?: number | undefined;
}, HookContext>;
export declare const ratingPatchSchema: {
    readonly $id: "RatingPatch";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly required: readonly [];
    readonly properties: {
        readonly id: {
            readonly type: "number";
        };
        readonly userId: {
            readonly type: "number";
        };
        readonly productId: {
            readonly type: "number";
        };
    };
};
export type RatingPatch = FromSchema<typeof ratingPatchSchema>;
export declare const ratingPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const ratingPatchResolver: import("@feathersjs/schema").Resolver<{
    id?: number | undefined;
    userId?: number | undefined;
    productId?: number | undefined;
}, HookContext>;
export declare const ratingQuerySchema: {
    readonly $id: "RatingQuery";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly $limit: {
            readonly type: "number";
            readonly minimum: 0;
        };
        readonly $skip: {
            readonly type: "number";
            readonly minimum: 0;
        };
        readonly $sort: {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                readonly userId: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
                readonly productId: {
                    readonly type: "number";
                    readonly enum: [1, -1];
                };
            };
        };
        readonly $select: {
            readonly type: "array";
            readonly maxItems: number;
            readonly items: {
                readonly enum?: ("id" | "userId" | "productId")[] | undefined;
                readonly type: "string";
            };
        };
        readonly $or: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly additionalProperties: false;
                readonly properties: {
                    readonly id: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "number";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly userId: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "number";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly productId: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "number";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                };
            };
        };
        readonly $and: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly additionalProperties: false;
                readonly properties: {
                    readonly id: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "number";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly userId: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "number";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                    readonly productId: import("@feathersjs/schema").PropertyQuery<{
                        readonly type: "number";
                    }, {
                        [key: string]: import("json-schema-to-ts").JSONSchema7;
                    } | undefined>;
                } & {
                    readonly $or: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly additionalProperties: false;
                            readonly properties: {
                                readonly id: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "number";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                                readonly userId: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "number";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                                readonly productId: import("@feathersjs/schema").PropertyQuery<{
                                    readonly type: "number";
                                }, {
                                    [key: string]: import("json-schema-to-ts").JSONSchema7;
                                } | undefined>;
                            };
                        };
                    };
                };
            };
        };
        readonly id: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "number";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
        readonly userId: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "number";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
        readonly productId: import("@feathersjs/schema").PropertyQuery<{
            readonly type: "number";
        }, {
            [key: string]: import("json-schema-to-ts").JSONSchema7;
        } | undefined>;
    };
};
export type RatingQuery = FromSchema<typeof ratingQuerySchema>;
export declare const ratingQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const ratingQueryResolver: import("@feathersjs/schema").Resolver<{
    id?: number | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    $limit?: number | undefined;
    $skip?: number | undefined;
    $select?: string[] | undefined;
    $sort?: {
        [x: string]: unknown;
        id?: 1 | -1 | undefined;
        userId?: 1 | -1 | undefined;
        productId?: 1 | -1 | undefined;
    } | undefined;
    $or?: {
        id?: number | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        userId?: number | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        productId?: number | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
    }[] | undefined;
    $and?: {
        id?: number | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        $or?: {
            id?: number | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            userId?: number | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
            productId?: number | {
                [x: string]: unknown;
                [x: number]: unknown;
            } | undefined;
        }[] | undefined;
        userId?: number | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
        productId?: number | {
            [x: string]: unknown;
            [x: number]: unknown;
        } | undefined;
    }[] | undefined;
    userId?: number | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
    productId?: number | {
        [x: string]: unknown;
        [x: number]: unknown;
    } | undefined;
}, HookContext>;
