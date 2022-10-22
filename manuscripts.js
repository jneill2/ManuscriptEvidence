/* 
*   
*/
window.manuscripts = [
    {
        name: 'New Testament',
        summary: 'The books of the New Testament were written by various authors sometime between approximately 50AD and 100AD. (141 papyri, 322-41=281 uncials, 2926? (2911? or 3011?) minuscules, 2484 lectionaries)',
        date: 70, /* 50-100 */
        qty: 5386, /* 5856 */
        quantity: {
            fragments: 141,
            manuscripts: 5715,
        },
        earliest: {
            fragment: 125,
            manuscript: 350,
        },
        range: [125, 1565], /* [117, ...] */
        /* 72, 48, 47, 24 
        2177, 615, 721, 329 */
        /* minuscules biblical content = 2070 */
    },
    {
        name: 'Iliad',
        summary: 'This data is just an approximate.',
        date: -730, /* -700 */
        qty: 1900,
        quantity: {
            fragments: null,
            manuscripts: 1900,
        },
        earliest: {
            fragment: null,
            manuscript: 300,
        },
        range: [300,1200] /* [-415, ...] */
    },
    {
        name: 'Annals (Tacitus)',
        summary: 'Still need to do better research on this...',
        date: 100,
        qty: 2,
        quantity: {
            fragments: 0,
            manuscripts: 2,
        },
        earliest: {
            fragment: null,
            manuscript: 850,
        },
        range: [850, 1040]
    },
    {
        name: 'Histories (Herodotus)',
        summary: 'Histories by Herodotus was written between 480BC and 425BC. Extant manuscripts include 9 principal manuscripts and around <a target="_blank" href="https://papyri.info/search?AUTHOR=Herodotus&WORK=Historiae&DOCS_PER_PAGE=50">45 papyri</a>.',
        date: -440,
        qty: 54, /* 27 */
        quantity: {
            fragments: 45,
            manuscripts: 9,
        },
        earliest: {
            fragment: 50,
            manuscript: 900,
        },
        range: [50, 1350],
    },
    {
        draft: true,
        name: 'Gallic Wars',
        summary: '',
        date: -50, /* -44 */
        qty: 10, /* 251 */
        range: [950] /* [800] */
    }
].filter(m => !m.draft).sort((a, b) => (a.earliest.manuscript - a.date) - (b.earliest.manuscript - b.date));





/* 
[0113]
[0125]
[0139]
[0215]
[0117]
[074]
[090]
[0110]
[0124]
[0178]
[0179]
[0180]
[0190]
[0191]
[0193]
[0194]
[0202]
[084]
[081]
[0235]
[0112]
[092b]
[089]
[092a]
[0123]
[0100] L 963
[0138]
[0119]
[0114] L 965
[0121a]
[0121b]
[0129] L 1575
[0137]
[0149]
0168 is lost!
[0224]
[0192] L 1604
[0195] L 963
[0203] L 1575
[0205] L 1575
[0276] L 962

[0212] ???

*/