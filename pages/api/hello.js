// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '@/lib/supabaseClient';

export default async function handler(req, res) {
  // const { data, error } = await supabase.from('data').select('*');
//   const response = await fetch('https://enva-dgtechpremium.com/api/user', {
//       method: 'POST',
//       headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//           id: 'cm6hcunj0000xms0j1hwchxis',
//           ver: '1.9.1'
//       }),
//   });
//   const api = await response.json();
//   const products = api.data.package[0].products;

//   await supabase.from('data').delete().gte('id', 1);

//   const formattedData = products.map((product, index) => ({
//       title: product.name,
//       value: product.script,
//       logo: "https://enva-dgtechpremium.com"+product.logo,
//       urutan: index+1,
//       aktif: '1',
//       note: product.note
//   }));

//   await supabase.from('data').upsert(formattedData);
  
//   res.status(200).json({ message: 'Success' });
}
