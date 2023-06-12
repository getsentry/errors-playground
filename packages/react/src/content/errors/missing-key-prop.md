---
title: "Missing key prop"
description: "The Missing Key Prop error: why it happens and how to fix it"
---

# Missing Key Prop error

The Missing Key Prop error is a very common error that happens when we try to render a list without providing the `key` prop to the repeating children.

```javascript
const Posts = () => {
  return (
    <ul>
      {posts.map((post) => (
        <Post post={post} />
        // ^ will throw the "Missing Key Prop"
      ))}
    </ul>
  );
};
```
