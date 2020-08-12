import slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const getSlugFromTitle = (title) => slugify(title, { lower: true });

export const getDrawingBySlug = (drawingList, slug) => drawingList.find(
  (drawing) => getSlugFromTitle(drawing.title) === slug,
);
