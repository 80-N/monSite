import slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const getSlugFromTitle = (title) => slugify(title, { lower: true });
