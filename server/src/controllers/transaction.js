const {
    user,
    product,
    transaction,
    artikebuy,
    profile,
  } = require("../../models");


exports.addTransaction = async (req, res) => {
    try {
      let idUser = req.user;
  
      let dataUser = {
        idUser: idUser,
        idProduct: req.body.idProduct,
        total: 0,
      };
  
      let getProduct = await product.findOne({
        where: {
          id: data.idProduct,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
  
      data = {
        ...data,
        total: getProduct.harga,
        status: 'success',
      };
  
      let addCart = await cart.create(data);
  
      res.send({
        status: "success",
        addCart,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "Failed",
        message: "Error Adding Cart",
      });
    }
  };