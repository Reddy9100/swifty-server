const GroceriesModel = require("../model/groceriesModel");

exports.AddItems = async (req, res) => {
  try {
    // Sample data
    const items = [
      // Fruits
      {
        name: "Bingo",
        category: "packets",
        price:40, // Price in INR
        discount: 10, // Discount in INR
        image: Buffer.from("https://www.bigbasket.com/media/uploads/p/l/294277_12-bingo-potato-chips-masala.jpg"), // Placeholder; replace with actual base64-encoded image or URL
      },
      {
        name: "Kisan Jam",
        category: "packets",
        price: 20, // Price in INR
        discount: 2, // Discount in INR
        image: Buffer.from("https://www.jiomart.com/images/product/original/491337362/kissan-mixed-fruit-jam-11-g-pack-of-60-product-images-o491337362-p590109845-0-202304281330.jpg?im=Resize=(1000,1000)"),
      },
      {
        name: "Coke",
        category: "packets",
        price: 70, // Price in INR
        discount: 5, // Discount in INR
        image: Buffer.from("https://media.istockphoto.com/id/458464735/photo/coke.jpg?s=612x612&w=0&k=20&c=YbmiazMmY0DkWh_W8T0pBkOgai2k62hGF1TJn9EC5W0="),
      },
      {
        name: "Moong Daal",
        category: "packets",
        price: 50, // Price in INR
        discount: 5, // Discount in INR
        image: Buffer.from("https://www.haldirams.com/media/catalog/product/cache/71134970afb779eb7860339989626b7e/m/o/moong_dal_1.jpg"),
      },
      {
        name: "Black Water",
        category: "packets",
        price: 100, // Price in INR
        discount: 4, // Discount in INR
        image: Buffer.from("https://m.media-amazon.com/images/S/aplus-media-library-service-media/0c303920-8b4f-4c10-aff2-141f90e2dc8b.__CR0,0,991,991_PT0_SX300_V1___.jpg"),
      },

      // Vegetables
      {
        name: "Tang",
        category: "packets",
        price: 50, // Price in INR
        discount: 5, // Discount in INR
        image: Buffer.from("https://m.media-amazon.com/images/I/61-LMkow52L.jpg"),
      },
      {
        name: "Sev",
        category: "packets",
        price: 60, // Price in INR
        discount: 7, // Discount in INR
        image: Buffer.from("https://m.media-amazon.com/images/I/81-1exsDYNL.jpg"),
      },
      {
        name: "Kurkure",
        category: "packets",
        price: 40, // Price in INR
        discount: 10, // Discount in INR
        image: Buffer.from("https://www.bigbasket.com/media/uploads/p/l/148392_14-kurkure-namkeen-green-chutney-rajasthani-style.jpg"),
      },
      {
        name: "lays",
        category: "packets",
        price: 40, // Price in INR
        discount: 5, // Discount in INR
        image: Buffer.from("https://www.bigbasket.com/media/uploads/p/l/294297_22-lays-potato-chips-calm-cream-onion-flavour.jpg"),
      },
      {
        name: "Maaza",
        category: "packets",
        price: 60, // Price in INR
        discount: 10, // Discount in INR
        image: Buffer.from(
          "https://m.media-amazon.com/images/I/61+jGc7vLIL.jpg"
        ),
      },
    ];

    await GroceriesModel.insertMany(items);

    res.status(200).json({ message: "Sample data added successfully!" });
  } catch (error) {
    console.error("Error adding items:", error);
    res.status(500).json({ error: "Failed to add sample data" });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await GroceriesModel.find().exec();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Failed to fetch items" });
  }
};
