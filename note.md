 improve performance
 1. if children component is re render only because the parent is re render, use memoize the component.
 2. if the child component received an array or object as props, the memoize won't work. so we use useMemo