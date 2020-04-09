module.exports = function(){
  return {
    'preset': [
      [
        '@babel/preset-env',
        {
          target:{
            chrome: 59,
            edge: 13,
            firefox: 50,
            safari: 8
          }
        }
      ]
    ]
  }
}