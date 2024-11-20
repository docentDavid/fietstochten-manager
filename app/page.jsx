export default function Home() {
  return (
    <main className="text-center p-6">
      <h1 className="text-4xl font-bold">Welkom bij Fietstochten Manager</h1>
      <p className="mt-4">
        Beheer hier je fietstochten, inclusief afbeeldingen, beschrijvingen en
        GPX-tracks.
      </p>
      <a
        href="/fietstochten"
        className="mt-6 inline-block bg-granite-teal text-white py-2 px-4 rounded-md hover:bg-granite-blue"
      >
        Bekijk Fietstochten
      </a>
    </main>
  );
}
