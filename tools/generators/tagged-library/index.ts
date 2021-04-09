import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { wrapAngularDevkitSchematic } from '@nrwl/devkit/ngcli-adapter';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { libraryGenerator as backendLibraryGenerator } from '@nrwl/nest';

import { TaggedLibrarySchemaOptions } from './schema';

function getTags(schema: TaggedLibrarySchemaOptions): string {
  return `type:${schema.type},scope:${schema.scope},platform:${schema.platform}`;
}

function getLibraryGenerator(schema: TaggedLibrarySchemaOptions) {
  if (schema.platform === 'node') return backendLibraryGenerator;
  if (schema.platform === 'web')
    return wrapAngularDevkitSchematic('@nrwl/angular', 'library');
  return libraryGenerator;
}

export default async function (host: Tree, schema: TaggedLibrarySchemaOptions) {
  const libGenerator = getLibraryGenerator(schema);
  await libGenerator(host, { ...schema, tags: getTags(schema) });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
