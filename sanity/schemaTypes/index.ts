import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {heroType} from './heroType'
import {serviceType} from './serviceType'
import {servicesHeaderType} from './servicesHeaderType'
import {servicesPageType} from './servicesPageType'
import {aboutType} from './aboutType'

import { testimonialsType } from './testimonialsType'

import { portfolioType } from './portfolioType'

import { faqType } from './faqType'

import { workProcessType } from './workProcessType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, heroType, serviceType, servicesHeaderType, servicesPageType, aboutType, workProcessType, testimonialsType, portfolioType, faqType],
}
