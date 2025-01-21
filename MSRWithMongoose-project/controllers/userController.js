import userServices from "../services/userServices.js";

const userController = {
    async createUser(req, res) {
        try {
            const user = await userServices.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async getUsers(req, res) {
        try {
            const users = await userServices.getUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async getUserById(req, res) {
        try {
            const user = await userServices.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async getUserByEmail(req, res) {
        try {
            const user = await userServices.getUserByEmail(req.params.email);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async deleteUser(req, res) {
        try {
            const result = await userServices.deleteUser(req.params.id);
            if (result.deletedCount === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async updateUser(req, res) {
        try {
            const result = await userServices.updateUser(req.params.id, req.body);
            if (result.deletedCount === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json({ message: 'User Updated successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async authenticateUser(req, res) {
        try {
            const user = await userServices.authenticateUser(req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}
export default userController;