const Shopper = require("../models/shoppers");

exports.index = async (req, res, next) => {
  try {
    const shopper = await Shopper.find().sort({ id: -1 });
    res.status(200).json(
      shopper,
    );
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};

exports.insert = async (req, res, next) => {
  const { id, name, desc, image, category, price } = req.body;
  try {
    const shopper = new Shopper();
    shopper.id = id;
    shopper.name = name;
    shopper.desc = desc;
    shopper.image = image;
    shopper.category = category;
    shopper.price = price;
    await shopper.save();
    res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    es.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};
