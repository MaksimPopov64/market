import React from "react";
import _ from "lodash";

import "./search.scss";

const block = "search";

type Props = {
  handleChange: (e: string) => void;
};

const Search = ({ handleChange }: Props) => (
  <div className={block}>
    <input type="text" placeholder="Search" onChange={(e) => _.debounce<any>(handleChange(e.target.value))} />
  </div>
);

export default Search;
