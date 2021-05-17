import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Activity1 from "../kaou";
import Activity from "../userActivityInsights";

const Details = () => {
  const [userId, setUserId] = useState();
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  if (id === "ikram4298") {
    return <Activity />;
  } else if (id === "kaoutar8426") {
    return <Activity1 />;
  }
  return <div>hello</div>;
};
export default Details;
