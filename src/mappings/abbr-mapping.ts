export const getAbbreviationMapping = (): Map<string, string> => {
  const abbreviationMapping = new Map();

  abbreviationMapping.set('a.', 'accusativ.');
  abbreviationMapping.set('acc.', 'accusativ.');
  abbreviationMapping.set('absol.', 'absolut.');
  abbreviationMapping.set('adj.', 'Adjectiv.');
  abbreviationMapping.set('Adj.', 'Adjectiv.');
  abbreviationMapping.set('adv.', 'Adverbium.');
  abbreviationMapping.set('Adv.', 'Adverbium.');
  abbreviationMapping.set('Alm.', 'Almindelighev.');
  abbreviationMapping.set('c.', 'Capitel.');
  abbreviationMapping.set('coll.', 'Collectiv.');
  abbreviationMapping.set('comp.', 'Comparativ.');
  abbreviationMapping.set('conj.', 'Conjuntion.');
  abbreviationMapping.set('D.', 'Dativ.');
  abbreviationMapping.set('Dat.', 'Dativ.');
  abbreviationMapping.set('desl.', 'deslige.');
  abbreviationMapping.set('Dimin.', 'Diminutiv.');
  abbreviationMapping.set('b. f.', 'det famme.');
  abbreviationMapping.set('b. f. f.', 'det famme fom.');
  abbreviationMapping.set('eg.', 'egentlig.');
  abbreviationMapping.set('ell.', 'eller.');
  abbreviationMapping.set('e-n.', 'einhvern.');
  abbreviationMapping.set('e-m.', 'einhverjum.');
  abbreviationMapping.set('e-s.', 'einhvers.');
  abbreviationMapping.set('eng.', 'engels.');
  abbreviationMapping.set('ellipt.', 'elliptir');
  abbreviationMapping.set('f.', 'Feminin.');
  abbreviationMapping.set('fg.', 'følgende.');
  abbreviationMapping.set('fgg.', 'følgende (om flere).');
  abbreviationMapping.set('fig.', 'figurlig, i figurlig betydning.');
  abbreviationMapping.set('folkespr.', 'folkesproget.');
  abbreviationMapping.set('fr.', 'fransk.');
  abbreviationMapping.set('G.', 'Genitiv.');
  abbreviationMapping.set('gd.', 'gammeldansk.');
  abbreviationMapping.set('g.eng.', 'gammelengelsk.');
  abbreviationMapping.set('grf.', 'gammelfransk.');
  abbreviationMapping.set('gbt.', 'gammeldøidsk.');
  abbreviationMapping.set('gn.', 'gammelnorsk.');
  abbreviationMapping.set('got.', 'gotisk.');
  abbreviationMapping.set('gr.', 'græft.');
  abbreviationMapping.set('gfar.', 'gammelfarisk.');
  abbreviationMapping.set('gld.', 'gammeldensk.');
  abbreviationMapping.set('holl.', 'hollandisk.');
  abbreviationMapping.set('ind.', 'Indikativ.');
  abbreviationMapping.set('inbl.', 'Inbledning.');
  abbreviationMapping.set('Inf.', 'Infinitv.');
  abbreviationMapping.set('interj.', 'Interjection.');
  abbreviationMapping.set('Interj.', 'Interjection.');
  abbreviationMapping.set('intr.', 'Intransitiv.');
  abbreviationMapping.set('it.', 'italiensk.');
  abbreviationMapping.set('ital.', 'italiensk.');
  abbreviationMapping.set('jdf.', 'jednfør.');
  abbreviationMapping.set('fd.', 'finlandisk.');
  abbreviationMapping.set('fins.', 'finlandisk.');
  abbreviationMapping.set('L.', 'Linje.');
  abbreviationMapping.set('lapp.', 'lappisk.');
  abbreviationMapping.set('lat.', 'latinsk.');
  abbreviationMapping.set('m.', 'Masculin.');
  abbreviationMapping.set('mdt.', 'middeldøidsk.');
  abbreviationMapping.set('mlat.', 'Latinsk eller Mibbelalderens Sprog.');
  abbreviationMapping.set('mnl.', 'middelnederlandsk.');
  abbreviationMapping.set('n.', 'Neutrum.');
  abbreviationMapping.set('nl.', 'nemlig.');
  abbreviationMapping.set('nnl.', 'nynederlandsk.');
  abbreviationMapping.set('ndl.', 'nydøidsk.');
  abbreviationMapping.set('Nr.', 'Nummer.');
  abbreviationMapping.set('num. card.', 'Mængbetal.');
  abbreviationMapping.set('num. ord.', 'Ordenstal.');
  abbreviationMapping.set('ogf.', 'ogfaa.');
  abbreviationMapping.set('o. m. fl. St.', 'og mange flere Steder.');
  abbreviationMapping.set('o. f. b', 'og faa didere');
  abbreviationMapping.set('p.', 'Pagina, side.');
  abbreviationMapping.set('Part.', 'Participium.');
  abbreviationMapping.set('Perf.', 'Perfon.');
  abbreviationMapping.set('pl.', 'Pluralis.');
  abbreviationMapping.set('Pl.', 'Pluralis.');
  abbreviationMapping.set('plur.', 'Pluralis.');
  abbreviationMapping.set('poet.', 'poetisk.');
  abbreviationMapping.set('posit.', 'positiv.');
  abbreviationMapping.set('pron.', 'Pronomen.');
  abbreviationMapping.set('Pron.', 'Pronomen.');
  abbreviationMapping.set('pron. dem.', 'demonstrativ pronomen.');
  abbreviationMapping.set('pron. indef.', 'udeftemt pronomen.');
  abbreviationMapping.set('pron. interr.', 'idørgende pronomen.');
  abbreviationMapping.set('pron. pers.', 'personligt pronomen.');
  abbreviationMapping.set('pron. poss.', 'demonstrativ pronomen.');
  abbreviationMapping.set('pron. rel.', 'possessivt pronomen.');
  abbreviationMapping.set('s.', 'substantiv.');
  abbreviationMapping.set('S.', 'Side.');
  abbreviationMapping.set('Sing.', 'Singularis.');
  abbreviationMapping.set('Subst.', 'Substantiv.');
  abbreviationMapping.set('superl.', 'Superlativ.');
  abbreviationMapping.set('v.', 'Verbum.');

  return abbreviationMapping;
};

export default {
  getAbbreviationMapping,
};
