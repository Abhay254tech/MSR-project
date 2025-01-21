import User from '../models/usermodel.js';

const userRepository={
    async createUser(users){
        return await User.create(users);
    },
    async getUsers(){
        return await User.find();
    },
    async getUserById(id){
        return await User.findById(id); 
    },
    async getUserByEmail(email){
        return await User.findOne({email:email});
    },
    async deleteUser(id){
        return await User.deleteOne({ _id: id });
    },
    async updateUser(id,userData){
        return await User.findByIdAndUpdate(id,userData);
    },
    async authenticateUser(email,password){
        return await User.findOne({email:email,password:password});
    }
   
}
export default userRepository;