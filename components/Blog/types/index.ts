export type BlogCategory = {
  name: string;
  slug: string;
};

export type BlogCategoriesResponse = {
  blogCategories: BlogCategory[];
};

export type Blog = {
  title: string;
  slug: string;
  content: string;
  lead: string;
  publishedAt: string;
  reading_time: string;
  blog_categories: BlogCategory | BlogCategory[];
  author: {
    name: string;
    surname: string;
    linkedin: string;
    position: string;
  };
};

export type BlogsResponse = {
  blogs_connection: {
    pageInfo: {
      total: number;
    };
    nodes: Blog[];
  };
};

export type BlogResponse = {
  blogs: Blog[];
};
