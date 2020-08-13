import slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const getSlugFromTitle = (title) => slugify(title, { lower: true });

export const getDrawingBySlug = (drawingList, slug) => drawingList.find(
  (drawing) => getSlugFromTitle(drawing.title) === slug,
);

// Renvoi d'un nouveau texte en fonction du nombre de visuels.
export const getTitleByDrawingNumber = (number) => {
  let title = '';

  if (number === 0) {
    title = 'Pas d\'oeuvre à afficher pour le moment';
  }
  else if (number === 1) {
    title = 'Afficher l\'oeuvre';
  }
  else {
    title = 'Afficher les oeuvres';
  }

  return title;
};
