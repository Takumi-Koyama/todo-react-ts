module.exports = {
  //typescriptなので「ts-jest」
  preset: 'ts-jest',
  //test環境はhtmlやcssなどなど
  testEnvironment: 'jsdom',
  //document系のテストで必要なもの、テストはどこで実行するものか
  roots: ['<rootDir>/test'],
  moduleNameMapper: {
    //package.jsonから持ってくる .cssで終わるファイルはidentity-obj-proxyを読み込んでくる
    '\\.css$': 'identity-obj-proxy',
  },
};
