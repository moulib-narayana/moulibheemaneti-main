export interface Album {
  id: number;
  name: string;
  artist: string;
  featuredArtists?: string[];
  releaseDate: Date;
  coverArt: string;
  urls?: MusicStreamingService;
}

export interface MusicStreamingService {
  spotify?: string;
  appleMusic?: string;
  tidal?: string;
  jioSaavn?: string;
  gaana?: string;
  wynk?: string;
  youtubeMusic?: string;
  amazonMusic?: string;
  deezer?: string;
  napster?: string;
  soundcloud?: string;
  reverbnation?: string;
}
