import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import constants from "../../utils/constants";

function Home() {
  const { data } = useQuery({
    queryKey: ["welcome"],
    queryFn: () => axios.get(`${constants.backendUrl}/welcome`).then(r => r.data),
  })

  return (
    <div className="dc h-screen">
      {data?.message}
    </div>
  )
}

export default Home
