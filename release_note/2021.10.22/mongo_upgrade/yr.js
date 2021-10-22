// 更新问题模型
db.yr_problem.find({
    ProblemMeasure: {
        $exists: true
    }
}).forEach(function(x) {
    db.yr_problem.updateMany({
        _id: x._id
    }, {
        $unset: {
            ProblemMeasure: ""
        },
        $set: {
            ProblemMeasures: [x.ProblemMeasure]
        }
    });
});

// 更新评价模型
db.yr_evaluate_index.find({
    Comment: {
        $exists: true
    }
}).forEach(function(x) {
    db.yr_evaluate_index.updateMany({
        _id: x._id
    }, {
        $unset: {
            Comment: ""
        },
        $set: {
            SourceComment: x.Comment,
            LatestComment: x.Comment
        }
    });
});
