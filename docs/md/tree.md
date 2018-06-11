# 描述
提供了树组件，可以在节点上增加图标

# 效果展示
<template>
  <div id="vtree-demo">
    <div class="trees">
      <div class="tree-box">
        <bs-tree v-model="checkedItem" :treeData="treeData1" :renderTitle="renderTitle" :isDrag="isDrag" @node-dblclick="dblclick"/>
      </div>
      <div class="tree-box">
        <input type="text" v-model="searchval"  placeholder="请输入..." style="border:1px solid #999;"/>
        <bs-tree :treeData="treeData2" ref="tree" :multiple="true" :renderBtn="renderBtn" />
      </div>
    </div>
    <div @click="getChecked">getChecked</div>
    <div>checkedItem：{{checkedItem}}</div>
    <div style="width:200px;height:100px;border:1px solid #ccc;" @dragover.prevent.stop @drop.prevent.stop="handleDrop">{{dragItem}}</div>
  </div>
</template>

<script>
export default {
  name: 'Tree-demo',
  data() {
    return {
      checkedItem: {},
      dragItem: {},
      treeData1: [
        {
          id: 1,
          title: '一级-01',
          type: 1,
          children: [
            {
              id: 2,
              title: '二级-01',
              type: 1,
              children: [
                {
                  id: 3,
                  title: '三级-01',
                  type: 1
                }
              ]
            },
            {
              id: 4,
              title: '二级-02',
              type: 1
            }
          ]
        }
      ],
      treeData2: [
        {
          id: 1,
          title: '一级-01',
          type: 1,
          pid: 0,
          children: [
            {
              id: 2,
              title: '二级-01',
              type: 1,
              children: [
                {
                  id: 3,
                  title: '三级-01',
                  type: 1,
                  children: [
                    {
                      id: 31,
                      title: '四级-01',
                      type: 1
                    },
                    {
                      id: 32,
                      title: '四级-02',
                      type: 1
                    }
                  ]
                }
              ]
            },
            {
              id: 4,
              title: '二级-02',
              type: 1
            }
          ]
        }
      ],
      searchval: '',
      renderTitle: (h, ctx) => {
        return h('div', {
          class: {'searched': ctx.item.searched}
        }, '#' + ctx.item.title)
      },
      renderBtn: (h, {item, index}) => {
        if (!item.children) {
          return h('div', {
            class: {'item-right': true}
          }, [
            h('span', {
              on: {
                click: () => { this.print(item) }
              }
            }, '删除'),
            h('span', {
              on: {
                click: () => { this.alert(item) }
              }
            }, '打印')
          ])
        }
      },
      isDrag: (item) => {
        return !item.children
      }
    }
  },
  computed: {
  },
  watch: {
    searchval(val) {
      this.$refs.tree.searchNodes(val,this.treeData2)
      if (val === '') {
        this.$refs.tree.addAttr (this.treeData2, {open: false})
      }
    }
  },
  methods: {
    getChecked() {
      const answer2 = this.$refs.tree.getChecked({hasHalf: false})
      console.log('tree getChecked ans', answer2)
    },
    print(target) {
      console.log('你点击的是：', target)
    },
    alert(target) {
      alert('你点击的是：' + target.title)
    },
    dblclick(node) {
      console.log(node)
    },
    handleDrop(e) {
      this.dragItem = e.dataTransfer.getData('Text')
    }
  },
  mounted() {
    let attr = {
      open: false,
      checked: false,
      searched: false,
      visible: true
    }
    
    this.$refs.tree.addAttr (this.treeData1, attr)
    this.$refs.tree.addAttr (this.treeData2, attr)

    this.$refs.tree.addPid (this.treeData2)
  }
}
</script>

<style scoped>
.trees {
  display: flex;
  justify-content: space-between;
}

.tree-box {
  width: 500px;
}
</style>

# 代码示例
```html


```
# props
属性名称|描述|类型|默认值
--|--|--|--
treeData|组件接受的树形数据|Array|[]
multiple|是否多选模式|Boolean|false
isDrag|是否可以拖拽|Function|(item) => false；(item当前节点对象)
renderTitle|自定义标题显示内容, 可以在标题前添加图标|Function|显示标题
renderBtn|自定义节点右侧按钮|Function|无

**注:**<br/>
`renderTitle`, `renderBtn`是通过render函数渲染, 其第二个参数有两个字段item(当前的节点)、index(当前节点的索引值)<br/>
节点的高亮需求可以通过`renderTitle`来处理<br/>
节点的右侧控制按钮图标可以通过`renderBtn`来处理<br/>

# tree属性
属性名称|描述
--|--
v-model|当前选中的节点

# treeData结构
参数|说明|类型|可选值|默认值
--|--|--|--|--
id|节点id|String|N|—
title|节点名称|String|N|—
open|节点是否展开(可以通过addAttr方法添加)|Boolean|Y|false
checked|节点复选框是否选中(可以通过addAttr方法添加)|Boolean|Y|false
visible|节点是否可见(可以通过addAttr方法添加)|Boolean|Y|true
selected|节点是否被选中(可以通过addAttr方法添加)|Boolean|Y|false
pid|节点父id(可以通过addPid方法添加)|Boolean|Y|false
children|子节点|Array[Object]|Y|—

# events
事件名称|描述|参数
--|--|--
select-change|选中的值发生改变|args1:树形选中数据，完整上下级,args2:数组型选中数据，只有最底级的数据
node-dblclick|节点双击事件|当前节点

# methods
方法名称|描述|参数|返回值
--|--|--|--
getNodes|通过属性查找节点|①查找条件②treeData(可选)|符合条件的节点组
searchNodes|搜索,过滤treeData|①过滤条件②treeData(可选)|无
addAttr|给treeData添加属性|①treeData②属性|无
addPid|给treeData添加pid|①treeData②根节点的pid(默认0)|无