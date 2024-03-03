# 乾坤前端微服务使用演示

> 技术栈：qiankun，vite，vue，vue-router，element-plus，tailwindcss

本项目是基于`vite`搭建的`qiankun`项目，在`vite`中使用`qiankun`网上有两种方案

1、方案一：修改vite默认输出的target模式，将module改为esnext，开发环境主应用无法联通子应用

2、方案二：使用`vite-plugin-qiankun`插件

**本项目提供第三种方案：在主应用定义子应用的生命周期函数，通过重写乾坤`fetch`方法将子应用入口文件用`script`标签加载，并使用`@rollup/plugin-alias`插件解决应用组件共享问题**

## 安装

```bash
# 主应用
cd main
npm i

# 子应用1
cd ../sub1
npm i

# 子应用2
cd ../sub2
npm i
```

## 开发

```bash
# 在 main 目录下
npm run dev

# 在 sub1 目录下
npm run dev

# 在 sub2 目录下
npm run dev
```

打开浏览器访问`http://localhost:5173/`

## 构建

```bash
# 在 main 目录下
npm run build

# 在 sub1 目录下
npm run build

# 在 sub2 目录下
npm run build
```

将`main/dist`目录内容放到静态服务器上即可运行

## 关键技术

- 在主应用创建子应用生命周期，重写乾坤`fetch`方法解决开发环境访问子应用问题
- 在`.env`文件配置子应用包名
- 用`@rollup/plugin-alias`插件解决公共模块依赖问题
- 主应用和子应用保持相同路由解决浏览器历史记录错误问题

## 注意事项

- 路由命名尽量与组件文件位置保持一致，长得丑没关系，重要的是方便维护，工程越大，找文件成本越高
- 对外共享的组件内部`import`其它文件时要用相对路径，不能用`@`开头的路径，避免调用组件方找不到位置
- 乾坤`prefetch`配置为false，禁止预加载子应用避免开发环境非首个加载的子应用不生效

## 支持作者

支持作分享更多前端技术，不需要打赏一块几毛，不需要请作者喝咖啡，只需要下载作者和他兄弟开发的游戏就ok

<a href="https://tap.cn/s8QlN5Aa?channel=rep-rep_acpfb6g1hqa" target="_blank">TapTap平台《三国时代2》</a>

<a href="https://l.tapdb.net/P6mpaCUn?channel=rep-rep_bz33hlxrcub" target="_blank">TapTap平台《仙湖棋局》</a>
