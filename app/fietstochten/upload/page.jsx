"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [gpx, setGpx] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image
    const imageUpload = await supabase.storage
      .from("fietstochten")
      .upload(`images/${image.name}`, image);
    const imageUrl = supabase.storage
      .from("fietstochten")
      .getPublicUrl(imageUpload.data.path).data.publicUrl;

    // Upload GPX
    const gpxUpload = await supabase.storage
      .from("fietstochten")
      .upload(`tracks/${gpx.name}`, gpx);
    const gpxUrl = supabase.storage
      .from("fietstochten")
      .getPublicUrl(gpxUpload.data.path).data.publicUrl;

    // Insert data in database
    const { data, error } = await supabase.from("fietstochten").insert({
      title,
      description,
      image_url: imageUrl,
      gpx_url: gpxUrl,
    });

    if (error) console.error(error);
    else alert("Fietstocht succesvol toegevoegd!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Upload een nieuwe fietstocht</h1>
      <input
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Beschrijving"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <input
        type="file"
        accept=".gpx"
        onChange={(e) => setGpx(e.target.files[0])}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
}
