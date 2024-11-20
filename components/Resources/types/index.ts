export type ResourceCategory = {
  name: string;
  slug: string;
};

export type ResourcesCategoriesResponse = {
  resourceCategories: ResourceCategory[];
};

export type Resource = {
  title: string;
  lead: string;
  author: string;
  author_uri: string;
  url: string;
  resource_categories: ResourceCategory[];
  image: {
    url: string;
  };
  file?: {
    url: string;
  };
};

export type BlogsResponse = {
  resources_connection: {
    pageInfo: {
      total: number;
    };
    nodes: Resource[];
  };
};
