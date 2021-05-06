import React from "react";
import Filter from "./filter";

export default function AlphabeticFilter({name, path, filters, onChange}) {
    return (
        <React.Fragment>
            <span>{name}</span>
            <Filter name={"value"} path={path} filters={filters} onChange={onChange}>
            </Filter>
        </React.Fragment>
    );
}