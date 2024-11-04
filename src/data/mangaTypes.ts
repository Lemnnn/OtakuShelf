export interface MangaResponse {
  result: string;
  response: string;
  data: Manga;
}

export interface Manga {
  id: string;
  type: string;
  attributes: MangaAttributes;
  relationships?: Relationship[];
}

export interface MangaAttributes {
  title: MangaTitle;
  altTitles: AltTitle[];
  description: MangaDescription;
  isLocked: boolean;
  links: MangaLinks;
  originalLanguage: string;
  lastVolume: string | null;
  lastChapter: string | null;
  publicationDemographic: string;
  status: string;
  year: number;
  contentRating: string;
  tags: Tag[];
  state: string;
  chapterNumbersResetOnNewVolume: boolean;
  createdAt: string;
  updatedAt: string;
  version: number;
  availableTranslatedLanguages: string[];
  latestUploadedChapter: string;
}

export interface MangaTitle {
  en: string;
}

export interface AltTitle {
  en?: string;
  ja?: string;
  "pt-br"?: string;
  vi?: string;
}

export interface MangaDescription {
  en: string;
  ja: string;
  "pt-br": string;
}

export interface MangaLinks {
  al?: string;
  ap?: string;
  bw?: string;
  kt?: string;
  mu?: string;
  amz?: string;
  cdj?: string;
  ebj?: string;
  mal?: string;
  raw?: string;
}

export interface Tag {
  id: string;
  type: string;
  attributes: TagAttributes;
}

export interface TagAttributes {
  name: {
    en: string;
  };
}

export type Relationship = Author | Artist | CoverArt;

export interface Author {
  id: string;
  type: "author";
  attributes: {
    name: string;
    imageUrl: string | null;
    biography: {
      en: string;
    };
    twitter?: string;
    pixiv?: string;
  };
}

export interface Artist {
  id: string;
  type: "artist";
  attributes: {
    name: string;
    imageUrl: string | null;
    biography: {
      en: string;
    };
    twitter?: string;
    pixiv?: string;
  };
}

export interface CoverArt {
  id: string;
  type: "cover_art";
  attributes: {
    fileName: string;
  };
}

export interface Favorite {
  id?: string;
  manga_id: string;
}
