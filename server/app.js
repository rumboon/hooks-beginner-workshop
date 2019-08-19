const express = require('express');
const cors = require('cors');

const app = express();
const employeesData = require('./data/employees');
const functionsData = require('./data/functions');

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));

function filterEmployees(query) {
    const { FE, UX, VD, INFRA, PHP, IOS } = query;

    if (Object.keys(query).length === 0) {
        return employeesData;   
    }

    return employeesData.filter((employee) => {
        switch (employee.function) {
            case 'Visual Designer':
                return Boolean(VD);
            case 'UX Designer':
                return Boolean(UX);
            case 'Frontend Developer':
                return Boolean(FE);
            case 'Infra':
                return Boolean(INFRA);
            case 'iOS Developer':
                return Boolean(IOS);
            case 'PHP Developer':
                return Boolean(PHP);
            default:
                return false;
        }
    });
}

app.get('/api/employees', (req, res) => {
    res.send(filterEmployees(req.query));
});

app.get('/api/functions', (req, res) => {
    res.send(functionsData);
});

app.listen(5000, () => {
    console.log('SXM Employee server is running @ port 5000');
});
