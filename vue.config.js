module.exports = {
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
            args[0].title = 'Qevoxo | Web Walkie Talkie'
            return args
        })
    }
}
