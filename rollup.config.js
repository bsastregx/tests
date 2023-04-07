import nodeResolve from "@rollup/plugin-node-resolve";
import { readdir, unlink } from 'fs/promises'
const cleanWWW = () => ({
  name: 'clean www', 
  buildStart: async () => {
    const paths = await readdir('./www')
    for (const path of paths) {
      if (!path.includes('.html')) await unlink(join('./www', path))
    }
  }
})

export default {
  input: ["./src/app.js", "./src/views/home.js"],
  output: {
    dir: "./www",
    format: "es",
  },
  plugins: [
    cleanWWW(),
    nodeResolve()
  ]
};
