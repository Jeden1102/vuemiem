export const GET_RESOURCES_CATEGORIES = gql`
  query ResourceCategories {
    resourceCategories {
      name
      slug
    }
  }
`;

export const GET_RESOURCES_BY_CATEGORIES = gql`
  query getResourcesByCategories(
    $filters: ResourceFiltersInput
    $pagination: PaginationArg
  ) {
    resources_connection(filters: $filters, pagination: $pagination) {
      pageInfo {
        total
      }
      nodes {
        title
        lead
        url
        author
        author_uri
        resource_categories {
          slug
          name
        }
        image {
          url
        }
        file {
          url
        }
      }
    }
  }
`;
