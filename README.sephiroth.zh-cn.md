## 前端规范
# 编程约定
1. [版本]全面拥抱html5、css3、es6。强制要求使用less。
2. [模块化]本项目不使用commonjs、amd、cmd、umd规则

    说明：使用import、export  
    *对象（推荐）：  

        export class xxx extends {...} (out name)  
        export default class xxx extends{...}(out default)  
        
    import {xxx} from 'xxx'(for out name)  
    import xxx from 'xxx'(for out default)  
    字面量：   
    export default { id:'',get name(){...} }  
    import linq from ‘xxx’  
    import 不允许使用`${xxx}`  

3. [对象]common utis 封装对象，getset，method，禁止使用function声明。
4. [参数]声明均要求{}支持默认值
   正例：
   tablehelper({name,code = 'table',data=[]}){

   }
5. [注释]所有method，get、set均要求有注释（推荐使用Document This）
   说明：
   注释名 语法  含义  示例
   @param  @param 参数名 {参数类型} 描述信息  描述参数的信息 @param name {String} 传入名称 （必须）
   @return @return {返回类型} 描述信息 描述返回值的信息    @return {Boolean} true:可执行;false:不可执行 （必须）
   @author @author 作者信息 [附属信息：如邮箱、日期]  描述此函数作者的信息  @author 张三 2015/07/21 （*建议书写）
   @version    @version XX.XX.XX   描述此函数的版本号   @version 1.0.3 
   @example    @example 示例代码   @example setTitle('测试') 如下
   正例：
   /**
    * table帮助类
    * 
    * @class tableh
    */
    class tableHelper {
        /**
        * table初始化
        * 
        * @param {any} {name,code = 'table',data = []} 
        * @returns 
        * @memberof tableh
        */
        tableInit({name,code = 'table',data = []}){
                // 代码省略
                return table
        }
    }
6. [命名] 
   * 类名：Pascal Case(帕斯卡命名) 
   * 方法名，属性名，函数名：Camel Case（小驼峰命名）
   * 常量：全部大写，下划线分词
   * 文件(js)(文件夹)：全部小写，中横线分词
   * 文件(vue):Pascal Case(帕斯卡命名)
7. 严格模式，手动声明严格模式以便配合ECMAScript 5 'use strict' 类、函数、文件等按照作用域添加
8. 变量声明
   不允许使用提升模式声明变量（var 禁止使用）统一使用let 作用域变量均统一声明，尽量不要出现随用随写

#vue约定
1. vue方法放置顺序
    1 components
    2 props
    3 data
    4 created
    5 mounted
    6 activited
    7 update
    8 beforeRouteUpdate
    9 metods
    10 filter
    11 computed
    12 watch
2. props 必须声明验证，指定验证格式，适当情况指定默认值
  正例：
  props: {
    miniVariant: {
      type: Boolean,
      required: true
    },
    clipped: {
      type: Boolean,
      required: true
    },
    drawer: {
      type: Boolean,
      required: true
    },
    st: {
      type: String,
      required: true
    }
  }
  反例：
  props: ['miniVariant', 'clipped', 'drawer']
3. 嵌套路由应用场景
  页面嵌套才会有嵌套路由，并不是url嵌套，url与路径并不一致对应，一级路由按照文件夹区分，后续路由根据页面嵌套情况设置是否嵌套
  嵌套路由要求组件具有<router-view></router-view>
  