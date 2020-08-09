import { getRandomUsers } from './ContactsServices';

test('Receiving data from the server', async () => {
    const data = await getRandomUsers(3);
    expect(data.length).toBe(3);
  });
  
 