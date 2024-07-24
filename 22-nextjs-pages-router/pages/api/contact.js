import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  // res.status(200).json({ data: "Test" });

  if (req.method !== "POST")
    return res.status(405).json({
      success: false,
      message: "Please make a POST request. method not allowed",
    });

  const contactData = JSON.parse(req.body);

  const { error } = await supabase.from("contact").insert([contactData]);

  if (error)
    return res.status(500).json({
      success: false,
      message: "Could not send your message. please Try again",
    });

  // success message
  return res.status(200).json({
    success: true,
    message: "Thanks for your message! we will be in touch soon :)",
  });
}
