import abbreviations from '../src';

describe('Abbreviation mapping tests', () => {
  test('Abbreviations in map have expected content', () => {
    const resultMap = abbreviations.getAbbreviationMapping();

    const allWorksAndAuthorsExample = Array.from(resultMap.keys()).map((abbr) => `${abbr} - ${resultMap.get(abbr)}`).join(' ');
    const expectedFullLenghts = 'a. - accusativ. acc. - accusativ. absol. - absolut. adj. - Adjectiv. Adj. - Adjectiv. adv. - Adverbium. Adv. - Adverbium. Alm. - Almindelighev. c. - Capitel. coll. - Collectiv. comp. - Comparativ. conj. - Conjuntion. D. - Dativ. Dat. - Dativ. desl. - deslige. Dimin. - Diminutiv. b. f. - det famme. b. f. f. - det famme fom. eg. - egentlig. ell. - eller. e-n. - einhvern. e-m. - einhverjum. e-s. - einhvers. eng. - engels. ellipt. - elliptir f. - Feminin. fg. - følgende. fgg. - følgende (om flere). fig. - figurlig, i figurlig betydning. folkespr. - folkesproget. fr. - fransk. G. - Genitiv. gd. - gammeldansk. g.eng. - gammelengelsk. grf. - gammelfransk. gbt. - gammeldøidsk. gn. - gammelnorsk. got. - gotisk. gr. - græft. gfar. - gammelfarisk. gld. - gammeldensk. holl. - hollandisk. ind. - Indikativ. inbl. - Inbledning. Inf. - Infinitv. interj. - Interjection. Interj. - Interjection. intr. - Intransitiv. it. - italiensk. ital. - italiensk. jdf. - jednfør. fd. - finlandisk. fins. - finlandisk. L. - Linje. lapp. - lappisk. lat. - latinsk. m. - Masculin. mdt. - middeldøidsk. mlat. - Latinsk eller Mibbelalderens Sprog. mnl. - middelnederlandsk. n. - Neutrum. nl. - nemlig. nnl. - nynederlandsk. ndl. - nydøidsk. Nr. - Nummer. num. card. - Mængbetal. num. ord. - Ordenstal. ogf. - ogfaa. o. m. fl. St. - og mange flere Steder. o. f. b - og faa didere p. - Pagina, side. Part. - Participium. Perf. - Perfon. pl. - Pluralis. Pl. - Pluralis. plur. - Pluralis. poet. - poetisk. posit. - positiv. pron. - Pronomen. Pron. - Pronomen. pron. dem. - demonstrativ pronomen. pron. indef. - udeftemt pronomen. pron. interr. - idørgende pronomen. pron. pers. - personligt pronomen. pron. poss. - demonstrativ pronomen. pron. rel. - possessivt pronomen. s. - substantiv. S. - Side. Sing. - Singularis. Subst. - Substantiv. superl. - Superlativ. v. - Verbum.';

    expect(allWorksAndAuthorsExample).toEqual(expectedFullLenghts);
  });
});
