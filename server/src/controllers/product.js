const { product } = require("../../models");
const { Op } = require("sequelize");

exports.addArtikel = async (req, res) => {
    try {
      let data = {
        title: req.body.title,
        harga: req.body.harga,
        author: req.body.author,
        desc: req.body.desc,
        year : req.body.year,
        image: req.files.image[0].filename,
        pdf: req.files.pdf[0].filename,
      };
  
      let newArtikel = await product.create(data);
  
      let newArtikelData = await product.findOne({
        where: {
          id: newArtikel.id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
  
      res.send({
        status: "success",
        data: {
          artikel: {
            ...newArtikelData.dataValues,
            pdf: process.env.PATH_FILE_PDF + newArtikelData.pdf,
            image: process.env.PATH_FILE_IMG + newArtikelData.image,
          },
        },
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "Failed",
        message: "Error Add Books",
      });
    }
};

exports.getArtikels = async (req, res) => {
    try {
      let data = await product.findAll({
        raw: true,
        where: {
          harga: {
            [Op.gte]: 10,
          },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
  
      data = data.map((item) => {
        item.pdf = process.env.PATH_FILE_PDF + item.pdf;
        item.image = process.env.PATH_FILE_IMG + item.image;
        return item;
      });
  
      res.send({
        status: "success",
        data: {
          artikel: data,
        },
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "Failed",
        message: "Error Fetching All Artikels",
      });
    }
  };

exports.deleteAtikel = async (req, res) => {
    try {
      const { id } = req.params;
  
      await product.destroy({
        where: {
          id,
        },
      });
  
      res.send({
        status: 'success',
        message: `Delete Artikel id: ${id} finished`,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: 'failed',
        message: 'Server Error',
      });
    }
  };