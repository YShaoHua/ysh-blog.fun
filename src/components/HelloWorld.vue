<template>
  <div class="todo-box">
    <div class="todo-top todo-general">
      <div class="click-btn" v-if="informationList.length === 0"></div>
      <div class="click-btn" v-else>
        <span v-if="showBtn">△</span>
        <span v-else>▲</span>
      </div>
      <div class="todo-inout">
        <input v-model="addInformation"
               class="todo-input"
               @keyup.enter="addInformationList"
               placeholder="What nends to be done"/>
      </div>
    </div>
    <div class="todo-middle todo-general" v-for="(item,index) in informationList" :key="index">
      <input type="checkbox"
             class="check-box"
             v-model="informationList[index].check"/>
      <input  class="todo-input"
              v-model="informationList[index].text"/>
      <p class="delete-todo"
         @click="deleteTodo(index)">X</p>
    </div>
    <div class="todo-bottom" v-show="informationList.length > 0">
      <p>{{informationList.length}} item left</p>
      <ul>
        <li v-for="item in liList" :key="item" @click="selectAll(item)" :class="className === item ? 'add-border' : ''">
          <a>{{item}}</a>
        </li>
      </ul>
      <p @click="deleteChecked">Clear completed</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      liList: ['All', 'Active', 'Completed'],
      className: '',
      todo: '',
      showBtn: true,
      addInformation: '',
      informationList: []
    }
  },
  methods: {
    /**
     * 添加数据
     */
    addInformationList () {
      if (this.addInformation) {
        this.informationList.push({
          text: this.addInformation,
          check: false
        })
        this.addInformation = ''
      }
    },
    /**
     * 删除对应数据
     * @param {Nnmber} val 对应下标
     */
    deleteTodo (val) {
      this.informationList.splice(val, 1)
    },
    /**
     * 删除选中部分
     */
    deleteChecked () {
    },
    /**
     * 添加样式
     * @param {String} val 对应下标
     */
    selectAll (val) {
      this.className = val
    }
  }
}
</script>

<style lang="stylus">
.add-border {
  border 1px solid rgba(175, 47, 47, .3) !important
}
.todo-box {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  width 500px;
  margin auto;
  .todo-general {
    height: 60px;
    display: flex;
    border: 1px solid #f5f5f5;
    align-items: center;
  }
  .delete-boder {
    color green
  }
  .todo-input {
    width: 380px;
    height: 58px;
    font-size: 25px;
    border: none;
    outline: none;
  }
  .todo-top {
    .click-btn {
      width: 80px;
      transform: scaleY(-1);
    }
    .todo-inout {
      ::-webkit-input-placeholder {
        color: rgba(0,0,0,.1);
      }
    }
  }
  .todo-middle:hover .delete-todo {
    display inline;
  }
  .todo-middle {
    :nth-child(1) {
      width: 70px;
    }
    p:nth-child(2) {
      width:350px;
      text-align left;
    }
    p:nth-child(3) {
      display none;
      font-size: 27px;
      color: rgba(0,0,0,.3)
      cursor: pointer;
    }
  }
  .todo-bottom {
    padding 0 10px
    display flex
    justify-content: space-between;
    font-size 12px
    :nth-child(3) {
      cursor pointer
    }
    ul {
      display flex
      li {
        padding 2px 5px
        border-radius 4px
        border: 1px solid transparent;
        margin 0 15px
        list-style none
        cursor pointer
      }
      li:hover {
        border 1px solid rgba(175, 47, 47, 0.1)
      }
    }
  }
}
</style>
