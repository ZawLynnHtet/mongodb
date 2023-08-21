const User = require("../models/user_model");

exports.postUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      if (user) {
        res.status(201).json({
          status: "success",
          message: "success",
          data: {
            user,
          },
        });
      }
    } catch (error) {
      return res.status(404).json({
        status: "fail",
        message: error,
      });
    }
  };