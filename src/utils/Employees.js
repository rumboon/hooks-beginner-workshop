const credentials = btoa('srpwcqp2:ej7s62xt2mrtefkqrepm');

// TODO local rest instance (maybe docker ?)
export async function getEmployees() {
    try {
        const response = await fetch('https://sheetdb.io/api/v1/smyv5xfvpjqeh', {
            headers: {
                'Authorization': 'Basic ' + credentials,
            },
        });

        return await response.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getFunctions() {
    try {
        const response = await fetch('https://sheetdb.io/api/v1/smyv5xfvpjqeh', {
            headers: {
                'Authorization': 'Basic ' + credentials,
            },
        });

        const employees = await response.json();
        
        return employees.reduce((arr, employee) => {
            if (!arr.includes(employee.function)) {
                return [
                    employee.function,
                    ...arr
                ];
            }
            return arr;
        }, []);
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