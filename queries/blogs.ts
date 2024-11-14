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
    blogs_connection(filters: $filters, pagination: $pagination) {
      pageInfo {
        total
      }
      nodes {
        title
        slug
        publishedAt
        lead
        createdAt
        content
        blog_categories {
          slug
          name
        }
        author {
          surname
          position
          name
          linkedin
        }
      }
    }
  }
`;
