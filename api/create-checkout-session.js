import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).end('Method not allowed');
  }

  try {
    const { line_items } = req.body;

    if (!line_items || !Array.isArray(line_items)) {
      return res.status(400).json({ error: 'Invalid line items' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: `${process.env.STRIPE_SUCCESS_URL || req.headers.origin}/success`,
      cancel_url: `${process.env.STRIPE_CANCEL_URL || req.headers.origin}/products`,
      shipping_address_collection: {
        allowed_countries: ['IL'],
      },
      billing_address_collection: 'required',
    });

    res.status(200).json({ sessionId: session.id });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(400).json({ error: err.message });
  }
}