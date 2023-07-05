# laf-demo-bundle

测试在 `laf func push` 之前先将函数打包编译, 再上传. 这样的优势:

1. 可以支持 `import` 私有依赖包, `monorepo` 中未发布的包
2. 只要 laf 能运行编译打包后的产物, 那么理论上可以自由地开发和组织任意复杂项目, 比如 `nestjs` `express` `koa` `egg` `nextjs` `nuxtjs`等 web 框架, 都可以通过打包成单文件函数, 再加上`adapter`的方式, 运行在 `laf` 中.

## 使用

在主目录下执行 `pnpm run build` 编译整个项目.  
在 `apps/laf/dist` 可以找到编译产物进行测试

## 当前状态

编译打包之后的`mjs`可以正常运行, `cjs`无法运行.
