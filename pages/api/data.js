// pages/api/webhooks.js

import { supabase } from '@/lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const datawebhooks = req.body;

    const phoneNumber = payload?.payload?.data?.conversation?.phone_number || null;
    const labelName = payload?.payload?.data?.conversation?.labels?.[0]?.label_name || null;
    const displayName = payload?.payload?.data?.conversation?.display_name || null;
    const handledByName = payload?.payload?.data?.conversation?.handled_by_name || null;

    const { data, error } = await supabase
      .from('webhooks')
      .insert([{ 
        phone_number: phoneNumber,
        label_name: labelName,
        display_name: displayName,
        handled_by_name: handledByName,
        json: datawebhooks 
    }]);

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