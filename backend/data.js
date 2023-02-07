import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);

const data = {
  employees: [
    {
      name: "Mahinda Rajapaksha",
      email: "mahindar@gmail.com",
      password: bcrypt.hashSync("azOLe@1234", salt),
      image: "e1",
      description:
        "Mahinda Rajapaksa is a Sri Lankan politician who served as the 6th President of Sri Lanka from 2005 to 2015. He is a member of the Sri Lanka Freedom Party (SLFP) and has also served as the Prime Minister of Sri Lanka from 2004 to 2005. Rajapaksa has been an influential figure in Sri Lankan politics for several decades and has been credited with ending the 26-year-long civil war in the country.",
    },
    {
      name: "Anuththara Dilrukshi",
      email: "anu@gmail.com",
      password: bcrypt.hashSync("anuththara@123", salt),
      image: "e2",
      description:
        "I'm sorry, I don't have information on a person named Anuththra Dilrukshi. Could you provide more context or specify what you're looking for?",
    },
    {
      name: "Ranil Wikramasinghe",
      email: "ranil@gmail.com",
      password: bcrypt.hashSync("ranil@123", salt),
      image: "e3",
      description:
        "Ranil Wickremesinghe is a Sri Lankan politician who served as the Prime Minister of Sri Lanka on several occasions. He is a member of the United National Party (UNP) and is one of the most prominent political leaders in Sri Lanka. Wickremesinghe has held several high-level positions in the Sri Lankan government, including serving as the Minister of Industry and the Minister of Foreign Affairs. He has also been the leader of the opposition in Sri Lanka for several terms.",
    },
  ],

  services: [
    {
      name: "Salon Haircut and Blow Dry",
      image: "1",
      description:
        "A salon haircut and blow dry is a beauty service where a professional stylist will cut and style your hair using tools such as scissors, clippers, and a blow dryer. The stylist will typically consult with you to determine your desired hair length and style, and will then cut and shape your hair to achieve the look you want. The blow drying process is used to smooth and style your hair, giving it a finished, polished appearance. This service is usually performed at a hair salon or beauty parlor.",
      price: 13,
      time: 60,
    },
    {
      name: "Fringe/ Neck Trim only",
      image: "2",
      description:
        "A fringe or neck trim is a quick hair service that involves cutting only the hair on the forehead (fringe) or around the neckline to neaten up the appearance of a haircut. This service is typically requested by customers who have recently received a haircut and want to maintain its shape and appearance, or those who simply want to tidy up the hair around their face or neck. It's usually a quick and affordable service that can be performed at a hair salon or barbershop.",
      price: 3,
      time: 20,
    },
    {
      name: "Basic Color - TIGI",
      image: "3",
      description:
        "A basic color service using TIGI products refers to the process of coloring your hair using hair dye. TIGI is a popular professional hair care brand that offers a range of hair color products. A basic color service typically involves applying hair dye to your hair to cover gray hairs or to enhance your natural hair color. During this service, a stylist will assess your hair color and type, and choose a hair dye that will best suit your needs. The color will then be applied to your hair and processed according to the manufacturer's instructions. The end result will be hair with a refreshed, vibrant color.",
      price: 30,
      time: 60,
    },
    {
      name: "Basic Color - Clairol",
      image: "4",
      description:
        "Basic color service using Clairol products refers to the process of coloring your hair with hair dye from the Clairol brand. Clairol is a well-known hair care brand that offers a variety of hair color products for at-home and professional use. During a basic color service, a stylist will assess your hair color and type, and choose a Clairol hair dye that will best suit your needs. The dye will then be applied to your hair and processed according to the manufacturer's instructions. The end result will be hair with refreshed, vibrant color.",
      price: 25,
      time: 40,
    },
    {
      name: "Temporary Color Rinse",
      image: "5",
      description:
        "A temporary color rinse is a type of hair color that is designed to wash out after a few shampoos. This type of color is often used to add a temporary pop of color or to experiment with a new hair color without a long-term commitment. Temporary color rinses typically come in a wide range of shades and can be applied in the salon or at home. Unlike permanent hair dye, temporary color rinses do not penetrate the hair shaft, but instead coat the hair, resulting in temporary color that will fade over time with washing.",
      price: 2,
      time: 20,
    },
    {
      name: "virgin lightener",
      image: "6",
      description:
        "Virgin lightener would be a product that is designed to lighten this type of hair. This type of product typically contains lightening agents such as hydrogen peroxide or bleach, which can help to lift the natural hair color. The results of using a virgin lightener will vary depending on the product used and the natural color of the hair. It's important to follow the manufacturer's instructions carefully and to seek the advice of a professional stylist if you are considering using a virgin lightener.",
      price: 40,
      time: 80,
    },
    {
      name: "Lightner Touch up",
      image: "7",
      description:
        "A lightener touch-up refers to the process of reapplying a hair lightening product, such as bleach or hydrogen peroxide, to the hair in order to maintain or enhance the lightened hair color. This type of service is typically performed on hair that has previously been lightened and is starting to show signs of fading or roots (the natural hair color growing in at the roots). During a lightener touch-up, a stylist will assess the hair and reapply the lightening product, focusing on the roots and areas that have started to fade. The product will then be processed according to the manufacturer's instructions to achieve the desired level of lightening. This type of service is usually performed at a hair salon.",
      price: 30,
      time: 60,
    },
  ],
  users: [
    {
      name: "Nirmal",
      email: "sankalana.nirmal@gmail.com",
      password: bcrypt.hashSync("azOLe@123", salt),
      isAdmin: true,
    },
    {
      name: "Anuththara",
      email: "anuththarad@eyepax.com",
      password: bcrypt.hashSync("anu@123", salt),
      isAdmin: false,
    },
  ],
};

export default data;
