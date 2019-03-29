
"use strict";

var xml = require('xml'),
    serializeIdentified = require('./serializeIdentified');

module.exports = function serializeMeasure(sbolDocument, xmlAttribsRef, measure) {

    console.dir(measure)

    var properties = []

    properties.push(
        { 'om:hasNumericalValue': measure.value }
    )

    if(measure.unit.toString() !== '') {
        properties.push({
            'om:hasUnit': { _attr: { 'rdf:resource': measure.unit } }
        })
    }

    return serializeIdentified(sbolDocument, xmlAttribsRef, measure, 'om:Measure', properties)
}
