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
        return res.json();
 
    } catch (error) {
        alert(error);
    }
}
//logout call
export const LogoutUser = async (email) => {
    try {
        const res = await fetch("http://localhost:8080/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
        if (res.ok) {
            const data = await res.json();
            alert(data.message); // "Logout successful!"
        } else {
            const error = await res.json();
            alert(error.error); // "User not found!"
        } 
    } catch (error) {
        alert(error);
    }
}
