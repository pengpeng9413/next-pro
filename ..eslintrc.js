module.exports = {

    parser:  '@typescript-eslint/parser',
    extends:[ 
        'prettier/@typescript-eslint',// 后者规范会覆盖前者，后期思考应该将规范抽出来作为一个私服
        'plugin:prettier/recommended'
        ],                            
    plugins: ['@typescript-eslint'],
    env:{                         
        browser: true,
        node: true,
    },
    settings: {             //自动发现React的版本，从而进行规范react代码
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    }, 
    parserOptions: {        //指定ESLint可以解析JSX语法
        "ecmaVersion": 2019,
        "sourceType": 'module',
        "ecmaFeatures":{
            jsx:true
        }
    },
    rules: {  // 如果有不适合的规则，可以在此调整，进行覆盖
    
    }
}