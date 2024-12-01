//for register call
export const UserRegister = async (data) => {
    try {
        const res = await fetch("http://localhost:8080/signUp", {
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
//login call
export const UserLogin = async (data) => {
    try {
        const res = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
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
//logout call
export const LogoutUser = async () => {
    try {
        const res = await fetch("http://localhost:8080/logout?email", {
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
