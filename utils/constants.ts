// TODO: Remove the following line when the following issue is resolved.
/* eslint-disable vue/max-len */
import type { Album } from "~/types";

export const musicStreamingAssetLinks = {};

export const albums: Album[] = [
  {
    id: "1",
    name: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    releaseDate: "1973-03-01",
    coverArt: "data:image/jpeg;base64,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",
    urls: {
      spotify: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv",
      appleMusic: "https://music.apple.com/us/album/1517687414",
      tidal: "https://listen.tidal.com/album/136337",
      jioSaavn: "https://www.jiosaavn.com/album/the-dark-side-of-the-moon/9L9zq9v8LZ0_",
      gaana: "https://gaana.com/album/the-dark-side-of-the-moon",
      wynk: "https://wynk.in/music/album/the-dark-side-of-the-moon/pc_EK0000001",
      youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_nQ6Z7r0s7c3X1z6g2H8DQJkH9dJ9V4vR0",
      amazonMusic: "https://music.amazon.com/albums/B07CZ3YH7B",
      deezer: "https://www.deezer.com/en/album/6608811",
      napster: "https://us.napster.com/artist/pink-floyd/album/the-dark-side-of-the-moon",
      soundcloud: "https://soundcloud.com/pinkfloyd/sets/the-dark-side-of-the-moon",
      reverbnation: "https://www.reverbnation.com/pinkfloyd/album/1517687414"
    }
  },
  {
    id: "2",
    name: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    releaseDate: "1973-03-01",
    coverArt: "data:image/jpeg;base64,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",
    urls: {
      spotify: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv",
      appleMusic: "https://music.apple.com/us/album/1517687414",
      tidal: "https://listen.tidal.com/album/136337",
      jioSaavn: "https://www.jiosaavn.com/album/the-dark-side-of-the-moon/9L9zq9v8LZ0_",
      gaana: "https://gaana.com/album/the-dark-side-of-the-moon",
      wynk: "https://wynk.in/music/album/the-dark-side-of-the-moon/pc_EK0000001",
      youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_nQ6Z7r0s7c3X1z6g2H8DQJkH9dJ9V4vR0",
      amazonMusic: "https://music.amazon.com/albums/B07CZ3YH7B",
      deezer: "https://www.deezer.com/en/album/6608811",
      napster: "https://us.napster.com/artist/pink-floyd/album/the-dark-side-of-the-moon",
      soundcloud: "https://soundcloud.com/pinkfloyd/sets/the-dark-side-of-the-moon",
      reverbnation: "https://www.reverbnation.com/pinkfloyd/album/1517687414"
    }
  }
];
