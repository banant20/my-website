import { getTopTracksShort } from '../../lib/spotify'

export default async (_, res) => {
  const response = await getTopTracksShort()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track) => ({
    title: track.name,
    artist: track.artists[0].name,
    trackImageUrl: track.album.images[0].url,
    songUrl: track.album.external_urls.spotify
  }))

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({ tracks })
}