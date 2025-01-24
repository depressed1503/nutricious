import Axios from "./axiosConfig";
import { CustomUser } from "./types";

export async function getCurrentUser() {
    return await Axios.get<CustomUser>("api/current_user/")
}
