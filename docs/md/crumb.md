# 描述
组件提供类似于windows文件夹的可回退可选择子级的面包屑展示

# 效果展示
<template>
  <div>
    <bs-crumb v-model="v" :data="data" ></bs-crumb>
  </div>
</template>
<script>
export default {
  data() {
    const data = {
      v: 5,
      data: [{
        id: 1,
        text: 'root',
        child: [{
          id: 2,
          text: 'level1-1',
          child: [{
            id: 4,
            text: 'level2-1'
          }, {
            id: 3,
            text: 'level2-2',
            child: [{
              id: 5,
              text: 'level3-1',
              child: [{
                id: 6,
                text: 'level4-1'
              }, {
                id: 7,
                text: 'level4-2'
              }, {
                id: 8,
                text: 'level4-3'
              }]
            }]
          }]
        }]
      }]
    }
    let id = 30
    let i = 30
    while (i--) {
      data.data[0].child.push({
        id: id++,
        text: 'id' + id
      })
    }
    return data
  }
}
</script>
<style>
.bs-crumb-select {
  background: #fff;
  border: 1px solid gray;
  max-height: 300px;
}
.bs-crumb-select-item:hover {
  color: red;
}
.bs-crumb-sep {
  margin: 0 10px 0 5px;
  width: 20px;
}
</style>

# 代码示例
```html
<template>
  <div>
    <bs-crumb v-model="v" :data="data" ></bs-crumb>
  </div>
</template>
<script>
export default {
  data() {
    const data = {
      v: 5,
      data: [{
        id: 1,
        text: 'root',
        child: [{
          id: 2,
          text: 'level1-1',
          child: [{
            id: 4,
            text: 'level2-1'
          }, {
            id: 3,
            text: 'level2-2',
            child: [{
              id: 5,
              text: 'level3-1',
              child: [{
                id: 6,
                text: 'level4-1'
              }, {
                id: 7,
                text: 'level4-2'
              }, {
                id: 8,
                text: 'level4-3'
              }]
            }]
          }]
        }]
      }]
    }
    let id = 30
    let i = 30
    while (i--) {
      data.data[0].child.push({
        id: id++,
        text: 'id' + id
      })
    }
    return data
  }
}
</script>
<style>
.bs-crumb-select {
  background: #fff;
  border: 1px solid gray;
  max-height: 300px;
}
.bs-crumb-select-item:hover {
  color: red;
}
.bs-crumb-sep {
  margin: 0 10px 0 5px;
  width: 20px;
}
</style>

```
# props
属性名称|描述|类型|默认值
--|--|--|--
value|当前的id值|String|必须
data|组件的数据对象数组|Array(Object)|必须
childName|数据对象中child的属性名字|String|child
textName|数据对象中显示值的属性名字|String|text
# events
事件名称|描述|参数
--|--|--
input|选中某个值|选中节点的id值
update:node|选中某个值|选中节点对象
# 样式定义
类名|描述
--|--
.bs-crumb-item|面包屑文字
.bs-crumb-sep|面包屑后面的箭头
.bs-crumb-sep.actived|面包屑后面的箭头,激活状态
.bs-crumb-select|弹出下拉框的框
.bs-crumb-select-item|弹出下拉框的单条li