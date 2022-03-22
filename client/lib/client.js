import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: "1gly4etd",
  dataset: 'production',
  apiVersion: 'v1',
  token: "skDFIuKrK1RSSnIvFurksGBJ4bRMfGNH0M9pmD8pWX6GwP4Z1GJeGeIndM4TdY1xshqlZ7OD8pJbuI5eJPm2CNLwW7tcbWqrJyXPKom7oIxK3yTJirNGPTwl4GWM5IQ8aYdnbG78mYpPPmluO6wbhQ0kOzEYaHgfA2jHjOd4zEjbTqbzRBvM",
  useCdn: false,
})
 