export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border p-6 shadow-sm text-center">
         <img
           src="/further-logo.png"
            alt="Further logo"
              className="h-12 w-12 object-cover rounded-full"
/>

        <h1 className="text-3xl font-semibold">Further</h1>
        <p className="mt-2 text-sm text-gray-600">
          Not yet. Keep going. One more step.
        </p>

        <label className="mt-6 block text-sm font-medium">Paste problem</label>
        <textarea
          className="mt-2 w-full rounded-xl border p-3 outline-none focus:ring"
          rows={6}
          placeholder="Paste your math/optimization problem here..."
        />

        <button className="mt-4 w-full rounded-xl border px-4 py-3 font-medium">
          Start Sprint
        </button>
      </div>
    </main>
  );
}
