const SITE_URL = 'https://gravel-bikes.jmorrison.workers.dev'
const SITE_NAME = 'GravelRig'

export function seo({
  title,
  description,
  keywords,
  image,
  path,
}: {
  title: string
  description?: string
  keywords?: string
  image?: string
  path?: string
}) {
  const url = path ? `${SITE_URL}${path}` : undefined

  const tags = [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: image },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:url', content: url },
  ]

  return tags.filter((tag) => {
    if ('content' in tag) return !!tag.content
    return true
  })
}

export function seoLinks({ path }: { path?: string } = {}) {
  const links: Array<{ rel: string; href: string }> = []
  if (path) {
    links.push({ rel: 'canonical', href: `${SITE_URL}${path}` })
  }
  return links
}
