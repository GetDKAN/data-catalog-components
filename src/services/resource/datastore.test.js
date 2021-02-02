import { dkan } from './datastore';

test('Datastore', async () => {
    const datastore = new dkan('blah', [], '');
    const results = await datastore.query()
    expect(results).toEqual(null)
})
