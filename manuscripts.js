/* 
*   
*/
window.manuscripts = [
    {
        name: 'Illiad',
        summary: '',
        date: -730,
        qty: 17,
        range: [900,1200]
    },
    {
        name: 'New Testament',
        summary: '',
        date: 70,
        qty: 5386,
        range: [117, 1565]
    },
    {
        name: 'Annales',
        summary: '',
        date: 100,
        qty: 2,
        range: [850, 1040]
    },
    {
        name: 'Herodotus',
        summary: '',
        date: -440,
        qty: 27,
        range: [90, 1350]
    },
].sort((a, b) => a.date - b.date);

/* Array of the dates that the manuscripts were written. */
// const dates = Object.keys(window.manuscripts).map(key => window.manuscripts[key].date);
/* 
*   window.spread = ['earliest date on graph', 'latest date on graph']
*   The spread should be somewhat earlier than the earliest manuscript on the left and into the modern times on the right.
*/
// window.spread = [-1000, 2000].reduce((a, b) => b - a);