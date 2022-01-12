import { getAbbreviationMapping } from './mappings/abbr-mapping';
import { AbbreviationMapping } from './models';

export const findFromMapping = (
  content: string,
  abbreviations: AbbreviationMapping,
) : Map<string, string> => {
  const result: AbbreviationMapping = new Map();

  abbreviations.forEach((value, key) => {
    if (content.includes(key)) {
      result.set(key, value);
    }
  });

  return result;
};

export const findAbbreviations = (content: string) : AbbreviationMapping => {
  const abbrMap = getAbbreviationMapping();
  return findFromMapping(content, abbrMap);
};
export default {
  getAbbreviationMapping,
  findAbbreviations,
};
