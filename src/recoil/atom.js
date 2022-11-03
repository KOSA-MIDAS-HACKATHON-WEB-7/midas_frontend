import { atom } from "recoil";

export const user = atom({
    key: "user",
    default: {
        accountId: "",
        department: "",
        email: "",
        id: "",
        password: "",
        position: "",
        role: "",
        userName: ""
    }
})