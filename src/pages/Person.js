import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import zt from "./htmls/zt/zt.html";
import test from "./htmls/test/test.html";

export default function PersonDetail() {
  const { id } = useParams();
  const [curHtml, setCurHtml] = useState(null);

  useEffect(() => {
    const htmlArr = [test, zt];
    const idMap = {
      test: 0,
      zt: 1,
    };
    setCurHtml(htmlArr[idMap[id]]);
  }, [id]);

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: curHtml,
        }}
      ></div>
    </>
  );
}
