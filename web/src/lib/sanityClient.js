import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {api} from '../../../sanity/sanity.json'
const {projectId, dataset} = api
console.log('api:', api)

export const client = sanityClient({
  projectId,
  dataset,
  apiVersion: '2021-10-21',
  useCdn: false
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}
