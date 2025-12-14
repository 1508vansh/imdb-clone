import React from "react";
import Kantara from './assets/Kantara.png'
import KGF from './assets/KGF.png'
import RRR from './assets/RRR.png'

// Single-file React component + demo usage. Uses Tailwind CSS for styling.
// Save this as `MovieCard.jsx` or `App.jsx` in a Create React App / Vite project
// that has Tailwind set up. The default export is an `App` showing sample data.

function StarIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={"w-4 h-4 inline-block mr-0.5 " + className}
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.95c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.99 2.713c-.784.57-1.839-.197-1.54-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.023 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z" />
    </svg>
  );
}

export function MovieCard({ poster, title, year, rating }) {
  return (
    <article className="max-w-xs rounded-2xl shadow-lg p-4 bg-white text-gray-900 hover:scale-105 transform transition-transform duration-300">
      <div className="relative rounded-xl overflow-hidden bg-gray-100">
        <img
          src={poster}
          alt={`${title} poster`}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/300x450?text=No+Poster";
          }}
        />
        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
          {year}
        </div>
      </div>

      <div className="mt-3">
        <h2 className="text-lg font-semibold truncate" title={title}>
          {title}
        </h2>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center text-sm font-medium">
            <StarIcon />
            <span className="ml-1">{rating}</span>
          </div>

          <button
            className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            aria-label={`View details for ${title}`}
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Movies({SAMPLE_MOVIES}) {
  return (
    <main className="bg-gray-50 p-8 overflow-scroll flex flex-col justify-center items-center">
      <header className="max-w-5xl mx-auto mb-6">
        <h1 className="text-2xl font-bold">Movie Gallery</h1>
        <p className="text-sm text-gray-600">
          Reusable MovieCard component (Tailwind CSS)
        </p>
      </header>

      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {SAMPLE_MOVIES.map((m) => (
          <MovieCard
            key={m.id}
            poster={m.poster_path}
            title={m.title}
            year={m.release_date}
            rating={m.vote_average}
          />
        ))}
      </section>
    </main>
  );
}
