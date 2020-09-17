import React, { useCallback } from "react";
import debounce from "lodash/debounce";

import "./search.scss";

const block = "search";

type Props = {
  handleChange: Function;
};

const Search = ({ handleChange }: Props) => {
  const debouncedGetBooks = useCallback(
    debounce((query) => {
      handleChange(query);
    }, 700),
    []
  );

  const onInputChange = (e: React.SyntheticEvent) => {
    debouncedGetBooks((e.target as HTMLInputElement).value);
  };

  return (
    <div className={block}>
      <input type="text" placeholder="Search" onChange={onInputChange} />
    </div>
  );
};

export default Search;
