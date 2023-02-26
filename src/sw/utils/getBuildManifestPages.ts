import getBuildManifest from './getBuildManifest'

const getBuildManifestPages = (): string[] => {
  const { sortedPages, __rewrites, ...manifest } = getBuildManifest()
  console.log(sortedPages, __rewrites)

  return Object.keys(manifest).filter(url => !url.includes('/_'))
}

export default getBuildManifestPages
