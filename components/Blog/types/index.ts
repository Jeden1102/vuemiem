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
  blog_categores: {
    name: string;
  };
  author: {
    name: string;
    surname: string;
    linkedin: string;
    position: string;
  };
};

export type BlogsResponse = {
  blogs: Blog[];
};
