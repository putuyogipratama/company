// pages/api/webhooks.js

import { supabase } from '@/lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const datawebhooks = req.body;

    const { data, error } = await supabase
      .from('webhooks')
      .insert([{ json: datawebhooks }]);

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: 'Failed to insert webhook data' });
    }

    return res.status(200).json({ message: 'Webhook data inserted', data });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}