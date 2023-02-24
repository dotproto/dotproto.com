import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

console.log(import.meta.env);

const projectId = import.meta.env?.SANITY_STUDIO_PROJECT || '';

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId,
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});

