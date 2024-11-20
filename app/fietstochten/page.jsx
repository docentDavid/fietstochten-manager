import { supabase } from "@/lib/supabase.js";

export default async function FietstochtenPage() {
  const { data: fietstochten, error } = await supabase
    .from("fietstochten")
    .select("*");

  if (error) {
    console.error("Error fetching fietstochten:", error.message);
    return <p>Fout bij het laden van de fietstochten.</p>;
  }

  if (!fietstochten || fietstochten.length === 0) {
    return <p>Er zijn nog geen fietstochten.</p>;
  }

  return (
    <main className="bg-granite-blue min-h-screen text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Fietstochten</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fietstochten.map((tocht) => (
          <div
            key={tocht.id}
            className="bg-granite-light text-black rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={tocht.image_url}
              alt={tocht.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{tocht.title}</h2>
              <p className="text-sm mb-4">
                {tocht.description.slice(0, 100)}...
              </p>
              <a
                href={`/fietstochten/${tocht.id}`}
                className="bg-granite-teal text-white py-2 px-4 rounded-md hover:bg-granite-blue"
              >
                Bekijk Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
