const DEFAULT_HEADER = {
    "Content-Type": "application/json",
};

export const getAllEmployees = async () => {
    let url = "http://dummy.restapiexample.com/api/v1/employees";
    const r = await fetch(url, {
        headers: DEFAULT_HEADER
    });
    return await r.json();
};