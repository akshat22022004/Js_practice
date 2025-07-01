[
  {
    $group: {
      _id: "$favoriteFruit",
      count:{
        $sum: 1 // this tells that when ever you find the count of the any
        //  fruit add in respective one bannana++, apple++, orange++
      }
    },
  }, // another stage now
  {
   $sort:{
     count: -1 // count is done in asceding order.
   } 
  }, // another pipeline
  {
   $limit: 2 // give the limit here and get the top 2 
  }
]
[
    {
        $group:{
            _id: null,
            averageAge:{
                $avg: "$age" // calculates the average of age here.
            }
        }
    }
]

// find the number of male and females 
[
    {
        $group: {
            _id: "$gender",
            count: {
                $sum: 1
            }
        }
    }
]
// which country has highest number of users

[
    {
        $group: {
            _id: "$country",
            count: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            count: -1
        }
    },
    {
        $limit: 1
    }
]