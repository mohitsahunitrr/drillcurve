var Plotly = require('plotly.js/lib/core');

Plotly.register([
    require('plotly.js/lib/scatter3d'),
    require('plotly.js/lib/scatter')
]);

module.exports = Plotly;
