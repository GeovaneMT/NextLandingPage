import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! Looks like you're lost. That's why you should always folow the
        path
      </p>
      <Link
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        href="/"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFoundPage
