module.exports = {
    entry: __dirname + '/client/src/Components/index.jsx',	// Your starting file
    module: {
    rules: [
        { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['@babel/preset-react', '@babel/preset-env']	
            }
        },
        {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
            ]
        },
        {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
        }
    ]
    },
    node: {
        fs: "empty"
    },
    output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
    }
};