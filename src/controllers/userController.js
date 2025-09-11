

import User from "../models/user.js";

console.log(User)

export const createUser = async (req, res) => {
    const { name, email, password, gender } = req.body;
    
    const newUser = new User({ name, email, password, gender })
    
    await newUser.save();
    
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: newUser,
    });

}

export const getAllUsers = async (req, res) => {
    const users = await User.find().select("-password -__v ");
    res.status(200).json({
      status: "success",
      message: "Users fetched successfully",
      data: users,
    });
}

export const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id).select("-password -__v ");
    if (!user) { 
        return res.status(404).json({
            status: "error",
            message: "User not found"
        });
    }
    res.status(200).json({
        status: "success",
        message: "User fetched successfully",
        data: user
    });
}

export const updateUserById = async (req, res) => { 
    const { id } = req.params;
    const newData = req.body;

    const user = await User.findByIdAndUpdate(id, newData, { new: true, runValidators: true });
    

    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      data: user,
    });

};


export const deleteUserById = async (req, res) => { 
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
        return res.status(404).json({
            status: "error",
            message: "User not found"
        });
    }

    res.status(200).json({
      status: "success",
      message: "User deleted successfully",
      data: user,
    });
};

