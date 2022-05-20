import mockAPIdata from '../__mock__/mockAPIdata';

describe('Tests filter method from components', () => {
  it('Makes sure the filter works as intended', () => {

    const result = mockAPIdata;

    const filtered = mockAPIdata.filter((stonk) => '/Technology'.replace('%20', ' ').replace('/', '')
      .includes(stonk.misc.category));

    expect(filtered).toEqual(result);
  });
});