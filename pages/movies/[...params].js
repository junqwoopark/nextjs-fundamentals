import Seo from "../../components/Seo";

export default function Detail({ params }) {
  // Router는 클라이언트 사이드에서만 동작하기 때문에
  // 서버 사이드에서는 사용할 수 없음.
  const [title, id] = params;
  return (
    <div>
      <Seo title="title" />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  // console.log(ctx);
  console.log(params);
  return {
    props: { params },
  };
}
