const newman = require('newman');

newman.run({
    //collection: require("./collection/Dmoney-Trnx-Assignment.json"),
    collection: 'https://api.postman.com/collections/25147542-229731bf-392b-4d73-90f2-800e7e560f96?access_key=PMAT-01H295DPMWTW7J5P912ZCTZ77E',
    //environment: require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    report: {
        htmlextra: {
            export: './newman/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete');
});