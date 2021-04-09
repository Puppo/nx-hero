export type TaggedLibrarySchemaOptions = {
  name: string;
  type: 'data-access' | 'feature' | 'ui' | 'util';
  scope: 'shared' | string;
  platform: 'web' | 'node' | 'any';
  directory?: string;
  prefix?: string | null;
};
