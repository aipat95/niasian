import api from "./MainApi";

export const UserRegister = async (data) => {
    try {
        // const res = awaid api.post('/signUp',data);
        //return res.data
//delete 11 lines
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
//for shorter ver
export const UserReg = async (data) => {
    try {
        const res = await api.post('/signUp',data);
        if (!res.ok) {
            throw new Error("Fail" + res.status);
        }
         return res.data;
    } catch (error) {
        alert(error);
    }
}

export const UserLogin = async (data) => {
    try {
        // const res = awaid api.post('/login',data);
        //return res.data;
//delete 8 lines
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

export const LogoutUser = async () => {
    try {
        // const res = awaid api.post('/logout');
        //return res;
        //DELETE 4 lines
        const res = await fetch("http://172.22.56.121:8080/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
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
        console.log("Logout successful", resData);
        alert("Logout successful!")

    } catch (error) {
        alert(error);
    }
}