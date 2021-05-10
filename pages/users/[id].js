import { useRouter } from "next/router";
const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Details page of {id}</h1>
    </div>
  );
};

export default Details;
