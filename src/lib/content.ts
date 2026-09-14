export const CONTENT_STORAGE_KEY = 'dialogue-content-draft';

export const CONTENT_FILES = ['site', 'painPoints', 'modules', 'plans', 'contact'] as const;

export type ContentFile = (typeof CONTENT_FILES)[number];

export type ContentBundle = Record<ContentFile, unknown>;
