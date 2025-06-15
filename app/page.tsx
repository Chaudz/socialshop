import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-100 px-4 py-16">
      <div className="bg-white/80 rounded-2xl shadow-xl p-10 max-w-md w-full flex flex-col items-center gap-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to Premium!
        </h1>
        <p className="text-gray-600 text-center">
          Nâng cấp tài khoản để trải nghiệm những tính năng tuyệt vời hơn 🚀
        </p>
        <Link
          href="/premium"
          className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-white font-semibold text-lg shadow hover:scale-105 hover:shadow-2xl transition-all duration-200"
        >
          Go Premium
        </Link>
      </div>
    </div>
  );
}
