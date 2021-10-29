db.getCollection("check_check").updateMany({
    $or: [
        {
            "Metadata": {
                $exists: false
            }
        },
        {
            "Metadata.Created.Uid": {
                $exists: false
            }
        },
        {
            "Metadata.Created.At": {
                $exists: false
            }
        },
        {
            "Metadata.LastModified.Uid": {
                $exists: false
            }
        },
        {
            "Metadata.LastModified.At": {
                $exists: false
            }
        }
    ]
}, {
    $set: {
        "Metadata.Created": {
            Uid: "admin",
            At: ISODate("2021-10-29T01:00:00.00Z")
        },
        "Metadata.LastModifed": {
            Uid: "admin",
            At: ISODate("2021-10-29T01:00:00.00Z")
        }
    }
});
