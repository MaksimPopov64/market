import React from "react";

import "./total.scss";

const block = "total";

type Props = {
  sum: number;
};

const Total = ({ sum }: Props) => (
  <section className={block}>
    <div>Итого:</div>
    <div>{sum}</div>
  </section>
);

export default Total;
