// let time = 0;
// let numberTest = 0;
// let status = 200; 

const tests = [
    {
        number: 1,
        time: 10,
        status: 200
    },
    {
        number: 2,
        time: 15,
        status: 404
    },
]

const checkStatus = () => {
    if (tests.status === 200) {
        return 'OK';
    } else {
        return 'WA';
    }
};

export { tests, checkStatus };
