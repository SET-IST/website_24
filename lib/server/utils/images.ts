/**
 * Get absolute path to resource, **can only be used in backend code**
 */
export function getFullResourcePath(resource?: string | null) {
  return !!resource
    ? `${process.env.EDGE_STORE_BASE_URL}/${process.env.ES_AWS_BUCKET_NAME}/${resource}`
    : null
}
