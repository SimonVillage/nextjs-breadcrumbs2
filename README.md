# nextjs-breadcrumbs2

> A dynamic, highly customizable breadcrumbs component for Next.js

[![NPM](https://img.shields.io/npm/v/nextjs-breadcrumbs2.svg)](https://www.npmjs.com/package/nextjs-breadcrumbs2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Fork of nextjs-breadcrumbs

I forked this package as the original package wasn't compatible with the new Next.js 13. All you have to do is replace your imports with:

```
import Breadcrumbs from 'nextjs-breadcrumbs2';
```

## Next.js 13 App directory structure

Make sure that you add `'use client'` on top of the file which imports `nextjs-breadcrumbs2` as client side rendering is required.

## Installation

```bash
yarn add nextjs-breadcrumbs2
```

## Prerequisites

This component is highly customizable. You can provide your own CSS via classes or via inline styles.
If you want to use the default styling however, you need to make sure to import the CSS file provided by this package.
Inside your `_app.js` paste `import 'nextjs-breadcrumbs2/dist/index.css';` at the top. This is not needed, if you just want to use your custom styles.

## Usage

The component needs to be used within Next.js and won't work in plain React.
It will always display a dynamic Breadcrumb navigation, based on the current path of the Next router.

```tsx
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs2';

const Example = () => {
  return <Breadcrumbs useDefaultStyle rootLabel="Home" />;
};
```

## Pass custom list of characters that should be replaced in each label

By default the breadcrumb labels are generated through the url path. In many cases you might want to transform certain special characters from the path. One example would be transforming all the '.' into ' '. You can pass an array here with your preferred transformation list and the component will take care of that for you.

```tsx
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs2';

// Before: title.to.be.transformed  After: title to be transformed
const Example = () => {
  return (
    <Breadcrumbs
      useDefaultStyle={true}
      replaceCharacterList={[{ from: '.', to: ' ' }]}
    />
  );
};
```

## Custom label transformation

It's possible to pass a label transformation function to customize the labels.

```tsx
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs2';

const Example = () => {
  return (
    <Breadcrumbs
      useDefaultStyle
      transformLabel={(title) => title + ' Custom Label'}
    />
  );
};
```

## Omit the root / home label

It's possible to omit the root level entirely. This makes sense if you have an URL like https://website.com/home. If you wouldn't omit the root label in this case, the Breadcrumbs would show something like `/home/home`.

```tsx
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs2';

const Example = () => {
  return <Breadcrumbs omitRootLabel />;
};
```

## Omit certain path indexes from breadcrumb navigation

It's possible to pass an array containing all the indexes of the path that should be omitted and not be rendered as labels. If we have a path like `/home/category/1` then you might want to pass `[2]` here, which omits the breadcrumb label `1`. Indexes start with 0. Example: `[2]` Default: `undefined`.

```tsx
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs2';

// path: /nested/this-is-ommited will omit the this-is-ommited breadcrumb
const Example = () => {
  return <Breadcrumbs useDefaultStyle={true} omitIndexList={[1]} />;
};
```

## Custom styling (CSS)

It's possible, to style each HTML element of this component separetely. This can be done either via inline styles or by assigning your own classes.

## Overview of props

| Prop name             | Description                                                                                                                                                                                                                                      | Data type       | Default                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ------------------------ |
| useDefaultStyle       | If true, the default styles are used. Make sure to import the CSS in \_app.js.                                                                                                                                                                   | boolean         | false                    |
| rootLabel             | The title for the very first breadcrumb pointing to the root directory.                                                                                                                                                                          | string          | 'HOME'                   |
| omitRootLabel         | Boolean indicator whether the root label should be omitted.                                                                                                                                                                                      | boolean         | false                    |
| labelsToUppercase     | Boolean indicator if the labels should be displayed as uppercase.                                                                                                                                                                                | boolean         | false                    |
| replaceCharacterList  | Array containing a list of specific characters that should be replaced in the label. This can be useful to convert special characters such as vowels.                                                                                            | Array           | [{ from: '-', to: ' ' }] |
| transformLabel        | A transformation function that allows to customize the label strings. Receives the label string and has to return a string or React Component.                                                                                                   | React.ReactNode | null                     |
| omitIndexList         | Array containing all the indexes of the path that should be omitted and not be rendered as labels. If we have a path like '/home/category/1' then you might want to pass '[2]' here, which omits the breadcrumb label '1'. Indexes start with 0. | Array           | null                     |
| containerStyle        | An inline style object for the outer container                                                                                                                                                                                                   | Object          | null                     |
| containerClassName    | Classes to be used for the outer container. Won't be used if useDefaultStyle is true                                                                                                                                                             | string          | null                     |
| listStyle             | An inline style object for the breadcrumb list                                                                                                                                                                                                   | Object          | null                     |
| listClassName         | Classes to be used for the breadcrumb list                                                                                                                                                                                                       | string          | null                     |
| inactiveItemStyle     | An inline style object for the inactive breadcrumb list item                                                                                                                                                                                     | Object          | null                     |
| inactiveItemClassName | Classes to be used for the inactive breadcrumb list item                                                                                                                                                                                         | string          | null                     |
| activeItemStyle       | An inline style object for the active breadcrumb list item                                                                                                                                                                                       | Object          | null                     |
| activeItemClassName   | Classes to be used for the active breadcrumb list item                                                                                                                                                                                           | string          | null                     |

## License

MIT © [Simon Hausdorf](https://github.com/SimonHausdorf)
