import React from "react";
import Filter from "./filter";

export default function NumericFilter({name, path, filters, onChange}) {
    return (
        <React.Fragment>
            <span>{name}</span>
            <Filter name={"min"} path={path} filters={filters} onChange={onChange}>
            </Filter>
            <Filter name={"max"} path={path} filters={filters} onChange={onChange}>
            </Filter>
        </React.Fragment>
    );
}