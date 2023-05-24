import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

// anchor 대신 Link 컴포넌트를 사용함.
// router.pathname을 이용해 현재 경로를 확인하고
// 현재 경로와 일치하면 색상을 변경할 수 있음.

// styles.className을 이용해 클래스명을 동적으로 변경할 수 있음.

// 여러 개의 클래스를 적용하고 싶을 때
// 1. `를 이용해 문자열을 템플릿화 할 수 있음.
// 2.join을 이용해 배열을 문자열로 변환할 수 있음.

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={[
          styles.link,
          router.pathname === "/about" ? styles.active : "",
        ].join(" ")}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
