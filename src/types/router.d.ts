import 'vue-router';
import type { ElementType } from './app';

declare module 'vue-router' {
    interface RouteMeta {
        breadcrumbName?: string,
        elementType?: ElementType,
    }
};