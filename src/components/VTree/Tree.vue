<template>
  <div class="tree">
    <div v-for="(item, index) in treeData" :key="item.id" v-show="item.visible">
      <div class="item" @dblclick="dblclickNode(item)" :draggable="isDrag(item)" @dragstart.stop="handleDragStart(item,$event)">
        <div class="item-left" @click="handlerClick(item)">

          <div v-if="item.children&&item.children.length" :class="{'triangle-bottom': item.open, 'triangle-right': !item.open}" @click.stop="item.open = !item.open" style="margin-right:5px;"></div>

          <div style="height:100%;width:15px;" v-if="!(item.children&&item.children.length)"></div>

          <div v-if="multiple" :class="{'checkbox-active': item.checked === true, 'checkbox-half': item.checked === 1, 'checkbox': item.checked === false, 'check-box ': true}" @click.stop="multipleClick(item)"></div>

          <!-- <div class="name" :class="[{'searched': item.searched}]">{{item.title}}</div> -->

          <renderFn :item="item" :index="index" :render="renderTitle"></renderFn>

        </div>

        <renderFn v-if="renderBtn" :item="item" :index="index" :render="renderBtn"></renderFn>
      </div>
      <bs-tree v-if="item.children&&item.children.length" v-show="item.open" v-model="checkedItem" :treeData="item.children" :multiple="multiple" :renderTitle="renderTitle" :renderBtn="renderBtn" :isDrag="isDrag" @handle-click="revewState(item)" @node-dblclick="dblclickNode" />
    </div>
  </div>
</template>
<script>

import renderFn from './renderFn.js'
export default {
  name: 'bs-tree',
  components: { renderFn },
  props: {
    treeData: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: () => ({})
    },
    renderTitle: {
      type: Function,
      default: (h, ctx) => {
        return h('div', {
          class: { 'searched': ctx.item.searched }
        }, ctx.item.title)
      }
    },
    renderBtn: {
      type: Function
    },
    isDrag: {
      type: Function,
      default: () => false
    }
  },
  data() {
    return {
      checkedItem: this.value,
      mapNode: null
    }
  },
  watch: {
    value(item) {
      this.checkedItem = item
    },
    checkedItem(newItem) {
      this.treeData.forEach(item => {
        if (item.id === newItem.id) {
          item.checked = true
        } else {
          item.checked = false
        }
      })
      this.$emit('input', newItem)
    }
  },

  methods: {

    getChecked({ hasHalf }) {
      return this.getCheckedArr(this.treeData, hasHalf)
    },

    getCheckedArr(treeData, hasHalf) {
      let box = []
      treeData.forEach(item => {
        if (item.checked === true || (hasHalf && item.checked)) box.push(item)
        box = box.concat(this.getCheckedArr(item.children, hasHalf))
      })
      return box
    },

    handlerClick(item) {
      // if (this.multiple) { this.multipleClick(item) }
      return this.singleClick(item)
    },

    multipleClick(item) {
      // 通知下一级，通知上一级
      this.loopSetChecke(item, !item.checked)
      this.$emit('handle-click')
    },

    loopSetChecke(item, checke) {
      item.checked = checke
      item.children ? item.children.forEach(item => this.loopSetChecke(item, checke)) : ''
    },

    singleClick(item) {
      this.checkedItem = item
      this.$emit('input', item)
    },


    revewState(item) {
      if (!this.multiple) return this.$emit('handle-click')
      if (item.children) {
        const childLength = item.children.length
        const checkedLength = item.children.filter(({ checked }) => checked === true).length

        if (checkedLength === childLength) {
          item.checked = true
          return this.$emit('handle-click')
        }

        const noCheckedLength = item.children.filter(({ checked }) => checked === false).length

        if (noCheckedLength === childLength) {
          item.checked = false
          return this.$emit('handle-click')
        }
        item.checked = 1

        return this.$emit('handle-click')
      }
    },
    dblclickNode(node) {
      this.$emit('node-dblclick', node)
    },
    handleDragStart(item, e) {
      e.dataTransfer.setData('Text', JSON.stringify(item))
    },

    /*
     *@method get Nodes by options method
     *@param data nodes
     *@param opt the options that filter the node
     */
    getNodes(opt, data) {
      data = data || this.treeData
      let res = []
      for (const i in data) {
        let tmp = true
        for (const [key, value] of Object.entries(opt)) {
          if (data[i][key] !== value) {
            tmp = false
            break
          }
        }
        if (tmp) res.push(data[i])
        if (data[i].children && data[i].children.length) {
          res = res.concat(this.getNodes(opt, data[i].children))
        }
      }
      return res
    },
    /*
     *@method get Node by id
     *@param id
     */
    getNode(id) {
      if (!this.mapNode) {
        this.mapNode = new Map()
        const _traverseNodes = (root) => {
          for (const node of root) {
            this.mapNode.set(node._id, node)
            if (node.children && node.children.length > 0) _traverseNodes(node.children)
          }
        }
        _traverseNodes(this.treeData)
      }
      return this.mapNode.get(id)
    },

    /*
     *@method filter nessary nodes methods
     *@param filter string or predicate expression
     *@param data current nodes
     */
    searchNodes(filter, data) {
      data = data || this.treeData
      for (const i in data) {
        let searched = filter ? data[i].title.indexOf(filter) > -1 : false
        this.$set(data[i], 'searched', searched)
        this.$set(data[i], 'visible', false)
        this.$emit('toggleshow', data[i], filter ? searched : true)
        if (data[i].children && data[i].children.length) {
          this.searchNodes(filter, data[i].children)
        }
      }
    },
    addAttr(data, attr) {
      for (const i in data) {
        for (const j in attr) {
          this.$set(data[i], j, attr[j])
        }
        if (data[i].children && data[i].children.length) {
          this.addAttr(data[i].children, attr)
        }
      }
    },
    addPid(data, pid = 0) {
      for (const i in data) {
        this.$set(data[i], 'pid', pid)
        if (data[i].children && data[i].children.length) {
          this.addPid(data[i].children, data[i].id)
        }
      }
    }

  },
  mounted() {
    /*
     * @event monitor the node visible event
     */
    this.$on('toggleshow', (node, isShow) => {
      this.$set(node, 'visible', isShow)
      this.$set(node, 'open', isShow)
      const parent = this.getNodes({ id: node.pid }, this.treeData)
      if (isShow && parent.length) {
        this.$emit('toggleshow', parent[0], isShow)
      }
    })
  }
}
</script>


