var carOfferSchema = {
    bsonType: "object",
    required: ["title", "description", "brand", "model", "year", "imageUrl", "fuel", "price", "user_id"],
    properties: {
        title: {
            bsonType: "string",
            description: "car offer's title"
        },
        description: {
            bsonType: "string",
            description: "car offer's description"
        },
        brand: {
            bsonType: "string",
            description: "car offer's brand"
        },
        model: {
            bsonType: "string",
            description: "car offer's model"
        },
        year: {
            bsonType: "number",
            description: "car offer's year"
        },
        imageUrl: {
            bsonType: "string",
            description: "car offer's imageUrl"
        },
        fuel: {
            bsonType: "string",
            description: "car offer's fuel"
        },
        price: {
            bsonType: "number",
            description: "car offer's price"
        },
        user_id: {
            bsonType: "objectId",
            description: "creator's id of the car offer"
        },
        seller: {
            bsonType: "string",
            description: "creator of the car offer"
        }
    }
};

// db.runCommand({
//     collMod: "CarOffers",
//     validator: {
//         $jsonSchema: carOfferSchema
//     }
// });