/* 
*   
*/
window.manuscripts = [
    {
        name: 'New Testament',
        summary: 'The books of the New Testament were written by various authors sometime between approximately 50AD and 100AD.  In total, there are around 136 papyri, 3162 manuscripts, and 2492 lectionaries. This totals over 5700 witnesses to the text of the NT. One of the early papyri (P46) containing much of Apostle Paul’s letters dates to AD 175-225.',
        date: 70, /* 50-100 */
        qty: 5654, /* 5856 */
        quantity: {
            fragments: 136,
            manuscripts: 5654,
        },
        earliest: {
            fragment: 125,
            manuscript: 350,
        },
        range: [125, 1565], /* [117, ...] */
        /* 72, 48, 47, 24 
        2177, 615, 721, 329 */
        /* minuscules biblical content = 2070 */
        /* (141 papyri, 322-41=281 uncials, 2926? (2911? or 3011?) minuscules, 2484 lectionaries) */
    },
    {
        name: 'Iliad',
        summary: 'The Iliad was written around the year 800 BC. In 2010 Bird states that there are more that 1900 manuscripts of the Iliad, at least 1500 of which are papyri. This would mean that there are around 400 non-papyri manuscripts – a number that I have seen no other information about. However, later figures place the fragments at 1569, and other manuscripts at 188. This would put the total at around 1757 witnesses. The earliest written fragment dates from the 4th century BC.',
        date: -730, /* -700 */
        qty: 1569,
        quantity: {
            fragments: 1569,
            manuscripts: 188,
        },
        earliest: {
            fragment: -350,
            manuscript: 850,
        },
        range: [850,1200] /* [-415, ...] */
    },
    {
        name: 'Annals (Tacitus)',
        summary: 'The Annals was written around the year AD 100 and tells the history of the Roman Empire from the beginning of the reign of Tiberius in AD 14 to the end of the reign of Nero, in AD 68. Tacitus wrote the Annals in at least 16 books, but books 7-10 and parts of books 5, 6, 11 and 16 are missing. The earliest surviving manuscript dates to around AD 850 and the next one to the mid-eleventh century. The remaining 31 manuscripts descend from these two and date to the fifteenth century.',
        date: 100,
        qty: 2,
        quantity: {
            fragments: 0,
            manuscripts: 33,
        },
        earliest: {
            fragment: null,
            manuscript: 850,
        },
        range: [850, 1500]
    },
    {
        name: 'Histories (Herodotus)',
        summary: 'Histories by Herodotus was written between 480BC and 425BC. Extant manuscripts include 9 principal manuscripts and around <a target="_blank" href="https://papyri.info/search?AUTHOR=Herodotus&WORK=Historiae&DOCS_PER_PAGE=50">45 papyri</a>.',
        date: -440,
        qty: 54, /* 27 */
        quantity: {
            fragments: 45,
            manuscripts: 60,
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