module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
      'airbnb',
      'prettier',
      'prettier/react'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'prettier'
    ],
    "rules": {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.jsx', '.js']
        }
      ],
      'import/prefer-default-export': 'off',
      'react/state-in-constructor': 'off',
      'react/static-property-placement': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'no-param-reassign': 'off'
    }
}
