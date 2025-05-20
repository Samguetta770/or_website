import { createClient } from 'npm:@supabase/supabase-js';
import Stripe from 'npm:stripe@13.11.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  // Always return JSON with CORS headers
  const jsonResponse = (data: unknown, status = 200) => {
    return new Response(
      JSON.stringify(data),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status,
      }
    );
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', {
      apiVersion: '2023-10-16',
    });

    // Validate request body
    const body = await req.json().catch(() => null);
    if (!body || !body.line_items || !Array.isArray(body.line_items)) {
      return jsonResponse({ error: 'Invalid request body' }, 400);
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: body.line_items,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/products`,
      shipping_address_collection: {
        allowed_countries: ['IL'],
      },
      billing_address_collection: 'required',
    });

    return jsonResponse({ sessionId: session.id });
  } catch (error) {
    console.error('Checkout session error:', error);
    return jsonResponse({ 
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    }, 400);
  }
});