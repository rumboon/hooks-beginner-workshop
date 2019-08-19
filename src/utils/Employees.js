export async function getEmployees() {
    try {
        const response = await fetch('http://localhost:5000/api/employees');

        return await response.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getEmployeeFunctions() {
    try {
        const response = await fetch('http://localhost:5000/api/functions');

        return await response.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

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