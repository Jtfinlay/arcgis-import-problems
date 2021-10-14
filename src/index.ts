
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import EsriPoint from '@arcgis/core/geometry/Point';

export default function callIntoArcgis() {
    return geometryEngine.distance(
        new EsriPoint({ x: 0, y: 1}),
        new EsriPoint({ x: 1, y: 1})
    );
}