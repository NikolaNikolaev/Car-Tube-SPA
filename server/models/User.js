var userSchema = {
    bsonType: "object",
    required: ["email", "password"],
    properties: {
        email: {
            bsonType: "string",
            description: "user's email"
        },
        password: {
            bsonType: "string",
            description: "user's password"
        },
        car_offers: {
            bsonType: ["array"],
            uniqueItems: true,
            items: {
                bsonType: "objectId",
                description: "car offer"
            }
        }
    }
};

db.runCommand({
    collMod: 'Users',
    validator: {
        $jsonSchema: userSchema
    }
});