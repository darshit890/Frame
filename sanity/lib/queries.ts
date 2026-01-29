import { groq } from 'next-sanity'

export const heroQuery = groq`*[_type == "hero"][0] {
  badgeText,
  headingLine1,
  headingLine2,
  tags,
  description,
  statsProjectCount,
  statsProjectLabel,
  statsExpCount,
  statsExpLabel,
  statsCustomerCount,
  statsCustomerLabel,
  scrollingText
}`

export const servicesQuery = groq`{
  "header": *[_type == "servicesHeader"][0] {
    headingLine1,
    headingLine2,
    description
  },
  "items": *[_type == "service"] | order(_createdAt asc) {
    _id,
    title,
    "image": image.asset->url,
    "alt": image.alt,
    href
  }
}`

export const aboutQuery = groq`*[_type == "about"][0] {
  heading,
  description,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  experienceCount,
  experienceLabel,
  checklist,
  author
}`

export const workProcessQuery = groq`*[_type == "workProcess"][0] {
  subheading,
  heading,
  steps[] {
    title,
    description,
    icon
  }
}`

export const testimonialsQuery = groq`*[_type == "testimonials"][0] {
  subheading,
  heading,
  testimonials[] {
    name,
    role,
    rating,
    text,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }
}`

export const portfolioQuery = groq`*[_type == "portfolio"][0] {
  subheading,
  headingLine1,
  headingLine2,
  viewAllLink,
  projects[] {
    "_id": _key,
    title,
    "tags": tags[]->title,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    description,
    link,
    slug
  }
}`

export const recentProjectsQuery = groq`*[_type == "portfolio"][0].projects[0...4] {
  title,
  slug,
  "tags": tags[]->title,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  description
}`

export const faqQuery = groq`*[_type == "faq"][0] {
  subheading,
  heading,
  faqs[] {
    question,
    answer
  }
}`

export const achievementsQuery = groq`*[_type == "achievements"][0] {
  subheading,
  heading,
  achievements[] {
    year,
    title,
    description,
    stats,
    statsLabel
  }
}`

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  categories[]->{
    title,
    slug
  },
  publishedAt,
  body,
  description
}`

export const recentPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  categories[]->{
    title,
    slug
  },
  publishedAt,
  description
}`

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  categories[]->{
    title,
    slug
  },
  publishedAt,
  body
}`

export const categoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  slug
}`

export const projectsQuery = groq`*[_type == "portfolio"][0].projects[] {
  "_id": _key,
  title,
  slug,
  "mainImage": image {
    asset->{
      _id,
      url
    },
    alt
  },
  "categories": tags[]->{
    title,
    slug
  },
  description,
  link
}`

export const projectQuery = groq`*[_type == "portfolio"][0].projects[slug.current == $slug][0] {
  title,
  slug,
  "mainImage": image {
    asset->{
      _id,
      url
    },
    alt
  },
  "categories": tags[]->{
    title,
    slug
  },
  description,
  body,
  client,
  year,
  link
}`