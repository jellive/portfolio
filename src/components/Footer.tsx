export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
        <p className="font-mono">
          <span className="text-green-400">$</span> built with Next.js ·{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
