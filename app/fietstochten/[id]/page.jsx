"use client";
import { supabase } from "../../../lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "../../../components/Modal";

export default function TochtDetailPage({ params }) {
  const { id } = params;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tocht, setTocht] = useState(null);
  const router = useRouter();

  // Ophalen van de fietstocht
  useState(() => {
    const fetchTocht = async () => {
      const { data } = await supabase
        .from("fietstochten")
        .select("*")
        .eq("id", id)
        .single();
      setTocht(data);
    };
    fetchTocht();
  }, [id]);

  const handleDelete = async () => {
    const { error } = await supabase.from("fietstochten").delete().eq("id", id);
    if (error) {
      alert("Er is een fout opgetreden bij het verwijderen van de fietstocht.");
    } else {
      alert("Fietstocht succesvol verwijderd.");
      setIsModalOpen(false); // Sluit modaal na succesvolle verwijdering
      router.push("/fietstochten"); // Ga terug naar de overzichtspagina
    }
  };

  if (!tocht) return <p>Fietstocht wordt geladen...</p>;

  return (
    <main className="bg-granite-blue min-h-screen text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">{tocht.title}</h1>
      <img
        src={tocht.image_url}
        alt={tocht.title}
        className="w-full max-h-96 object-cover mb-4"
      />
      <p className="mb-4">{tocht.description}</p>
      <a
        href={`/fietstochten/edit/${id}`}
        className="bg-granite-teal text-white py-2 px-4 rounded-md mr-4 hover:bg-granite-blue"
      >
        Bewerken
      </a>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
      >
        Verwijderen
      </button>

      {/* Modaal wordt weergegeven als isModalOpen true is */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        title="Fietstocht Verwijderen"
        description="Weet je zeker dat je deze fietstocht wilt verwijderen? Dit kan niet ongedaan worden gemaakt."
      />
    </main>
  );
}
