export default function Page() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-gray-900 p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-semibold text-white">Sign In</h2>
      <button className="rounded-full bg-purple-500 px-4 py-2 font-medium text-white transition duration-300 ease-in-out hover:bg-purple-600">
        Connect with Google
      </button>
    </div>
  );
}
