export default function resolveProductionUrl(document) {
  return `http://localhost:3000/api/preview?secret=chuka709&slug=${document.slug.current}`;
  // return `${process.env.SANITY_STUDIO_PROJECT_URL}/api/preview?secret=${SANITY_STUDIO_PREVIEW_SECRET}&slug=${document.slug.current}`;
}
