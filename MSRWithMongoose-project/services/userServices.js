import userRepository from "../repositories/userRepository.js";

const userServices = {
    async createUser(user) {
        return await userRepository.createUser(user);
    },
    async getUsers() {
        return await userRepository.getUsers();
    },
    async getUserById(id){
        return await userRepository.getUserById(id);
    },
    async getUserByEmail(email){
        return await userRepository.getUserByEmail(email);
    },
    async deleteUser(id){
        return await userRepository.deleteUser(id);
    },
    async updateUser(id,userData){
        return await userRepository.updateUser(id,userData);
    },
    async authenticateUser(email,password){
        return await userRepository.authenticateUser(email,password);
    }
}
export default userServices;