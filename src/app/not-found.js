import Link from "next/link";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <h1 className="text-7xl md:text-8xl font-bold text-green-700 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href={'/'}
          className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-2xl shadow-sm transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
