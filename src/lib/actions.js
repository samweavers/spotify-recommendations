// Fetch the user's profile data from Spotify
export async function fetchTopTracks(token) {
  console.log(token)
  const result = await fetch(
    'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10&offset=0',
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    }
  )

  return await result.json()
}
