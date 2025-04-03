# GithubIcon Component

A simple and customizable floating GitHub icon component for React and Next.js applications.

## Features

- Displays a floating GitHub icon that links to a specified profile.
- Supports custom images instead of the default GitHub SVG.
- Allows customization of size and position.
- Works with **React**, **Next.js**, **Vite**, and other frameworks.

## Installation

### 1️⃣ Install via npm or yarn

```sh
npm install github-icon-link
# or
yarn add github-icon-link
```

## Usage

### 2️⃣ Import and Use the Component

```tsx
import GithubIcon from "github-icon-link";

export default function App() {
  return (
    <>
      <h1>My App</h1>
      <GithubIcon
        url="https://github.com/your-username"
        imageSrc="/custom-github-icon.png"
        size={50}
        position={{ bottom: "30px", right: "30px" }}
      />
    </>
  );
}
```

## Props

| Prop       | Type                                                                | Default Value                            | Description                                    |
| ---------- | ------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| `url`      | `string`                                                            | `"https://github.com/saurav-sinha-3141"` | GitHub profile link                            |
| `imageSrc` | `string`                                                            | `undefined`                              | Custom image URL for the icon (instead of SVG) |
| `size`     | `number`                                                            | `40`                                     | Icon size in pixels                            |
| `position` | `{ bottom?: string; right?: string; top?: string; left?: string; }` | `{ bottom: "20px", right: "20px" }`      | Position of the icon                           |

## Customization

You can change the **icon**, **size**, and **position** dynamically:

```tsx
<GithubIcon
  url="https://github.com/example"
  imageSrc="/github.png"
  size={60}
  position={{ top: "20px", left: "20px" }}
/>
```

## Next.js Compatibility

If using Next.js, ensure that the component is loaded **client-side**:

```tsx
"use client";
import GithubIcon from "github-icon-link";
```

##

