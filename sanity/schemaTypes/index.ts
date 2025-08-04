import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { skillsType } from './skillsType'
import { projectType } from './projectType'
import { AchievementType } from './AchievementType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType,skillsType,projectType,AchievementType],
}
