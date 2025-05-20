const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({}),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { line_items } = JSON.parse(event.body);

    if (!line_items || !Array.isArray(line_items)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid line items' }),
      };
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: `${process.env.URL || event.headers.origin}/success`,
      cancel_url: `${process.env.URL || event.headers.origin}/products`,
      shipping_address_collection: {
        allowed_countries: ['IL'],
      },
      billing_address_collection: 'required',
    });

    console.log("✅ Session created:", session.id);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.error('Stripe error:', error);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: error.message || 'An error occurred' }),
    };
  }
};