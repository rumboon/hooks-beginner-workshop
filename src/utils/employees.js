const doesInclude = (a, b) => {
    if (!a || !b) return false;
    return a.toUpperCase().includes(b.toUpperCase());
}

export const searchFilter = (employees, searchValue) => {
    if (!employees || !searchValue) return false;

    return employees.filter((employee) => (
        doesInclude(employee.first_name, searchValue)
        || doesInclude(employee.last_name, searchValue)
        || doesInclude(employee.function, searchValue)
    ));
}