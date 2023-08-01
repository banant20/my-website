import { getTopArtists } from '../../lib/spotify'

export default async (_, res) => {
  const response = await getTopArtists()
  const { items } = await response.json()

  const artists = items.slice(0, 10).map((track) => ({
    artist: track.name,
    artistImageUrl: track.images[0].url,
    artistUrl: track.external_urls.spotify
  }))

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({ artists })
}