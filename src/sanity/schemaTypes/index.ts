import { type SchemaTypeDefinition } from 'sanity'
import project from './project' // <-- Import the project schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project], // <-- Add project schema here
}
