import api from './mainapi';

export const UserRegister = async (data) => {
    try {
        const res = await fetch("http://172.22.56.121:8080/signUp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userRole: data.role,
                email: data.email,
                password: data.password,
            }),
        });
        if (!res.ok) {
            throw new Error("Fail" + res.status);

        }
        const reData = await res.json();
        console.log("Resgister successful", reData);
    } catch (error) {
        alert(error);
    }
}

export const UserLogin = async (data) => {
    try {
        const res = await fetch("http://172.22.56.121:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        });
        if (!res.ok) {
            throw new Error(`Fail ${res.status}`);
        }
        const contType = res.headers.get("content-type");
        let resData;
        if (contType && contType.includes("application/json")) {
            resData = await res.json();
        } else {
            resData = await res.text();
        }
        console.log("login successful", resData);

    } catch (error) {
        alert(error);
    }
}
export const getAllUser = async (data) => {
    try {
        const response = await api.get('/user',
            {
                email: data.email,
                password: data.password
            });
        return response;
    } catch (error) {
        alert(error)
    }
}
