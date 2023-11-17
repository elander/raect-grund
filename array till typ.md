Yes, you can do it the other way around. If you have an array of possible values for the `status`, you can use TypeScript's `typeof` and `keyof typeof` to create a union type from that array. Here's how you can achieve this:

1. Define the array of status values.
2. Create a type by mapping over the keys of the object created from the array.
3. Use this type for the `status` property in your `Task` interface.

Here's an example:

```typescript
const statusValues = [
    "open",
    "todo",
    "waiting",
    "doing",
    "done",
] as const;

type StatusArray = typeof statusValues;
type TaskStatus = StatusArray[number];

interface Task {
    id: string;
    status: TaskStatus;
}

// Usage
const task: Task = {
    id: "1",
    status: "doing", // This must be one of the values from statusValues
};
```

In this code:

-   `statusValues` is a constant array of status strings.
-   `StatusArray` is a type representing the array itself.
-   `TaskStatus` is a union type derived from the elements of the `StatusArray`. The `[number]` index type query is used to get the type of the array's elements.
-   The `Task` interface then uses this `TaskStatus` type for its `status` property.

This approach ensures that the `status` property in the `Task` interface is constrained to the values defined in the `statusValues` array.
