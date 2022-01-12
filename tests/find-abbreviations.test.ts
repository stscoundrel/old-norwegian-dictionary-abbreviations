import { findAbbreviations } from '../src';

describe('Abbreviation finder', () => {
  test('Finds abbreviations in content: leyndarkofi', () => {
    const content = 'leyndarkofi, m. d. s., = leynikofi, leyniligrkofi, leyndr kofi. Bp. I, 25323; Mar.14811 jvf 37.';

    const expected = new Map();
    expected.set('m.', 'Masculin.');
    expected.set('p.', 'Pagina, side.');
    expected.set('s.', 'substantiv.');

    const result = findAbbreviations(content);

    expect(result).toEqual(expected);
  });

  test('Finds abbreviations in content: leyfi', () => {
    const content = 'leyfi, n.  1)  Tilladelse, = lœfi, lof II; nemamítt sé lof eðr leyfi til Flat. II, 26628;án biskups leyfi Grág. II, 3518; útan lofok lœfi DN. IX, 33711; leggja leyfi áe-t dvs. give Tilladelse til noget (jvf leggjalög á e-t): ef þú vilt miklu auka réttþínn, þá vil ek, at þú leggir leyfi þará, at - Fm. VIII, 2716; með leyfi (dvs.om det skal være mig tilladt) mun ektil forvitnast at rannsaka þessa rœðunökkuru gjörr Kgs. 1516.  2)  hvad derer tilladt; segja þat biskups leyfi (dvs.at det var noget som Biskoppen havdetilladt) Bp. I, 50033; leyfi gefit at vinna5 daga um jól, leyfi gefit miðvikudagfyrir jólaföstu ok langaföstu Ann. 1538;jvf leyfi gefit miðvikudaga fyrir jóla-föstu ok aðra fyrir langaföstu Ann.20532; leyfi er tvímælt at hafa Barbaro-messo, ef eigi stendr á föstudegi Grág.II, 368.  3)  Dispensation, Bevilling, Fri-tagelse fra noget som paaligger en ifølgegjældende Lov eller Forskrift, = lof;þau leyfi gefr páfi sjalfr á hans hátíð,er bók sú váttar, er Poenitentialis heitir,er hann vil eigi gefa á vel flestumöðrum hátíðum af skriptum mannaHeilag. I, 6429; hverr maðr þeirra, erlögréttoseto á, skal gera annattveggjaum leyfi hvert at játa eða níta -; efmenn biðja lofa í lögréttu svá, at -Grg. I, 2133 fg; jvf einkaleyfi, sátta-leyfi, syknuleyfi.  4)  poetisk Frihed somen Digter (skáld) tager sig til at afvige fraDigtekunstens almindelige Regler. SE. I,5946. 59626. 61012. 16. 24 \u0026amp;fg. . I, 1685.  5)  Af-sted som den bortreisende tager fra dem,som han forlader, = orlof; tók Floresleyfi (jvf orlof S. 2617) af bónda okhúsfrú - ok bað þau vel lifa Flor. 8(2814); um morgininn tók hann leyfiStr. 641; leiddu þær hest til hans, októk (hann) leyfi ok steig á hest sínnok reið til borgarinnar Str. 6917.';

    const expected = new Map();
    expected.set('S.', 'Side.');
    expected.set('fg.', 'følgende.');
    expected.set('lat.', 'latinsk.');
    expected.set('m.', 'Masculin.');
    expected.set('p.', 'Pagina, side.');
    expected.set('n.', 'Neutrum.');
    expected.set('s.', 'substantiv.');

    const result = findAbbreviations(content);

    expect(result).toEqual(expected);
  });

  test('Finds abbreviations in content: liði', () => {
    const content = 'liði, m. Person, Mand som er i ens Følge, hører til ens lið I, 1; liðar þat erufylgðarmenn SE. I, 53015; Langbarðsliðar Guðr. 2, 19; firir borð allir Búaliðar! Jómsv. 7420 (Flat. I, 1941); þásvarar orðum konungs Þórir helsingr:þótt þar væri fyrir eldr brennandi, þámynda ek ok mínir liðar þegar í hlaupa,ef ek vissa, at þat keyptist í, at þérhefðit þá frið eptir OH. 2431; ef þriðiliðinn (dvs. en af de tre Mænd som ere ombord) verðr veginn á skipi Frost. 4,Indholdsreg. 5, jvf Frost. 4, 62; bæðifjándinn ok hans liðar Homil. 1693; jvfdjöfuls liðir m. m. under liðr 4 S. 507 a1 fgg. 2)  en vis Landsinddeling i Norge be-staaende af eller indeholdende de bœir,som tilsammen stillede en Mand, naar der udbødes leiðangr (se. P. A. Munch d. n.Folks Hist. IV, 1, 510 og hans Be- skrivelse over Norge S. 104 fg); S. konungrlagði á bœndr um vetrinn leiðangr, ator hverjum liða skyldi gera mann okum fram pund ok naut; konungr gafþá heimleyfi Þrœndum, en hann tókþá lið or heruðum, gerðist af þessumleiðangri mikill kurr í Víkinni Fm.VIII, 39521; høyrdo þaug alldre annetgetet, at meira leigda(n)gh gek af þessafira anemfda garda Viuilstade gardHughen oc Foos tvegart en 2 pundsmør oc 16 ørtagha pæiningha j haustleidanghen, var oc Æiuinder kumperoc Finner (a) Fosse oc swa mangha jlidanom varo o. s. v. DN. II, 61412;þau visto, at Fos lidi var i þria þriði-unga, ein (nl. þriðjungr) Haugs gardarbadher, annar Fos gardhar bader, þridiNes gardar þrir DN. II, 6247; j ræid-hugift 3 pundda laup smørs ok 5 spanmioll af hvorium lidha ok æro 12 lidharí alri soknenne (nl. Rødanes) EJb.14936 fg; j Væterlida lida 2 ærtogh bollEJb. 3594 (under Nafuarstada kirkja);tæker kirkian (nl. Haugbya k.) fullanluth tiundar ifwir Haugbiaar lidha EJb.36718; O. - ok Þ. - ræignædæ -- mins herra kononghsens iarder i fyrsagde þingh aa (nl. Iddar) - - -;siden ræiknnade þæir æiftir lidatale,er sva byriar. item Kirkiubear lidi,item Svæinunghsbear l., item o. s. v. DN. IV, 278; jvf DN. IV, 279 som indeholder en lignende Opregning af liðarnir i Skjabergs Skibrede; j Thuett-ene som ligher j Thyrydale a Tæla-morkenne oc Flotena medher somliggher j samre sokn j BerghalidanomDN. VII, 4629 (Aar 1463).';

    const expected = new Map();
    expected.set('S.', 'Side.');
    expected.set('eg.', 'egentlig.');
    expected.set('fgg.', 'følgende (om flere).');
    expected.set('lat.', 'latinsk.');
    expected.set('m.', 'Masculin.');
    expected.set('n.', 'Neutrum.');
    expected.set('nl.', 'nemlig.');
    expected.set('s.', 'substantiv.');
    expected.set('v.', 'Verbum.');

    const result = findAbbreviations(content);

    expect(result).toEqual(expected);
  });
});
