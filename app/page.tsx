export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-6 text-center">
        Arc Stablecoin
      </h1>

      <p className="text-zinc-400 text-xl text-center max-w-2xl mb-8">
        Modern AI-powered Web3 stablecoin platform built with Next.js.
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-80 transition">
          Connect Wallet
        </button>

        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </div>
    </main>
  );
}