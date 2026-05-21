export default function ComingSoon({ title }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 relative font-sans">
      <div className="text-6xl mb-6 animate-bounce">🚧</div>
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mb-3">
        {title}
      </h2>
      <p className="text-gray-400 text-lg max-w-md text-sm">
        Estamos trabajando arduamente en esta sección. ¡Estará disponible muy pronto!
      </p>
    </div>
  );
}
