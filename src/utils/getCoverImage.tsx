import { Relationship } from "../data/mangaTypes";

export const getCoverImage = (relationships: Relationship[]) => {
  const coverRelation = relationships.filter(
    (relation) => relation.type === "cover_art"
  );

  return coverRelation.length > 0 ? coverRelation[0].attributes.fileName : null;
};
