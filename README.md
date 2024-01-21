# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `setup enviroment`

```bash
npm install prettier eslint-plugin-prettier eslint-config-prettier -D
```

### tạo file `.editorconfig` để chia sẻ 1 số setting giữa các editor với nhau

```bash
[*]
indent_style=space
indent_size=2
```

### tạo file `.prettierrc` để chia sẻ setting prettier giữa các editor

```json
{
  "arrowParens": "always",
  "semi": true,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
}
```

### tạo file `.eslintrc` để chia sẻ setting eslint giữa các editor

```json
{
  "extends": ["react-app", "prettier"],
  "plugins": ["react", "prettier"],
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "always",
        "semi": true,
        "trailingComma": "none",
        "tabWidth": 2,
        "endOfLine": "auto",
        "useTabs": false,
        "singleQuote": true,
        "printWidth": 120,
        "jsxSingleQuote": true
      }
    ]
  }
}
```

### thêm scripts vào package.json

```json
{
  "lint": "eslint --ext js,jsx,ts,tsx src/",
  "lint:fix": "eslint --fix --ext js,jsx,ts,tsx src/",
  "prettier": "prettier --check \"src/**/(*.jsx|*.js|*.tsx|*.ts|*.css|*.scss)\"",
  "prettier:fix": "prettier --write \"src/**/(*.jsx|*.js|*.tsx|*.ts|*.css|*.scss)\""
}
```

### Sau khi hoàn thành các bước ở trên, lúc này chỉ cần chạy

- `npm run lint`: Kiểm tra lỗi eslint
- `npm run lint:fix`: Fix lỗi liên quan đến eslint (đôi lúc có những lỗi bạn phải tự fix bằng tay)
- `npm run prettier`: kiểm tra lỗi prettier format
- `npm run prettier:fix`: Tự fix lỗi prettier format

### Thêm file `.prettierrignore` và `.eslintignore` để ignore những file bạn không muốn prettier và eslint format
