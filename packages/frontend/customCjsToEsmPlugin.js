export default function customCjsToEsmPlugin() {
  return {
    name: 'custom-cjs-to-esm-plugin',
    transform(code, id) {
      // threex.dynamictexture.js is in CommonJS/AMD style without exports and we found no better way to import it 😭
      // If you know a better way, please let us know!
      if (id.includes('threex.dynamictexture.js')) {
        const modifiedCode = `${code}\nconst DynamicTexture = THREEx.DynamicTexture;\nexport { DynamicTexture };`

        return {
          code: modifiedCode,
          map: null,
        }
      }
    },
  }
}
