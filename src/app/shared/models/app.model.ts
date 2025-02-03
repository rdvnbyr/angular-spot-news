export type RelatedTopic = { topic_id: string; topic_name: string };

// export type Headline = {
//   authors: string[];
//   link?: string;
//   photo_url: string;
//   published_datetime_utc: string;
//   related_topics: RelatedTopic[];
//   snippet: string;
//   source_favicon_url?: string;
//   source_logo_url?: string;
//   source_name: string;
//   source_publication_id: string;
//   source_url?: string;
//   story_id: string;
//   thumbnail_url: string;
//   title: string;
//   sub_articles?: Headline[];
// };

export type Headline = {
  source: {
    id: string | null | undefined;
    name: string;
  };
  author: string;
  title: string;
  description: string | null | undefined;
  url: string;
  urlToImage: string | null | undefined;
  publishedAt: string;
  content: string;
};
