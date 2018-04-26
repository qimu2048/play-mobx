import React from "react";
import { observable, action, autorun, trace } from "mobx";
import { observer } from "mobx-react";


let message = observable({
  title: "Foo",
  author: {
      name: "Michel"
  },
  likes: [
      "John", "Sara"
  ]
});


autorun(() => {
  console.log(message.likes.length);
  trace()
})
message.likes.push("Jennifer");





