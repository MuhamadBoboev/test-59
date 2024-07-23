import axios from "axios";

export const deleteQuery = async (url: string): Promise<void> => {
    await axios.delete(`http://localhost:3000/${url}`);
};