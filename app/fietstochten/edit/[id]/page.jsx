"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../../lib/supabase";

export default function EditTochtPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTocht = async () => {
      const { data } = await supabase
        .from("fietstochten")
        .select("*")
        .eq("id", id)
        .single();
      setTitle(data.title);
      setDescription(data.description);
    };
    fetchTocht();
  }, [id]);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("fietstochten")
      .update({ title, description })
      .eq("id", id);
    setLoading(false);

    if (error) alert("Error bij opslaan");
    else router.push(`/fietstochten/${id}`);
  };

  return (
    <form
      onSubmit={handleSave}
      className="bg-granite-blue min-h-screen text-white p-6"
    >
      <h1 className="text-4xl font-bold text-center mb-6">Bewerk Fietstocht</h1>
      <div className="max-w-lg mx-auto">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-2 border rounded-md"
          placeholder="Titel"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 border rounded-md"
          placeholder="Beschrijving"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className={`bg-granite-teal text-white py-2 px-4 rounded-md ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-granite-blue"
          }`}
        >
          {loading ? "Opslaan..." : "Opslaan"}
        </button>
      </div>
    </form>
  );
}
