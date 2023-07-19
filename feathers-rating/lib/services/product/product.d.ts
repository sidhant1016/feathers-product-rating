import type { Application } from '../../declarations';
import { ProductService } from './product.class';
import { productPath } from './product.shared';
export * from './product.class';
export * from './product.schema';
export declare const product: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [productPath]: ProductService;
    }
}
