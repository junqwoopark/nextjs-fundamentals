import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, original_title) => {
    router.push(
      {
        pathname: "/movies/[id]",
        query: { id, original_title },
      },
      `/movies/${id}` // as
    );
  };
  return (
    <div className="container">
      <Seo title="Home" />

      {/* Link를 사용하거나, react처럼 onClick을 사용할 수도 있음. */}
      {results?.map((movie) => (
        <Link
          href={{
            pathname: `/movies/${movie.id}`,
            query: {
              id: movie.id,
              original_title: movie.original_title,
            },
          }}
          as={`/movies/${movie.id}`}
          key={movie.id}
        >
          <div
            className="movie"
            key={movie.id}
            onClick={() => onClick(movie.id, movie.original_title)}
          >
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/movies");
  const { results } = await res.json();

  return {
    props: {
      results,
    },
  };
}
