import { useRouter } from "next/router";

export default function Movie({ movie }) {
  const router = useRouter();
  return (
    <div>
      <h4>{router.query.original_title || "Loading"}</h4>
    </div>
  );
}
