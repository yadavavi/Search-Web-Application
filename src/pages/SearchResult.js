import TableView from "../components/SearchResult/Sections/TableView";
import CheckBox from "../components/SearchResult/Sections/CheckBox.js";

const SearchResult = (props) => {
  return (
    <div>
      <CheckBox
        onFilterHandler={props.onFilterHandler}
        check={props.check}
        setCheck={props.setCheck}
      />
      <TableView recordList={props.recordList} />
    </div>
  );
};

export default SearchResult;
