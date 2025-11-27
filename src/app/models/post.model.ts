export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  author?: string;
  publishedAt?: string;
  coverImageUrl?: string;
}
