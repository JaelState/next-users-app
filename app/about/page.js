import UserDetail from '../../components/UserDetail';
import clientPromise from '../../lib/mongodb';

async function getData() {
  const client = await clientPromise;
  const db = client.db('cellcluster');
  const data = await db.collection('users').find({}).toArray();
  return data[0];
}

export default async function About() {
  const user = await getData();

  return (
    <div>
      <h1>About Page</h1>
      <UserDetail user={user} />
    </div>
  );
}
