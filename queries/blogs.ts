export const GET_BLOG_CATEGORIES = gql`
  query BlogCategories {
    blogCategories {
      name
      slug
    }
  }
`;

export const GET_BLOGS_BY_CATEGORIES = gql`
  query getBlogsByCategories(
    $filters: BlogFiltersInput
    $pagination: PaginationArg
  ) {
    blogs(filters: $filters, pagination: $pagination) {
      title
      publishedAt
      lead
      content
      slug
      blog_categories {
        name
      }
      author {
        name
        surname
        linkedin
        position
      }
    }
  }
`;
