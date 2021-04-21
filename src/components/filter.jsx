import { FormControl } from "react-bootstrap"
export default function Filter({name, path, filters, onChange}) {
    function handleChange(e) {
        const filter = filters;
        const value = e.target.value;

        if (path === "releaseDate" || path === "runtime" || path === "score") {
            if (value.length === 0) {
                if (name === "min") {
                    filter[path][name] = 0;
                } else if (name === "max") {
                    filter[path][name] = 10000;
                }
            } else {
                filter[path][name] = parseInt(value);
            }
        } else {
            filter[path] = value;
        }

        onChange(name, filter);
    }
    
    return (
        <FormControl
        placeholder={name}
        aria-label={name}
        aria-describedby="basic-addon1"
        onChange={(e) => handleChange(e)}
        />
    );
}