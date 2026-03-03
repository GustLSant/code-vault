export type ElementType = 'library' | 'module' | 'component';

export type Library = 'godot' | 'vue' | 'general';

export type Theme = 'light' | 'dark';

export type Requirement = {
    name: string,
    version: string,
}