<style scoped>
* {
  padding: 0;
  margin: 0;
  user-select: none;
}

ul,
li {
  list-style: none;
}

.tree {
  width: 100%;
  padding-left: 10px;
  font-size: 14px;
  line-height: 32px;
}

.tree .item {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* .tree .trangle {
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-left-color: black;
}

.tree .trangle-up {
  border-left-color: transparent;
  border-top-color: black;
  transform: translateY(25%);
} */

/* .tree .checked {
  color: blue;
} */

.tree .searched {
  color: blue;
}

.tree .item .item-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.tree .item .item-right > * {
  display: inline-block;
}

.check-box {
  margin: 0 5px;
}
/* 
.check-yes .part {
  width: 100%;
  height: 50%;
  background-color: #000;
}

.check-no .part {
  width: 100%;
  height: 0%;
  background-color: #000;
}

.check-yes-no .part {
  width: 100%;
  height: 40%;
  background-color: #000;
} */

/*以下是icon样式*/
.triangle-bottom {
  border-style: dashed;
  border-color: transparent;
  border-width: 8px;
  width: 0;
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  border-top: 8px solid #444;
  border-bottom-width: 0;
}
.triangle-right {
  border-style: dashed;
  border-color: transparent;
  border-width: 8px;
  width: 0;
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  border-left: 8px solid #444;
  border-right-width: 0;
}

.checkbox {
  display: inline-block;
  width: 14px;
  height: 14px;
  position: relative;
  top: 0;
  left: 0;
  border: 1px solid #999;
  border-radius: 2px;
  background-color: #fff;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
.checkbox:after {
  content: "";
  display: table;
  width: 4px;
  height: 8px;
  position: absolute;
  top: 1px;
  left: 4px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(0);
  -webkit-transition: all 0.2s ease-in-out;
  /* Safari 和 Chrome */
  -moz-transition: all 0.2s ease-in-out;
  /* Firefox 4 */
  -o-transition: all 0.2s ease-in-out;
  /* Opera */
  transition: all 0.2s ease-in-out;
}
.checkbox:hover {
  border-color: #2d8cf0;
}
.checkbox-active {
  display: inline-block;
  width: 14px;
  height: 14px;
  position: relative;
  top: 0;
  left: 0;
  border: 1px solid #dddee1;
  border-radius: 2px;
  background-color: #fff;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  border-color: #2d8cf0;
  background-color: #2d8cf0;
}
.checkbox-active:after {
  content: "";
  display: table;
  width: 4px;
  height: 8px;
  position: absolute;
  top: 1px;
  left: 4px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(0);
  -webkit-transition: all 0.2s ease-in-out;
  /* Safari 和 Chrome */
  -moz-transition: all 0.2s ease-in-out;
  /* Firefox 4 */
  -o-transition: all 0.2s ease-in-out;
  /* Opera */
  transition: all 0.2s ease-in-out;
}
.checkbox-active:hover {
  border-color: #2d8cf0;
}
.checkbox-active:after {
  transform: rotate(45deg) scale(1);
  -webkit-transition: all 0.2s ease-in-out;
  /* Safari 和 Chrome */
  -moz-transition: all 0.2s ease-in-out;
  /* Firefox 4 */
  -o-transition: all 0.2s ease-in-out;
  /* Opera */
  transition: all 0.2s ease-in-out;
}
.checkbox-half {
  display: inline-block;
  width: 14px;
  height: 14px;
  position: relative;
  top: 0;
  left: 0;
  border: 1px solid #dddee1;
  border-radius: 2px;
  background-color: #fff;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  border-color: #2d8cf0;
  background-color: #2d8cf0;
}
.checkbox-half:after {
  content: "";
  display: table;
  width: 4px;
  height: 8px;
  position: absolute;
  top: 1px;
  left: 4px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(0);
  -webkit-transition: all 0.2s ease-in-out;
  /* Safari 和 Chrome */
  -moz-transition: all 0.2s ease-in-out;
  /* Firefox 4 */
  -o-transition: all 0.2s ease-in-out;
  /* Opera */
  transition: all 0.2s ease-in-out;
}
.checkbox-half:hover {
  border-color: #2d8cf0;
}
.checkbox-half:after {
  width: 8px;
  height: 1px;
  transform: scale(1);
  left: 2px;
  top: 5px;
}
</style>

