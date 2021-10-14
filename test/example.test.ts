import callIntoArcgis from '../src';

describe('A test', () => {
    it('calls the example arcgis method', () => {
        const distance = callIntoArcgis();
        expect(distance).toBe(1);
    })
})