import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {projectType} from './projectType'
import {heroType} from './heroType'
import {serviceType} from './serviceType'
import {servicesHeaderType} from './servicesHeaderType'
import {aboutType} from './aboutType'

import { testimonialsType } from './testimonialsType'

import { portfolioType } from './portfolioType'

import { faqType } from './faqType'

import { achievementsType } from './achievementsType'
import { workProcessType } from './workProcessType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, heroType, serviceType, servicesHeaderType, aboutType, workProcessType, testimonialsType, portfolioType, faqType, achievementsType],
}
