import React from "react";

const Search = ({ search, setSearch }) => {
	return (
		<div className="col-sm-6 mb-4">
			<form onSubmit={(e) => e.preventDefault()}>
				<input style={{color:"black", paddingLeft:"5px",paddingTop:"5px",paddingBottom:"5px"}}
					className="form-control"
					type="search"
					role="searchbox"
					placeholder="Search users..."
					value={search}
					onChange={(e) =>
						setSearch(e.target.value)
					}></input>
			</form>
		</div>
	);
};

export default Search;
