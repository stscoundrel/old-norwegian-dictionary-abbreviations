import { getAbbreviationMapping } from './mappings/abbr-mapping';

export const findFromMapping = (
  content: string,
  abbreviations: Map<string, string>,
) : Map<string, string> => {
  const result: Map<string, string> = new Map();

  abbreviations.forEach((value, key) => {
    if (content.includes(key)) {
      result.set(key, value);
    }
  });

  return result;
};

export const findAbbreviations = (content: string) : Map<string, string> => {
  const abbrMap = getAbbreviationMapping();
  return findFromMapping(content, abbrMap);
};
export default {
  getAbbreviationMapping,
  findAbbreviations,
};
