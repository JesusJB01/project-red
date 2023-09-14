
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../utils/configSanity'

/* transforma las imagenes de la api */
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}