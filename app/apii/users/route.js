import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { logger } from '../../../lib/logger'; // Import your logger

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('cellcluster');
    const data = await db.collection('users').find().toArray(); // Fetch all users
    const totalItems = data.length; // Calculate total items (users count)
    
    return new Response(JSON.stringify({ data, totalItems }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    logger.error('Error fetching users in GET route:', error.message, { stack: error.stack }); // Improved logging
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db('cellcluster');
    const { name, email, age } = await req.json();

    // Validate input
    if (!name || !email || !age) {
      logger.warn('Missing required fields:', { name, email, age }); // Improved logging
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await db.collection('users').insertOne({ name, email, age });

    // Log the result for debugging
    logger.info('Insert result:', { result });

    if (result.insertedId) {
      return new Response(JSON.stringify({ _id: result.insertedId, name, email, age }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      throw new Error('Insert operation did not return the expected result.');
    }
  } catch (error) {
    logger.error('Error adding user in POST route:', error.message, { stack: error.stack }); // Improved logging
    return new Response(JSON.stringify({ error: 'Internal Server Error', message: error.message, stack: error.stack }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(req) {
  try {
    const client = await clientPromise;
    const db = client.db('cellcluster');
    const { id, name, email, age } = await req.json();
    const result = await db.collection('users').updateOne(
      { _id: new ObjectId(id) },
      { $set: { name, email, age } }
    );
    
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    logger.error('Error updating user in PUT route:', error.message, { stack: error.stack }); // Improved logging
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(req) {
  try {
    const client = await clientPromise;
    const db = client.db('cellcluster');
    const { id } = await req.json();
    const result = await db.collection('users').deleteOne({ _id: new ObjectId(id) });
    
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    logger.error('Error deleting user in DELETE route:', error.message, { stack: error.stack }); // Improved logging
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
