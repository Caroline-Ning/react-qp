////////////////////// fetch html from database
// import { useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";

// import DOMPurify from "dompurify";

// export default function PersonDetail() {
//   const { id } = useParams();
//   const {
//     data: htmlObj,
//     error,
//     isPending,
//   } = useFetch("http://localhost:8000/htmls/" + id);
//   return (
//     <>
//       {isPending && <div>Loading...</div>}
//       {error && <div>{error}</div>}
//       <div
//         dangerouslySetInnerHTML={{
//           __html: DOMPurify.sanitize(htmlObj.html),
//         }}
//       ></div>
//     </>
//   );
// }

////////////////// import html from local
import React from "react";
import { useParams } from "react-router-dom";

import htmlsJson from "./htmlsJson.json";

export default function PersonDetail() {
  const { id } = useParams();
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: htmlsJson.htmls[id - 1].html,
        }}
      ></div>
    </>
  );
}
