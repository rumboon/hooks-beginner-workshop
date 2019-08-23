const doesInclude = (a, b) => {
    if (!a || !b) return false;
    return a.toUpperCase().includes(b.toUpperCase());
}

export const searchFilter = (searchValue) => (employee) => {
    if (!searchValue) return true;

    return doesInclude(employee.first_name, searchValue)
        || doesInclude(employee.last_name, searchValue)
        || doesInclude(employee.function, searchValue)
};