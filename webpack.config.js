module.exports = {
    entry: './src/client/index.js', //indicas el archivo que va a empaquetar
    output: {
        path: __dirname + '/src/public', //indicas el directorio de salida
        filename: 'bundle.js' //indicas el nombre del archivo empaquetado
    },
    module:{
        rules:[
            {
                use: 'babel-loader', //comunica babel con webpack
                test: /\.js$/,      //indicas que comvertirá todos los .js
                exclude: /node_modules/    //todos excepto los modulos de node
            }
        ]
    }
}